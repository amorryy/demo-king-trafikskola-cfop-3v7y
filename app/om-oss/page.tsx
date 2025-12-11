import { Car, Users, Clock, Shield, Star, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function OmOss() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Om King Trafikskola</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Din pålitliga partner för körkortsutbildning i Stockholm sedan många år
          </p>
        </div>
      </section>
      
      {/* Vår Historia */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Vår Historia</h2>
              <p className="text-lg text-gray-600 mb-6">
                King Trafikskola har varit en etablerad del av Stockholms körkortsutbildning i många år. Vi har hjälpt tusentals elever att ta körkort på ett säkert och effektivt sätt.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Sedan 2006 har vi erbjudit handledarutbildning, även kallad introduktionsutbildning, som är ett krav för privat övningskörning. Vår erfarenhet och kunskap gör oss till ett pålitligt val för din körkortsutbildning.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2006</div>
                  <div className="text-gray-700">Handledarutbildning sedan</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-gray-700">Nöjda elever</div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-blue-600/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Car className="w-32 h-32 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Våra Värderingar */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Våra Värderingar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi tror på säker körning, personlig service och flexibilitet
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Säkerhet Först</h3>
              <p className="text-gray-600">
                Trafiksäkerhet är vår högsta prioritet. Vi lär ut defensiv körning och ansvarsfull trafikbeteende.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personlig Service</h3>
              <p className="text-gray-600">
                Varje elev är unik. Vi anpassar vår undervisning efter dina individuella behov och inlärningsstil.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Clock className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexibilitet</h3>
              <p className="text-gray-600">
                Vi förstår att alla har olika scheman. Därför erbjuder vi flexibla tider som passar dig.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vårt Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vårt Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Erfarna och certifierade körlärarare som brinner för trafikundervisning
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professionella Instruktörer</h3>
              <p className="text-lg text-gray-600 mb-6">
                Alla våra körlärare är certifierade av Transportstyrelsen och har mångårig erfarenhet av körkortsutbildning. De håller sig uppdaterade med de senaste metoderna och regelverken.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="flex items-center justify-center space-x-2">
                  <Star className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Certifierade</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Star className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Erfarna</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Star className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Pedagogiska</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vårt Löfte */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Vårt Löfte Till Dig</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Vi lovar att ge dig den bästa möjliga körkortsutbildningen med fokus på säkerhet, kvalitet och personlig service.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="flex items-start space-x-4">
              <div className="bg-white/20 rounded-full p-2 mt-1">
                <Shield className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2">Trygg Utbildning</h3>
                <p className="text-blue-100">Säker miljö och erfarna instruktörer som guidar dig genom hela processen.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-white/20 rounded-full p-2 mt-1">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2">Effektiv Process</h3>
                <p className="text-blue-100">Strukturerad utbildning som tar dig från nybörjare till säker förare.</p>
              </div>
            </div>
          </div>
          
          <Link href="/kontakt" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block">
            Kontakta Oss Idag
          </Link>
        </div>
      </section>
    </div>
  )
}