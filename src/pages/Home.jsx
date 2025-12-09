import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, PenTool, Printer, Settings, Award, Users, ChevronRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyDetails } from '../data/company';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>Home - {companyDetails.name}</title>
        <meta name="description" content={`Leading provider of Digital Printing Machines, Laser Cutting Systems, and CNC Routers in South India. Trusted by ${companyDetails.experience}+ years of experience.`} />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-blue to-blue-900 text-white min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        {/* Animated Shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12 transform origin-top-right"></div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-brand-light font-bold mb-8 border border-white/20">
                <Award size={18} /> Serving {companyDetails.experience}+ Years in Digital Technology
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                Empowering Your Business with <span className="text-brand-light">Advanced Printing</span> & Laser Solutions
              </h1>
              <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-xl">
                We supply high-performance Digital Flex Printers, Laser Cutters, and CNC machines. Experience unmatched quality, speed, and reliability with our industrial-grade machinery and expert support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="bg-brand-light hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
                  Explore Products <ArrowRight size={20} />
                </Link>
                <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-brand-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center">
                  Get Instant Quote
                </Link>
              </div>
              
              <div className="mt-12 flex items-center gap-8 text-sm text-gray-300 font-medium">
                 <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> 24/7 Support</div>
                 <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> Genuine Spares</div>
                 <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> Free Installation</div>
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="lg:w-1/2 relative"
            >
               {/* Hero Image Placeholder */}
               <div className="relative z-10 bg-gradient-to-tr from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-4 border border-gray-700">
                  <div className="aspect-video bg-gray-700 rounded-xl overflow-hidden relative group">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold text-lg">
                       Hero Machine Image
                    </div>
                  </div>
               </div>
               {/* Decorative elements */}
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-light/20 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
           <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8">Welcome to {companyDetails.name}</h2>
           <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-justify">
            <p>
              Established in 2009, <strong>{companyDetails.name}</strong> has grown to become a cornerstone in the digital printing and industrial machinery sector in South India. With over 16 years of dedicated service, we have successfully installed hundreds of machines across Tamil Nadu and neighboring states, earning a reputation for reliability and trust.
            </p>
            <p>
              Our mission is simple: to provide businesses with technology that drives growth. Whether you are a startup looking for your first flex printing machine or an established factory needing a high-precision laser cutter, we have the right solution for you. We partner with top global manufacturers to bring you machines that offer the best balance of performance, durability, and cost-effectiveness.
            </p>
            <p>
              We pride ourselves on our deep technical expertise. Unlike box-movers, we understand the intricacies of every machine we sell. Our team of factory-trained engineers undergoes regular training to stay updated with the latest advancements in printhead technology, motion control systems, and laser optics. This ensures that when you buy from us, you are buying from experts who can help you extract the maximum value from your investment.
            </p>
            <p>
              In an industry where technology evolves rapidly, staying ahead is crucial. We continuously monitor global trends to bring the latest innovations to our local market. From UV LED curing systems that save energy to high-speed digital textile printers that open new market avenues, we ensure our clients have access to cutting-edge tools that give them a competitive advantage.
            </p>
            <p>
              Quality assurance is at the core of our operations. Every machine, whether it's a large format solvent printer or a precision CNC router, undergoes a rigorous pre-delivery inspection. We verify mechanical stability, electronic integrity, and output quality before it reaches your floor. This meticulous process minimizes installation time and ensures your production starts without hiccups.
            </p>
            <p>
              Beyond sales, we are known for our exceptional after-sales support. We understand that machine downtime is lost revenue. That’s why our support network is designed for rapid response. We maintain a comprehensive inventory of spare parts—from printheads and motherboards to pumps and filters—ensuring that replacements are always just a phone call away.
            </p>
            <p>
              We view our relationship with our clients as a long-term partnership. We don't just sell you a machine; we help you build a business. Our consultancy services include workflow optimization, color management profiling, and operator training, empowering your team to deliver professional results consistently.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Our Advantage</span>
             <h2 className="text-3xl md:text-4xl font-bold mt-2 text-brand-dark">Why Industry Leaders Choose Us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "16+ Years Experience", desc: "Deep industry knowledge and technical expertise you can rely on.", icon: Award },
              { title: "Premium Quality", desc: "Machines built with industrial-grade components for long-lasting performance.", icon: Star },
              { title: "Expert Support Team", desc: "Factory-trained technicians available for on-site installation and repairs.", icon: Users },
              { title: "Complete Spares Inventory", desc: "We stock all essential spare parts to minimize your downtime.", icon: Settings },
              { title: "Training & Certification", desc: "We train your staff to operate machines efficiently and safely.", icon: CheckCircle },
              { title: "Best Price Guarantee", desc: "Competitive pricing without compromising on quality or service.", icon: Star },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-brand-blue mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Products Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Our Solutions</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-brand-dark">Featured Machinery</h2>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-2 text-brand-blue font-bold hover:underline">
              View All Products <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link to={`/products/${product.id}`} key={product.id} className="group">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                     {/* Placeholder Image */}
                     <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                        {product.name} Image
                     </div>
                     <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-xs font-bold text-brand-blue uppercase mb-2">{product.category}</div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-brand-blue transition-colors line-clamp-2">{product.name}</h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">{product.shortDescription}</p>
                    <div className="flex items-center text-brand-blue font-semibold text-sm">
                      View Details <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/products" className="inline-flex items-center gap-2 text-brand-blue font-bold hover:underline">
              View All Products <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our versatile machinery powers businesses across various sectors.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
             {[
               { name: "Signage & Print Shops", icon: Printer },
               { name: "Fabrication", icon: Settings },
               { name: "Furniture Making", icon: PenTool },
               { name: "Textile & Garment", icon: Award }, // Using generic icon
               { name: "Packaging", icon: Star }, // Using generic icon
               { name: "Interior Decor", icon: CheckCircle }, // Using generic icon
             ].map((industry, idx) => (
               <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl text-center hover:bg-white/10 transition-colors">
                 <div className="mb-4 flex justify-center text-brand-light">
                   <industry.icon size={32} />
                 </div>
                 <h3 className="font-semibold text-sm md:text-base">{industry.name}</h3>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
             <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Testimonials</span>
             <h2 className="text-3xl md:text-4xl font-bold mt-2 text-brand-dark">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyDetails.testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 relative">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 text-sm mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-xs text-brand-blue font-medium">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to upgrade your production?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Get in touch with us today for a free consultation and quote. Let's find the perfect machine for your business.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-brand-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Contact Us Now
            </Link>
            <a href={`tel:${companyDetails.md.phone}`} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Phone size={20} /> Call {companyDetails.md.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
