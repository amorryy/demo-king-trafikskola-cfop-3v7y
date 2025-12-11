import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import { Car, Users, Clock, Shield, Star, Check, ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Tjänster Sektion */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Våra Tjänster</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi erbjuder komplett körkortsutbildning och handledarutbildning i Stockholm
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Car className="w-12 h-12" />}
              title="Körkortsutbildning"
              description="Komplett utbildning för B-körkort med erfarna och certifierade körlärare."
            />
            
            <ServiceCard 
              icon={<Users className="w-12 h-12" />}
              title="Handledarutbildning"
              description="Introduktionsutbildning för privat övningskörning. Fredagar kl 16:00."
            />
            
            <ServiceCard 
              icon={<Clock className="w-12 h-12" />}
              title="Flexibla Tider"
              description="Vi anpassar våra lektionstider efter dina behov och schema."
            />
          </div>
        </div>
      </section>
      
      {/* Om Oss Sektion */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Varför Välja King Trafikskola?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Med många års erfarenhet hjälper vi dig att ta körkort på ett säkert och effektivt sätt. Vi finns i Stockholm och erbjuder personlig service.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">Erfarna och certifierade instruktörer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">Handledarutbildning sedan 2006</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">Flexibla tider och personlig service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">Centralt beläget i Stockholm</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-blue-600/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Car className="w-24 h-24 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Handledarutbildning Info */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Handledarutbildning</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <Clock className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <p className="text-lg text-gray-700 mb-6">
                På fredagar kl 16:00 så håller vi en Introduktionsutbildning, även kallad handledarutbildning, som sedan 2006 är ett krav för privat övningskörning.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
                <p className="text-amber-800 font-medium">
                  Viktigt: Avbokningar skall ske senast en arbetsdag innan kl 12.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Sektion */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Redo att Börja Din Körkortsutbildning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kontakta oss idag för att boka din första lektion eller handledarutbildning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              Boka Nu
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a href="tel:08-603 85 85" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              08-603 85 85
            </a>
          </div>
        </div>
      </section>
    </>
  )
}