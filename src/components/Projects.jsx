import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { useLang } from '../context/LanguageContext'
import t from '../i18n/translations'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLang()
  const tr = t[lang].projects

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="orb orb-purple" style={{ top: '20%', right: '-80px', opacity: 0.1 }} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56, textAlign: 'center' }}
        >
          <p className="section-label" style={{ justifyContent: 'center' }}>{tr.label}</p>
          <h2 className="section-title">
            {tr.title} <span className="gradient-text">{tr.titleHighlight}</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto' }}>
            {tr.subtitle}
          </p>
        </motion.div>

        <div className="projects-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
          {tr.items.map((p, i) => (
            <motion.div
              key={p.num}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
            >
              <div className="project-card-image" style={{ background: p.gradient }}>
                <span style={{ fontSize: '5rem', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))' }}>
                  {p.emoji}
                </span>
                <div className="project-card-overlay">
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-link-btn github">
                    <FiGithub size={15} /> {tr.code}
                  </a>
                  {p.githubBe && (
                    <a href={p.githubBe} target="_blank" rel="noreferrer" className="project-link-btn github">
                      <FiGithub size={15} /> Backend
                    </a>
                  )}
                  <a href={p.live} target="_blank" rel="noreferrer" className="project-link-btn live">
                    <FiExternalLink size={15} /> {tr.demo}
                  </a>
                </div>
              </div>
              <div className="project-card-body">
                <p className="project-card-num">Project {p.num}</p>
                <h3 className="project-card-title">{p.title}</h3>
                <p className="project-card-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map(tag => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
