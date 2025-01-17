'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'

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
      <section className="relative h-screen flex items-center justify-center">
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
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Internet Experts - Transforming Ideas into Digital Reality
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

      {/* Services Section */}
      <section className="py-20 bg-opacity-50 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-[#ffbb00]">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
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
    description: "Custom websites and web applications built with cutting-edge technologies."
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing solutions to boost your online presence and reach."
  },
  {
    title: "Brand Strategy",
    description: "Comprehensive brand development and digital identity solutions."
  }
];