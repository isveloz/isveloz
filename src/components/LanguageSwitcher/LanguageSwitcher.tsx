import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import styles from './LanguageSwitcher.module.css';
import { useEffect } from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    // Handle RTL layout for Arabic
    if (i18n.language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = i18n.language;
    }
  }, [i18n.language]);

  return (
    <div className={styles.container}>
      <select 
        className={styles.selector} 
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
        aria-label="Select Language"
      >
        <option value="es">ES - Español</option>
        <option value="en">EN - English</option>
        <option value="zh">ZH - 中文</option>
        <option value="ar">AR - العربية</option>
      </select>
      <Globe size={18} className={styles.icon} />
    </div>
  );
}
