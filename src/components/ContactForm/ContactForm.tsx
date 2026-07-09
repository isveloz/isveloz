import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset after showing success state
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="container" id="contact" style={{ marginBottom: '6rem' }}>
      <motion.div 
        className={`glass-panel ${styles.formContainer}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>{t('contact.form.name')}</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              value={formData.name}
              onChange={handleChange}
              className={styles.input} 
              placeholder={t('contact.form.namePH')}
              disabled={status !== 'idle'}
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>{t('contact.form.email')}</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              value={formData.email}
              onChange={handleChange}
              className={styles.input} 
              placeholder={t('contact.form.emailPH')}
              disabled={status !== 'idle'}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>{t('contact.form.msg')}</label>
            <textarea 
              id="message" 
              name="message" 
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea} 
              placeholder={t('contact.form.msgPH')}
              disabled={status !== 'idle'}
            />
          </div>

          <button 
            type="submit" 
            className={`${styles.submitBtn} ${status !== 'idle' ? styles.submitting : ''}`}
            disabled={status !== 'idle'}
          >
            {status === 'idle' && (
              <>
                {t('contact.form.send')} <Send size={18} />
              </>
            )}
            {status === 'submitting' && (
              <span className={styles.loader}>{t('contact.form.sending')}</span>
            )}
            {status === 'success' && (
              <>
                {t('contact.form.sent')} <CheckCircle size={18} />
              </>
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
