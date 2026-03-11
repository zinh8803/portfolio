import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { useLang } from '../context/LanguageContext'
import t from '../i18n/translations'

const socials = [
  { icon: <FiGithub />, href: 'https://github.com/zinh8803', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/vinh-ng%C3%B4-qu%E1%BA%A5c-02a081350/', label: 'LinkedIn' },
]

export default function Footer() {
  const { lang } = useLang()
  const tr = t[lang].footer

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <p className="footer-copy">
            {tr.copy.split('Ngo Quoc Vinh').map((part, i) =>
              i === 0
                ? <span key={i}>{part}<span>Ngô Quốc Vinh</span></span>
                : <span key={i}>{part}</span>
            )}
          </p>
          <div className="footer-socials">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
