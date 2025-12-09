import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { services } from '../data/services';
import { companyDetails } from '../data/company';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - {companyDetails.name}</title>
        <meta name="description" content="Comprehensive services including Machine Supply, Installation, AMC, On-site Support, and Spare Parts Supply." />
      </Helmet>

      {/* Hero */}
      <div className="bg-brand-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We don't just sell machines; we provide end-to-end solutions to ensure your business success.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Icon/Image Section */}
                  <div className="lg:w-1/3 bg-blue-50 p-10 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-gray-100">
                    <div className="w-24 h-24 bg-brand-blue rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-200">
                      <service.icon size={48} />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-2">{service.title}</h3>
                    <p className="text-gray-500 text-sm">{service.shortDescription}</p>
                  </div>
                  
                  {/* Content Section */}
                  <div className="lg:w-2/3 p-10">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">Overview</h4>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <span className="w-2 h-8 bg-brand-blue rounded-full"></span> Key Features
                        </h5>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                              <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <span className="w-2 h-8 bg-green-500 rounded-full"></span> Benefits
                        </h5>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                              <CheckCircle size={16} className="text-brand-blue mt-1 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
