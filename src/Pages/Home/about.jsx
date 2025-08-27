import { useState } from 'react';
import { 
  Users, 
  Award, 
  Leaf, 
  Target,
  Globe,
  Heart
} from 'lucide-react';

export default function About() {
  const [activeCard, setActiveCard] = useState(null);

  const teamStats = [
    { icon: Users, label: "Team Members", value: "4", color: "text-blue-600" },
    { icon: Target, label: "Focus Area", value: "Ballerina", color: "text-purple-600" },
    { icon: Leaf, label: "Platform Built", value: "EcoGreen360", color: "text-emerald-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200/30 to-gray-300/30"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-800"> Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a passionate group of undergraduate students dedicated to creating sustainable solutions through innovative technology.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamStats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center ${activeCard === index ? 'scale-110' : ''} transition-transform duration-300`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Journey & Vision
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                As undergraduate students, we came together with a shared vision of creating meaningful environmental impact through innovation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our focus on <span className="font-semibold text-green-600">Ballerina</span> programming language 
                led us to develop comprehensive solutions designed to promote sustainable practices and environmental awareness.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that technology should serve a greater purpose, and our mission is to leverage 
                our skills to build solutions that benefit both businesses and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}