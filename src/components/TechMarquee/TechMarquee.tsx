import { motion } from 'framer-motion';
import styles from './TechMarquee.module.css';
import { 
  SiPython, 
  SiGoogleanalytics, 
  SiPostgresql, 
  SiLooker, 
  SiReact, 
  SiNextdotjs, 
  SiFlutter, 
  SiPandas, 
  SiSemrush, 
  SiTypescript, 
  SiNodedotjs
} from 'react-icons/si';
import { FaAws, FaBrain } from 'react-icons/fa';

const techStack = [
  { name: "Python", icon: <SiPython color="#3776AB" /> },
  { name: "GA4", icon: <SiGoogleanalytics color="#E37400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
  { name: "AWS", icon: <FaAws color="#FF9900" /> },
  { name: "Looker Studio", icon: <SiLooker color="#4285F4" /> },
  { name: "React", icon: <SiReact color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
  { name: "Flutter", icon: <SiFlutter color="#02569B" /> },
  { name: "Pandas", icon: <SiPandas color="#ffffff" /> },
  { name: "SEMrush", icon: <SiSemrush color="#FF642D" /> },
  { name: "LLMs", icon: <FaBrain color="#FFB6C1" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "Node.js", icon: <SiNodedotjs color="#339933" /> }
];

export default function TechMarquee() {
  return (
    <div className={styles.marqueeContainer}>
      <motion.div 
        className={styles.marqueeTrack}
        animate={{ x: [0, -1500] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 30 
        }}
      >
        {/* We map multiple times to create an infinite loop effect */}
        {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, idx) => (
          <span key={idx} className={styles.marqueeItem}>
            <span className={styles.iconWrapper}>{tech.icon}</span>
            <span className={styles.techName}>{tech.name}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
