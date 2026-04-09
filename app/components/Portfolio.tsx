'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

type Category = 'Web' | 'Mobile' | 'SaaS' | 'Web App' | 'Web Platform';

interface Project {
  name: string;
  description: string;
  category: Category;
  url: string;
  logo?: string;
  logoText?: string;
  preWhite?: boolean; // logo is already white — skip brightness-0 invert
}

const categoryColors: Record<Category, string> = {
  'Web': 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  'Mobile': 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  'SaaS': 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  'Web App': 'bg-orange-500/10 text-orange-300 border-orange-500/20',
  'Web Platform': 'bg-[#ffbb00]/10 text-[#ffbb00] border-[#ffbb00]/20',
};

const projects: Project[] = [
  {
    name: 'Mayan Princess Resort',
    description: 'Full website for an all-inclusive Caribbean beach resort in Roatan, Honduras.',
    category: 'Web',
    url: 'https://mayanprincess.com',
    logo: '/logos/mayanlogo.webp',
  },
  {
    name: 'Turquoise Bay Resort',
    description: "Dive resort website with booking system for Roatan's premier East Side property.",
    category: 'Web',
    url: 'https://www.turquoisebayresort.com',
    logo: '/logos/turquoise_logo.svg',
  },
  {
    name: 'Turquoise Divers',
    description: 'PADI 5-Star IDC dive center website with packages, courses, and island excursions.',
    category: 'Web',
    url: 'https://www.turquoisedivers.com',
    logo: '/logos/desktopLogo.svg',
  },
  {
    name: 'Roatan Ferry',
    description: 'Corporate site and ticketing platform for the #1 passenger ferry in Central America.',
    category: 'Web Platform',
    url: 'https://www.roatanferry.com',
    logo: '/logos/logowhite.svg',
    preWhite: true,
  },
  {
    name: 'Galaxy Wave OBE',
    description: 'Online booking engine for ferry routes between La Ceiba, Roatan, Utila & Guanaja.',
    category: 'Web App',
    url: 'https://obe.roatanferry.com',
    logo: '/logos/logowhite.svg',
    preWhite: true,
  },
  {
    name: 'Galaxy Wave App',
    description: 'Official mobile app for ferry ticketing — digital tickets, schedules & notifications.',
    category: 'Mobile',
    url: 'https://apps.apple.com/us/app/galaxy-wave-app/id6746731402',
    logo: '/logos/logowhite.svg',
    preWhite: true,
  },
  {
    name: 'Roatan Excursions',
    description: 'Tours & activities platform for cruise passengers and island adventurers in Roatan.',
    category: 'Web',
    url: 'https://www.roatanexcursions.com',
    logo: '/logos/Roatan_Excursions_logo_f6fd760bd4.svg',
  },
  {
    name: 'Mayan Adventures',
    description: 'Handcrafted shore excursions and island tour booking site for Roatan visitors.',
    category: 'Web',
    url: 'https://mayanadventures.com',
    logo: '/logos/madventureslogo.svg',
  },
  {
    name: 'Roatan Events',
    description: 'Luxury destination wedding planning platform operating in the Caribbean since 2013.',
    category: 'Web',
    url: 'https://www.roatanevents.com',
    logo: '/logos/logodark.svg',
  },
  {
    name: 'CM Airlines',
    description: 'Airline website with flight search, booking engine, and StarMiles loyalty program for Central America.',
    category: 'Web Platform',
    url: 'https://www.cmairlines.com',
    logo: '/logos/cm.webp',
  },
  {
    name: 'Kit2Pay',
    description: 'Invoice & quote management SaaS for events and rental businesses — multi-role platform.',
    category: 'SaaS',
    url: 'https://kit2pay.com',
    logoText: 'KIT2PAY',
  },
  {
    name: 'La Diaria Loto',
    description: 'Web app for Honduras lottery participation with QR-based registration and trivia system.',
    category: 'Web App',
    url: 'https://boostdigitalhn.com/diariaqr/',
    logo: '/logos/logoboost2.png',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#061c2e]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-[#ffbb00] uppercase mb-4 block">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Selected <span className="text-[#ffbb00]">Projects</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            A snapshot of digital products we&apos;ve designed, built, and shipped for clients across the Caribbean.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              className="group relative flex flex-col bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top row: logo + arrow */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-36 h-10 flex items-center">
                  {project.logo ? (
                    <Image
                      src={project.logo}
                      alt={`${project.name} logo`}
                      width={144}
                      height={40}
                      className={`w-full h-full object-contain object-left opacity-60 group-hover:opacity-100 transition-opacity duration-300 ${project.preWhite ? '' : 'brightness-0 invert'}`}
                    />
                  ) : (
                    <span className="text-[11px] font-black text-white/50 tracking-[0.15em] leading-tight group-hover:text-white/90 transition-colors duration-300 whitespace-pre-line">
                      {project.logoText}
                    </span>
                  )}
                </div>
                <span className="text-gray-600 group-hover:text-[#ffbb00] transition-colors duration-200 flex-shrink-0 ml-2">
                  <ArrowUpRight size={18} />
                </span>
              </div>

              {/* Category badge */}
              <span className={`inline-flex w-fit text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border mb-3 ${categoryColors[project.category]}`}>
                {project.category}
              </span>

              {/* Name */}
              <h3 className="text-white font-semibold text-base mb-2 leading-snug">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mt-auto">
                {project.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
