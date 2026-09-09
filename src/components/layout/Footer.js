import React from 'react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const SOCIAL = [
  { href: 'https://github.com/diegodev010101001', icon: <FiGithub />,    label: 'GitHub'    },
  { href: 'https://www.linkedin.com/in/diego-fernandez-martinez-6bb931422?utm_source=share_via&utm_content=profile&utm_medium=member_ios', icon: <FiLinkedin />,  label: 'LinkedIn'  },
  { href: 'https://www.instagram.com/_d.fdez_0/', icon: <FiInstagram />, label: 'Instagram' },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">

      <span className="footer-brand">
        <span style={{ color: 'var(--color-acc)' }}>Dieg</span>oFdezC<span style={{ color: 'var(--color-acc)' }}>ode</span>
      </span>

      <p className="footer-copy">
        © {new Date().getFullYear()} Diego Fernández — Todos los derechos reservados.
      </p>

      <div className="footer-links">
        {SOCIAL.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label={label}
          >
            {icon}
          </a>
        ))}
      </div>

    </div>
  </footer>
);

export default Footer;
