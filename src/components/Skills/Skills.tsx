import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skillCategories = [
  {
    title: "Data & Cloud Engineering",
    items: "Python, SQL (PostgreSQL), AWS, Pandas, ETL, APIs"
  },
  {
    title: "Analytics & Reportería",
    items: "Power BI, Google Analytics 4 (GA4), Looker Studio, Similar Web"
  },
  {
    title: "Desarrollo Web & Apps",
    items: "React, Next.js, TypeScript, Flutter, Prisma"
  },
  {
    title: "Machine Learning & IA",
    items: "Modelos de Lenguaje (LLMs), NLP, Agentes IA (Copilot)"
  }
];

export default function Skills() {
  return (
    <section className="container">
      <div className={styles.skillsContainer}>
        <h2 className={styles.title}>Skills Técnicos</h2>
        
        <div className={styles.list}>
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={idx} 
              className={styles.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            >
              <h3 className={styles.categoryTitle}>{cat.title}</h3>
              <p className={styles.items}>{cat.items}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
