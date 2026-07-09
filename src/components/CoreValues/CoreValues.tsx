import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Target, Zap, Eye } from 'lucide-react';
import styles from './CoreValues.module.css';

export default function CoreValues() {
  const { t } = useTranslation();

  const values = [
    {
      icon: <Target size={32} className={styles.iconPrimary} />,
      title: t('coreValues.val1_title'),
      description: t('coreValues.val1_desc'),
      gradient: "var(--glow-gradient)"
    },
    {
      icon: <Zap size={32} className={styles.iconCyan} />,
      title: t('coreValues.val2_title'),
      description: t('coreValues.val2_desc'),
      gradient: "var(--cyan-purple-gradient)"
    },
    {
      icon: <Eye size={32} className={styles.iconPink} />,
      title: t('coreValues.val3_title'),
      description: t('coreValues.val3_desc'),
      gradient: "linear-gradient(135deg, var(--accent-secondary), var(--accent-cyan))"
    }
  ];

  return (
    <section id="habilidades" className="container">
      <div className={styles.coreValues}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('coreValues.title')}
        </motion.h2>

        <div className={styles.grid}>
          {values.map((val, idx) => (
            <motion.div 
              key={idx} 
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
            >
              <div className={styles.icon}>
                {val.icon}
              </div>
              <h3 className={styles.cardTitle}>{val.title}</h3>
              <p className={styles.cardText}>{val.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
