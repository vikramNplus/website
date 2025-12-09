import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { companyDetails } from '../data/company';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
      {/* Top Bar */}
      <div className="bg-brand-dark text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2"><Phone size={16} /> +91 {companyDetails.md.phone}</span>
            <span className="flex items-center gap-2"><Mail size={16} /> {companyDetails.email}</span>
          </div>
          <div className="font-semibold">Trusted Since {companyDetails.founded}</div>
        </div>
      </div>

      <div className="container mx-auto px-4 bg-white">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-bold text-brand-blue truncate">
            {companyDetails.name}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-brand-blue font-medium transition-colors ${
                    isActive ? 'text-brand-blue font-bold' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-brand-blue focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-brand-gray text-brand-blue'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-brand-blue'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="border-t pt-4 mt-2">
                 <div className="flex flex-col space-y-2 text-sm text-gray-600">
                    <span className="flex items-center gap-2"><Phone size={16} /> +91 {companyDetails.md.phone}</span>
                    <span className="flex items-center gap-2"><Mail size={16} /> {companyDetails.email}</span>
                  </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
