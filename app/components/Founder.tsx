'use client';

import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';

const stack = ['Next.js', 'React', 'TypeScript', 'Node.js', 'Laravel', 'React Native', 'Docker', 'AWS'];

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={15} height={15}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={15} height={15}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={15} height={15}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Founder() {
  return (
    <section id="founder" className="py-24 bg-[#061c2e]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-[#ffbb00] uppercase mb-4 block">
            The Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Meet the <span className="text-[#ffbb00]">Founder</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">

            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-[#ffbb00]/10 border border-[#ffbb00]/20 flex items-center justify-center">
                <span className="text-2xl font-black text-[#ffbb00] tracking-tight">OS</span>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-1">
                <div>
                  <h3 className="text-white text-xl font-bold">Oswaldo Antonio Sanchez L. <span className="text-gray-500 font-normal text-base">(AKA Tony)</span></h3>
                  <p className="text-[#ffbb00]/80 text-sm font-medium mt-0.5">Founder &amp; Full Stack Developer</p>
                </div>
                {/* Social links */}
                <div className="flex gap-2">
                  {[
                    { Icon: LinkedinIcon, href: 'https://www.linkedin.com/in/oswaldosan92/', label: 'LinkedIn' },
                    { Icon: GithubIcon, href: 'https://github.com/oswaldosan', label: 'GitHub' },
                    { Icon: TwitterIcon, href: 'https://x.com/_tonyloops', label: 'X / Twitter' },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-gray-400 hover:text-[#ffbb00] hover:border-[#ffbb00]/30 hover:bg-[#ffbb00]/5 transition-all duration-200"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-5 mt-2">
                <MapPin size={12} />
                <span>San Pedro Sula, Honduras — working globally</span>
              </div>

              {/* Bio */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Full stack developer with deep experience across JavaScript, TypeScript, and PHP ecosystems.
                I&apos;ve built and shipped production software for resorts, airlines, ferry systems, SaaS platforms,
                and more — always focused on clean code, real results, and systems that last.
              </p>

              {/* Stack */}
              <div>
                <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Core Stack</p>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] text-gray-400 border border-white/[0.08] bg-white/[0.03] px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <a
                  href="https://www.linkedin.com/in/oswaldosan92/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-[#ffbb00] transition-colors duration-200"
                >
                  <ExternalLink size={12} />
                  View full profile on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
