import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Download, Phone, CheckCircle, ArrowLeft, Settings, Info, Tag, ShieldCheck } from 'lucide-react';
import { products } from '../data/products';
import { companyDetails } from '../data/company';
import ImageCarousel from '../components/ImageCarousel';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Invalid phone number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      // Simulate API call
      setTimeout(() => {
        alert(`Thank you ${formData.name}! We have received your enquiry for ${product.name}.`);
        setFormData({ name: '', phone: '', message: '' });
        setSubmitted(false);
      }, 1000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Link to="/products" className="text-brand-blue hover:underline flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Products
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.name} - {companyDetails.name}</title>
        <meta name="description" content={product.shortDescription} />
      </Helmet>

      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb & Back */}
          <div className="mb-8 flex items-center justify-between">
            <Link to="/products" className="text-gray-600 hover:text-brand-blue flex items-center gap-2 font-medium transition-colors">
              <ArrowLeft size={20} /> Back to Products
            </Link>
            <div className="text-sm text-gray-500">
              Products / {product.category} / <span className="text-brand-dark font-semibold">{product.name}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left Column: Images */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ImageCarousel images={product.images} title={product.name} />
              
              {/* Quick Actions for Mobile (visible below image on small screens) */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6 lg:hidden">
                <a href="#enquire" className="flex-1 bg-brand-blue text-white py-3 rounded-lg font-bold text-center">Enquire Now</a>
                <button className="flex-1 bg-white border border-brand-blue text-brand-blue py-3 rounded-lg font-bold flex items-center justify-center gap-2">
                  <Download size={20} /> Brochure
                </button>
              </div>
            </motion.div>

            {/* Right Column: Key Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                <div className="inline-block px-3 py-1 bg-blue-100 text-brand-blue rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                  {product.category}
                </div>
                <h1 className="text-3xl font-bold text-brand-dark mb-4">{product.name}</h1>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {product.shortDescription}
                </p>

                <div className="mb-8">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <CheckCircle size={20} className="text-brand-blue" /> Key Highlights
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.features.slice(0, 6).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-1.5 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="hidden lg:flex flex-col gap-4">
                  <a href="#enquire" className="w-full bg-brand-blue hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg text-center transition-colors shadow-lg shadow-blue-200">
                    Get Best Price & Quote
                  </a>
                  <div className="flex gap-4">
                    <button className="flex-1 bg-white border-2 border-gray-200 hover:border-brand-blue text-gray-700 hover:text-brand-blue py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all">
                      <Download size={20} /> Download Brochure
                    </button>
                    <a href={`tel:${companyDetails.md.phone}`} className="flex-1 bg-green-50 border-2 border-green-100 hover:border-green-500 text-green-700 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all">
                      <Phone size={20} /> Call Expert
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Detailed Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Description */}
              <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-brand-dark">
                  <Info className="text-brand-blue" /> Product Overview
                </h2>
                <div className="prose max-w-none text-gray-600 whitespace-pre-line leading-relaxed">
                  {product.longDescription}
                </div>
              </section>

              {/* Technical Specifications */}
              {product.specifications && (
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-brand-dark">
                    <Settings className="text-brand-blue" /> Technical Specifications
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <tbody>
                        {product.specifications.map((spec, idx) => (
                          <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                            <td className="py-4 px-4 font-semibold text-gray-700 w-1/3">{spec.label}</td>
                            <td className="py-4 px-4 text-gray-600">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {/* Features List (Full) */}
              <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-brand-dark">
                  <CheckCircle className="text-brand-blue" /> Features & Benefits
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-800 mb-4 border-b pb-2">Features</h3>
                    <ul className="space-y-3">
                      {product.features.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600">
                          <CheckCircle size={18} className="text-green-500 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-4 border-b pb-2">Benefits</h3>
                    <ul className="space-y-3">
                      {product.benefits.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600">
                          <CheckCircle size={18} className="text-brand-blue mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar: Applications & Contact */}
            <div className="space-y-8">
              {/* Applications */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <Tag className="text-brand-blue" /> Applications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Warranty & Support */}
              <div className="bg-green-50 p-6 rounded-2xl shadow-sm border border-green-100">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-green-800">
                  <ShieldCheck className="text-green-600" /> Warranty & Support
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>1 Year Comprehensive Warranty</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>2 Free Preventive Maintenance Visits</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Unlimited Phone & Remote Support</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>On-site Service within 24-48 Hours</span>
                  </li>
                </ul>
              </div>

              {/* Enquiry Form (Simplified) */}
              <div id="enquire" className="bg-brand-dark text-white p-8 rounded-2xl shadow-lg">
                <h3 className="font-bold text-xl mb-2">Interested in this product?</h3>
                <p className="text-gray-300 text-sm mb-6">Fill out the form below and our technical team will get back to you with a quote.</p>
                
                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                  <div>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name *" 
                      className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${errors.name ? 'border-red-500' : 'border-white/20'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-light transition-colors`} 
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number *" 
                      className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${errors.phone ? 'border-red-500' : 'border-white/20'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-light transition-colors`} 
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  
                  <div>
                    <textarea 
                      rows={3} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message / Requirements" 
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-light resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={submitted}
                    className="w-full bg-brand-light hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitted ? 'Sending...' : 'Send Enquiry'}
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-white/10 text-center">
                  <p className="text-sm text-gray-400 mb-2">Or call us directly:</p>
                  <a href={`tel:${companyDetails.md.phone}`} className="text-xl font-bold text-white hover:text-brand-light transition-colors block">
                    {companyDetails.md.phone}
                  </a>
                  <div className="text-xs text-gray-500 mt-1">Mr.Esakkiraj. K (MD)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
