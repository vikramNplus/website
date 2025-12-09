import { Truck, Wrench, ShieldCheck, Cpu, Cog, GraduationCap, Headphones } from 'lucide-react';

export const services = [
  {
    id: 'installation',
    title: 'Machine Supply & Installation',
    icon: Truck,
    shortDescription: 'We supply high-quality digital printing and laser cutting machines with complete installation support at your facility.',
    description: `Our core service involves the supply and professional installation of a wide range of industrial machinery, including Digital Flex Printers, UV Printers, Laser Cutters, and CNC Routers. We understand that proper installation is the foundation of machine longevity and performance. Our team handles every aspect of the process, from unboxing to the final power-on.

    We don't just drop off the machine; we ensure it is perfectly leveled, electrically grounded, and calibrated for your specific environment. We verify that all moving parts are functioning smoothly and that the ink or laser systems are primed correctly. This meticulous setup process eliminates initial teething issues and ensures you can start production immediately.`,
    features: [
      'Site inspection and pre-installation consultation',
      'Professional transportation and handling',
      'Precision leveling and calibration during setup',
      'Initial test runs and quality verification',
      'Safety checks and electrical compliance'
    ],
    benefits: [
      'Hassle-free setup process',
      'Ensured machine warranty validity',
      'Immediate operational readiness',
      'Risk-free handling of expensive equipment'
    ]
  },
  {
    id: 'amc',
    title: 'Annual Maintenance Contract (AMC)',
    icon: ShieldCheck,
    shortDescription: 'Comprehensive maintenance plans to ensure your machinery runs smoothly year-round.',
    description: `Our Annual Maintenance Contracts (AMC) are designed to give you peace of mind. We take full responsibility for the health of your machines, providing scheduled check-ups and preventive maintenance to avoid unexpected breakdowns. Regular maintenance is key to extending the life of your expensive equipment.

    Under our AMC, our technicians visit your facility at scheduled intervals to perform a comprehensive health check. This includes cleaning optical encoders, greasing rails, checking belt tension, and flushing ink lines if necessary. We identify potential wear and tear before it becomes a failure, saving you from costly repairs and production halts.`,
    features: [
      'Scheduled quarterly/monthly visits',
      'Comprehensive cleaning and lubrication',
      'Software updates and firmware checks',
      'Priority response for breakdown calls',
      'Discounted rates on spare parts'
    ],
    benefits: [
      'Reduced downtime',
      'Extended machine lifespan',
      'Consistent print/cut quality',
      'Predictable maintenance costs'
    ]
  },
  {
    id: 'support',
    title: 'On-Site Technical Support',
    icon: Headphones,
    shortDescription: 'Dedicated on-site technical support to address any operational issues immediately.',
    description: `When production stops, every minute counts. Our team of skilled technicians is available for on-site troubleshooting and repairs. We pride ourselves on our quick response time and ability to resolve complex technical issues on the spot. We understand that downtime equals lost revenue, so we treat every support call with urgency.

    Our technicians come equipped with advanced diagnostic tools to pinpoint electronic or mechanical failures quickly. Whether it's a motherboard error, a clogged printhead, or a laser tube alignment issue, we have the expertise to fix it. We also provide a detailed report after every visit, explaining what went wrong and how to prevent it in the future.`,
    features: [
      'Rapid response time for critical issues',
      'Expert diagnosis and troubleshooting',
      'On-spot repairs for minor issues',
      'Detailed service reports',
      'Remote support assistance via video call'
    ],
    benefits: [
      'Minimized production losses',
      'Expert handling of technical glitches',
      'Guidance on avoiding future issues'
    ]
  },
  {
    id: 'spares',
    title: 'Spare Parts & Consumables Supply',
    icon: Cog,
    shortDescription: 'Genuine spare parts for all major brands of digital printers and laser machines.',
    description: `We maintain a vast inventory of genuine spare parts and consumables for various machine models. From printheads and motherboards to motors and pumps, we ensure you have access to the components you need to keep running. Using genuine parts is crucial for maintaining the print quality and reliability of your machine.

    We source our parts directly from manufacturers to guarantee authenticity and performance. In addition to critical spares, we also supply daily consumables like inks, cleaning solutions, and maintenance kits. Our logistics team ensures that parts are dispatched immediately, often reaching you within 24 hours to minimize production delays.`,
    features: [
      'Wide range of genuine parts',
      'Quick dispatch and delivery',
      'Compatibility verification',
      'Warranty on select spare parts',
      'Installation support for purchased parts'
    ],
    benefits: [
      'Guaranteed part quality',
      'Reduced waiting time for replacements',
      'Competitive pricing'
    ]
  },
  {
    id: 'calibration',
    title: 'Machine Calibration & Performance Tuning',
    icon: Wrench,
    shortDescription: 'Fine-tuning your machines for optimal precision and output quality.',
    description: `Over time, machines can drift from their optimal settings. Our calibration service restores your equipment to factory standards, ensuring precise colors in printing and accurate cuts in laser/CNC work. This is essential for businesses that demand high-fidelity output for premium clients.

    We use specialized tools to measure and adjust mechanical alignment, printhead voltage, and bidirectional timing. For printers, we also offer ICC color profiling services to ensure your prints match your screen designs perfectly. A well-calibrated machine not only produces better quality but also consumes less ink and power.`,
    features: [
      'Color profile management (ICC Profiling)',
      'Printhead alignment and voltage adjustment',
      'Laser beam alignment and focus calibration',
      'Axis motion tuning',
      'Stepper/Servo motor calibration'
    ],
    benefits: [
      'Superior output quality',
      'Reduced material wastage',
      'Consistent results across batches'
    ]
  },
  {
    id: 'integration',
    title: 'Custom Hardware Integrations',
    icon: Cpu,
    shortDescription: 'Tailored solutions to integrate new machinery into your existing workflow.',
    description: `Every business has unique needs. We help integrate new machinery with your existing production line, including custom hardware setups and software workflow configurations to maximize efficiency. Whether you need to connect multiple printers to a central RIP server or automate your finishing process, we can design a solution for you.

    Our engineers analyze your current floor plan and workflow bottlenecks to propose the best integration strategy. We can also assist in setting up custom drying systems, automated media feeders, or specialized ventilation for laser units. Our goal is to make your production line as seamless and automated as possible.`,
    features: [
      'Workflow analysis and optimization',
      'Custom interface setups',
      'Network integration for multiple machines',
      'RIP software configuration',
      'Peripheral device connection'
    ],
    benefits: [
      'Seamless production flow',
      'Increased automation',
      'Better resource utilization'
    ]
  },
  {
    id: 'training',
    title: 'Operator Training & Certification',
    icon: GraduationCap,
    shortDescription: 'Training your staff to operate machines safely and efficiently.',
    description: `A machine is only as good as its operator. We provide comprehensive training programs for your staff, covering machine operation, basic maintenance, safety protocols, and software usage. Proper training ensures that your team can handle the equipment confidently and avoid common operational errors.

    Our training modules are hands-on and conducted at your facility or our demo center. We cover topics ranging from loading media and printhead cleaning to advanced RIP software settings and color management. Upon completion, your operators will be certified, ensuring they have the skills to maintain high productivity and safety standards.`,
    features: [
      'Hands-on operational training',
      'Safety and emergency procedures',
      'Basic troubleshooting and maintenance',
      'Software and design file preparation',
      'Certificate of completion'
    ],
    benefits: [
      'Higher productivity',
      'Fewer operator errors',
      'Safer work environment',
      'Empowered workforce'
    ]
  }
];
