import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FiCode, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          <Link to="hero" smooth duration={500} className="navbar-logo" style={{ cursor: 'pointer' }}>
            &lt;alex.dev /&gt;
          </Link>

          <ul className="navbar-links">
            {navLinks.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-72}
                  activeClass="active"
                  spy
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="contact"
                smooth
                duration={600}
                offset={-72}
                className="navbar-cta"
              >
                Hire Me
              </Link>
            </li>
          </ul>

          <button
            className="hamburger"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={22} color="var(--text-primary)" /> : <FiMenu size={22} color="var(--text-primary)" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div style={{
          background: 'rgba(10,10,15,0.97)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
          padding: '16px 24px 24px'
        }}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={600}
              offset={-72}
              style={{
                display: 'block',
                padding: '12px 0',
                color: 'var(--text-secondary)',
                borderBottom: '1px solid var(--border)',
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontWeight: 500
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
