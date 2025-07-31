
import { Star, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Family Medicine",
    rating: 4.9,
    reviews: 156,
    experience: "8 years",
    location: "New York, NY",
    languages: ["English", "Spanish"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Pediatrics",
    rating: 4.8,
    reviews: 203,
    experience: "12 years",
    location: "San Francisco, CA",
    languages: ["English", "Mandarin"],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Dermatology",
    rating: 4.9,
    reviews: 189,
    experience: "10 years",
    location: "Miami, FL",
    languages: ["English", "Spanish"],
    image: "https://images.unsplash.com/photo-1594824371938-3e4ae39a3bb9?w=300&h=300&fit=crop&crop=face"
  }
];

const Doctors = () => {
  return (
    <section id="doctors" className="bg-white">
      <div className="max-w-7xl mx-auto py-16 lg:py-28 px-4 lg:px-14">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">
            Psicólogos disponíveis agora
          </h2>
          <p>
            Precisa conversar com alguém? Estamos prontos para te ouvir.<br />Veja abaixo os profissionais online neste momento e inicie seu atendimento sem espera. Todos são psicólogos verificados, com CRP ativo e preparados para te acolher com ética, empatia e segurança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                {/* Doctor Image */}
                <div className="relative mb-6">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute top-0 right-1/2 transform translate-x-12 -translate-y-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {doctor.name}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {doctor.specialty}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center justify-center space-x-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-gray-900">{doctor.rating}</span>
                    <span className="text-gray-500">({doctor.reviews} reviews)</span>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 pt-4">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{doctor.experience} experience</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{doctor.location}</span>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="flex justify-center space-x-2 pt-3">
                    {doctor.languages.map((lang, langIndex) => (
                      <span
                        key={langIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Book Button */}
              <div className="px-6 pb-6">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Book Consultation
                </Button>
              </div>
            </div>
          ))}
        </div>
        {/*
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            View All Doctors
          </Button>
        </div>
        */}
      </div>
    </section>
  );
};

export default Doctors;
