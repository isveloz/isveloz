import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className={styles.title}>{t('contact.title')}</h2>
        <p className={styles.subtitle}>
          {t('contact.subtitle')}
        </p>

        <div className={styles.links}>
          <a href="mailto:isaias.veloz@example.com" className={styles.link}>
            <Mail size={20} />
            {t('contact.btn')}
          </a>
          <a href="https://www.linkedin.com/in/isveloz/" target="_blank" rel="noopener noreferrer" className={styles.link}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </a>
          <a href="https://github.com/isveloz" target="_blank" rel="noopener noreferrer" className={styles.link}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.35 6.5-1.5 6.5-7.14a5.8 5.8 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.15-3.8s-1.2-.38-3.9 1.4a13.38 13.38 0 0 0-7 0C6.2 1.5 5 1.88 5 1.88a5.5 5.5 0 0 0-.15 3.8A5.8 5.8 0 0 0 3 9.4c0 5.64 3.32 6.79 6.5 7.14a4.8 4.8 0 0 0-1 3.03V22"/><path d="M9 20c-5 1.5-5-2.5-7-3"/></svg>
            GitHub
          </a>
        </div>

        <div className={styles.quoteBlock}>
          <p className={styles.chillQuote}>"El viaje es el destino, viejo"</p>
        </div>

        <div className={styles.copyright}>
          © {currentYear} Isaias Veloz. Diseñado con minimalismo y código limpio.
        </div>
      </motion.div>
    </footer>
  );
}
