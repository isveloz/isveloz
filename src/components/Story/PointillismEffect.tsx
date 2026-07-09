import { motion } from 'framer-motion';
import styles from './PointillismEffect.module.css';

interface Props {
  type: 'feria' | 'servicio' | 'ingenieria' | 'datos' | 'democratizacion' | 'musica' | 'cocina';
}

export default function PointillismEffect({ type }: Props) {
  const columns = 12;
  const rows = 12;
  const dots = [];

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      dots.push({ x: i, y: j, index: i * rows + j });
    }
  }

  // Define the animation variant for each dot based on the type
  const getVariants = (dot: {x: number, y: number, index: number}) => {
    const cx = columns / 2;
    const cy = rows / 2;
    const dx = dot.x - cx;
    const dy = dot.y - cy;
    const distance = Math.sqrt(dx * dx + dy * dy);

    switch (type) {
      case 'feria':
        return {
          animate: {
            x: [0, dx * 10, 0],
            y: [0, dy * 10, 0],
            opacity: [0.1, 0.8, 0.1],
            transition: {
              duration: 4,
              repeat: Infinity,
              delay: distance * 0.1,
              ease: "easeInOut"
            }
          }
        };
      case 'servicio':
        return {
          animate: {
            rotate: [0, 360],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2],
            transition: {
              duration: 8,
              repeat: Infinity,
              delay: distance * 0.2,
              ease: "linear"
            }
          }
        };
      case 'ingenieria':
        return {
          animate: {
            scale: [0.5, 1.2, 0.5],
            opacity: [0.2, 1, 0.2],
            transition: {
              duration: 2,
              repeat: Infinity,
              delay: (dot.x + dot.y) * 0.1,
              ease: "steps(4)" // Rigid, robotic movement
            }
          }
        };
      case 'datos':
        return {
          animate: {
            x: [-20, 20, -20],
            opacity: [0, 1, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
              delay: dot.x * 0.2 + (dot.y % 2) * 0.5,
              ease: "linear"
            }
          }
        };
      case 'democratizacion':
        return {
          animate: {
            scale: [0.1, 1],
            opacity: [0, 0.8, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              delay: distance * 0.3,
              ease: "easeOut"
            }
          }
        };
      case 'musica':
        return {
          animate: {
            y: [0, -15 * (Math.sin(dot.x) + 1), 0],
            opacity: [0.3, 0.9, 0.3],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              delay: dot.x * 0.1,
              ease: "easeInOut"
            }
          }
        };
      case 'cocina':
        return {
          animate: {
            y: [0, -30],
            x: [0, Math.sin(dot.y) * 10],
            opacity: [0, 0.7, 0],
            transition: {
              duration: 5,
              repeat: Infinity,
              delay: dot.y * 0.2 + dot.x * 0.1,
              ease: "easeInOut"
            }
          }
        };
      default:
        return { animate: {} };
    }
  };

  return (
    <div className={styles.container}>
      <svg className={styles.svg} viewBox={`0 0 ${columns * 20} ${rows * 20}`}>
        {dots.map((dot) => {
          const animation = getVariants(dot).animate;
          return (
            <motion.circle
              key={dot.index}
              cx={dot.x * 20 + 10}
              cy={dot.y * 20 + 10}
              r={2}
              fill="var(--accent-cyan)"
              animate={animation as any}
            />
          );
        })}
      </svg>
    </div>
  );
}
