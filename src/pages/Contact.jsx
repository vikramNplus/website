import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock, Headphones, CheckCircle, MessageCircle } from 'lucide-react';
import { companyDetails } from '../data/company';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    machine: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate submission
      console.log('Form Submitted:', formData);
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', machine: '', message: '' });
      }, 3000);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error when user types
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: null }));
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - {companyDetails.name}</title>
        <meta name="description" content={`Contact ${companyDetails.name} for digital printing machines, laser cutters, and CNC routers. Visit our factory in Coimbatore or call us today.`} />
      </Helmet>

      {/* Hero */}
      <div className="bg-brand-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-dark/20 z-0"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to upgrade your production? Reach out to our team for expert advice and support.
          </p>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Info Column */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-brand-dark">Get in Touch</h2>
                <p className="text-gray-600 text-lg mb-8">
                  Whether you're interested in a new machine, need technical support, or want to visit our demo center, we're here to help.
                </p>
              </div>

              {/* Info Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Address */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center text-brand-blue mb-4">
                    <MapPin size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Factory Address</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {companyDetails.address.street},<br />
                    {companyDetails.address.area},<br />
                    {companyDetails.address.city} - {companyDetails.address.pincode},<br />
                    {companyDetails.address.state}
                  </p>
                </div>

                {/* Hours */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center text-green-600 mb-4">
                    <Clock size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Business Hours</h3>
                  <div className="text-gray-600 text-sm space-y-1">
                    <div className="flex justify-between">
                      <span>Mon - Fri:</span>
                      <span className="font-medium">{companyDetails.businessHours.weekdays}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">{companyDetails.businessHours.saturday}</span>
                    </div>
                    <div className="flex justify-between text-red-500">
                      <span>Sunday:</span>
                      <span className="font-medium">{companyDetails.businessHours.sunday}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Contacts */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 md:col-span-2">
                  <div className="bg-purple-50 w-12 h-12 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                    <Phone size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-4">Leadership Contacts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Managing Director</p>
                      <p className="font-bold text-gray-900">{companyDetails.md.name}</p>
                      <a href={`tel:+91${companyDetails.md.phone}`} className="text-brand-blue hover:underline font-mono">
                        +91 {companyDetails.md.phone}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">CEO</p>
                      <p className="font-bold text-gray-900">{companyDetails.ceo.name}</p>
                      <a href={`tel:+91${companyDetails.ceo.phone}`} className="text-brand-blue hover:underline font-mono">
                        +91 {companyDetails.ceo.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Support Hotline */}
                <div className="bg-brand-blue p-6 rounded-xl shadow-lg md:col-span-2 text-white relative overflow-hidden">
                  <div className="absolute right-0 top-0 opacity-10 transform translate-x-4 -translate-y-4">
                    <Headphones size={120} />
                  </div>
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                      <Headphones size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Service Hotline</h3>
                      <p className="text-blue-100 text-sm mb-1">For immediate technical support & breakdowns</p>
                      <a href={`tel:+91${companyDetails.md.phone}`} className="text-2xl font-bold font-mono hover:text-white/90 block">
                        +91 {companyDetails.md.phone}
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Contact Form Column */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100"
            >
              <h2 className="text-2xl font-bold mb-6 text-brand-dark">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-fade-in">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full text-green-600 mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for contacting us. Our team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all ${errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all ${errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}`}
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}`}
                      placeholder="john@company.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="machine" className="block text-sm font-medium text-gray-700 mb-1">Machine Interest (Optional)</label>
                    <select 
                      id="machine" 
                      value={formData.machine}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 bg-gray-50 focus:bg-white rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all text-gray-700"
                    >
                      <option value="">Select a machine...</option>
                      <option value="flex">Digital Flex Printing Machine</option>
                      <option value="uv-roll">UV Roll-to-Roll Printer</option>
                      <option value="uv-flatbed">UV Flatbed Printer</option>
                      <option value="laser">Laser Cutting Machine</option>
                      <option value="cnc">CNC Router</option>
                      <option value="spares">Spare Parts & Service</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea 
                      id="message" 
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all resize-none ${errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}`}
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-blue hover:bg-brand-dark text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-200 h-96 relative w-full grayscale hover:grayscale-0 transition-all duration-500">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium bg-gray-200">
           {/* Placeholder for iframe */}
           <div className="text-center">
             <MapPin size={48} className="mx-auto mb-2 opacity-50" />
             <p>Google Map Embed Placeholder</p>
             <p className="text-sm opacity-75">{companyDetails.address.city}, {companyDetails.address.state}</p>
           </div>
        </div>
        {/* You would replace this div with the actual iframe from Google Maps */}
        {/* <iframe src="..." width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy"></iframe> */}
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <a 
          href={`https://wa.me/91${companyDetails.md.phone}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
        <a 
          href={`tel:+91${companyDetails.md.phone}`} 
          className="bg-brand-blue hover:bg-brand-dark text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center"
          title="Call Now"
        >
          <Phone size={28} />
        </a>
      </div>
    </>
  );
};

export default Contact;
