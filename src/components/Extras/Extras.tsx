import { motion } from 'framer-motion';
import { BookOpen, Disc3, Users, Film } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from './Extras.module.css';

const books = [
  { title: '1984', img: '/1984.svg' },
  { title: 'Un Mundo Feliz', img: '/un_mundo_feliz.svg' },
  { title: 'Dune', img: '/dune.svg' },
  { title: 'Slam Dunk', img: '/slamdunk.svg' },
  { title: 'Papelucho', img: '/papelucho.svg' }
];

const movies = [
  { title: 'El Padrino', img: '/padrino.svg' },
  { title: 'Goodfellas', img: '/goodfellas.svg' },
  { title: 'Casino', img: '/casino.svg' },
  { title: 'El Hobbit', img: '/hobbit.svg' },
  { title: 'Spirit', img: '/spirit.svg' },
  { title: 'Akira', img: '/akira.svg' },
  { title: 'Invasor Zim', img: '/invasor_zim.svg' },
  { title: 'Oye Arnold!', img: '/arnold.svg' },
  { title: 'Los Simpson', img: '/simpsons.svg' },
  { title: 'Futurama', img: '/futurama.svg' },
  { title: '31 Minutos', img: '/31_minutos.svg' },
  { title: 'Atlanta', img: '/atlanta.svg' }
];

const music = [
  { title: 'Section.80', artist: 'Kendrick Lamar', id: '1bkN9nIkkCnXeG4yitVS1J', color: '#8b5cf6' },
  { title: 'Drip or Drown 2', artist: 'Gunna', id: '43419Qx1sF3N72yO9hR3r5', color: '#ec4899' },
  { title: 'João Gilberto', artist: 'João Gilberto', id: '28wB26v3V01T5d820gJ7kZ', color: '#06b6d4' },
  { title: 'The Infamous', artist: 'Mobb Deep', id: '06p147G0kXw4yWJ5gV39B5', color: '#10b981' },
  { title: 'The Epic', artist: 'Kamasi Washington', id: '4352D02Vn55GjH671z78wH', color: '#f59e0b' },
  { title: 'Kind of Blue', artist: 'Miles Davis', id: '1weenld61qsyP00f2e0y5w', color: '#3b82f6' }
];

const minds = [
  { name: 'Marcela Paz', role: 'Escritora chilena', img: '/marcela_paz.svg' },
  { name: 'Nicanor Parra', role: 'Antipoeta', img: '/nicanor_parra.svg' },
  { name: 'Kendrick Lamar', role: 'Letrista / Rapero', img: '/kendrick.svg' },
  { name: 'Kamasi Washington', role: 'Saxofonista / Jazz', img: '/kamasi.svg' },
  { name: 'Malcolm X', role: 'Líder Social', img: '/malcolm_x.svg' },
  { name: 'Pedro Aguirre Cerda', role: 'Presidente / Educador', img: '/pedro_aguirre.svg' },
  { name: 'José Miguel Carrera', role: 'Prócer chileno', img: '/jose_miguel.svg' },
  { name: 'Carlos La Sombra', role: 'Filósofo', img: '/carlos_sombra.svg' }
];

export default function Extras() {
  const { t } = useTranslation();
  
  return (
    <section className={styles.extrasContainer} id="extras">
      <div className="container">
        <motion.h2 
          className={styles.mainTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('extras.title')}
        </motion.h2>

        {/* --- BIBLIOTECA --- */}
        <div className={styles.sectionBlock}>
          <h3 className={styles.sectionTitle}><BookOpen /> {t('extras.lib_title')}</h3>
          <p className={styles.sectionDesc}>{t('extras.lib_desc')}</p>
          <div className={styles.bookGrid}>
            {books.map((book, idx) => (
              <motion.div 
                key={idx} 
                className={styles.bookCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <img src={book.img} alt={book.title} className={styles.bookCover} loading="lazy" 
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x600/333/fff?text=' + book.title; }}
                />
                <span className={styles.bookTitle}>{book.title}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- CINE Y ANIMACION --- */}
        <div className={styles.sectionBlock}>
          <h3 className={styles.sectionTitle}><Film /> {t('extras.cine_title')}</h3>
          <div className={styles.bookGrid}>
            {movies.map((movie, idx) => (
              <motion.div 
                key={idx} 
                className={styles.bookCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <img src={movie.img} alt={movie.title} className={styles.bookCover} loading="lazy" style={{ height: '220px', width: '150px' }} 
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x600/333/fff?text=' + movie.title; }}
                />
                <span className={styles.bookTitle} style={{ fontSize: '0.9rem' }}>{movie.title}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- ROCOLA MUSICAL --- */}
        <div className={styles.sectionBlock}>
          <h3 className={styles.sectionTitle}><div className={styles.spinIcon}><Disc3 size={32} /></div> {t('extras.music_title')}</h3>
          <p className={styles.sectionDesc}>{t('extras.music_desc')}</p>
          <div className={styles.spotifyGrid}>
            {music.map((item, idx) => (
              <motion.a 
                href={`https://open.spotify.com/album/${item.id}`}
                target="_blank"
                rel="noopener noreferrer"
                key={idx} 
                className={styles.musicPlayerCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className={styles.albumArt} style={{ background: `linear-gradient(135deg, ${item.color}, #18181b)` }}>
                  <div className={styles.spinDisc} style={{ background: `conic-gradient(from 0deg, transparent, rgba(255,255,255,0.3) 90deg, transparent 180deg)` }} />
                </div>
                <div className={styles.trackInfo}>
                  <div className={styles.trackTitle}>{item.title}</div>
                  <div className={styles.trackArtist}>{item.artist}</div>
                  <div className={styles.eqBars}>
                    <div className={styles.eqBar} />
                    <div className={styles.eqBar} />
                    <div className={styles.eqBar} />
                    <div className={styles.eqBar} />
                  </div>
                </div>
                <svg viewBox="0 0 24 24" width="28" height="28" className={styles.spotifyLogo} fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.24 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </motion.a>
            ))}
          </div>
        </div>

        {/* --- MENTES Y REFERENTES --- */}
        <div className={styles.sectionBlock}>
          <h3 className={styles.sectionTitle}><Users /> {t('extras.minds_title')}</h3>
          <div className={styles.mindsGrid}>
            {minds.map((mind, idx) => (
              <motion.div 
                key={idx} 
                className={styles.mindCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <img src={mind.img} alt={mind.name} className={styles.mindPhoto} loading="lazy" 
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400/333/fff?text=' + mind.name; }}
                />
                <div className={styles.mindName}>{mind.name}</div>
                <div className={styles.mindRole}>{mind.role}</div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
