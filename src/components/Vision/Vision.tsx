import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './Vision.module.css';

export default function Vision() {
  const { t } = useTranslation();
  return (
    <section className={styles.visionContainer}>
      <div className="container">
        <motion.div 
          className={styles.content}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h2 
            className={styles.title}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t('vision.title')}
          </motion.h2>
          
          <motion.p 
            className={styles.description}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t('vision.text')}
          </motion.p>

          <div className={styles.animationWrapper}>
            <svg width="100%" height="auto" viewBox="0 0 800 400" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ maxWidth: '800px', filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))' }}>
              <defs>
                <linearGradient id="barGradient1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="barGradient2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Background Grid - Premium Tech look */}
              <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
                <path d="M50 350 L750 350" />
                <path d="M50 275 L750 275" />
                <path d="M50 200 L750 200" />
                <path d="M50 125 L750 125" />
                <path d="M50 50 L750 50" />
                <path d="M50 350 L50 50" />
                <path d="M150 350 L150 50" />
                <path d="M250 350 L250 50" />
                <path d="M350 350 L350 50" />
                <path d="M450 350 L450 50" />
                <path d="M550 350 L550 50" />
                <path d="M650 350 L650 50" />
                <path d="M750 350 L750 50" />
              </g>

              {/* Bars */}
              <motion.rect x="80" y="270" width="40" height="80" fill="url(#barGradient1)" rx="4"
                initial={{ height: 0, y: 350 }} whileInView={{ height: 80, y: 270 }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
              <motion.rect x="180" y="200" width="40" height="150" fill="url(#barGradient2)" rx="4"
                initial={{ height: 0, y: 350 }} whileInView={{ height: 150, y: 200 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} />
              <motion.rect x="280" y="240" width="40" height="110" fill="url(#barGradient1)" rx="4"
                initial={{ height: 0, y: 350 }} whileInView={{ height: 110, y: 240 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} />
              <motion.rect x="380" y="150" width="40" height="200" fill="url(#barGradient2)" rx="4"
                initial={{ height: 0, y: 350 }} whileInView={{ height: 200, y: 150 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} />
              <motion.rect x="480" y="180" width="40" height="170" fill="url(#barGradient1)" rx="4"
                initial={{ height: 0, y: 350 }} whileInView={{ height: 170, y: 180 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} />
              <motion.rect x="580" y="70" width="40" height="280" fill="url(#barGradient2)" rx="4"
                initial={{ height: 0, y: 350 }} whileInView={{ height: 280, y: 70 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }} />
              <motion.rect x="680" y="100" width="40" height="250" fill="url(#barGradient1)" rx="4"
                initial={{ height: 0, y: 350 }} whileInView={{ height: 250, y: 100 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }} />

              {/* Area under curve */}
              <motion.path 
                d="M100 350 L100 250 C 150 250, 150 180, 200 180 C 250 180, 250 220, 300 220 C 350 220, 350 130, 400 130 C 450 130, 450 160, 500 160 C 550 160, 550 50, 600 50 C 650 50, 650 80, 700 80 L700 350 Z" 
                fill="url(#areaGradient)"
                stroke="none"
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 1.5, delay: 1 }} 
              />

              {/* Trend Line (Smooth) */}
              <motion.path 
                d="M100 250 C 150 250, 150 180, 200 180 C 250 180, 250 220, 300 220 C 350 220, 350 130, 400 130 C 450 130, 450 160, 500 160 C 550 160, 550 50, 600 50 C 650 50, 650 80, 700 80" 
                stroke="url(#lineGradient)" 
                strokeWidth="5" 
                fill="none"
                filter="url(#glow)"
                initial={{ pathLength: 0 }} 
                whileInView={{ pathLength: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }} 
              />

              {/* Data Points */}
              {[
                {x: 100, y: 250}, {x: 200, y: 180}, {x: 300, y: 220}, {x: 400, y: 130}, 
                {x: 500, y: 160}, {x: 600, y: 50}, {x: 700, y: 80}
              ].map((pt, i) => (
                <motion.circle 
                  key={i} cx={pt.x} cy={pt.y} r="6" fill="#18181b" stroke="#06b6d4" strokeWidth="3"
                  initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} 
                  transition={{ delay: 1.0 + (i * 0.15), type: "spring", stiffness: 300 }} 
                />
              ))}

              {/* Pulsing end dot */}
              <motion.circle cx="700" cy="80" r="10" fill="#8b5cf6" 
                filter="url(#glow)"
                initial={{ scale: 0 }} 
                whileInView={{ scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: 2.2 }} 
              />
              <motion.circle cx="700" cy="80" r="12" fill="transparent" stroke="#8b5cf6" strokeWidth="2"
                animate={{ scale: [1, 2.2, 1], opacity: [1, 0, 1] }} 
                transition={{ repeat: Infinity, duration: 2, delay: 2.2 }} 
              />

              {/* Floating Data Labels */}
              <motion.rect x="650" y="20" width="100" height="40" fill="rgba(15, 15, 24, 0.8)" rx="8" stroke="rgba(255,255,255,0.1)" strokeWidth="1"
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 20 }} viewport={{ once: true }} transition={{ delay: 2.4 }} />
              <motion.text x="700" y="46" fill="#fff" fontSize="18" fontWeight="bold" textAnchor="middle" stroke="none"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 2.5 }}
              >
                +142%
              </motion.text>
            </svg>
          </div>

          <div className={styles.nodes}>
            <motion.div 
              className={styles.node} 
              variants={{ hidden: { opacity: 0, scale: 0.9, y: 20 }, visible: { opacity: 1, scale: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className={styles.nodeTitle}>{t('vision.n1')}</h3>
              <p className={styles.nodeDesc}>{t('vision.n1_desc')}</p>
            </motion.div>
            <motion.div 
              className={styles.node} 
              variants={{ hidden: { opacity: 0, scale: 0.9, y: 20 }, visible: { opacity: 1, scale: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className={styles.nodeTitle}>{t('vision.n2')}</h3>
              <p className={styles.nodeDesc}>{t('vision.n2_desc')}</p>
            </motion.div>
            <motion.div 
              className={styles.node} 
              variants={{ hidden: { opacity: 0, scale: 0.9, y: 20 }, visible: { opacity: 1, scale: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className={styles.nodeTitle}>{t('vision.n3')}</h3>
              <p className={styles.nodeDesc}>{t('vision.n3_desc')}</p>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
