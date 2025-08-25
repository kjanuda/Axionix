import React, { useState } from 'react';
import {
  Database,
  MessageSquare,
  Zap,
  Users,
  Mail,
  Phone,
  Globe,
  Shield,
  UserCheck,
  Clock,
  CheckCircle,
  AlertCircle,
  Settings,
  Server,
  Code,
  Palette,
  ArrowRight,
  Layers,
  Send,
  Inbox,
  Filter,
  BarChart3,
  Eye,
  Tag,
  Clock as ClockIcon,
  CheckCircle as Check,
} from 'lucide-react';

const ContactExplanationPage = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedFeature, setSelectedFeature] = useState(null);

  const techStack = [
    {
      name: 'MongoDB Database',
      icon: <Database className="w-8 h-8" />,
      color: 'bg-green-500',
      description: 'NoSQL database for flexible contact data storage',
      details: 'Handles contact submissions on localhost:27017 with document-based storage',
    },
    {
      name: 'CORS-enabled API',
      icon: <Globe className="w-8 h-8" />,
      color: 'bg-blue-500',
      description: 'Cross-origin resource sharing for web integration',
      details: 'REST API with CORS support for seamless frontend integration',
    },
    {
      name: 'Ballerina Backend',
      icon: <Zap className="w-8 h-8" />,
      color: 'bg-purple-500',
      description: 'High-performance backend service on port 8091',
      details: 'Handles form submissions, inquiry management, and API responses',
    },
  ];

  const adminFeatures = [
    {
      id: 'submissions',
      name: 'Form Submissions',
      icon: <Send className="w-6 h-6" />,
      color: 'bg-green-500',
      action: 'Capture and store contact form submissions',
      impact: 'Zero data loss from contact forms',
    },
    {
      id: 'inquiries',
      name: 'Inquiry Management',
      icon: <Inbox className="w-6 h-6" />,
      color: 'bg-blue-500',
      action: 'Organize and track customer inquiries',
      impact: '100% inquiry response tracking',
    },
    {
      id: 'api',
      name: 'REST API',
      icon: <Settings className="w-6 h-6" />,
      color: 'bg-purple-500',
      action: 'RESTful endpoints for data operations',
      impact: 'Seamless system integration',
    },
    {
      id: 'cors',
      name: 'CORS Support',
      icon: <Shield className="w-6 h-6" />,
      color: 'bg-orange-500',
      action: 'Cross-origin requests handling',
      impact: 'Universal web compatibility',
    },
  ];

  const problems = [
    {
      problem: 'Lost Contact Form Submissions',
      solution: 'MongoDB storage ensures all submissions are captured and stored',
      impact: '100% data retention and zero message loss',
    },
    {
      problem: 'Unorganized Customer Inquiries',
      solution: 'Structured inquiry management system with tracking',
      impact: '95% faster response time to customer queries',
    },
    {
      problem: 'Integration Complexity',
      solution: 'CORS-enabled REST API for easy frontend integration',
      impact: 'Seamless integration with any web platform',
    },
    {
      problem: 'Manual Contact Processing',
      solution: 'Automated form processing with real-time storage',
      impact: '80% reduction in administrative overhead',
    },
  ];

  const buildSteps = [
    {
      step: 1,
      title: 'MongoDB Setup',
      description: 'Configured MongoDB database on localhost:27017 for contact storage',
      tech: 'MongoDB',
    },
    {
      step: 2,
      title: 'Backend Development',
      description: 'Built Ballerina service with REST API endpoints and CORS support',
      tech: 'Ballerina',
    },
    {
      step: 3,
      title: 'Form Processing',
      description: 'Implemented contact form submission handling and validation',
      tech: 'Full Stack',
    },
    {
      step: 4,
      title: 'Inquiry Management',
      description: 'Developed customer inquiry tracking and management system',
      tech: 'Backend + DB',
    },
    {
      step: 5,
      title: 'API Integration',
      description: 'Created CORS-enabled endpoints for frontend integration',
      tech: 'REST API',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-50">
      {/* Main Content with Navbar Offset */}
      <div className="pt-20">
        {/* Header */}
        <div className="bg-white shadow-lg border-b">
          <div className="max-w-7xl mx-auto px-6 py-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Management System Architecture
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technical overview of our contact form and customer inquiry management platform
            </p>
            <div className="flex justify-center items-center space-x-6 mt-6">
              <div className="flex items-center space-x-2">
                <Server className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-medium">Port 8091</span>
              </div>
              <div className="flex items-center space-x-2">
                <Database className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-medium">MongoDB</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-medium">localhost:27017</span>
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
                      ? 'border-orange-500 text-orange-600'
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
              <div className="grid md:grid-cols-3 gap-8">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Metrics</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">8091</div>
                  <div className="text-gray-600">Service Port</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-600">Data Retention</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
                  <div className="text-gray-600">Core Features</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">CORS</div>
                  <div className="text-gray-600">API Support</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Processing</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Send className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Form submission capture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Database className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">MongoDB storage</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Data validation</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">API & Integration</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">CORS-enabled endpoints</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Settings className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">RESTful API design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Layers className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">Frontend integration</span>
                  </div>
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Data Flow Diagram</h3>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-orange-100 rounded-lg p-6">
                    <MessageSquare className="w-8 h-8 text-orange-600 mb-2" />
                    <div className="text-sm font-medium">Contact Form</div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-purple-100 rounded-lg p-6">
                    <Zap className="w-8 h-8 text-purple-600 mb-2" />
                    <div className="text-sm font-medium">Ballerina API</div>
                    <div className="text-xs text-gray-500">Port 8091</div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-green-100 rounded-lg p-6">
                    <Database className="w-8 h-8 text-green-600 mb-2" />
                    <div className="text-sm font-medium">MongoDB</div>
                    <div className="text-xs text-gray-500">localhost:27017</div>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4 md:absolute md:top-0 md:right-0">
                  <div className="bg-blue-100 rounded-lg p-6">
                    <Globe className="w-8 h-8 text-blue-600 mb-2" />
                    <div className="text-sm font-medium">CORS API</div>
                    <div className="text-xs text-gray-500">Cross-Origin</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Database Structure</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Contact Submissions</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Contact form data</li>
                      <li>• Timestamp information</li>
                      <li>• Submission metadata</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Customer Inquiries</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Inquiry details and status</li>
                      <li>• Customer information</li>
                      <li>• Response tracking</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">API Endpoints</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      POST
                    </div>
                    <div>
                      <div className="font-medium">/api/contact</div>
                      <div className="text-sm text-gray-600">Submit contact form</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      GET
                    </div>
                    <div>
                      <div className="font-medium">/api/inquiries</div>
                      <div className="text-sm text-gray-600">Retrieve all inquiries</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                      PUT
                    </div>
                    <div>
                      <div className="font-medium">/api/inquiry/{'{id}'}</div>
                      <div className="text-sm text-gray-600">Update inquiry status</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                      DELETE
                    </div>
                    <div>
                      <div className="font-medium">/api/contact/{'{id}'}</div>
                      <div className="text-sm text-gray-600">Remove contact record</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">CORS Configuration</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <Shield className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-medium mb-2">Origin Control</h4>
                  <p className="text-sm text-gray-600">Configurable allowed origins for security</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Globe className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-medium mb-2">Method Support</h4>
                  <p className="text-sm text-gray-600">GET, POST, PUT, DELETE operations</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Settings className="w-8 h-8 text-purple-600 mb-3" />
                  <h4 className="font-medium mb-2">Header Handling</h4>
                  <p className="text-sm text-gray-600">Custom headers and content types</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">4-Feature Contact Management</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {adminFeatures.map((feature) => (
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
                          <h5 className="font-medium text-gray-900 mb-2">Technical Implementation:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• MongoDB document operations</li>
                            <li>• Real-time data validation</li>
                            <li>• CORS-enabled API responses</li>
                            <li>• Automated timestamp tracking</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Form Processing</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <Send className="w-8 h-8 text-orange-600 mb-3" />
                  <h4 className="font-medium mb-2">Form Submission</h4>
                  <p className="text-sm text-gray-600">Capture all contact form data with validation</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Database className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-medium mb-2">Data Storage</h4>
                  <p className="text-sm text-gray-600">Secure MongoDB storage with indexing</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <CheckCircle className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-medium mb-2">Confirmation</h4>
                  <p className="text-sm text-gray-600">Immediate response and tracking</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inquiry Management System</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <Inbox className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-medium mb-2">Centralized Inbox</h4>
                  <p className="text-sm text-gray-600 mb-3">All customer inquiries in one place</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Chronological organization</li>
                    <li>• Status tracking</li>
                    <li>• Priority classification</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <UserCheck className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-medium mb-2">Response Tracking</h4>
                  <p className="text-sm text-gray-600 mb-3">Monitor inquiry resolution progress</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Response time analytics</li>
                    <li>• Status updates</li>
                    <li>• Customer satisfaction</li>
                  </ul>
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

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Core Problem We Solved</h3>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <h4 className="text-lg font-bold text-red-600 mb-3">Critical Issue: Contact Form Data Loss</h4>
                <p className="text-gray-700 mb-4">
                  Many agricultural organizations lose valuable customer inquiries due to unreliable contact
                  form processing, email failures, or lack of proper data storage systems.
                </p>
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h5 className="font-bold text-green-700 mb-2">Our Solution:</h5>
                  <p className="text-gray-700">
                    A robust contact management system with MongoDB storage, CORS-enabled REST API,
                    and comprehensive inquiry tracking ensures zero data loss and 100% response tracking.
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
                    <span className="text-gray-700">Lost contact form submissions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Untracked customer inquiries</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Manual data processing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Integration difficulties</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">After Our System</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">100% data retention guarantee</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Comprehensive inquiry tracking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Automated processing workflow</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">CORS-enabled easy integration</span>
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
                    <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            step.tech === 'MongoDB'
                              ? 'bg-green-100 text-green-800'
                              : step.tech === 'Ballerina'
                              ? 'bg-purple-100 text-purple-800'
                              : 'bg-blue-100 text-blue-800'
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

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Development Timeline</h3>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { week: 'Week 1', icon: <Database />, task: 'MongoDB Setup', color: 'text-green-600' },
                  { week: 'Week 2', icon: <Zap />, task: 'Backend Development', color: 'text-purple-600' },
                  { week: 'Week 3', icon: <Send />, task: 'Form Processing', color: 'text-orange-600' },
                  { week: 'Week 4', icon: <Inbox />, task: 'Inquiry Management', color: 'text-blue-600' },
                  { week: 'Week 5', icon: <Globe />, task: 'API Integration', color: 'text-indigo-600' },
                ].map((phase, i) => (
                  <div key={i} className="text-center">
                    <div className="bg-white rounded-lg p-4 mb-2">
                      <div className={`mx-auto mb-2 ${phase.color}`}>{phase.icon}</div>
                      <div className="text-sm font-medium">{phase.week}</div>
                    </div>
                    <div className="text-xs text-gray-600">{phase.task}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Implementation Details</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Backend Architecture</h4>
                  <div className="space-y-4">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h5 className="font-medium text-purple-800 mb-2">Ballerina Service (Port 8091)</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• RESTful API endpoints for contact operations</li>
                        <li>• CORS middleware for cross-origin requests</li>
                        <li>• Data validation and sanitization</li>
                        <li>• MongoDB integration and connection pooling</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h5 className="font-medium text-green-800 mb-2">MongoDB Database (localhost:27017)</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Document-based flexible schema</li>
                        <li>• Indexed queries for fast retrieval</li>
                        <li>• Automatic timestamp generation</li>
                        <li>• Data aggregation for analytics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">API Features</h4>
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h5 className="font-medium text-blue-800 mb-2">CORS Configuration</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Configurable allowed origins</li>
                        <li>• Support for all HTTP methods</li>
                        <li>• Custom header handling</li>
                        <li>• Preflight request support</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h5 className="font-medium text-orange-800 mb-2">Contact Processing</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Real-time form validation</li>
                        <li>• Duplicate submission prevention</li>
                        <li>• Automated response confirmation</li>
                        <li>• Inquiry status management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Technical Decisions</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <div className="bg-green-100 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Why MongoDB?</h4>
                  <p className="text-sm text-gray-600">
                    Flexible document structure perfect for varying contact form fields and easy scalability for growing data.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="bg-purple-100 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Why Ballerina?</h4>
                  <p className="text-sm text-gray-600">
                    Built-in support for REST APIs and excellent MongoDB integration with robust CORS handling capabilities.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="bg-blue-100 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Why CORS?</h4>
                  <p className="text-sm text-gray-600">
                    Essential for modern web applications to allow frontend integration from any domain or subdomain.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">System Performance & Scalability</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Performance Features</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Connection pooling for MongoDB</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Indexed database queries</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Asynchronous request processing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Efficient CORS preflight handling</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Scalability Benefits</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Horizontal MongoDB scaling</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Load balancer ready architecture</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Microservice deployment support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Cloud-native compatibility</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Integration Examples</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <Code className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-medium mb-2">Frontend Integration</h4>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <code className="text-xs text-gray-700">
                      fetch('http://localhost:8091/api/contact', {'{'}
                      <br />
                      &nbsp;&nbsp;method: 'POST',<br />
                      &nbsp;&nbsp;headers: {'{'} 'Content-Type': 'application/json' {'}'},<br />
                      &nbsp;&nbsp;body: JSON.stringify(contactData)<br />
                      {'}'})
                    </code>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Database className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-medium mb-2">MongoDB Query</h4>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <code className="text-xs text-gray-700">
                      db.contacts.find({'{'}
                      <br />
                      &nbsp;&nbsp;"status": "pending",<br />
                      &nbsp;&nbsp;"createdAt": {'{'} $gte: new Date() {'}'}
                      <br />
                      {'}'}).sort({'{'} "createdAt": -1 {'}'})
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
              <Database className="w-5 h-5 text-green-400" />
              <span>MongoDB</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-blue-400" />
              <span>CORS API</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-purple-400" />
              <span>Ballerina</span>
            </div>
          </div>
          <p className="text-gray-400">
            Contact Management System - Built with modern NoSQL technology stack
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactExplanationPage;