import { Phone, Mail, MapPin, Clock, Car } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Företagsinformation */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Image 
                src="https://kingtrafikskola.se/wp-content/themes/kennedy/img/design/logo.png?v1"
                alt="King Trafikskola Logo"
                width={160}
                height={50}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6">
              Din pålitliga partner för körkortsutbildning i Stockholm. Vi hjälper dig att ta körkort på ett säkert och effektivt sätt.
            </p>
          </div>
          
          {/* Kontaktinformation */}
          <div>
            <h3 className="text-xl font-bold mb-6">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">08-603 85 85</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div className="text-gray-300">
                  <p>Bredängstorget 5</p>
                  <p>127 34 Skärholmen</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Handledarutbildning: Fredagar kl 16:00</span>
              </div>
            </div>
          </div>
          
          {/* Snabblänkar */}
          <div>
            <h3 className="text-xl font-bold mb-6">Snabblänkar</h3>
            <div className="space-y-3">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                Hem
              </Link>
              <Link href="/tjanster" className="block text-gray-300 hover:text-white transition-colors">
                Tjänster
              </Link>
              <Link href="/om-oss" className="block text-gray-300 hover:text-white transition-colors">
                Om oss
              </Link>
              <Link href="/kontakt" className="block text-gray-300 hover:text-white transition-colors">
                Kontakt
              </Link>
            </div>
          </div>
          
          {/* Tjänster */}
          <div>
            <h3 className="text-xl font-bold mb-6">Våra Tjänster</h3>
            <div className="space-y-3 text-gray-300">
              <p>B-Körkortsutbildning</p>
              <p>Handledarutbildning</p>
              <p>Teoretisk utbildning</p>
              <p>Praktisk körning</p>
            </div>
          </div>
        </div>
        
        {/* Viktigt meddelande */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="bg-amber-900/30 border border-amber-700 rounded-lg p-4 mb-8">
            <p className="text-amber-200 font-medium text-center">
              <strong>Viktigt:</strong> Avbokningar skall ske senast en arbetsdag innan kl 12.
            </p>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 King Trafikskola. Alla rättigheter förbehållna.
            </p>
            <p className="text-gray-400 text-sm">
              Skapad av <span className="text-blue-400 font-medium">Noory Solution</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}