import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiCode, FiDatabase, FiCloud, FiGitBranch, FiSmartphone, FiShield
} from 'react-icons/fi'
import {
  SiReact, SiNodedotjs, SiTypescript, SiPython, SiDocker,
  SiPostgresql, SiMongodb, SiTailwindcss, SiGit,
  SiNextdotjs, SiGraphql, SiRedis, SiLinux, SiFirebase, SiKubernetes
} from 'react-icons/si'

const skills = [
  { name: 'React / Next.js', pct: 92 },
  { name: 'Node.js / Express', pct: 88 },
  { name: 'TypeScript', pct: 85 },
  { name: 'Python', pct: 80 },
  { name: 'PostgreSQL / MongoDB', pct: 82 },
  { name: 'DevOps / Docker / AWS', pct: 75 },
]

const techStack = [
  { icon: <SiReact color="#61dafb" />, label: 'React' },
  { icon: <SiNextdotjs color="#fff" />, label: 'Next.js' },
  { icon: <SiTypescript color="#3178c6" />, label: 'TypeScript' },
  { icon: <SiNodedotjs color="#6cc24a" />, label: 'Node.js' },
  { icon: <SiPython color="#ffd43b" />, label: 'Python' },
  { icon: <SiGraphql color="#e10098" />, label: 'GraphQL' },
  { icon: <SiPostgresql color="#336791" />, label: 'Postgres' },
  { icon: <SiMongodb color="#4db33d" />, label: 'MongoDB' },
  { icon: <SiRedis color="#d82c20" />, label: 'Redis' },
  { icon: <SiDocker color="#2496ed" />, label: 'Docker' },
  { icon: <SiKubernetes color="#326ce5" />, label: 'K8s' },
  { icon: <SiFirebase color="#ffca28" />, label: 'Firebase' },
  { icon: <SiTailwindcss color="#38bdf8" />, label: 'Tailwind' },
  { icon: <SiGit color="#f34f29" />, label: 'Git' },
  { icon: <SiLinux color="#fcc624" />, label: 'Linux' },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

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
          <p className="section-label" style={{ justifyContent: 'center' }}>My Arsenal</p>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto' }}>
            Technologies I use to craft exceptional digital experiences
          </p>
        </motion.div>

        <div className="skills-layout">
          {/* Skill Bars */}
          <div className="skills-bars">
            <h3>Core Proficiencies</h3>
            {skills.map((skill, i) => (
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
            <h3>Tech Stack</h3>
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
