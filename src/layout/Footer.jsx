import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { companyDetails } from '../data/company';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{companyDetails.name}</h3>
            <p className="text-gray-400 mb-4">
              Leading provider of digital printing machinery, laser cutting solutions, and spare parts since {companyDetails.founded}.
            </p>
            <div className="flex space-x-4">
              <a href={companyDetails.social.facebook} className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
              <a href={companyDetails.social.twitter} className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
              <a href={companyDetails.social.instagram} className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
              <a href={companyDetails.social.linkedin} className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 flex-shrink-0 text-brand-light" size={20} />
                <span className="text-gray-400">
                  {companyDetails.address.street},<br />
                  {companyDetails.address.area},<br />
                  {companyDetails.address.city} - {companyDetails.address.pincode}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="flex-shrink-0 text-brand-light" size={20} />
                <div className="text-gray-400">
                  <p>+91 {companyDetails.md.phone} (MD)</p>
                  <p>+91 {companyDetails.ceo.phone} (CEO)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="flex-shrink-0 text-brand-light" size={20} />
                <span className="text-gray-400">{companyDetails.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {companyDetails.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
