import React from 'react';
import {
  Brain,
  Zap,
  Code,
  Shield,
  MessageSquare,
  Server,
  Users,
  BarChart3,
  Globe,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Database,
} from 'lucide-react';

const ChatbotAIOverview = () => {
  const techStack = [
    {
      name: 'OpenAI API',
      icon: <Brain className="w-8 h-8" />,
      color: 'bg-green-500',
      description: 'Advanced language models for intelligent responses',
      details: 'Powered by GPT-4 for natural, context-aware conversations',
    },
    {
      name: 'Custom Model Training',
      icon: <Code className="w-8 h-8" />,
      color: 'bg-blue-500',
      description: 'Fine-tuned AI for domain-specific knowledge',
      details: 'Trained on agricultural, customer service, and technical datasets',
    },
    {
      name: 'Secure API Key',
      icon: <Shield className="w-8 h-8" />,
      color: 'bg-orange-500',
      description: 'Protected OpenAI key management',
      details: 'Encrypted storage and environment-based configuration',
    },
    {
      name: 'Ballerina Backend',
      icon: <Zap className="w-8 h-8" />,
      color: 'bg-purple-500',
      description: 'High-performance backend service',
      details: 'Runs on port 9091 with secure routing and error handling',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <br></br> <br></br>
      <div className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Chatbot AI System Architecture
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Intelligent chatbot powered by OpenAI API with custom model training and secure Ballerina backend integration.
          </p>
          <div className="flex justify-center items-center space-x-6 mt-6">
            <div className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">OpenAI GPT-4</span>
            </div>
            <div className="flex items-center space-x-2">
              <Code className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">Custom Training</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium">Ballerina 9091</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-medium">Secure API Key</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation (Placeholder - Sticky but inactive) */}
      <div className="bg-white shadow-sm sticky top-20 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8">
            <button className="px-4 py-3 text-sm font-medium border-b-2 border-green-500 text-green-600">
              Overview
            </button>
            <button className="px-4 py-3 text-sm font-medium border-b-2 border-transparent text-gray-400 cursor-not-allowed">
              Architecture
            </button>
            <button className="px-4 py-3 text-sm font-medium border-b-2 border-transparent text-gray-400 cursor-not-allowed">
              Features
            </button>
            <button className="px-4 py-3 text-sm font-medium border-b-2 border-transparent text-gray-400 cursor-not-allowed">
              Problems
            </button>
            <button className="px-4 py-3 text-sm font-medium border-b-2 border-transparent text-gray-400 cursor-not-allowed">
              Build
            </button>
          </div>
        </div>
      </div>

      {/* Main Content - Overview Only */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {/* Tech Stack Cards */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">System Overview</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
                >
                  <div
                    className={`${tech.color} text-white rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4`}
                  >
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-600 mb-4">{tech.description}</p>
                  <p className="text-sm text-gray-500">{tech.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Metrics</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">GPT-4</div>
                <div className="text-gray-600">AI Model</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Custom</div>
                <div className="text-gray-600">Model Training</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">9091</div>
                <div className="text-gray-600">Ballerina Port</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">🔒</div>
                <div className="text-gray-600">Secure API Key</div>
              </div>
            </div>
          </div>

          {/* Input & Output Flow */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Intelligence Layer</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Brain className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">OpenAI GPT-4 integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Fine-tuned on domain data</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Contextual response logic</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">High accuracy & relevance</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backend & Security</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Ballerina backend (port 9091)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">Encrypted OpenAI API key</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">REST API endpoints</span>
                </div>
                <div className="flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">Rate limiting & abuse protection</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Flow Diagram */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Chat Request Flow</h3>
            <div className="flex flex-col md:flex-row items-center justify-around space-y-6 md:space-y-0">
              <div className="text-center">
                <div className="bg-blue-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <MessageSquare className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">User Query</div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />

              <div className="text-center">
                <div className="bg-purple-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">Ballerina Backend</div>
                <div className="text-xs text-gray-500">Validation & Routing</div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />

              <div className="text-center">
                <div className="bg-green-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <Brain className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">OpenAI API</div>
                <div className="text-xs text-gray-500">Response Generation</div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />

              <div className="text-center">
                <div className="bg-blue-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <MessageSquare className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">AI Response</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotAIOverview;