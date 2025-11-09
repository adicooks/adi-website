import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#research', label: 'Research' },
  { href: '/#entrepreneurship', label: 'Entrepreneurship' },
  { href: '/#community', label: 'Community Service' },
  { href: '/#awards', label: 'Awards' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/#connect', label: 'Connect' },
];

export default function SiteNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    if (isHomePage) {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState({}, '', href);
      }
    }
  };

  return (
    <div className="w-full flex items-center justify-between">
      <Link to="/" className="text-xl ml-16 font-bold tracking-tight text-white hover:text-link-hover transition-colors">
        Adi Khurana
      </Link>
      <div className="hidden md:flex items-center gap-8 text-base font-medium">
        {navLinks.map((link) => {
          const isActive =
            (link.href === '/' && location.pathname === '/') ||
            (link.href !== '/' && location.pathname.startsWith(link.href.replace('/#', '/')));

          if (link.href.startsWith('/#')) {
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className={`transition-colors ${
                  isActive
                    ? 'text-link-hover font-semibold'
                    : 'text-foreground/80 hover:text-link-hover'
                }`}
              >
                {link.label}
              </a>
            );
          }
          return (
            <Link
              key={link.label}
              to={link.href}
              className={`transition-colors ${
                isActive
                  ? 'text-link-hover font-semibold'
                  : 'text-foreground/80 hover:text-link-hover'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button className="text-foreground hover:text-link-hover transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}
