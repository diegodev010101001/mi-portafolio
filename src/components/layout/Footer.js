import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const SOCIAL = [
  { href: 'https://github.com/diegodev010101001', icon: <FiGithub />,  label: 'GitHub'   },
  { href: 'https://linkedin.com',                  icon: <FiLinkedin />, label: 'LinkedIn' },
  { href: 'https://twitter.com',                   icon: <FiTwitter />,  label: 'Twitter'  },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">

      <span className="footer-brand">
        <span style={{ color: 'var(--color-acc)' }}>D</span>iego<span style={{ color: 'var(--color-acc)' }}>.</span>
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
