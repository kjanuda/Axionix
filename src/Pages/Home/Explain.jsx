import React, { useState } from 'react';
import { Leaf, Cpu, Database, Monitor, Smartphone, Zap, ArrowRight, Wifi, Settings, BarChart3, Cloud, Eye, X } from 'lucide-react';
import Explain from '../Home/images/explain.jpg';

const EcoGreen360 = () => {
  const [showImagePreview, setShowImagePreview] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Image Preview Modal */}
      {showImagePreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-2xl p-4 sm:p-6 max-w-6xl w-full max-h-[90vh] overflow-auto mx-2 sm:mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">System Architecture Preview</h3>
              <button
                onClick={() => setShowImagePreview(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </button>
            </div>
            <img 
              src={Explain} 
              alt="EcoGreen360 Smart Greenhouse System Overview - Full Size" 
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
          
              <span className="text-gray-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light">SMART WORKFLOW</span>
            
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-green-400 to-green-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          
          {/* Left: System Preview Image - Enlarged */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3" />
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">System Overview</h2>
              </div>
              
              {/* System Image - Enlarged */}
              <div className="aspect-[4/3] bg-gray-50 rounded-lg sm:rounded-xl overflow-hidden mb-4 cursor-pointer hover:shadow-lg transition-shadow">
                <img 
                  src={Explain} 
                  alt="EcoGreen360 Smart Greenhouse System Overview" 
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl hover:opacity-90 transition-opacity"
                  onClick={() => setShowImagePreview(true)}
                />
              </div>
              
              <p className="text-gray-600 text-xs sm:text-sm">
                <strong>System Architecture Preview:</strong> This diagram shows the complete EcoGreen360 workflow from physical sensors to digital twin interface. <span className="text-green-600 cursor-pointer hover:underline" onClick={() => setShowImagePreview(true)}>Click to enlarge</span>
              </p>
            </div>
            
            {/* Floating indicators */}
            <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg">
              Live Preview
            </div>
          </div>
          
          {/* Right: System Explanation */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Main Description */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
              <div className="flex items-center mb-4 sm:mb-6">
                <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mr-2 sm:mr-3" />
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">What is EcoGreen360?</h2>
              </div>
              
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                EcoGreen360 is a smart greenhouse management system that bridges the gap between the <strong className="text-green-600">real greenhouse</strong> and its <strong className="text-green-600">3D digital twin</strong>.
              </p>
              
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Physical sensors in the greenhouse (temperature, humidity, soil moisture, air quality) send data to an <strong className="text-gray-600">ESP32 microcontroller</strong>, which communicates with the <strong className="text-gray-600">Ballerina Backend</strong>. The backend processes this data and powers two main features.
              </p>
            </div>

            {/* Data Flow Explanation */}
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6 flex items-center">
                <Database className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3" />
                How Data Flows (As Shown in Preview)
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Sensor Collection</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Physical sensors collect environmental data from the real greenhouse</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">ESP32 Processing</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Microcontroller processes and transmits data to the backend</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Backend Analysis</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Ballerina backend processes data and updates digital twin</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">User Interface</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Farmers interact with 3D interface and send control commands</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two Main Features Explanation */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16 mb-12 sm:mb-16">
          {/* Feature 1 */}
          <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <span className="bg-green-500 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">Feature 1</span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-2">AI Analysis & Cultivation Form Page</h3>
              </div>
            </div>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              This feature helps farmers choose the right crops and get intelligent recommendations based on real-time greenhouse data and AI analysis.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center text-gray-600">
                <ArrowRight className="w-4 h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-sm sm:text-base">Smart crop selection recommendations</span>
              </div>
              <div className="flex items-center text-gray-600">
                <ArrowRight className="w-4 h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-sm sm:text-base">Environmental condition analysis</span>
              </div>
              <div className="flex items-center text-gray-600">
                <ArrowRight className="w-4 h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-sm sm:text-base">Cultivation guidance and timing</span>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4">
                <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <span className="bg-yellow-500 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">Feature 2</span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-2">3D Web Greenhouse Digital Twin</h3>
              </div>
            </div>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Provides a live simulation of the greenhouse environment with real-time monitoring and user control capabilities through an interactive 3D interface.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center text-gray-600">
                <ArrowRight className="w-4 h-4 text-yellow-500 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-sm sm:text-base">Real-time 3D greenhouse visualization</span>
              </div>
              <div className="flex items-center text-gray-600">
                <ArrowRight className="w-4 h-4 text-yellow-500 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-sm sm:text-base">Live environmental data display</span>
              </div>
              <div className="flex items-center text-gray-600">
                <ArrowRight className="w-4 h-4 text-yellow-500 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-sm sm:text-base">Interactive control interface</span>
              </div>
            </div>
          </div>
        </div>

        {/* Control Commands Explanation */}
        <div className="bg-gradient-to-br from-gray-100 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 border border-gray-200 shadow-xl">
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center justify-center text-gray-800">
              <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mr-2 sm:mr-3" />
              Remote Control Commands
            </h3>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Farmers can send control commands from the web interface, which are executed in the physical greenhouse through ESP32 communication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-xl p-4 sm:p-6 text-center hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg border border-gray-200">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl">💧</span>
              </div>
              <h4 className="font-semibold mb-2 text-green-600 text-sm sm:text-base">Watering</h4>
              <p className="text-xs sm:text-sm text-gray-600">Control irrigation systems and water pumps remotely</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 sm:p-6 text-center hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg border border-gray-200">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl">🌀</span>
              </div>
              <h4 className="font-semibold mb-2 text-yellow-600 text-sm sm:text-base">Fans</h4>
              <p className="text-xs sm:text-sm text-gray-600">Adjust ventilation and air circulation systems</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 sm:p-6 text-center hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg border border-gray-200">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl">⚙️</span>
              </div>
              <h4 className="font-semibold mb-2 text-green-600 text-sm sm:text-base">Pumps</h4>
              <p className="text-xs sm:text-sm text-gray-600">Manage water circulation and nutrient pumps</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 sm:p-6 text-center hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg border border-gray-200">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl">💡</span>
              </div>
              <h4 className="font-semibold mb-2 text-yellow-600 text-sm sm:text-base">Lights</h4>
              <p className="text-xs sm:text-sm text-gray-600">Control LED grow lights and timing schedules</p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-200">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 sm:mb-8 flex items-center">
            <Cpu className="w-6 h-6 sm:w-7 sm:h-7 text-green-500 mr-2 sm:mr-3" />
            Technology Components Explained
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">ESP32 Microcontroller</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Handles sensor data collection and command execution in the physical greenhouse</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Ballerina Backend</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Cloud-based system that processes data and manages communication</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">IoT Sensors</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Physical sensors measuring temperature, humidity, soil moisture, air quality</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-3 h-3 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">3D Digital Twin</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Interactive web-based 3D representation of the greenhouse</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">AI Analysis Engine</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Machine learning algorithms for crop recommendations and optimization</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Web Interface</h4>
                <p className="text-gray-600 text-xs sm:text-sm">User-friendly dashboard for monitoring and controlling greenhouse operations</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          
        </div>
      </div>
    </div>
  );
};

export default EcoGreen360;