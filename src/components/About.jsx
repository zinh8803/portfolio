import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLang } from '../context/LanguageContext'
import t from '../i18n/translations'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLang()
  const tr = t[lang].about

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="orb orb-cyan" style={{ top: '10%', right: '-100px', opacity: 0.1 }} />
      <div className="container">
        <div className="about-grid">
          {/* Image */}
          <motion.div
            className="about-image-wrap"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
          >
            <div className="about-image-box">
              <span>👨‍💻</span>
            </div>
            <div className="about-image-decoration">🚀</div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="about-content"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
          >
            <motion.div variants={fadeUp}>
              <p className="section-label">{tr.label}</p>
              <h2 className="section-title">
                {tr.title}{' '}
                <span className="gradient-text">{tr.titleHighlight}</span>
              </h2>
            </motion.div>

            <motion.p className="about-text" variants={fadeUp}>{tr.p1}</motion.p>
            <motion.p className="about-text" variants={fadeUp}>{tr.p2}</motion.p>

            <motion.div className="about-info-grid" variants={fadeUp}>
              {tr.info.map(item => (
                <div className="about-info-item" key={item.label}>
                  <p className="about-info-label">{item.label}</p>
                  <p className="about-info-value">{item.value}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <a href="/resume.pdf" download className="btn-primary" style={{ display: 'inline-flex' }}>
                <span>{tr.downloadResume}</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
