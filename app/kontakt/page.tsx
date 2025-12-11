import ContactForm from '@/components/ContactForm'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Kontakt() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Kontakta Oss</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Vi är här för att hjälpa dig med din körkortsutbildning
          </p>
        </div>
      </section>
      
      {/* Kontaktinformation */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Kom i Kontakt</h2>
              <p className="text-lg text-gray-600 mb-8">
                Har du frågor om våra tjänster eller vill boka en lektion? Vi hjälper dig gärna!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                    <p className="text-gray-600">08-603 85 85</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adress</h3>
                    <p className="text-gray-600">Bredängstorget 5<br />127 34 Skärholmen</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Handledarutbildning</h3>
                    <p className="text-gray-600">Fredagar kl 16:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                <h3 className="font-semibold text-amber-800 mb-2">Viktigt om Avbokningar</h3>
                <p className="text-amber-700">
                  Avbokningar skall ske senast en arbetsdag innan kl 12.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Skicka ett Meddelande</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vanliga Frågor</h2>
            <p className="text-xl text-gray-600">Svar på de mest frekventa frågorna</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">När har ni handledarutbildning?</h3>
              <p className="text-gray-600">
                Vi håller handledarutbildning varje fredag kl 16:00. Detta är en introduktionsutbildning som krävs för privat övningskörning.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Hur bokar jag en lektion?</h3>
              <p className="text-gray-600">
                Ring oss på 08-603 85 85 eller använd kontaktformuläret på denna sida så kontaktar vi dig.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Vad händer om jag behöver avboka?</h3>
              <p className="text-gray-600">
                Avbokningar måste ske senast en arbetsdag innan kl 12 för att undvika avgifter.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Var ligger ni?</h3>
              <p className="text-gray-600">
                Vi finns på Bredängstorget 5 i Skärholmen, Stockholm. Enkelt att ta sig till med kollektivtrafik.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}