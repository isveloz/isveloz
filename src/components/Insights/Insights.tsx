import { useState, useRef, MouseEvent } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { useTranslation } from 'react-i18next';
import styles from './Insights.module.css';
import { insightsData, type InsightPost } from '../../data/insightsData';

function InsightCard({ post, onClick }: { post: InsightPost; onClick: (post: InsightPost) => void }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty('--mouse-x', `${x}px`);
    ref.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={styles.card}
      onClick={() => onClick(post)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className={styles.tag}>{post.tag}</span>
        <span className={styles.date}>{post.date}</span>
      </div>
      <h3 className={styles.cardTitle}>{post.title}</h3>
      <p className={styles.cardSummary}>{post.summary}</p>
      <div className={styles.readMore}>
        {/* Placeholder text, normally translated too */}
        Leer Análisis <ArrowRight size={18} />
      </div>
    </motion.div>
  );
}

export default function Insights() {
  const { t } = useTranslation();
  const [selectedPost, setSelectedPost] = useState<InsightPost | null>(null);

  const renderChart = (post: InsightPost) => {
    if (!post.chartData || !post.chartConfig) return null;

    const { type, dataKeyX, lines, bars } = post.chartConfig;

    if (type === 'line' && lines) {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={post.chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey={dataKeyX} stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(15, 15, 24, 0.9)', borderColor: 'rgba(139, 92, 246, 0.4)', borderRadius: '12px' }}
              itemStyle={{ color: '#fff' }}
            />
            <Legend />
            {lines.map((line, idx) => (
              <Line key={idx} type="monotone" dataKey={line.key} name={line.name} stroke={line.color} strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      );
    }

    if (type === 'bar' && bars) {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={post.chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey={dataKeyX} stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(15, 15, 24, 0.9)', borderColor: 'rgba(139, 92, 246, 0.4)', borderRadius: '12px' }}
              itemStyle={{ color: '#fff' }}
              cursor={{ fill: 'rgba(255,255,255,0.05)' }}
            />
            <Legend />
            {bars.map((bar, idx) => (
              <Bar key={idx} dataKey={bar.key} name={bar.name} fill={bar.color} radius={[4, 4, 0, 0]} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      );
    }

    return null;
  };

  return (
    <section className="container" id="insights">
      <div className={styles.insightsContainer}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('insights.title1')} <span className="text-gradient">{t('insights.title2')}</span>
        </motion.h2>

        <div className={styles.grid}>
          {insightsData.map((post) => (
            <InsightCard key={post.id} post={post} onClick={setSelectedPost} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPost && (
          <motion.div 
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={() => setSelectedPost(null)}>
                <X size={24} />
              </button>
              
              <div className={styles.modalBody}>
                <div className={styles.modalHeader}>
                  <span className={styles.tag}>{selectedPost.tag}</span>
                  <h2 className={styles.modalTitle}>{selectedPost.title}</h2>
                  <span className={styles.date}>{selectedPost.date}</span>
                </div>
                
                <p className={styles.modalText}>{selectedPost.content}</p>

                {selectedPost.chartData && (
                  <div className={styles.chartContainer}>
                    {renderChart(selectedPost)}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
