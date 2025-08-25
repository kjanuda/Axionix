import { ChevronUp, Play, Pause } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function EcoGreenWebServices() {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  
  const AUTOPLAY_DELAY = 4000; // 4 seconds per tab

  const services = [
    {
      title: "Careers Page",
      subtitle: "Join Our Growing Team",
      description: "Explore exciting career opportunities in sustainable agriculture. Built with robust MySQL database, secure AWS S3 storage, and powerful Ballerina backend for seamless job applications and candidate management.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80",
      technologies: ["MySQL", "AWS S3", "Ballerina"],
      techIcons: {
        "MySQL": "🗃️",
        "AWS S3": "☁️",
        "Ballerina": "⚡"
      },
      link: "/careers"
    },
    {
      title: "Blog Page",
      subtitle: "Agricultural Insights & Tips",
      description: "Stay updated with the latest agricultural trends, tips, and insights from industry experts. Powered by MySQL for content management, AWS S3 for media storage, and Ballerina for lightning-fast content delivery.",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["MySQL", "AWS S3", "Ballerina"],
      techIcons: {
        "MySQL": "🗃️",
        "AWS S3": "☁️",
        "Ballerina": "⚡"
      },
      link: "/blog"
    },
    {
      title: "News Page",
      subtitle: "Latest Industry Updates",
      description: "Keep track of the latest news and developments in agricultural industry. Enhanced with MySQL database for news storage, AWS S3 for multimedia content, and Ballerina backend for real-time updates.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["MySQL", "AWS S3", "Ballerina"],
      techIcons: {
        "MySQL": "🗃️",
        "AWS S3": "☁️",
        "Ballerina": "⚡"
      },
      link: "/news"
    },
    {
      title: "Webinar Page",
      subtitle: "Educational Sessions",
      description: "Join our  webinars and learn from agricultural experts about modern farming techniques. Built on robust PostgreSQL database and efficient Ballerina framework for seamless live streaming experiences.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["PostgreSQL", "Ballerina"],
      techIcons: {
        "PostgreSQL": "🐘",
        "Ballerina": "⚡"
      },
      link: "/webinar"
    },
    {
      title: "Email Subscription",
      subtitle: "Stay Connected & Updated",
      description: "Subscribe to our newsletter and receive regular updates, tips, and exclusive content. Powered by MongoDB for subscriber management, Google Mailing SMTP for reliable delivery, and Ballerina for automation.",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      technologies: ["MongoDB", "Google SMTP", "Ballerina"],
      techIcons: {
        "MongoDB": "🍃",
        "Google SMTP": "📧",
        "Ballerina": "⚡"
      },
      link: "/email"
    },
    {
      title: "Problem Solver",
      subtitle: "Farmers Support Center",
      description: "Get expert help and solutions for your farming challenges with AI-powered assistance. Enhanced with AWS S3 for document storage, Google Gemini AI for intelligent responses, and Ballerina for seamless integration.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      technologies: ["AWS S3", "Gemini AI", "Ballerina"],
      techIcons: {
        "AWS S3": "☁️",
        "Gemini AI": "🤖",
        "Ballerina": "⚡"
      },
      link: "/problem"
    },
    {
      title: "Chatbot",
      subtitle: "24/7 Intelligent Assistant",
      description: "Our AI-powered chatbot provides instant support and answers to your agricultural questions. Built with cutting-edge Azure OpenAI technology and efficient Ballerina backend for natural conversational experiences.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2006&q=80",
      technologies: ["Azure OpenAI", "Ballerina"],
      techIcons: {
        "Azure OpenAI": "🧠",
        "Ballerina": "⚡"
      },
      link: "/chatbot"
    },
    {
      title: "Customer Forms",
      subtitle: "Easy Registration & Feedback",
      description: "Simple and intuitive forms for registration, feedback, and customer interactions. Enhanced with MongoDB for data management, Google Mailing SMTP for notifications, and Ballerina for secure form processing.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["MongoDB", "Google SMTP", "Ballerina"],
      techIcons: {
        "MongoDB": "🍃",
        "Google SMTP": "📧",
        "Ballerina": "⚡"
      },
      link: "/customer"
    }
  ];

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % services.length);
      setProgress(0);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  // Progress bar animation
  useEffect(() => {
    if (!isAutoPlaying) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (AUTOPLAY_DELAY / 50));
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [isAutoPlaying, activeTab]);

  // Handle manual tab change
  const handleTabChange = (index) => {
    setActiveTab(index);
    setProgress(0);
  };

  // Toggle autoplay
  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    if (isAutoPlaying) {
      setProgress(0);
    }
  };

  // Handle navigation
  const handleNavigation = (link) => {
    window.location.href = link;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-12 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Mobile-optimized header */}
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">
            Additional Ballerina microservices supporting the EcoGreen platform.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive digital solutions for modern agriculture powered by cutting-edge technology stack
          </p>
        </div>
        
        {/* Mobile-responsive Tab Container */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          {/* Mobile-optimized Autoplay Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-8 py-3 sm:py-4 bg-white border-b border-gray-200 gap-3 sm:gap-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
                <span className="text-sm text-gray-600 font-medium">
                  {isAutoPlaying ? '' : 'Manual mode'}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex space-x-1">
                {services.map((_, index) => (
                  <div
                    key={index}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-500 ${
                      activeTab === index ? 'bg-green-500 w-4 sm:w-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile-optimized Tab Navigation - Horizontal scroll on mobile */}
          <div className="flex overflow-x-auto scrollbar-hide pb-1">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => handleTabChange(index)}
                className={`group flex-shrink-0 px-4 sm:px-6 py-3 sm:py-5 text-xs sm:text-sm font-semibold text-center transition-all duration-500 transform relative overflow-hidden min-w-[120px] sm:min-w-0 sm:flex-1 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100'
                }`}
              >
                {/* Animated background effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 transition-all duration-500 ${
                  activeTab === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-20'
                }`}></div>
                
                <div className="relative z-10 transform transition-transform duration-300 group-hover:scale-105 whitespace-nowrap sm:whitespace-normal text-center">
                  {service.title}
                </div>
                
                {/* Active tab indicator */}
                {activeTab === index && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-1 bg-white rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
          
          {/* Mobile-optimized Tab Content */}
          <div className="relative h-96 sm:h-[32rem] lg:h-[36rem] overflow-hidden">
            {services.map((service, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  activeTab === index 
                    ? 'opacity-100 transform translate-x-0 scale-100' 
                    : activeTab > index 
                      ? 'opacity-0 transform -translate-x-full scale-95' 
                      : 'opacity-0 transform translate-x-full scale-95'
                }`}
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Animated overlay pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
                
                <div className="flex items-center justify-center h-full text-white text-center p-4 sm:p-6 lg:p-8 relative z-10">
                  <div className={`w-full max-w-2xl transform transition-all duration-1000 delay-300 ${
                    activeTab === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4 lg:mb-6 leading-tight bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                      {service.title}
                    </h2>
                    <h3 className="text-sm sm:text-base lg:text-lg xl:text-2xl mb-3 sm:mb-4 lg:mb-6 text-green-300 font-semibold tracking-wide">
                      {service.subtitle}
                    </h3>
                    
                    {/* Mobile-optimized Technology Stack */}
                    <div className={`mb-4 sm:mb-6 lg:mb-8 transform transition-all duration-1000 delay-500 ${
                      activeTab === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>
                      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                        {service.technologies.map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className="flex items-center space-x-1 sm:space-x-2 bg-white/10 backdrop-blur-sm px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                          >
                            <span className="text-sm sm:text-base lg:text-xl">{service.techIcons[tech]}</span>
                            <span className="text-xs sm:text-sm lg:text-sm font-semibold text-white">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-xs sm:text-sm lg:text-base xl:text-lg mb-4 sm:mb-6 lg:mb-10 leading-relaxed text-gray-100 max-w-xl mx-auto px-2 sm:px-0">
                      {service.description}
                    </p>
                    <button 
                      onClick={() => handleNavigation(service.link)}
                      className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-bold py-2 sm:py-3 lg:py-4 px-6 sm:px-8 lg:px-10 rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-green-500/30 relative overflow-hidden text-sm sm:text-base"
                    >
                      <span className="relative z-10">Discover More</span>
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </button>
                  </div>
                </div>

                {/* Mobile-optimized floating elements */}
                <div className={`absolute top-10 sm:top-20 right-10 sm:right-20 w-2 sm:w-4 h-2 sm:h-4 bg-white/30 rounded-full transition-all duration-1000 ${
                  activeTab === index ? 'animate-bounce' : 'opacity-0'
                }`}></div>
                <div className={`absolute bottom-16 sm:bottom-32 left-8 sm:left-16 w-3 sm:w-6 h-3 sm:h-6 bg-green-400/30 rounded-full transition-all duration-1000 delay-500 ${
                  activeTab === index ? 'animate-pulse' : 'opacity-0'
                }`}></div>
              </div>
            ))}
          </div>
          
          {/* Mobile-optimized Tab Indicators */}
          <div className="flex justify-center py-4 sm:py-6 space-x-2 sm:space-x-3 bg-white">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => handleTabChange(index)}
                className={`group relative overflow-hidden transition-all duration-500 ${
                  activeTab === index 
                    ? 'w-8 sm:w-12 h-3 sm:h-4 bg-green-500 rounded-full shadow-lg' 
                    : 'w-3 sm:w-4 h-3 sm:h-4 bg-gray-300 hover:bg-green-300 rounded-full transform hover:scale-125'
                }`}
              >
                {activeTab === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
        

        
        {/* Mobile-optimized scroll to top button */}
        <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-green-500 hover:bg-green-600 text-white p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Custom scrollbar hide utility */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Ensure horizontal scrolling works properly */
        @media (max-width: 640px) {
          .scrollbar-hide {
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
          }
          
          .scrollbar-hide > button {
            scroll-snap-align: start;
          }
        }
      `}</style>
    </div>
  );
}