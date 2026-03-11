import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiSend, FiPhone } from 'react-icons/fi'
import { useLang } from '../context/LanguageContext'
import t from '../i18n/translations'

const ICONS = {
  Email: <FiMail />,
  LinkedIn: <FiLinkedin />,
  GitHub: <FiGithub />,
  Phone: <FiPhone />,
  'Điện thoại': <FiPhone />,
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLang()
  const tr = t[lang].contact

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
          <p className="section-label" style={{ justifyContent: 'center' }}>{tr.label}</p>
          <h2 className="section-title">
            {tr.title} <span className="gradient-text">{tr.titleHighlight}</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto' }}>
            {tr.subtitle}
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
            <h3>
              {tr.infoTitle} <span className="gradient-text">{tr.infoTitleHighlight}</span>
            </h3>
            <p>{tr.infoDesc}</p>
            <div className="contact-links">
              {tr.links.map(link => (
                <a href={link.href} className="contact-link" key={link.label} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  <div className="contact-link-icon">
                    {ICONS[link.label] || <FiMail />}
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
                <div className="form-success">{tr.form.success}</div>
              )}
              <div className="form-row">
                <div className="form-group">
                  <label>{tr.form.name}</label>
                  <input
                    type="text"
                    name="name"
                    placeholder={tr.form.namePh}
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>{tr.form.email}</label>
                  <input
                    type="email"
                    name="email"
                    placeholder={tr.form.emailPh}
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>{tr.form.subject}</label>
                <input
                  type="text"
                  name="subject"
                  placeholder={tr.form.subjectPh}
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>{tr.form.message}</label>
                <textarea
                  name="message"
                  placeholder={tr.form.messagePh}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn-primary form-submit" id="contact-submit">
                <span>{tr.form.submit}</span>
                <FiSend size={17} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
