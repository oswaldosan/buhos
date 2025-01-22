'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import HappyClients from './components/HappyClients';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const phoneNumber = "50433363789"
  const whatsappUrl = `https://wa.me/${phoneNumber}`

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-[#061c2e] text-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Image
              src="/logo.png"
              alt="Búhos Digital Logo"
              width={200}
              height={200}
              className="mx-auto"
            />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-[#ffbb00]">Búhos</span> Digital
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-8">
            <span className="text-[#ffbb00] font-normal">Internet Experts</span> —{" "}
            <span className="italic">Transforming Ideas</span>{" "}
            <motion.span 
              className="relative inline-block"
              initial={{ backgroundSize: "0 2px" }}
              animate={{ backgroundSize: "100% 2px" }}
              transition={{ delay: 1, duration: 0.8 }}
              style={{
                backgroundImage: "linear-gradient(to right, rgba(255, 187, 0, 0.3), rgba(255, 187, 0, 0.3))",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0 100%"
              }}
            >
              into
            </motion.span>{" "}
            <span className="font-semibold">Digital Reality</span>
          </p>
          
          <p className="max-w-2xl mx-auto text-gray-400 mb-12 leading-relaxed">
            From concept to deployment, we craft cutting-edge digital solutions 
            that empower businesses to thrive in the modern tech landscape. 
            Our expertise spans across the full spectrum of digital transformation.
          </p>

          <Link
            href={whatsappUrl}
            className="bg-[#ffbb00] text-[#061c2e] px-8 py-3 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </Link>
        </motion.div>
     

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {/* Add some geometric patterns here */}
            <div className="absolute top-20 left-20 w-40 h-40 border-2 border-[#ffbb00] rounded-full" />
            <div className="absolute bottom-40 right-20 w-60 h-60 border-2 border-[#ffbb00] rounded-full" />
          </motion.div>
        </div>
      </section>

      <HappyClients />

      {/* Services Section */}
      <section className="py-20 bg-opacity-50 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-[#ffbb00]">Technical Solutions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg bg-white bg-opacity-5 hover:bg-opacity-10 transition-all"
              >
                <h3 className="text-[#ffbb00] text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    title: "Web Development",
    description: "Full-stack web applications built with Next.js, React, Node.js, and modern cloud infrastructure."
  },
  {
    title: "DevOps & Infrastructure",
    description: "Cloud architecture, CI/CD pipelines, containerization with Docker, and Kubernetes orchestration."
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications using React Native and Flutter."
  },
  {
    title: "Technical SEO",
    description: "Performance optimization, core web vitals improvement, and search engine optimization for technical platforms."
  },
  {
    title: "Cloud Solutions",
    description: "AWS, Azure, and GCP infrastructure design, implementation, and management with scalability focus."
  },
  {
    title: "System Architecture",
    description: "Microservices design, distributed systems, and enterprise-level software architecture solutions."
  }
];