'use client'

import { useState, Fragment } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function HeroWithVideo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative h-screen bg-black overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/public/videos1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay oscuro para contraste */}
      <div className="relative z-10" />

      {/* Header */}
     

         

        {/* Menú móvil */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white p-6">
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg">Your Company</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-gray-700">
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-gray-900 font-semibold hover:bg-gray-100"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Dialog.Panel>
        </Dialog>
    

      {/* Hero content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6 sm:px-8 lg:px-12">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
          Tecnologicamente
           siempre se puede mejorar
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl">
          Estás a un click de automatizar un click, todo depende de ti 
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold shadow hover:bg-indigo-500"
          >
            Empieza ya 
          </a>
          <a
            href="#"
            className="rounded-md border border-white px-6 py-3 text-white font-semibold hover:bg-white hover:text-black transition"
          >
            Cuéntame más
          </a>
        </div>
      </div>
    </div>
  )
}
