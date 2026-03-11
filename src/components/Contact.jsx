import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiSend, FiMapPin, FiPhone } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'

const contactLinks = [
  { icon: <FiMail />, label: 'Email', value: 'alex@example.com', href: 'mailto:alex@example.com' },
  { icon: <FiLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/alexnguyen', href: '#' },
  { icon: <FiGithub />, label: 'GitHub', value: 'github.com/alexnguyen', href: '#' },
  { icon: <FiMapPin />, label: 'Location', value: 'Ho Chi Minh City, Vietnam', href: '#' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="orb orb-purple" style={{ bottom: '-60px', right: '-60px', opacity: 0.12 }} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56, textAlign: 'center' }}
        >
          <p className="section-label" style={{ justifyContent: 'center' }}>Get In Touch</p>
          <h2 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto' }}>
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Get in <span className="gradient-text">Touch</span></h3>
            <p>
              I'm currently open to full-time opportunities and exciting freelance projects.
              Whether you have a question or just want to say hello — my inbox is always open!
            </p>
            <div className="contact-links">
              {contactLinks.map(link => (
                <a href={link.href} className="contact-link" key={link.label}>
                  <div className="contact-link-icon">
                    {link.icon}
                  </div>
                  <div className="contact-link-content">
                    <p className="contact-link-label">{link.label}</p>
                    <p className="contact-link-value">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              {sent && (
                <div className="form-success">
                  ✅ Message sent! I'll get back to you soon.
                </div>
              )}
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn-primary form-submit">
                <span>Send Message</span>
                <FiSend size={17} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
