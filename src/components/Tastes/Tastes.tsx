import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './Tastes.module.css';

// Static tastes array removed

export default function Tastes() {
  const { t } = useTranslation();

  const tastes = [
    {
      title: "Comida Italiana", // proper nouns stay the same
      description: t('tastes.t1_desc'),
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800&auto=format&fit=crop",
      alt: "Plato de comida italiana"
    },
    {
      title: "Espresso Doble",
      description: t('tastes.t2_desc'),
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
      alt: "Taza de espresso doble"
    },
    {
      title: "Frambuesa",
      description: t('tastes.t3_desc'),
      image: "https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?q=80&w=800&auto=format&fit=crop",
      alt: "Frambuesas frescas"
    }
  ];

  return (
    <section className="container">
      <div className={styles.tastesContainer}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('tastes.title')}
        </motion.h2>

        <div className={styles.grid}>
          {tastes.map((taste, idx) => (
            <motion.div 
              key={idx}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
            >
              <div className={styles.imageWrapper}>
                <img src={taste.image} alt={taste.alt} loading="lazy" />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{taste.title}</h3>
                <p className={styles.cardDescription}>{taste.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
