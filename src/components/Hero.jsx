import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiDownload, FiArrowDown } from 'react-icons/fi'
import { useLang } from '../context/LanguageContext'
import t from '../i18n/translations'

export default function Hero() {
  const { lang } = useLang()
  const tr = t[lang].hero

  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  // Reset typing when language changes
  useEffect(() => {
    setWordIndex(0)
    setDisplayed('')
    setIsDeleting(false)
    setCharIndex(0)
  }, [lang])

  useEffect(() => {
    const words = tr.typedWords
    const current = words[wordIndex]
    const speed = isDeleting ? 60 : 100

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, charIndex + 1))
        setCharIndex(i => i + 1)
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        setDisplayed(current.slice(0, charIndex - 1))
        setCharIndex(i => i - 1)
        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setWordIndex(i => (i + 1) % words.length)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex, lang, tr.typedWords])

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="orb orb-purple" style={{ top: '-100px', left: '-100px' }} />
        <div className="orb orb-cyan" style={{ bottom: '-80px', right: '200px' }} />
      </div>

      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '60px', width: '100%' }}>
        {/* Content */}
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-greeting"
          >
            <span className="dot" />
            {tr.available}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hero-name"
          >
            {tr.greeting}{' '}
            <span className="gradient-text">{tr.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-title"
          >
            <span className="typed-text">{displayed}</span>
            <span className="hero-cursor" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="hero-desc"
          >
            {tr.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hero-buttons"
          >
            <Link to="projects" smooth duration={600} offset={-72}>
              <button className="btn-primary" id="hero-view-work">
                <span>{tr.viewWork}</span>
                <FiArrowDown size={18} />
              </button>
            </Link>
            <a href="/resume.pdf" download className="btn-outline" id="hero-download-cv">
              <FiDownload size={17} />
              {tr.downloadCv}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hero-stats"
          >
            {tr.stats.map(s => (
              <div className="hero-stat" key={s.label}>
                <span className="hero-stat-num">{s.num}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visual */}
        <div className="hero-visual">
          <motion.div
            className="hero-card-float"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero-avatar-ring" />
            <div className="hero-avatar">👨‍💻</div>

            <div className="hero-badge">
              <span className="badge-icon">⚡</span>
              <span style={{ color: 'var(--text-primary)' }}>{tr.badge1.replace('⚡ ', '')}</span>
            </div>

            <div className="hero-badge" style={{ animationDelay: '-2s' }}>
              <span className="badge-icon">🏆</span>
              <span style={{ color: 'var(--text-primary)' }}>{tr.badge2.replace('🏆 ', '')}</span>
            </div>

            <div className="hero-badge" style={{ animationDelay: '-0.5s' }}>
              <span className="badge-icon">✨</span>
              <span style={{ color: 'var(--accent-cyan)' }}>{tr.badge3.replace('✨ ', '')}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
