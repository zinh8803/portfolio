import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import t from '../i18n/translations'

const BADGE_MAP = {
  work: item => item,
  edu: item => item,
  award: item => item,
  cert: item => item,
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLang()
  const tr = t[lang].experience

  const getBadge = (type) => {
    if (type === 'work') return { text: tr.workBadge, cls: 'work' }
    if (type === 'edu') return { text: tr.eduBadge, cls: 'edu' }
    if (type === 'award') return { text: tr.awardBadge, cls: 'award' }
    return { text: tr.certBadge, cls: 'cert' }
  }

  return (
    <section className="experience section" id="experience" ref={ref}>
      <div className="orb orb-cyan" style={{ top: '30%', left: '-60px', opacity: 0.08 }} />
      <div className="container">
        <motion.div
          className="exp-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <p className="section-label" style={{ justifyContent: 'center' }}>{tr.label}</p>
          <h2 className="section-title">
            {tr.title} <span className="gradient-text">{tr.titleHighlight}</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto' }}>
            {tr.subtitle}
          </p>
        </motion.div>

        <div className="timeline">
          {tr.items.map((item, i) => {
            const badge = getBadge(item.type)
            return (
              <motion.div
                key={i}
                className="timeline-item"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                {i % 2 === 0 ? (
                  <>
                    <div className="timeline-content">
                      <span className={`timeline-badge ${badge.cls}`}>{badge.text}</span>
                      <span className="timeline-date">{item.date}</span>
                      <h3 className="timeline-role">{item.role}</h3>
                      <p className="timeline-company">{item.company}</p>
                      <p className="timeline-desc">{item.desc}</p>
                    </div>
                    <div className="timeline-dot">
                      <div className="timeline-dot-inner" />
                    </div>
                    <div className="timeline-empty" />
                  </>
                ) : (
                  <>
                    <div className="timeline-empty" />
                    <div className="timeline-dot">
                      <div className="timeline-dot-inner" />
                    </div>
                    <div className="timeline-content">
                      <span className={`timeline-badge ${badge.cls}`}>{badge.text}</span>
                      <span className="timeline-date">{item.date}</span>
                      <h3 className="timeline-role">{item.role}</h3>
                      <p className="timeline-company">{item.company}</p>
                      <p className="timeline-desc">{item.desc}</p>
                    </div>
                  </>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
