import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Magnetic from '../Magnetic/Magnetic';
import styles from './Hero.module.css';

export default function Hero() {
  const { t } = useTranslation();
  
  // Parallax effect for the background orb
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section className={styles.heroContainer}>
      <motion.div className={styles.glowOrb} style={{ y }}></motion.div>
      <div className={styles.content}>
        
        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className={styles.imageWrapper}>
            <img src="/perfil.jpg" alt="Isaias Veloz" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
        >
          <h1 className={styles.title}>
            <motion.span 
              className={styles.line1}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {t('hero.title1')}
            </motion.span>
            <motion.span 
              className={styles.line2}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {t('hero.title2')}
            </motion.span>
          </h1>
          <motion.p 
            className={styles.subtitle}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t('hero.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div 
          className={styles.socialLinks}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Magnetic intensity={0.3}>
            <a href="https://github.com/isveloz" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.35 6.5-1.5 6.5-7.14a5.8 5.8 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.15-3.8s-1.2-.38-3.9 1.4a13.38 13.38 0 0 0-7 0C6.2 1.5 5 1.88 5 1.88a5.5 5.5 0 0 0-.15 3.8A5.8 5.8 0 0 0 3 9.4c0 5.64 3.32 6.79 6.5 7.14a4.8 4.8 0 0 0-1 3.03V22"/><path d="M9 20c-5 1.5-5-2.5-7-3"/></svg>
            </a>
          </Magnetic>
          <Magnetic intensity={0.3}>
            <a href="https://www.linkedin.com/in/isveloz/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </Magnetic>
          <Magnetic intensity={0.3}>
            <a href="mailto:isaias.veloz@example.com" className={styles.socialIcon}>
              <Mail size={24} />
            </a>
          </Magnetic>
        </motion.div>

      </div>
    </section>
  );
}
