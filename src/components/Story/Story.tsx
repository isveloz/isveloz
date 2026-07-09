import { useRef, MouseEvent, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Store, Coffee, BookOpen, Database, Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from './Story.module.css';
import { OriginAnimation, ServiceAnimation, StudyAnimation, DataAnimation, FalabellaAnimation } from './ChapterAnimations';

// Removed static chapters array

function Chapter({ chapter, index }: { chapter: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 1;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!contentRef.current) return;
    const rect = contentRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    contentRef.current.style.setProperty('--mouse-x', `${x}px`);
    contentRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const ContentCard = () => (
    <motion.div 
      ref={contentRef}
      onMouseMove={handleMouseMove}
      className={styles.chapterContent}
      initial={{ opacity: 0, y: isEven ? 30 : -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.stem} />
      <div className={styles.node}>
        <span className={styles.yearLabel}>{chapter.year}</span>
      </div>
      <div className={styles.iconContainer}>{chapter.icon}</div>
      <h3 className={styles.chapterTitle}>{chapter.title}</h3>
      <h4 className={styles.chapterSubtitle}>{chapter.subtitle}</h4>
      <p className={styles.chapterText}>{chapter.text}</p>
    </motion.div>
  );

  const AnimationCard = () => (
    <motion.div 
      className={styles.animationContainer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.2 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {chapter.animation}
    </motion.div>
  );

  return (
    <div ref={ref} className={`${styles.chapter} ${isEven ? styles.even : ''}`}>
      <div className={`${styles.half} ${styles.topHalf}`}>
        {!isEven ? <ContentCard /> : <AnimationCard />}
      </div>
      <div className={`${styles.half} ${styles.bottomHalf}`}>
        {!isEven ? <AnimationCard /> : <ContentCard />}
      </div>
    </div>
  );
}

export default function Story() {
  const { t } = useTranslation();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [dragConstraints, setDragConstraints] = useState(0);

  const x = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 300, damping: 40 });

  useEffect(() => {
    const measure = () => {
      if (timelineRef.current && wrapperRef.current) {
        const constraint = wrapperRef.current.offsetWidth - timelineRef.current.offsetWidth;
        setDragConstraints(constraint < 0 ? constraint : 0);
      }
    };
    
    measure();
    const timeout = setTimeout(measure, 500); // Re-measure after layout
    window.addEventListener('resize', measure);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', measure);
    };
  }, []);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      let newX = x.get() - delta * 1.5;
      
      if (newX > 0) newX = 0;
      if (newX < dragConstraints) newX = dragConstraints;
      
      x.set(newX);
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [dragConstraints, x]);

  const scroll = (direction: 'left' | 'right') => {
    const amount = 500;
    let newX = x.get() + (direction === 'left' ? amount : -amount);
    if (newX > 0) newX = 0;
    if (newX < dragConstraints) newX = dragConstraints;
    x.set(newX);
  };

  const chapters = [
    {
      title: t('story.ch1_title'),
      subtitle: t('story.ch1_sub'),
      text: t('story.ch1_txt'),
      year: "2001",
      icon: <Store size={28} />,
      animation: <OriginAnimation />
    },
    {
      title: t('story.ch2_title'),
      subtitle: t('story.ch2_sub'),
      text: t('story.ch2_txt'),
      year: "2018",
      icon: <Coffee size={28} />,
      animation: <ServiceAnimation />
    },
    {
      title: t('story.ch3_title'),
      subtitle: t('story.ch3_sub'),
      text: t('story.ch3_txt'),
      year: "2020",
      icon: <Building2 size={28} />,
      animation: <ServiceAnimation />
    },
    {
      title: t('story.ch4_title'),
      subtitle: t('story.ch4_sub'),
      text: t('story.ch4_txt'),
      year: "2022",
      icon: <BookOpen size={28} />,
      animation: <StudyAnimation />
    },
    {
      title: t('story.ch5_title'),
      subtitle: t('story.ch5_sub'),
      text: t('story.ch5_txt'),
      year: "2024",
      icon: <Database size={28} />,
      animation: <DataAnimation />
    },
    {
      title: t('story.ch6_title'),
      subtitle: t('story.ch6_sub'),
      text: t('story.ch6_txt'),
      year: "2025",
      icon: <Building2 size={28} />,
      animation: <FalabellaAnimation />
    }
  ];

  return (
    <section className="container" style={{ maxWidth: '100vw', padding: 0 }}>
      <div className={styles.timelineWrapper} ref={wrapperRef}>
        <button className={`${styles.navButton} ${styles.prevButton}`} onClick={() => scroll('left')} aria-label="Anterior">
          <ChevronLeft size={32} />
        </button>

        <motion.div 
          className={styles.timeline} 
          ref={timelineRef}
          style={{ x: smoothX }}
          drag="x"
          dragConstraints={{ left: dragConstraints, right: 0 }}
          dragElastic={0.1}
          onDrag={(e, info) => {
            x.set(x.get() + info.delta.x);
          }}
        >
          {chapters.map((chapter, idx) => (
            <Chapter key={idx} chapter={chapter} index={idx} />
          ))}
          <div style={{ minWidth: '10vw' }} />
        </motion.div>

        <button className={`${styles.navButton} ${styles.nextButton}`} onClick={() => scroll('right')} aria-label="Siguiente">
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
}
