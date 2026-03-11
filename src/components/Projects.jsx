import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    num: '01',
    emoji: '🛒',
    gradient: 'linear-gradient(135deg, #6c63ff, #8b7cf8)',
    title: 'ShopFlow — E-Commerce Platform',
    desc: 'Full-featured e-commerce platform with real-time inventory, Stripe payments, admin dashboard, and advanced product filtering.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    github: '#',
    live: '#',
  },
  {
    num: '02',
    emoji: '📊',
    gradient: 'linear-gradient(135deg, #00f5d4, #006e63)',
    title: 'DataViz Analytics Dashboard',
    desc: 'Real-time business intelligence dashboard with interactive charts, custom report builder, and multi-tenant support.',
    tags: ['React', 'D3.js', 'Python', 'FastAPI', 'MongoDB'],
    github: '#',
    live: '#',
  },
  {
    num: '03',
    emoji: '💬',
    gradient: 'linear-gradient(135deg, #ff6b9d, #c44569)',
    title: 'Nexus Chat — Real-time Messaging',
    desc: 'Scalable messaging app with end-to-end encryption, video calls, file sharing, and offline message sync.',
    tags: ['Next.js', 'WebSocket', 'Redis', 'Docker', 'AWS'],
    github: '#',
    live: '#',
  },
  {
    num: '04',
    emoji: '🤖',
    gradient: 'linear-gradient(135deg, #fbbf24, #b45309)',
    title: 'AI Content Generator',
    desc: 'GPT-powered content creation tool with custom prompts, brand voice training, multi-format export and team collaboration.',
    tags: ['React', 'OpenAI', 'Node.js', 'Prisma', 'Stripe'],
    github: '#',
    live: '#',
  },
  {
    num: '05',
    emoji: '🏠',
    gradient: 'linear-gradient(135deg, #60a5fa, #1d4ed8)',
    title: 'PropFind — Real Estate App',
    desc: 'Property search platform with map-based browsing, mortgage calculator, virtual 3D tours and AI price prediction.',
    tags: ['React', 'Python', 'TensorFlow', 'Mapbox', 'PostgreSQL'],
    github: '#',
    live: '#',
  },
  {
    num: '06',
    emoji: '🎮',
    gradient: 'linear-gradient(135deg, #a78bfa, #6d28d9)',
    title: 'DevQuest — Learning Platform',
    desc: 'Interactive coding education platform with live code execution, AI code review, gamification and peer challenges.',
    tags: ['Next.js', 'GraphQL', 'Docker', 'Redis', 'AWS'],
    github: '#',
    live: '#',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

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
          <p className="section-label" style={{ justifyContent: 'center' }}>Portfolio</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto' }}>
            A selection of projects I've built with passion and precision
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="project-card-image" style={{ background: p.gradient }}>
                <span style={{ fontSize: '5rem', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))' }}>
                  {p.emoji}
                </span>
                <div className="project-card-overlay">
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-link-btn github">
                    <FiGithub size={15} /> Code
                  </a>
                  <a href={p.live} target="_blank" rel="noreferrer" className="project-link-btn live">
                    <FiExternalLink size={15} /> Demo
                  </a>
                </div>
              </div>
              <div className="project-card-body">
                <p className="project-card-num">Project {p.num}</p>
                <h3 className="project-card-title">{p.title}</h3>
                <p className="project-card-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map(t => (
                    <span className="project-tag" key={t}>{t}</span>
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
