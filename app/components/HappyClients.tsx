import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: 'Client 1', logo: '/logos/aceable.svg' },
  { name: 'Client 2', logo: '/logos/logowhite.svg' },
  { name: 'Client 3', logo: '/logos/logodark.svg' },
  { name: 'Client 4', logo: '/logos/madventureslogo.svg' },
  { name: 'Client 6', logo: '/logos/logodark.svg' },
  { name: 'Client 7', logo: '/logos/madventureslogo.svg' },
  { name: 'Client 8', logo: '/logos/logoyummies.png' },
  { name: 'Client 9', logo: '/logos/Roatan_Excursions_logo_f6fd760bd4.svg' },
  { name: 'Client 10', logo: '/logos/turquoise_logo.svg' },
  { name: 'Client 11', logo: '/logos/logo-with-tm-108x40.2503a232.svg'},
  { name: 'Client 12', logo: '/logos/lemonaid-logo.svg'},
  { name: 'Client 13', logo: '/logos/Frame-4371.svg'},
  { name: 'Client 14', logo: '/logos/desktopLogo.svg'},
  { name: 'Client 15', logo: '/logos/cm.webp'},
  { name: 'Client 16', logo: '/logos/logoboost2.png'},
]

export default function HappyClients() {
  const [dupeCount, setDupeCount] = useState(2)

  useEffect(() => {
    // Calculate how many times we need to duplicate the list to fill the screen
    const calculateDupes = () => {
      const screenWidth = window.innerWidth
      const itemWidth = 160 + 32 // w-40 (160px) + gap-8 (32px)
      const itemsNeeded = Math.ceil((screenWidth * 2) / (itemWidth * clients.length))
      setDupeCount(Math.max(2, itemsNeeded))
    }

    calculateDupes()
    window.addEventListener('resize', calculateDupes)
    return () => window.removeEventListener('resize', calculateDupes)
  }, [])

  // Create array of duplicated clients
  const duplicatedClients = Array(dupeCount).fill(clients).flat()

  return (
    <section className="py-20 bg-[#061c2e] overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
        <span className="text-sm font-light tracking-wider text-gray-400/40 uppercase bg-gray-800/30 px-4 py-1 rounded-b-lg">
          Trusted Partners
        </span>
      </div>

      <div className="container mx-auto px-4">
        <div className="relative w-full">
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#061c2e] to-transparent z-10" />
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#061c2e] to-transparent z-10" />
          
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-8 w-fit"
              animate={{
                x: [`0%`, `-${100 / dupeCount}%`],
              }}
              transition={{
                x: {
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 w-40 h-40 flex items-center justify-center p-6 bg-gray-800/50 rounded-xl"
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={120}
                    height={120}
                    className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 