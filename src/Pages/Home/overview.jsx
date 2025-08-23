import React from 'react';
import green from '../Home/images/image1.png';

const CarSpecsSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background System */}
      <div className="absolute inset-0">
        {/* Main Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ 
            backgroundImage: `url(${green})`,
          }}
        />
        
        {/* Responsive Overlay System */}
        <div className="absolute inset-0">
          {/* Mobile Overlay */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-br from-white/85 via-white/80 to-white/75 backdrop-blur-sm"></div>
          
          {/* Desktop Split Overlay */}
          <div className="hidden lg:block">
            {/* Left Side - Lighter overlay for specs */}
            <div className="absolute left-0 top-0 w-1/2 h-full bg-white/60 backdrop-blur-[1px]"></div>
            {/* Right Side - Solid for text readability */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-white/95 backdrop-blur-sm"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        
        {/* Mobile Header Section */}
        <div className="lg:hidden w-full px-6 py-12">
          <div className="max-w-md mx-auto text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-extralight text-lime-500 tracking-[0.2em] mb-8 drop-shadow-sm">
              SPECS
            </h1>
            <div className="text-gray-800 text-lg leading-relaxed font-light space-y-6">
              <p>
                Smart IoT greenhouse monitoring system with automated climate control and real-time data collection.
              </p>
              <p>
                Advanced sensor integration with cloud database connectivity for precision agriculture management.
              </p>
            </div>
          </div>
        </div>

        {/* Specifications Grid */}
        <div className="flex-1 lg:w-1/2 px-6 lg:px-12 xl:px-16 py-8 lg:py-20">
          <div className="h-full flex items-center justify-center">
            
            {/* Mobile Grid */}
            <div className="lg:hidden w-full max-w-lg mx-auto">
              <div className="grid grid-cols-1 gap-6">
                {/* Microcontroller Card */}
                <div className="group p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white/40 hover:shadow-2xl hover:bg-white/95 transition-all duration-300">
                  <div className="text-center">
                    <h3 className="text-gray-600 text-sm font-medium tracking-[0.15em] uppercase mb-4 group-hover:text-lime-600 transition-colors">
                      Microcontroller
                    </h3>
                    <div className="text-4xl font-extralight text-gray-900 mb-2">
                      ESP32
                    </div>
                    <p className="text-gray-600 text-sm">Dual-core processor</p>
                  </div>
                </div>

                {/* Database Card */}
                <div className="group p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white/40 hover:shadow-2xl hover:bg-white/95 transition-all duration-300">
                  <div className="text-center">
                    <h3 className="text-gray-600 text-sm font-medium tracking-[0.15em] uppercase mb-4 group-hover:text-lime-600 transition-colors">
                      Database
                    </h3>
                    <div className="text-2xl font-extralight text-gray-900 mb-2">
                      AWS DynamoDB
                    </div>
                    <p className="text-gray-600 text-sm">via Ballerina endpoint</p>
                  </div>
                </div>

                {/* Control Card */}
                <div className="group p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white/40 hover:shadow-2xl hover:bg-white/95 transition-all duration-300">
                  <div className="text-center">
                    <h3 className="text-gray-600 text-sm font-medium tracking-[0.15em] uppercase mb-4 group-hover:text-lime-600 transition-colors">
                      Automation
                    </h3>
                    <div className="text-xl font-extralight text-gray-900 mb-2">
                      Climate Control
                    </div>
                    <p className="text-gray-600 text-sm">Fans • Heaters • Pumps</p>
                  </div>
                </div>

                {/* Data Collection Card */}
                <div className="group p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white/40 hover:shadow-2xl hover:bg-white/95 transition-all duration-300">
                  <div className="text-center">
                    <h3 className="text-gray-600 text-sm font-medium tracking-[0.15em] uppercase mb-4 group-hover:text-lime-600 transition-colors">
                      Data Collection
                    </h3>
                    <div className="text-3xl font-extralight text-gray-900 mb-2">
                      5 <span className="text-xl">minutes</span>
                    </div>
                    <p className="text-gray-600 text-sm">Configurable intervals</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:block w-full max-w-4xl">
              <div className="grid grid-cols-2 gap-16 xl:gap-20">
                
                {/* Microcontroller */}
                <div className="group">
                  <h3 className="text-gray-700 text-sm font-medium tracking-[0.15em] uppercase mb-6 group-hover:text-lime-600 transition-colors">
                    Microcontroller
                  </h3>
                  <div className="text-5xl xl:text-6xl font-extralight text-gray-900 mb-3">
                    ESP32
                  </div>
                  <p className="text-gray-600 text-lg font-light">Dual-core processor</p>
                </div>

                {/* Database */}
                <div className="group">
                  <h3 className="text-gray-700 text-sm font-medium tracking-[0.15em] uppercase mb-6 group-hover:text-lime-600 transition-colors">
                    Database
                  </h3>
                  <div className="text-3xl xl:text-4xl font-extralight text-gray-900 mb-3">
                    AWS DynamoDB
                  </div>
                  <p className="text-gray-600 text-lg font-light">via Ballerina endpoint</p>
                </div>

                {/* Automation */}
                <div className="group">
                  <h3 className="text-gray-700 text-sm font-medium tracking-[0.15em] uppercase mb-6 group-hover:text-lime-600 transition-colors">
                    Automation
                  </h3>
                  <div className="text-2xl xl:text-3xl font-extralight text-gray-900 mb-3">
                    Climate Control
                  </div>
                  <p className="text-gray-600 text-lg font-light">Fans • Heaters • Pumps</p>
                </div>

                {/* Data Collection */}
                <div className="group">
                  <h3 className="text-gray-700 text-sm font-medium tracking-[0.15em] uppercase mb-6 group-hover:text-lime-600 transition-colors">
                    Data Collection
                  </h3>
                  <div className="text-4xl xl:text-5xl font-extralight text-gray-900 mb-3">
                    5 <span className="text-2xl">min</span>
                  </div>
                  <p className="text-gray-600 text-lg font-light">Configurable intervals</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Description Section */}
        <div className="hidden lg:flex lg:w-1/2 px-12 xl:px-16 py-20">
          <div className="flex flex-col justify-center max-w-2xl">
            <h1 className="text-7xl xl:text-8xl 2xl:text-9xl font-extralight text-lime-400 tracking-[0.2em] mb-12 xl:mb-16 drop-shadow-lg">
              SPECS
            </h1>
            
            <div className="text-gray-800 text-xl xl:text-2xl leading-relaxed font-light space-y-8">
              <p>
                Smart IoT greenhouse monitoring system with automated climate control and real-time data collection for precision agriculture.
              </p>
              <p>
                Advanced sensor integration with cloud database connectivity, featuring ESP32 microcontroller and AWS DynamoDB for seamless data management and remote monitoring capabilities.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/30">
                <div className="text-2xl font-light text-lime-600 mb-2">24/7</div>
                <div className="text-gray-700 text-sm font-medium">Monitoring</div>
              </div>
              <div className="p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/30">
                <div className="text-2xl font-light text-lime-600 mb-2">IoT</div>
                <div className="text-gray-700 text-sm font-medium">Connected</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="hidden xl:block absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-lime-400/30"></div>
      <div className="hidden xl:block absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-lime-400/30"></div>
      
      {/* Floating Action Indicators */}
      <div className="absolute bottom-8 right-8 hidden lg:flex space-x-4">
        <div className="w-3 h-3 rounded-full bg-lime-400 animate-pulse"></div>
        <div className="w-3 h-3 rounded-full bg-lime-400/60"></div>
        <div className="w-3 h-3 rounded-full bg-lime-400/30"></div>
      </div>
    </section>
  );
};

export default CarSpecsSection;