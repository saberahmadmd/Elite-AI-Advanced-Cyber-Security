import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdSecurity } from "react-icons/md";
import './Header.css';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const servicesItems = [
    { name: 'AI Threat Detection', path: '/services' },
    { name: 'Data Protection', path: '/services' },
    { name: 'Security Auditing', path: '/services' },
    { name: 'Incident Response', path: '/services' },
    { name: 'Security Training', path: '/services' },
    { name: 'Cloud Security', path: '/services' },
  ];

  const solutionsItems = [
    { name: 'Enterprise Security', path: '/solutions' },
    { name: 'Small Business', path: '/solutions' },
    { name: 'Government', path: '/solutions' },
    { name: 'Healthcare', path: '/solutions' },
    { name: 'Financial Services', path: '/solutions' },
    { name: 'Education', path: '/solutions' },
  ];

  const aboutItems = [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/about' },
    { name: 'Press', path: '/about' },
    { name: 'Partners', path: '/about' },
    { name: 'Blog', path: '/about' },
  ];

  const newsItems = [
    { name: 'Latest Updates', path: '/news' },
    { name: 'Security Insights', path: '/news' },
    { name: 'Research Papers', path: '/news' },
    { name: 'Press Releases', path: '/news' },
    { name: 'Events', path: '/news' },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="logo">
            <Link to="/"> <MdSecurity /> Elite AI</Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>

          {/* Navigation - Desktop */}
          <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <div
              className={`nav-item ${activeDropdown === 'services' ? 'active' : ''}`}
              onMouseEnter={() => toggleDropdown('services')}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <span>Services <span className="dropdown-icon">▼</span></span>
              {activeDropdown === 'services' && (
                <div className="dropdown">
                  {servicesItems.map((item, index) => (
                    <Link to={item.path} key={index} onClick={() => setMobileMenuOpen(false)}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div
              className={`nav-item ${activeDropdown === 'solutions' ? 'active' : ''}`}
              onMouseEnter={() => toggleDropdown('solutions')}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <span>Solutions <span className="dropdown-icon">▼</span></span>
              {activeDropdown === 'solutions' && (
                <div className="dropdown">
                  {solutionsItems.map((item, index) => (
                    <Link to={item.path} key={index} onClick={() => setMobileMenuOpen(false)}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div
              className={`nav-item ${activeDropdown === 'about' ? 'active' : ''}`}
              onMouseEnter={() => toggleDropdown('about')}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <span>About <span className="dropdown-icon">▼</span></span>
              {activeDropdown === 'about' && (
                <div className="dropdown">
                  {aboutItems.map((item, index) => (
                    <Link to={item.path} key={index} onClick={() => setMobileMenuOpen(false)}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div
              className={`nav-item ${activeDropdown === 'news' ? 'active' : ''}`}
              onMouseEnter={() => toggleDropdown('news')}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <span>News <span className="dropdown-icon">▼</span></span>
              {activeDropdown === 'news' && (
                <div className="dropdown">
                  {newsItems.map((item, index) => (
                    <Link to={item.path} key={index} onClick={() => setMobileMenuOpen(false)}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="nav-item">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </div>

            {/* Mobile Buttons */}
            <div className="mobile-buttons">
              <button className="login-btn">Login</button>
              <button className="get-started-btn">Get Started</button>
            </div>
          </nav>

          {/* Desktop Buttons */}
          <div className="header-buttons">
            <button className="login-btn">Login</button>
            <button className="get-started-btn">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;