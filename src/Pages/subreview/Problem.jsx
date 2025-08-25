import React, { useState } from 'react';
import {
  Database,
  Mic,
  Camera,
  MessageSquare,
  Volume2,
  Zap,
  Users,
  Brain,
  FileAudio,
  Image,
  Type,
  Speaker,
  Settings,
  Server,
  Globe,
  Shield,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Layers,
  Code,
  Trash2,
  RefreshCw,
  Eye,
  Play,
  Pause,
  Upload,
  Download,
  Cpu,
  HardDrive,
  Wheat,
  Leaf,
} from 'lucide-react';

const AIProblemSolverPage = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const techStack = [
    {
      name: 'Google Gemini API',
      icon: <Brain className="w-8 h-8" />,
      color: 'bg-blue-500',
      description: 'Advanced AI model for multi-modal problem solving',
      details: 'Text, image, and audio processing with agricultural expertise',
    },
    {
      name: 'Multi-Modal Input',
      icon: <Layers className="w-8 h-8" />,
      color: 'bg-purple-500',
      description: 'Text, image, and voice input support',
      details: 'Upload images, record voice, or type questions naturally',
    },
    {
      name: 'Auto Speech Output',
      icon: <Volume2 className="w-8 h-8" />,
      color: 'bg-green-500',
      description: 'Automatic text-to-speech for all responses',
      details: 'Solutions are automatically spoken back to users',
    },
    {
      name: 'Ballerina Backend',
      icon: <Zap className="w-8 h-8" />,
      color: 'bg-orange-500',
      description: 'High-performance backend service',
      details: 'File processing, API integration, and cleanup utilities',
    },
  ];

  const inputMethods = [
    {
      id: 'text',
      name: 'Text Input',
      icon: <Type className="w-8 h-8" />,
      color: 'bg-blue-500',
      description: 'Type questions naturally',
      examples: ['How to treat crop disease?', 'Best fertilizer for tomatoes?', 'Pest control methods?'],
    },
    {
      id: 'image',
      name: 'Image Upload',
      icon: <Camera className="w-8 h-8" />,
      color: 'bg-green-500',
      description: 'Upload photos for visual analysis',
      examples: ['Disease identification', 'Crop health assessment', 'Pest recognition'],
    },
    {
      id: 'voice',
      name: 'Voice Recording',
      icon: <Mic className="w-8 h-8" />,
      color: 'bg-red-500',
      description: 'Record voice questions',
      examples: ['Spoken queries', 'Field descriptions', 'Problem explanations'],
    },
  ];

  const features = [
    {
      id: 'multimodal',
      name: 'Multi-Modal Processing',
      icon: <Layers className="w-6 h-6" />,
      color: 'bg-purple-500',
      action: 'Process text, images, and audio inputs simultaneously',
      impact: 'Comprehensive problem understanding',
    },
    {
      id: 'agricultural',
      name: 'Agricultural Expertise',
      icon: <Wheat className="w-6 h-6" />,
      color: 'bg-green-500',
      action: 'Specialized knowledge for farming problems',
      impact: 'Expert-level agricultural advice',
    },
    {
      id: 'autospeak',
      name: 'Auto Speech Output',
      icon: <Volume2 className="w-6 h-6" />,
      color: 'bg-blue-500',
      action: 'Automatically speak solutions aloud',
      impact: 'Hands-free operation for field work',
    },
    {
      id: 'fallback',
      name: 'Model Fallback System',
      icon: <RefreshCw className="w-6 h-6" />,
      color: 'bg-orange-500',
      action: 'Automatic backup model switching',
      impact: '99.9% system availability',
    },
  ];

  const problems = [
    {
      problem: 'Farmers Need Hands-Free Operation',
      solution: 'Multi-modal input (voice/image) with automatic speech output',
      impact: 'Can use system while working in the field',
    },
    {
      problem: 'Complex Agricultural Problems',
      solution: 'Google Gemini AI with specialized agricultural knowledge',
      impact: 'Expert-level advice for crop and livestock issues',
    },
    {
      problem: 'Language and Literacy Barriers',
      solution: 'Voice input and audio output eliminates reading requirements',
      impact: 'Accessible to all farmers regardless of education level',
    },
    {
      problem: 'System Downtime Issues',
      solution: 'Automatic model fallback and file cleanup utilities',
      impact: 'Reliable service with minimal interruptions',
    },
  ];

  const buildSteps = [
    {
      step: 1,
      title: 'Google Gemini Integration',
      description: 'Integrated Google Gemini API for advanced AI processing capabilities',
      tech: 'Google AI',
    },
    {
      step: 2,
      title: 'Multi-Modal Input System',
      description: 'Built support for text, image, and audio input processing',
      tech: 'Full Stack',
    },
    {
      step: 3,
      title: 'Speech Synthesis System',
      description: 'Implemented automatic text-to-speech for all AI responses',
      tech: 'Audio API',
    },
    {
      step: 4,
      title: 'Agricultural Knowledge Base',
      description: 'Specialized the AI for agricultural problem-solving expertise',
      tech: 'AI Training',
    },
    {
      step: 5,
      title: 'Backend & Utilities',
      description: 'Developed Ballerina backend with file cleanup and fallback systems',
      tech: 'Ballerina',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50">
      {/* Main Content with Navbar Offset */}
      <div className="pt-20">
        {/* Header */}
        <div className="bg-white shadow-lg border-b">
          <div className="max-w-7xl mx-auto px-6 py-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AI Problem Solver System Architecture
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary multi-modal AI platform that accepts text, image, or voice inputs and automatically speaks solutions for agricultural problems
            </p>
            <div className="flex justify-center items-center space-x-6 mt-6">
              <div className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">Google Gemini</span>
              </div>
              <div className="flex items-center space-x-2">
                <Layers className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium">Multi-Modal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Volume2 className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">Auto Speech</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white shadow-sm sticky top-16 z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex space-x-8 overflow-x-auto">
              {['overview', 'architecture', 'features', 'problems', 'build'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeSection === section
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="space-y-12">
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

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 Revolutionary Features</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                  <div className="text-gray-600">Input Methods</div>
                  <div className="text-xs text-gray-500 mt-1">Text, Image, Voice</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">AI</div>
                  <div className="text-gray-600">Google Gemini</div>
                  <div className="text-xs text-gray-500 mt-1">Advanced Processing</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">Auto</div>
                  <div className="text-gray-600">Speech Output</div>
                  <div className="text-xs text-gray-500 mt-1">Hands-Free Operation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-gray-600">Availability</div>
                  <div className="text-xs text-gray-500 mt-1">Model Fallback</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🚀 Special Platform Capabilities</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {inputMethods.map((method, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                    <div className={`${method.color} text-white rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                      {method.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">{method.name}</h4>
                    <p className="text-gray-600 mb-4 text-center">{method.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Examples:</p>
                      {method.examples.map((example, i) => (
                        <div key={i} className="text-xs text-gray-500 bg-gray-50 rounded px-2 py-1">
                          • {example}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Input Processing</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Type className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Natural language text input</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Camera className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Image analysis and recognition</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mic className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">Voice recording and transcription</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Brain className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">AI problem analysis</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Output & Response</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Volume2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Automatic text-to-speech</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Wheat className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Agricultural expert advice</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Written solution display</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RefreshCw className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Interactive follow-up questions</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🎤 Voice-First Experience</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Mic className="w-8 h-8 text-red-600" />
                    <h4 className="text-lg font-bold text-gray-900">Voice Input</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Record questions naturally</li>
                    <li>• Describe problems verbally</li>
                    <li>• Works in any language</li>
                    <li>• Perfect for field conditions</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Volume2 className="w-8 h-8 text-green-600" />
                    <h4 className="text-lg font-bold text-gray-900">Auto Speech Output</h4>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="ml-auto p-2 rounded-lg bg-green-100 hover:bg-green-200 transition-colors"
                    >
                      {isPlaying ? <Pause className="w-4 h-4 text-green-600" /> : <Play className="w-4 h-4 text-green-600" />}
                    </button>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Automatic solution narration</li>
                    <li>• Clear, professional voice</li>
                    <li>• Adjustable speech speed</li>
                    <li>• Hands-free operation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Architecture Section */}
        {activeSection === 'architecture' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Technical Architecture</h2>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Multi-Modal Processing Flow</h3>
              <div className="flex flex-col space-y-6">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="bg-red-100 rounded-lg p-6 border-2 border-red-200">
                      <Mic className="w-8 h-8 text-red-600 mb-2" />
                      <div className="text-sm font-medium">Voice Input</div>
                      <div className="text-xs text-gray-500">Audio Recording</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="bg-green-100 rounded-lg p-6 border-2 border-green-200">
                      <Camera className="w-8 h-8 text-green-600 mb-2" />
                      <div className="text-sm font-medium">Image Input</div>
                      <div className="text-xs text-gray-500">Visual Analysis</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="bg-blue-100 rounded-lg p-6 border-2 border-blue-200">
                      <Type className="w-8 h-8 text-blue-600 mb-2" />
                      <div className="text-sm font-medium">Text Input</div>
                      <div className="text-xs text-gray-500">Natural Language</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
                </div>

                <div className="flex justify-center">
                  <div className="bg-purple-100 rounded-lg p-8 border-2 border-purple-200">
                    <Brain className="w-12 h-12 text-purple-600 mb-3 mx-auto" />
                    <div className="text-lg font-medium text-center">Google Gemini AI</div>
                    <div className="text-sm text-gray-500 text-center">Multi-Modal Processing</div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="bg-orange-100 rounded-lg p-6 border-2 border-orange-200">
                      <MessageSquare className="w-8 h-8 text-orange-600 mb-2" />
                      <div className="text-sm font-medium">Text Solution</div>
                      <div className="text-xs text-gray-500">Written Response</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="bg-green-100 rounded-lg p-6 border-2 border-green-200">
                      <Volume2 className="w-8 h-8 text-green-600 mb-2" />
                      <div className="text-sm font-medium">Auto Speech</div>
                      <div className="text-xs text-gray-500">Spoken Solution</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Backend Architecture</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Ballerina Services</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• File upload handling</li>
                      <li>• Audio processing pipeline</li>
                      <li>• Image analysis service</li>
                      <li>• Google Gemini API integration</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">File Management</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Automatic file cleanup</li>
                      <li>• Temporary storage management</li>
                      <li>• Format conversion utilities</li>
                      <li>• Security and validation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Integration</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      PRIMARY
                    </div>
                    <div>
                      <div className="font-medium">Google Gemini API</div>
                      <div className="text-sm text-gray-600">Main AI processing engine</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
                      FALLBACK
                    </div>
                    <div>
                      <div className="font-medium">Alternative Models</div>
                      <div className="text-sm text-gray-600">Backup AI systems</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      SPEECH
                    </div>
                    <div>
                      <div className="font-medium">Text-to-Speech API</div>
                      <div className="text-sm text-gray-600">Automatic audio output</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">System Reliability Features</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <RefreshCw className="w-8 h-8 text-orange-600 mb-3" />
                  <h4 className="font-medium mb-2">Model Fallback</h4>
                  <p className="text-sm text-gray-600">Automatic switching to backup AI models if primary fails</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Trash2 className="w-8 h-8 text-red-600 mb-3" />
                  <h4 className="font-medium mb-2">File Cleanup</h4>
                  <p className="text-sm text-gray-600">Automatic deletion of temporary files to prevent storage issues</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Shield className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-medium mb-2">Error Handling</h4>
                  <p className="text-sm text-gray-600">Graceful error recovery with user-friendly messages</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Features Section */}
        {activeSection === 'features' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">System Features</h2>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Core AI Capabilities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    onClick={() =>
                      setSelectedFeature(selectedFeature === feature.id ? null : feature.id)
                    }
                    className="border rounded-lg p-6 cursor-pointer hover:shadow-md transition-all"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`${feature.color} text-white rounded-lg p-3`}>
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2">{feature.name}</h4>
                        <p className="text-gray-600 mb-2">{feature.action}</p>
                        <div className="text-sm font-medium text-green-600">{feature.impact}</div>
                      </div>
                    </div>
                    {selectedFeature === feature.id && (
                      <div className="mt-4 pt-4 border-t">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h5 className="font-medium text-gray-900 mb-2">Technical Details:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Google Gemini API integration</li>
                            <li>• Real-time processing pipeline</li>
                            <li>• Automatic error recovery</li>
                            <li>• Multi-language support</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🌾 Agricultural Intelligence</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <Leaf className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-medium mb-2">Crop Disease Detection</h4>
                  <p className="text-sm text-gray-600 mb-3">AI-powered image analysis for disease identification</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Upload crop photos</li>
                    <li>• Instant disease diagnosis</li>
                    <li>• Treatment recommendations</li>
                    <li>• Prevention strategies</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Wheat className="w-8 h-8 text-orange-600 mb-3" />
                  <h4 className="font-medium mb-2">Pest Control</h4>
                  <p className="text-sm text-gray-600 mb-3">Identify and manage agricultural pests</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Pest identification from images</li>
                    <li>• Organic control methods</li>
                    <li>• Chemical treatment options</li>
                    <li>• Seasonal prevention tips</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Cpu className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-medium mb-2">Soil Analysis</h4>
                  <p className="text-sm text-gray-600 mb-3">AI-based soil health assessment</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Nutrient deficiency detection</li>
                    <li>• pH level recommendations</li>
                    <li>• Fertilizer suggestions</li>
                    <li>• Crop rotation advice</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🔊 Voice-First Interface</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <Mic className="w-8 h-8 text-red-600 mb-3" />
                  <h4 className="font-medium mb-2">Voice Input System</h4>
                  <p className="text-sm text-gray-600 mb-3">Record questions naturally in any language</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Simple record button interface</li>
                    <li>• Noise cancellation technology</li>
                    <li>• Real-time transcription</li>
                    <li>• Multi-language support</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Volume2 className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-medium mb-2">Auto Speech Output</h4>
                  <p className="text-sm text-gray-600 mb-3">Solutions automatically spoken aloud</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Natural-sounding voice synthesis</li>
                    <li>• Adjustable playback speed</li>
                    <li>• Hands-free operation</li>
                    <li>• Repeat function available</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 Complete AI Workflow</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-blue-800 mb-4">1️⃣ Input Collection</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-500 text-white rounded-lg p-2 mt-1">1</div>
                      <div>
                        <h5 className="font-bold text-gray-900">User Input</h5>
                        <p className="text-sm text-gray-600">Text, image, or voice question about farming problem</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-500 text-white rounded-lg p-2 mt-1">2</div>
                      <div>
                        <h5 className="font-bold text-gray-900">File Processing</h5>
                        <p className="text-sm text-gray-600">Audio transcription, image enhancement, text cleaning</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-500 text-white rounded-lg p-2 mt-1">3</div>
                      <div>
                        <h5 className="font-bold text-gray-900">Data Validation</h5>
                        <p className="text-sm text-gray-600">Security checks and format standardization</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-green-800 mb-4">2️⃣ AI Processing & Output</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-500 text-white rounded-lg p-2 mt-1">4</div>
                      <div>
                        <h5 className="font-bold text-gray-900">AI Analysis</h5>
                        <p className="text-sm text-gray-600">Google Gemini processes input with agricultural expertise</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-500 text-white rounded-lg p-2 mt-1">5</div>
                      <div>
                        <h5 className="font-bold text-gray-900">Solution Generation</h5>
                        <p className="text-sm text-gray-600">Comprehensive, expert-level advice generated</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-500 text-white rounded-lg p-2 mt-1">6</div>
                      <div>
                        <h5 className="font-bold text-gray-900">Auto Speech Output</h5>
                        <p className="text-sm text-gray-600">Solution automatically spoken aloud to user</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Problems Section */}
        {activeSection === 'problems' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Problems We Solve</h2>

            <div className="space-y-6">
              {problems.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-red-600 mb-2">Problem</h3>
                      <p className="text-gray-700">{item.problem}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-green-600 mb-2">Solution</h3>
                      <p className="text-gray-700">{item.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-600 mb-2">Impact</h3>
                      <p className="text-gray-700 font-medium">{item.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Core Problem We Solved</h3>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <h4 className="text-lg font-bold text-red-600 mb-3">Critical Issue: Inaccessible Agricultural Expertise</h4>
                <p className="text-gray-700 mb-4">
                  Farmers in remote areas lack access to agricultural experts, face language barriers, 
                  and need hands-free solutions while working in the field.
                </p>
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h5 className="font-bold text-green-700 mb-2">Our Solution:</h5>
                  <p className="text-gray-700">
                    A voice-first AI system with multi-modal input, automatic speech output, 
                    and specialized agricultural knowledge that works in any language and requires no reading.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Before Our System</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Limited access to experts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Literacy and language barriers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">No hands-free operation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Slow problem resolution</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">After Our System</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">24/7 access to AI expertise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Voice interface for all languages</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Hands-free operation in the field</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Instant problem resolution</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Build Section */}
        {activeSection === 'build' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">How We Built It</h2>

            <div className="space-y-8">
              {buildSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            step.tech === 'Google AI'
                              ? 'bg-blue-100 text-blue-800'
                              : step.tech === 'Audio API'
                              ? 'bg-green-100 text-green-800'
                              : step.tech === 'AI Training'
                              ? 'bg-purple-100 text-purple-800'
                              : 'bg-orange-100 text-orange-800'
                          }`}
                        >
                          {step.tech}
                        </span>
                      </div>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Development Timeline</h3>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { week: 'Week 1', task: 'Gemini API', icon: <Brain />, color: 'text-blue-600' },
                  { week: 'Week 2', task: 'Multi-Modal', icon: <Layers />, color: 'text-purple-600' },
                  { week: 'Week 3', task: 'Speech Output', icon: <Volume2 />, color: 'text-green-600' },
                  { week: 'Week 4', task: 'Agricultural AI', icon: <Wheat />, color: 'text-orange-600' },
                  { week: 'Week 5', task: 'Backend', icon: <Zap />, color: 'text-red-600' },
                ].map((phase, i) => (
                  <div key={i} className="text-center">
                    <div className="bg-white rounded-lg p-4 mb-2">
                      <div className={`${phase.color} mx-auto mb-2`}>{phase.icon}</div>
                      <div className="text-sm font-medium">{phase.week}</div>
                    </div>
                    <div className="text-xs text-gray-600">{phase.task}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Implementation</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">AI & Processing</h4>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Google Gemini for multi-modal understanding</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Specialized prompt engineering for agriculture</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Real-time audio transcription and processing</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Image preprocessing for better analysis</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Backend & Reliability</h4>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Ballerina backend for efficient file handling</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Automatic temporary file cleanup</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Model fallback system for high availability</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Security validation for all inputs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Integration Examples</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <Code className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-medium mb-2">Voice Input Processing</h4>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <code className="text-xs text-gray-700">
                      // Record audio and send to backend<br/>
                      navigator.mediaDevices.getUserMedia({'{'}
                      <br/>
                      &nbsp;&nbsp;audio: true<br/>
                      {'}'})
                    </code>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Brain className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-medium mb-2">AI Prompt Structure</h4>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <code className="text-xs text-gray-700">
                      "You are an agricultural expert. Analyze this image<br/>
                      of crops and provide diagnosis, treatment, and<br/>
                      prevention advice in simple language."
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center space-x-8 mb-4">
            <div className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-blue-400" />
              <span>Google Gemini</span>
            </div>
            <div className="flex items-center space-x-2">
              <Volume2 className="w-5 h-5 text-green-400" />
              <span>Auto Speech</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-orange-400" />
              <span>Ballerina</span>
            </div>
          </div>
          <p className="text-gray-400">
            AI Problem Solver - Revolutionizing agricultural support with voice-first AI
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIProblemSolverPage;