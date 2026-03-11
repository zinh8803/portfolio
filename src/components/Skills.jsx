import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiReact, SiNodedotjs, SiDocker, SiPostgresql, SiGit,
  SiFirebase, SiLinux, SiMysql, SiBootstrap,
  SiPhp, SiLaravel, SiNuxt
} from 'react-icons/si'
import { useLang } from '../context/LanguageContext'
import t from '../i18n/translations'

const techStack = [
  { icon: <SiPhp color="#7c7cb5" />, label: 'PHP' },
  { icon: <SiLaravel color="#ff2d20" />, label: 'Laravel' },
  { icon: <SiReact color="#61dafb" />, label: 'React' },
  { icon: <SiNuxt color="#4fc08d" />, label: 'Nuxt.js' },
  { icon: <SiNodedotjs color="#6cc24a" />, label: 'Node.js' },
  { icon: <SiMysql color="#4479a1" />, label: 'MySQL' },
  { icon: <SiBootstrap color="#7952b3" />, label: 'Bootstrap' },
  { icon: <SiDocker color="#2496ed" />, label: 'Docker' },
  { icon: <SiGit color="#f34f29" />, label: 'Git' },
  { icon: <SiFirebase color="#ffca28" />, label: 'Firebase' },
  { icon: <SiPostgresql color="#336791" />, label: 'PostgreSQL' },
  { icon: <SiLinux color="#fcc624" />, label: 'Linux' },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLang()
  const tr = t[lang].skills

  return (
    <section className="skills section" id="skills" ref={ref}>
      <div className="orb orb-purple" style={{ bottom: '-50px', left: '-80px', opacity: 0.12 }} />
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

        <div className="skills-layout">
          {/* Skill Bars */}
          <div className="skills-bars">
            <h3>{tr.coreTitle}</h3>
            {tr.bars.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="skill-bar-item"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="skill-bar-header">
                  <span className="skill-bar-name">{skill.name}</span>
                  <span className="skill-bar-pct">{skill.pct}%</span>
                </div>
                <div className="skill-bar-track">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.pct}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Grid */}
          <div className="skills-stack">
            <h3>{tr.stackTitle}</h3>
            <div className="tech-stack-grid">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.label}
                  className="tech-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                >
                  <span className="tech-icon" style={{ fontSize: '2rem' }}>{tech.icon}</span>
                  <span>{tech.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
