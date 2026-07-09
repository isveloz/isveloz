import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, FileText, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import TiltCard from '../TiltCard/TiltCard';
import styles from './Projects.module.css';

// Removed static projects array

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Hermes Terra",
      subtitle: t('projects.p1_sub'),
      description: t('projects.p1_txt'),
      extended: "Hermes Terra es una plataforma modular B2B diseñada para revolucionar la gestión logística terrestre. La arquitectura se basó en microservicios utilizando Node.js y AWS, permitiendo escalabilidad masiva. Se implementaron algoritmos de optimización de rutas en tiempo real que redujeron los costos de combustible en un 15% durante el primer trimestre de implementación. El frontend, construido con React, proporciona una torre de control interactiva con mapas de calor y analítica predictiva.",
      tags: ["Logística", "Analítica", "Gestión de Flotas", "SCM"],
      link: "#",
      abstractIcon: <img src="/hermes-logo.svg" alt="Hermes Terra Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '2rem' }} />
    },
    {
      title: "Mi Refugio",
      subtitle: t('projects.p2_sub'),
      description: t('projects.p2_txt'),
      extended: "Mi Refugio nace como una respuesta a la crisis de salud mental post-pandemia. Esta aplicación móvil (Flutter) actúa como un diario emocional inteligente. Detrás de escena, una canalización de NLP (Natural Language Processing) potenciada por LLMs analiza las entradas de texto del usuario para identificar patrones emocionales, picos de ansiedad y posibles factores desencadenantes. Los datos se mantienen estrictamente encriptados y se generan 'insights' semanales para ayudar al usuario a autoconocerse.",
      tags: ["AWS", "Flutter", "LLMs", "NLP", "Machine Learning"],
      link: "#",
      abstractIcon: <img src="/mi-refugio-logo.svg" alt="Mi Refugio Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '2rem' }} />
    },
    {
      title: "catjoyas.cl",
      subtitle: t('projects.p3_sub'),
      description: t('projects.p3_txt'),
      extended: "Cat Joyas es un E-Commerce de alto rendimiento construido desde cero. Para superar los tiempos de carga lentos de plataformas tradicionales, se utilizó Next.js con Server-Side Rendering (SSR). La base de datos está gestionada a través de Prisma ORM. Destaca la implementación de un sistema de carrito abandonado dinámico y un panel de administración personalizado que permitió a los dueños reducir el tiempo de gestión de inventario en un 40%.",
      tags: ["Next.js", "Prisma", "React", "TypeScript"],
      link: "https://catjoyas.cl",
      abstractIcon: <img src="/catjoyas-logo.svg" alt="Cat Joyas Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '2rem' }} />
    },
    {
      title: "La Transmutación del Silencio",
      subtitle: t('projects.p4_sub'),
      description: t('projects.p4_txt'),
      extended: "Un proyecto de investigación sociológica profunda que analiza cómo el silencio institucional afecta a las minorías. Se recopilaron más de 50 horas de entrevistas estructuradas, analizadas mediante codificación cualitativa asistida por software. Los hallazgos fueron presentados en conferencias académicas y consolidados en un ensayo aclamado que desglosa las mecánicas de la omisión como herramienta de poder social.",
      tags: ["Investigación", "Análisis Cualitativo", "Sociología", "Redacción"],
      link: "#",
      abstractIcon: <FileText size={100} className={styles.abstractGraphic} />
    }
  ];

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section className="container">
      <div className={styles.projectsContainer}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('projects.title')}
        </motion.h2>

        <div className={styles.bentoGrid}>
          {projects.map((project, idx) => {
            const isFeatured = idx === 0 || idx === 3;
            
            return (
              <TiltCard 
                key={idx} 
                className={`${styles.bentoCard} ${isFeatured ? styles.featured : ''}`}
                intensity={8}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
                  style={{ display: 'flex', flexDirection: isFeatured ? 'row' : 'column', gap: '3rem', height: '100%', width: '100%', alignItems: isFeatured ? 'center' : 'stretch' }}
                  className={styles.bentoCardInner}
                >
                
                {/* Content Side */}
                <div className={styles.contentSide}>
                  <div>
                    <h4 className={styles.projectSubtitle}>{project.subtitle}</h4>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                  </div>
                  
                  <p className={styles.projectDescription}>{project.description}</p>
                  
                  <div className={styles.tags}>
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={styles.tag}>{tag}</span>
                    ))}
                  </div>

                  <div className={styles.links}>
                    <button onClick={() => setSelectedProject(project)} className={styles.linkBtn}>
                      Ver Caso de Estudio
                      <ArrowUpRight size={20} className={styles.linkIcon} />
                    </button>
                    {project.link !== '#' && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.externalLinkBtn}>
                        Visitar Web
                      </a>
                    )}
                  </div>
                </div>

                {/* Image Side */}
                <div className={styles.imageSide}>
                  {project.abstractIcon}
                </div>
              </motion.div>
              </TiltCard>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>
              
              <div className={styles.modalHeaderImage}>
                 {selectedProject.abstractIcon}
              </div>

              <div className={styles.modalBody}>
                <h4 className={styles.projectSubtitle}>{selectedProject.subtitle}</h4>
                <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
                
                <div className={styles.tags} style={{ marginBottom: '2rem' }}>
                  {selectedProject.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                <div className={styles.modalText}>
                  {selectedProject.extended}
                </div>

                {selectedProject.link !== '#' && (
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                    Visitar Sitio Web <ArrowUpRight size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
