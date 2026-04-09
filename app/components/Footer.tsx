import Image from 'next/image';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#040f1a] border-t border-white/[0.05] py-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="Búhos Digital" width={28} height={28} className="rounded-sm opacity-80" />
            <span className="flex flex-col leading-none gap-0.5">
              <span className="text-sm font-semibold text-gray-400">
                <span className="text-[#ffbb00]">Búhos</span> Digital
              </span>
              <span className="text-[9px] text-gray-600 tracking-[0.15em]">by Tony Sanchez</span>
            </span>
          </div>

          {/* Nav */}
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-gray-600">
            © {year} Búhos Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
