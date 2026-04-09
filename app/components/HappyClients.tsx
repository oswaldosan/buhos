'use client';

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Client {
  name: string;
  logo: string;
  preWhite?: boolean;
}

const clients: Client[] = [
  { name: 'Roatan Ferry',      logo: '/logos/logowhite.svg',                        preWhite: true  },
  { name: 'Roatan Events',     logo: '/logos/logodark.svg'                                          },
  { name: 'Mayan Adventures',  logo: '/logos/madventureslogo.svg'                                   },
  { name: 'Roatan Excursions', logo: '/logos/Roatan_Excursions_logo_f6fd760bd4.svg'                 },
  { name: 'Turquoise Bay',     logo: '/logos/turquoise_logo.svg'                                    },
  { name: 'Turquoise Divers',  logo: '/logos/desktopLogo.svg'                                       },
  { name: 'CM Airlines',       logo: '/logos/cm.webp'                                               },
  { name: 'Lemonaid',          logo: '/logos/lemonaid-logo.svg'                                     },
  { name: 'Boost Digital',     logo: '/logos/logoboost2.png'                                        },
]

export default function HappyClients() {
  const [dupeCount, setDupeCount] = useState(2)

  useEffect(() => {
    const calculateDupes = () => {
      const screenWidth = window.innerWidth
      const itemWidth = 140 + 32
      const itemsNeeded = Math.ceil((screenWidth * 2) / (itemWidth * clients.length))
      setDupeCount(Math.max(2, itemsNeeded))
    }

    calculateDupes()
    window.addEventListener('resize', calculateDupes)
    return () => window.removeEventListener('resize', calculateDupes)
  }, [])

  const duplicatedClients = Array(dupeCount).fill(clients).flat()

  return (
    <section className="py-16 bg-[#061c2e] overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
        <span className="text-xs font-light tracking-[0.2em] text-gray-500 uppercase bg-gray-800/30 px-4 py-1 rounded-b-lg">
          Trusted Partners
        </span>
      </div>

      <div className="container mx-auto px-4">
        <div className="relative w-full">
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#061c2e] to-transparent z-10" />
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#061c2e] to-transparent z-10" />

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8 w-fit"
              animate={{ x: [`0%`, `-${100 / dupeCount}%`] }}
              transition={{ x: { duration: 40, repeat: Infinity, ease: 'linear' } }}
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 w-36 h-20 flex items-center justify-center px-5 py-4"
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={120}
                    height={48}
                    className={`w-full h-full object-contain transition-opacity duration-300 opacity-40 hover:opacity-80 ${client.preWhite ? '' : 'brightness-0 invert'}`}
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
