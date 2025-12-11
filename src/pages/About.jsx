import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Users, History, Phone, Award, Factory, Target, CheckCircle } from 'lucide-react';
import { companyDetails } from '../data/company';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - {companyDetails.name}</title>
        <meta name="description" content={`Learn about ${companyDetails.name}, our history since 2009, and our leadership team.`} />
      </Helmet>

      {/* Hero */}
      <div className="bg-brand-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Pioneering the future of digital printing and industrial machinery for over 16 years.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-10 rounded-2xl border border-blue-100">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                <Target size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-brand-dark">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {companyDetails.about.mission}
              </p>
            </div>
            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
              <div className="w-16 h-16 bg-brand-dark text-white rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Factory size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-brand-dark">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {companyDetails.about.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
               <div className="relative">
                 <div className="bg-gray-200 w-full h-96 rounded-2xl flex items-center justify-center text-gray-500 font-bold text-xl overflow-hidden shadow-2xl">
                    Company Building Image
                 </div>
                 <div className="absolute -bottom-6 -right-6 bg-brand-light text-white p-6 rounded-xl shadow-xl hidden md:block">
                   <div className="text-4xl font-bold">16+</div>
                   <div className="text-sm font-medium opacity-90">Years of Excellence</div>
                 </div>
               </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-brand-dark">Our Journey (2009 - Present)</h2>
              <div className="prose max-w-none text-gray-600 space-y-4 text-justify">
                <p>
                  <strong>{companyDetails.name}</strong> was founded in 2009 by Mr. R. Perumal. K with a singular vision: to bridge the technological gap between international digital printing standards and the local manufacturing needs of South India. In the late 2000s, the market was flooded with expensive imported machines that lacked reliable local support. Seeing the struggle of small print shop owners who faced weeks of downtime due to minor technical issues, Mr. Perumal established the company initially as a specialized service center.
                </p>
                <p>
                  The first few years were defined by relentless dedication to technical mastery. Our team spent countless hours dissecting machines, understanding the nuances of piezoelectric printheads, and mastering the electronics of large-format printers. This period of deep technical learning laid the foundation for our future. We didn't just want to sell boxes; we wanted to sell solutions that we could stand behind with absolute confidence.
                </p>
                <p>
                  By 2012, our reputation for solving complex technical problems had spread across Tamil Nadu. This trust empowered us to venture into spare parts distribution. We established direct supply chains with component manufacturers, ensuring that our clients had access to genuine parts at fair prices. This move significantly reduced the operational costs for our clients and cemented our position as a partner in their success, rather than just a vendor.
                </p>
                <p>
                  The pivotal moment came in 2015 when we officially launched our machine sales division. Leveraging our technical expertise, we carefully curated a lineup of Solvent and Eco-Solvent printers that were robust enough for Indian operating conditions yet affordable for small businesses. Unlike competitors who focused on volume, we focused on "uptime." Every machine sold was backed by a promise of 24-hour response time, a promise we have kept to this day.
                </p>
                <p>
                  As the industry evolved, so did we. In 2018, recognizing the growing demand for precision cutting in the signage and fabrication sectors, we expanded our portfolio to include Laser Cutting Systems and CNC Routers. This diversification required new expertise, and we invested heavily in training our engineers on laser optics and motion control systems. This expansion allowed us to offer a "complete workshop" solution to our clients—enabling them to print, cut, and finish products all under one roof.
                </p>
                <p>
                  The post-pandemic era brought a surge in demand for high-quality, eco-friendly printing. In 2021, we led the charge by introducing advanced UV Roll-to-Roll and Flatbed printers. These machines, capable of printing on almost any substrate with instant curing, opened new revenue streams for our customers in interior decor and customized gifting.
                </p>
                <p>
                  Today, operating from our expansive facility in Karamadai, Coimbatore, we serve over 500 active clients. Our journey from a small service team to a premier machinery supplier is a testament to our core philosophy: <strong>Technical Excellence First.</strong> We continue to innovate, recently integrating IoT-enabled diagnostics in our machines to predict maintenance needs before they become failures. As we look towards 2025 and beyond, our mission remains unchanged—empowering businesses with the best technology the world has to offer, supported by the best service in the region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-brand-dark">Milestones</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-light before:to-transparent">
            {[
              { year: '2009', title: 'Inception', desc: 'Founded as a service-focused company for digital printers.' },
              { year: '2012', title: 'Expansion', desc: 'Started spare parts distribution across South India.' },
              { year: '2015', title: 'Machine Sales', desc: 'Launched our first line of Solvent and Eco-Solvent printers.' },
              { year: '2018', title: 'Laser Technology', desc: 'Added Laser Cutting and CNC machines to our portfolio.' },
              { year: '2021', title: 'UV Revolution', desc: 'Introduced high-speed UV Roll-to-Roll and Flatbed printers.' },
              { year: '2024', title: 'New HQ', desc: 'Expanded to a larger facility in Karamadai with a dedicated demo center.' },
            ].map((item, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-brand-light group-[.is-active]:bg-brand-blue text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <History size={16} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-gray-900">{item.title}</div>
                    <time className="font-caveat font-bold text-brand-blue">{item.year}</time>
                  </div>
                  <div className="text-gray-500 text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark">Our Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guided by experienced visionaries dedicated to industry innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* MD */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100"
            >
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center text-gray-400 overflow-hidden border-4 border-white shadow-lg">
                <Users size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-1 text-gray-800">{companyDetails.md.name}</h3>
              <p className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-4">Managing Director</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over two decades of industry experience, Mr. Perumal leads the company with a focus on integrity and long-term customer relationships. His technical background ensures that quality is never compromised.
              </p>
              <a href={`tel:${companyDetails.md.phone}`} className="inline-flex items-center gap-2 text-white bg-brand-blue hover:bg-blue-700 px-6 py-2 rounded-full font-medium transition-colors">
                <Phone size={16} /> {companyDetails.md.phone}
              </a>
            </motion.div>

            {/* CEO */}
             <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100"
            >
               <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center text-gray-400 overflow-hidden border-4 border-white shadow-lg">
                <Users size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-1 text-gray-800">{companyDetails.ceo.name}</h3>
              <p className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-4">CEO</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Mr. MSVSAI drives the company's strategic growth and technological advancements. His vision has been instrumental in expanding our portfolio to include modern laser and CNC solutions.
              </p>
              <a href={`tel:${companyDetails.ceo.phone}`} className="inline-flex items-center gap-2 text-white bg-brand-blue hover:bg-blue-700 px-6 py-2 rounded-full font-medium transition-colors">
                <Phone size={16} /> {companyDetails.ceo.phone}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Factory Overview / Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-3xl font-bold mb-6 text-brand-dark">Manufacturing & Quality Standards</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  We take pride in our rigorous quality control processes. Every machine we supply undergoes a comprehensive pre-delivery inspection (PDI) at our facility.
                </p>
                <ul className="space-y-4">
                  {[
                    "ISO 9001:2015 Certified Processes",
                    "Comprehensive Pre-Delivery Inspection",
                    "Factory-Trained Engineers",
                    "Large Spare Parts Warehouse",
                    "Dedicated Demo Center"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle className="text-green-500" size={20} /> {item}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center text-gray-400 font-bold text-xl">
               Factory / Warehouse Image
             </div>
           </div>
        </div>
      </section>
    </>
  );
};

export default About;
