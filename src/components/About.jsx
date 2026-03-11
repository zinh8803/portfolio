import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const infoItems = [
  { label: 'Name', value: 'Alex Nguyen' },
  { label: 'Location', value: 'Ho Chi Minh City, VN' },
  { label: 'Email', value: 'alex@example.com' },
  { label: 'Languages', value: 'Vietnamese, English' },
  { label: 'Experience', value: '3+ Years' },
  { label: 'Status', value: '🟢 Open to Work' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

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
              <p className="section-label">About Me</p>
              <h2 className="section-title">
                Passionate Developer,{' '}
                <span className="gradient-text">Creative Thinker</span>
              </h2>
            </motion.div>

            <motion.p className="about-text" variants={fadeUp}>
              I'm a full-stack software engineer with <strong style={{ color: 'var(--text-primary)' }}>3+ years of experience</strong> building
              scalable web applications and digital products. I specialize in the React ecosystem,
              Node.js backends, and cloud deployments.
            </motion.p>

            <motion.p className="about-text" variants={fadeUp}>
              My journey began with a deep curiosity for how the web works, leading me to master
              everything from pixel-perfect front-end design to distributed backend systems.
              I love turning ideas into reality through elegant, performant code.
            </motion.p>

            <motion.div className="about-info-grid" variants={fadeUp}>
              {infoItems.map(item => (
                <div className="about-info-item" key={item.label}>
                  <p className="about-info-label">{item.label}</p>
                  <p className="about-info-value">{item.value}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <a
                href="/resume.pdf"
                download
                className="btn-primary"
                style={{ display: 'inline-flex' }}
              >
                <span>Download Resume</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
