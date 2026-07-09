import { motion, type Variants } from 'framer-motion';

const pathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }
  }
};

export const OriginAnimation = () => (
  <svg width="200" height="200" viewBox="0 0 100 100" stroke="rgba(138, 43, 226, 0.4)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <motion.path d="M 50 10 L 90 30 L 90 70 L 50 90 L 10 70 L 10 30 Z" variants={pathVariants} initial="hidden" animate="visible" />
    <motion.path d="M 50 10 L 50 50 L 90 70" variants={pathVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }} />
    <motion.path d="M 10 30 L 50 50 L 10 70" variants={pathVariants} initial="hidden" animate="visible" transition={{ delay: 1 }} />
  </svg>
);

export const ServiceAnimation = () => (
  <svg width="200" height="200" viewBox="0 0 100 100" stroke="rgba(138, 43, 226, 0.4)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <motion.path d="M 30 70 C 30 80, 70 80, 70 70 L 70 40 L 30 40 Z" variants={pathVariants} initial="hidden" animate="visible" />
    <motion.path d="M 70 45 C 85 45, 85 60, 70 60" variants={pathVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }} />
    <motion.path d="M 40 20 Q 45 10, 50 20 T 60 10" variants={pathVariants} initial="hidden" animate="visible" transition={{ delay: 1 }} />
  </svg>
);

export const StudyAnimation = () => (
  <svg width="200" height="200" viewBox="0 0 100 100" stroke="rgba(138, 43, 226, 0.4)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <motion.path d="M 30 20 L 10 50 L 30 80" variants={pathVariants} initial="hidden" animate="visible" />
    <motion.path d="M 70 20 L 90 50 L 70 80" variants={pathVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }} />
    <motion.path d="M 60 10 L 40 90" variants={pathVariants} initial="hidden" animate="visible" transition={{ delay: 1 }} />
  </svg>
);

export const DataAnimation = () => (
  <svg width="200" height="200" viewBox="0 0 100 100" stroke="rgba(138, 43, 226, 0.4)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <motion.path d="M 10 90 L 90 90" variants={pathVariants} initial="hidden" animate="visible" />
    <motion.path d="M 20 90 L 20 60" variants={pathVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }} />
    <motion.path d="M 40 90 L 40 40" variants={pathVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }} />
    <motion.path d="M 60 90 L 60 70" variants={pathVariants} initial="hidden" animate="visible" transition={{ delay: 0.6 }} />
    <motion.path d="M 80 90 L 80 20" variants={pathVariants} initial="hidden" animate="visible" transition={{ delay: 0.8 }} />
    <motion.path d="M 15 65 L 35 35 L 55 65 L 75 15" strokeWidth="3" variants={pathVariants} initial="hidden" animate="visible" transition={{ delay: 1 }} />
  </svg>
);

export const FalabellaAnimation = () => (
  <svg width="200" height="200" viewBox="0 0 100 100" stroke="rgba(138, 43, 226, 0.4)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <motion.rect x="10" y="20" width="80" height="60" rx="5" variants={pathVariants} initial="hidden" animate="visible" />
    <motion.path d="M 10 40 L 90 40" variants={pathVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }} />
    <motion.path d="M 30 40 L 30 80" variants={pathVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }} />
    <motion.circle cx="60" cy="60" r="10" variants={pathVariants} initial="hidden" animate="visible" transition={{ delay: 0.6 }} />
    <motion.path d="M 60 60 L 65 55" variants={pathVariants} initial="hidden" animate="visible" transition={{ delay: 0.8 }} />
  </svg>
);
