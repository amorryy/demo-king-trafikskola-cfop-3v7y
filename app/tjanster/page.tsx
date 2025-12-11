import ServiceCard from '@/components/ServiceCard'
import { Car, Users, Clock, Shield, Star, BookOpen, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Tjanster() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Våra Tjänster</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Komplett utbud av körkortstjänster och handledarutbildning i Stockholm
          </p>
        </div>
      </section>
      
      {/* Huvudtjänster */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Huvudtjänster</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi erbjuder allt du behöver för att ta körkort på ett säkert och effektivt sätt
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 mb-6">
                <Car className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">B-Körkortsutbildning</h3>
              <p className="text-gray-600 mb-6">
                Komplett utbildning för personbil med erfarna och certifierade körlärare. Vi följer dig genom hela processen från teori till praktik.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center"><Star className="w-5 h-5 text-blue-600 mr-2" />Teoretisk utbildning</li>
                <li className="flex items-center"><Star className="w-5 h-5 text-blue-600 mr-2" />Praktisk körning</li>
                <li className="flex items-center"><Star className="w-5 h-5 text-blue-600 mr-2" />Riskutbildning</li>
                <li className="flex items-center"><Star className="w-5 h-5 text-blue-600 mr-2" />Prov och examination</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 mb-6">
                <Users className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Handledarutbildning</h3>
              <p className="text-gray-600 mb-6">
                Introduktionsutbildning för privat övningskörning som varit ett krav sedan 2006. Perfekt för föräldrar och anhöriga.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center"><Clock className="w-5 h-5 text-blue-600 mr-2" />Fredagar kl 16:00</li>
                <li className="flex items-center"><BookOpen className="w-5 h-5 text-blue-600 mr-2" />Teoretisk genomgång</li>
                <li className="flex items-center"><Shield className="w-5 h-5 text-blue-600 mr-2" />Säkerhetsaspekter</li>
                <li className="flex items-center"><Users className="w-5 h-5 text-blue-600 mr-2" />Pedagogiska metoder</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Övriga tjänster */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Övriga Tjänster</h2>
            <p className="text-xl text-gray-600">Ytterligare stöd för din körkortsutbildning</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Clock className="w-12 h-12" />}
              title="Flexibla Lektionstider"
              description="Vi anpassar våra tider efter ditt schema för att göra utbildningen så smidig som möjligt."
            />
            
            <ServiceCard 
              icon={<Shield className="w-12 h-12" />}
              title="Säker Körning"
              description="Fokus på trafiksäkerhet och defensiv körning för att göra dig till en säker förare."
            />
            
            <ServiceCard 
              icon={<BookOpen className="w-12 h-12" />}
              title="Teoriundervisning"
              description="Grundlig genomgång av trafikregler och vägmärken för att klara teoriprov."
            />
          </div>
        </div>
      </section>
      
      {/* Viktiga Regler */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Viktigt att Veta</h2>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-8 rounded-r-lg">
              <h3 className="text-xl font-bold text-amber-800 mb-4">Avbokningsregler</h3>
              <p className="text-amber-800 text-lg">
                Avbokningar skall ske senast en arbetsdag innan kl 12.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Kontakt Info */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Redo att Börja?</h2>
          <p className="text-xl mb-8">Kontakta oss för att boka din första lektion</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-lg">
              <Phone className="w-6 h-6 mr-3" />
              <span>Tel: 08-603 85 85</span>
            </div>
            <div className="flex items-center text-lg">
              <MapPin className="w-6 h-6 mr-3" />
              <span>Bredängstorget 5, 127 34 Skärholmen</span>
            </div>
          </div>
          <Link href="/kontakt" className="inline-block mt-8 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Kontakta Oss
          </Link>
        </div>
      </section>
    </div>
  )
}