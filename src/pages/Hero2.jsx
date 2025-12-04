'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function HeroWithCategories() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const categories = [
    { title: 'Cursos', description: 'Aprende a tu ritmo con nuestros cursos especializados.', href: '#' },
    { title: 'Opiniones', description: 'Lo que dicen nuestros alumnos y usuarios.', href: '#' },
    { title: 'Profesores', description: 'Conoce a nuestros instructores expertos.', href: '#' },
  ]

  return (
    <div className="relative min-h-[90vh] bg-black overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/public/teclado.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40" />

      

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
  

      {/* Hero content con categorías */}
      <div className=" mt-68 relative z-10 flex h-full flex-col items-center justify-center text-center px-6 sm:px-8 lg:px-12">
        <h1 className="text-4xl sm:text-5xl lg:text-xl font-bold text-white">
          
        </h1>
        <p className="text-5xl sm:text-6xl lg:text-5xl font-bold text-white">
          Accede rápido a la información que necesites
        </p>

        {/* Categorías centradas */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl w-full">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href={cat.href}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl p-6 text-left transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{cat.title}</h3>
              <p className="pd-5 text-gray-200">{cat.description}</p>
            </a>
          ))}
        </div>

        {/* CTA buttons debajo de las categorías */}
    
      </div>
    </div>
  )
}
