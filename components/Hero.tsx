import { ArrowRight, Car, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ta Körkort med
              <span className="block text-amber-400">King Trafikskola</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Professionell körkortsutbildning och handledarutbildning i Stockholm. Vi hjälper dig att bli en säker förare.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                href="/kontakt" 
                className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-8 py-4 rounded-full font-semibold transition-colors inline-flex items-center justify-center text-lg"
              >
                Boka Lektion
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <a 
                href="tel:08-603 85 85" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-full font-semibold transition-colors inline-flex items-center justify-center text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                08-603 85 85
              </a>
            </div>
            
            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span>Erfarna instruktörer</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span>Flexibla tider</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span>Handledarutbildning</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Car illustration */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <Car className="w-48 h-48 mx-auto text-amber-400" />
              
              {/* Feature badges */}
              <div className="absolute -top-4 -right-4 bg-amber-500 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                Sedan 2006
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                Handledarutbildning
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA för handledarutbildning */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Handledarutbildning</h3>
            <p className="text-blue-100 mb-4">
              Introduktionsutbildning för privat övningskörning - ett krav sedan 2006
            </p>
            <p className="text-amber-400 font-semibold text-lg">
              Fredagar kl 16:00
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}