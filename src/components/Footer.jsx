import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi'
import { Link } from 'react-scroll'

const socials = [
  { icon: <FiGithub />, href: '#', label: 'GitHub' },
  { icon: <FiLinkedin />, href: '#', label: 'LinkedIn' },
  { icon: <FiTwitter />, href: '#', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <p className="footer-copy">
            © 2026 <span>Alex Nguyen</span>. Crafted with ♥ and lots of ☕
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
