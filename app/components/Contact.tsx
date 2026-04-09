'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, MapPin, Send } from 'lucide-react';

const FORM_EMAIL = 'hello@buhosdigital.com'; // Replace with your real email

const contactInfo = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+504 3336-3789',
    href: 'https://wa.me/50433363789',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@buhosdigital.com',
    href: `mailto:${FORM_EMAIL}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Honduras, Central America',
    href: null,
  },
];

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const socialLinks = [
  { Icon: InstagramIcon, href: 'https://instagram.com/buhosdigital', label: 'Instagram' },
  { Icon: LinkedinIcon, href: 'https://linkedin.com/company/buhosdigital', label: 'LinkedIn' },
  { Icon: GithubIcon, href: 'https://github.com/buhosdigital', label: 'GitHub' },
];

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New message from ${form.name} — Búhos Digital`,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#040f1a] relative overflow-hidden">
      {/* subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ffbb00]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-[#ffbb00] uppercase mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let&apos;s Build Something <span className="text-[#ffbb00]">Together</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto text-base leading-relaxed">
            Have a project in mind? We&apos;re ready to help you take it from idea to launch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-5">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#ffbb00]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#ffbb00]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">{item.label}</p>
                      <p className="text-white text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group hover:opacity-80 transition-opacity"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* Divider */}
            <div className="border-t border-white/5" />

            {/* Social links */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((s) => {
                  const { Icon } = s;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-gray-400 hover:text-[#ffbb00] hover:border-[#ffbb00]/30 hover:bg-[#ffbb00]/5 transition-all duration-200"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs text-gray-400 tracking-wide">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ffbb00]/40 focus:bg-white/[0.06] transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs text-gray-400 tracking-wide">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ffbb00]/40 focus:bg-white/[0.06] transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs text-gray-400 tracking-wide">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ffbb00]/40 focus:bg-white/[0.06] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="flex items-center justify-center gap-2 bg-[#ffbb00] hover:bg-[#ffd050] disabled:opacity-60 text-[#061c2e] font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 self-start"
            >
              {status === 'sending' ? (
                <>
                  <span className="w-4 h-4 border-2 border-[#061c2e]/30 border-t-[#061c2e] rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={15} />
                  Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="text-emerald-400 text-sm mt-1">
                Message sent! We&apos;ll get back to you shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm mt-1">
                Something went wrong. Please try again or reach us on WhatsApp.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
