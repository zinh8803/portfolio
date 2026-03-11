import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiDownload, FiArrowDown } from 'react-icons/fi'

const TYPED_WORDS = [
  'Full Stack Developer',
  'UI/UX Enthusiast',
  'Cloud Architect',
  'Open Source Contributor',
]

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = TYPED_WORDS[wordIndex]
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
          setWordIndex(i => (i + 1) % TYPED_WORDS.length)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex])

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
            Available for work — Let's build something great
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hero-name"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Alex Nguyen</span>
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
            I craft high-performance web applications with modern technologies.
            Passionate about clean code, stunning UIs, and scalable architecture.
            Turning complex problems into elegant solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hero-buttons"
          >
            <Link to="projects" smooth duration={600} offset={-72}>
              <button className="btn-primary">
                <span>View My Work</span>
                <FiArrowDown size={18} />
              </button>
            </Link>
            <a href="/resume.pdf" download className="btn-outline">
              <FiDownload size={17} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hero-stats"
          >
            {[
              { num: '3+', label: 'Years Experience' },
              { num: '40+', label: 'Projects Done' },
              { num: '20+', label: 'Happy Clients' },
              { num: '99%', label: 'Satisfaction' },
            ].map(s => (
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
              <span style={{ color: 'var(--text-primary)' }}>React Expert</span>
            </div>

            <div className="hero-badge" style={{ animationDelay: '-2s' }}>
              <span className="badge-icon">🏆</span>
              <span style={{ color: 'var(--text-primary)' }}>Top Rated Dev</span>
            </div>

            <div className="hero-badge" style={{ animationDelay: '-0.5s' }}>
              <span className="badge-icon badge-green">✨</span>
              <span style={{ color: 'var(--accent-cyan)' }}>Open to Work</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
