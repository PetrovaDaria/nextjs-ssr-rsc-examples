'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/with-props', label: 'Пропсы' },
    { href: '/incorrect-props', label: 'Несериализуемые пропсы' },
    { href: '/server-function', label: 'Server Function' },
    { href: '/direct-window', label: 'window напрямую' },
    { href: '/indirect-window', label: 'window через хуки' },
    { href: '/date-now', label: 'Date.now()' },
    { href: '/no-ssr', label: 'No SSR' },
    { href: '/streaming', label: 'Стриминг' },
  ];

  return (
    <nav className="navigation">
      {/* Бургер-иконка */}
      <button
        className="burger-menu"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Десктопное меню */}
      <div className="desktop-menu">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>

      {/* Мобильное меню (сайдбар) */}
      <div className={`mobile-sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>Меню</h3>
          <button
            className="close-button"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <div className="sidebar-content">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Оверлей для закрытия меню */}
      {isMenuOpen && (
        <div className="menu-overlay" onClick={closeMenu}></div>
      )}
    </nav>
  );
};

export default Navigation;
