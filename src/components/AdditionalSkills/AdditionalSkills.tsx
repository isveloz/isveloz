import { motion } from 'framer-motion';
import { Globe2, MonitorDot } from 'lucide-react';
import styles from './AdditionalSkills.module.css';

export default function AdditionalSkills() {
  return (
    <section className="container">
      <div className={styles.skillsContainer}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Idiomas & Herramientas de Gestión
        </motion.h2>

        <div className={styles.columns}>
          
          {/* Idiomas */}
          <motion.div 
            className={styles.column}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className={styles.colHeader}>
              <Globe2 size={28} className={styles.icon} />
              <h3 className={styles.colTitle}>Idiomas</h3>
            </div>
            <ul className={styles.list}>
              <motion.li className={styles.listItem} whileHover={{ scale: 1.02 }}>
                <span className={styles.itemLabel}>Español</span>
                <span className={styles.itemValue}>Nativo</span>
              </motion.li>
              <motion.li className={styles.listItem} whileHover={{ scale: 1.02 }}>
                <span className={styles.itemLabel}>Inglés</span>
                <span className={styles.itemValue}>Avanzado</span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Admin & Workspace */}
          <motion.div 
            className={styles.column}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className={styles.colHeader}>
              <MonitorDot size={28} className={styles.icon} />
              <h3 className={styles.colTitle}>Herramientas de Gestión</h3>
            </div>
            <ul className={styles.list}>
              <motion.li className={styles.listItem} whileHover={{ scale: 1.02 }}>
                <span className={styles.itemLabel}>Microsoft Excel</span>
                <span className={styles.itemValue}>Avanzado (Macros, Power Query)</span>
              </motion.li>
              <motion.li className={styles.listItem} whileHover={{ scale: 1.02 }}>
                <span className={styles.itemLabel}>Google Workspace</span>
                <span className={styles.itemValue}>Avanzado</span>
              </motion.li>
              <motion.li className={styles.listItem} whileHover={{ scale: 1.02 }}>
                <span className={styles.itemLabel}>Microsoft Office</span>
                <span className={styles.itemValue}>Avanzado</span>
              </motion.li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
