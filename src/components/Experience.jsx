import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const timelineItems = [
  {
    type: 'work',
    date: 'Jan 2024 – Present',
    role: 'Senior Full Stack Developer',
    company: 'TechNova Solutions',
    desc: 'Lead development of microservices architecture serving 500k+ daily users. Built CI/CD pipelines, reduced deployment time by 60%, mentored a team of 4 junior developers.',
  },
  {
    type: 'work',
    date: 'Jun 2022 – Dec 2023',
    role: 'Full Stack Developer',
    company: 'DigitalCraft Agency',
    desc: 'Delivered 12+ client projects including SaaS applications, e-commerce platforms, and real-time dashboards. Tech: React, Node.js, PostgreSQL, AWS.',
  },
  {
    type: 'edu',
    date: '2019 – 2023',
    role: 'B.Sc. Computer Science',
    company: 'HCMC University of Technology',
    desc: 'Graduated with honors (GPA 3.7/4.0). Specialized in software engineering and distributed systems. Final thesis on microservices patterns.',
  },
  {
    type: 'work',
    date: 'Jan 2022 – May 2022',
    role: 'Frontend Developer Intern',
    company: 'StartupHub Vietnam',
    desc: 'Developed React components and improved UI performance by 40%. Collaborated with designers and backend team in an Agile environment.',
  },
  {
    type: 'edu',
    date: '2021',
    role: 'AWS & Cloud Certifications',
    company: 'Amazon Web Services',
    desc: 'Earned AWS Certified Developer – Associate and AWS Certified Solutions Architect – Associate certifications.',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

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
          <p className="section-label" style={{ justifyContent: 'center' }}>My Journey</p>
          <h2 className="section-title">
            Work &amp; <span className="gradient-text">Education</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto' }}>
            My professional story and academic milestones
          </p>
        </motion.div>

        <div className="timeline">
          {timelineItems.map((item, i) => (
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
                    <span className={`timeline-badge ${item.type}`}>
                      {item.type === 'work' ? '💼 Work' : '🎓 Education'}
                    </span>
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
                    <span className={`timeline-badge ${item.type}`}>
                      {item.type === 'work' ? '💼 Work' : '🎓 Education'}
                    </span>
                    <span className="timeline-date">{item.date}</span>
                    <h3 className="timeline-role">{item.role}</h3>
                    <p className="timeline-company">{item.company}</p>
                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
