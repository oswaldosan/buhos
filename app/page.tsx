'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Globe, Server, Smartphone, Search, Cloud, Cpu } from 'lucide-react';
import HappyClients from './components/HappyClients';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Full-stack web applications built with Next.js, React, Node.js, and modern cloud infrastructure.',
  },
  {
    icon: Server,
    title: 'DevOps & Infrastructure',
    description: 'Cloud architecture, CI/CD pipelines, containerization with Docker, and Kubernetes orchestration.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications using React Native and Flutter.',
  },
  {
    icon: Search,
    title: 'Technical SEO',
    description: 'Performance optimization, core web vitals improvement, and search engine optimization for technical platforms.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'AWS, Azure, and GCP infrastructure design, implementation, and management with scalability focus.',
  },
  {
    icon: Cpu,
    title: 'System Architecture',
    description: 'Microservices design, distributed systems, and enterprise-level software architecture solutions.',
  },
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const phoneNumber = '50433363789';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#061c2e] text-white">
        {/* ── Hero ── */}
        <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
          {/* Dot-grid background */}
          <div
            className="absolute inset-0 z-0 opacity-[0.12]"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffbb00 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />

          {/* ── Animated background elements ── */}
          <div className="absolute inset-0 z-0 pointer-events-none">

            {/* Large slow-rotating ring — top left */}
            <motion.div
              className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full border border-[#ffbb00]/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />
            {/* Inner dashed ring — top left */}
            <motion.div
              className="absolute top-0 left-0 w-[320px] h-[320px] rounded-full border border-dashed border-[#ffbb00]/8"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />

            {/* Large slow-rotating ring — bottom right */}
            <motion.div
              className="absolute -bottom-32 -right-32 w-[560px] h-[560px] rounded-full border border-[#ffbb00]/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
            />
            {/* Inner dashed ring — bottom right */}
            <motion.div
              className="absolute -bottom-8 -right-8 w-[360px] h-[360px] rounded-full border border-dashed border-[#ffbb00]/8"
              animate={{ rotate: 360 }}
              transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
            />

            {/* Medium ring — center right, floating */}
            <motion.div
              className="absolute top-1/3 right-[8%] w-[200px] h-[200px] rounded-full border border-[#ffbb00]/12"
              animate={{ y: [0, -28, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Small ring — center left, floating */}
            <motion.div
              className="absolute top-1/2 left-[6%] w-[120px] h-[120px] rounded-full border border-[#ffbb00]/15"
              animate={{ y: [0, 22, 0], rotate: [0, -180, -360] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Tiny ring — upper right */}
            <motion.div
              className="absolute top-[12%] right-[18%] w-[60px] h-[60px] rounded-full border border-[#ffbb00]/20"
              animate={{ y: [0, -14, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Tiny ring — lower left */}
            <motion.div
              className="absolute bottom-[20%] left-[14%] w-[48px] h-[48px] rounded-full border border-[#ffbb00]/15"
              animate={{ y: [0, 12, 0], scale: [1, 0.9, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />

            {/* Glowing orb — top center */}
            <motion.div
              className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[300px] h-[120px] rounded-full bg-[#ffbb00]/6 blur-3xl"
              animate={{ opacity: [0.4, 1, 0.4], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Glowing orb — bottom left */}
            <motion.div
              className="absolute bottom-[15%] left-[10%] w-[200px] h-[200px] rounded-full bg-[#ffbb00]/5 blur-3xl"
              animate={{ opacity: [0.3, 0.8, 0.3], x: [0, 20, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />

            {/* Glowing orb — right center */}
            <motion.div
              className="absolute top-[40%] right-[5%] w-[180px] h-[180px] rounded-full bg-[#ffbb00]/5 blur-2xl"
              animate={{ opacity: [0.2, 0.7, 0.2], x: [0, -16, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />

            {/* Floating small dots */}
            {[
              { top: '20%', left: '22%', delay: 0 },
              { top: '60%', left: '80%', delay: 1.5 },
              { top: '75%', left: '35%', delay: 0.8 },
              { top: '30%', left: '70%', delay: 2.2 },
              { top: '85%', left: '60%', delay: 0.4 },
              { top: '15%', left: '55%', delay: 3 },
            ].map((dot, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-[#ffbb00]/40"
                style={{ top: dot.top, left: dot.left }}
                animate={{ y: [0, -12, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: dot.delay }}
              />
            ))}

            {/* Diagonal line accent — top right */}
            <motion.div
              className="absolute top-[18%] right-[22%] w-[80px] h-px bg-gradient-to-r from-transparent via-[#ffbb00]/25 to-transparent"
              animate={{ scaleX: [0.5, 1.5, 0.5], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Diagonal line accent — bottom left */}
            <motion.div
              className="absolute bottom-[30%] left-[20%] w-[60px] h-px bg-gradient-to-r from-transparent via-[#ffbb00]/20 to-transparent"
              animate={{ scaleX: [0.5, 1.5, 0.5], opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            />
          </div>

          {/* Radial fade overlay to give depth */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_30%,#061c2e_100%)]" />
          {/* Bottom fade into next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 z-0 bg-gradient-to-t from-[#061c2e] to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 28 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="container mx-auto px-4 sm:px-6 text-center relative z-10 pt-24 pb-16"
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.75, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <Image
                src="/logo.png"
                alt="Búhos Digital Logo"
                width={90}
                height={90}
                className="mx-auto"
              />
            </motion.div>

            {/* Eyebrow label */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block text-xs font-semibold tracking-[0.25em] text-[#ffbb00] uppercase mb-5"
            >
              Internet Experts
            </motion.span>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
              <span className="text-[#ffbb00]">Búhos</span> Digital
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-gray-300 font-light mb-6 max-w-xl mx-auto leading-relaxed">
              Transforming Ideas into{' '}
              <span className="text-white font-semibold">Digital Reality</span>
            </p>

            <p className="max-w-2xl mx-auto text-gray-500 mb-12 leading-relaxed text-sm md:text-base">
              From concept to deployment, we craft cutting-edge digital solutions that empower
              businesses to thrive in the modern tech landscape. Full-spectrum digital transformation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-[#ffbb00] text-[#061c2e] px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#ffd050] transition-all duration-300 shadow-lg shadow-[#ffbb00]/20"
              >
                Get Started — WhatsApp
              </Link>
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm text-gray-400 hover:text-white transition-colors underline underline-offset-4"
              >
                See our work
              </a>
            </div>
          </motion.div>
        </section>

        {/* ── Trusted Partners ── */}
        <HappyClients />

        {/* ── Services ── */}
        <section id="services" className="py-24 bg-[#061c2e]">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-xs font-semibold tracking-[0.2em] text-[#ffbb00] uppercase mb-4 block">
                What We Do
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">
                Technical <span className="text-[#ffbb00]">Solutions</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.06] hover:border-[#ffbb00]/20 hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Left accent bar */}
                    <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-[#ffbb00]/30 rounded-full group-hover:bg-[#ffbb00]/70 transition-colors duration-300" />

                    <div className="pl-4">
                      <div className="w-10 h-10 rounded-xl bg-[#ffbb00]/10 flex items-center justify-center mb-4 group-hover:bg-[#ffbb00]/20 transition-colors duration-300">
                        <Icon size={18} className="text-[#ffbb00]" />
                      </div>
                      <h3 className="text-white font-semibold text-base mb-2">{service.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Portfolio ── */}
        <Portfolio />

        {/* ── Contact ── */}
        <Contact />

        {/* ── Footer ── */}
        <Footer />
      </main>
    </>
  );
}
