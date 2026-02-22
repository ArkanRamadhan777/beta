import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Beranda' },
    { path: '/events', label: 'Event' },
    { path: '/organization', label: 'Organisasi' },
    { path: '/gallery', label: 'Galeri' },
    { path: '/contact', label: 'Kontak' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b-4 border-gray-900' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Bold & Playful */}
          <Link 
            to="/" 
            className="font-outfit font-black text-3xl bg-gradient-to-r from-accent-primary to-accent-purple bg-clip-text text-transparent hover:scale-110 transition-transform duration-300"
          >
            BETA
          </Link>

          {/* Desktop Navigation - Bold Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `relative px-5 py-3 rounded-2xl font-bold text-base transition-all duration-300 ${
                    isActive 
                      ? 'bg-accent-primary text-white shadow-lg scale-105' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button - Playful */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden bg-gray-900 text-white p-3 rounded-2xl hover:scale-110 transition-all duration-300 border-2 border-gray-900"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu - Playful Cards */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 pb-6">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `block w-full text-left px-6 py-4 rounded-3xl font-bold text-lg transition-all duration-300 border-4 ${
                    isActive
                      ? 'bg-accent-primary text-white border-gray-900 shadow-lg scale-105'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-900 hover:scale-105'
                  } ${index % 2 === 0 ? 'mr-2' : 'ml-2'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
