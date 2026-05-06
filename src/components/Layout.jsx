import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

function Layout({ children }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand">
            <h1>17. Mai Volda 2026</h1>
          </Link>
        </div>
        <div className="container">
          <nav id="main-nav" className="main-nav">
            <Link to="/" className="nav-button">Program</Link>
            <div ref={dropdownRef} className={`nav-dropdown ${isDropdownOpen ? 'open' : ''}`}>
              <button
                type="button"
                className="dropdown-toggle"
                aria-expanded={isDropdownOpen}
                aria-controls="song-menu"
                onClick={toggleDropdown}
              >
                Sangtekster
              </button>
              {isDropdownOpen && (
                <div id="song-menu" className="dropdown-menu" role="menu">
                  <Link to="/ja-vi-elsker" role="menuitem" onClick={closeDropdown}>
                    Ja, vi elsker dette landet
                  </Link>
                  <Link to="/nordmannen" role="menuitem" onClick={closeDropdown}>
                    Nordmannen
                  </Link>
                  <Link to="/gud-signe-vart-dyre-fedreland" role="menuitem" onClick={closeDropdown}>
                    Gud signe vårt dyre fedreland
                  </Link>
                  <Link to="/det-gar-eit-festtog-gjennom-landet" role="menuitem" onClick={closeDropdown}>
                    Det går eit festtog gjennom landet!
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
      <main className="container">
        {children}
      </main>
    </div>
  );
}

export default Layout;