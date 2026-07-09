import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './PhotoGallery.module.css';

const photos = [
  { src: '/gallery-1.jpg', alt: 'Detalle de arte y ganchos' },
  { src: '/gallery-2.png', alt: 'Edificio rascacielos nocturno' },
  { src: '/gallery-3.jpg', alt: 'Crucifijo en iglesia oscura' },
  { src: '/gallery-4.png', alt: 'Movimiento nocturno con bandera de Chile' },
  { src: '/gallery-5.jpg', alt: 'Silueta de edificio con cielo morado' },
  { src: '/gallery-6.jpg', alt: 'Paisaje urbano al atardecer' },
  { src: '/gallery-7.png', alt: 'Siluetas grupales y destello de luz' },
  { src: '/gallery-8.png', alt: 'Letrero de neon rojo asiático' },
  { src: '/gallery-9.jpg', alt: 'Mural grafiti rosa y cyan' },
  { src: '/gallery-10.jpg', alt: 'Cementerio y flores violetas' },
];

export default function PhotoGallery() {
  const { t } = useTranslation();

  return (
    <section className="container">
      <div className={styles.galleryContainer}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('gallery.title')}
        </motion.h2>

        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {t('gallery.desc')}
        </motion.p>

        <div className={styles.masonryGrid}>
          {photos.map((photo, idx) => (
            <motion.div 
              key={idx}
              className={styles.photoCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
