import React, { useState } from 'react';
import {
  Mail,
  Users,
  Send,
  Settings,
  Eye,
  Database,
  Server,
  Zap,
  Globe,
  Shield,
  CheckCircle,
  ArrowRight,
  Layers,
  Code,
  RefreshCw,
  User,
  MessageSquare,
  Palette,
  Type,
  Image,
  Calendar,
  Activity,
  Lock,
  Cloud,
  Cpu,
  HardDrive,
  FileText,
  Play,
  Pause,
  Volume2,
  Brain,
  UserPlus,
} from 'lucide-react';

const EmailSubscriptionOverview = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const techStack = [
    {
      name: 'MongoDB Database',
      icon: <Database className="w-8 h-8" />,
      color: 'bg-green-500',
      description: 'Stores subscriber data and email templates',
      details: 'User emails, names, subscription dates, and email campaign data',
    },
    {
      name: 'Google SMTP',
      icon: <Mail className="w-8 h-8" />,
      color: 'bg-red-500',
      description: 'Reliable email delivery service',
      details: 'Professional email sending with high delivery rates',
    },
    {
      name: 'Ballerina Backend',
      icon: <Zap className="w-8 h-8" />,
      color: 'bg-orange-500',
      description: 'High-performance API service',
      details: 'Email processing, subscriber management, and template handling',
    },
    {
      name: 'Admin Dashboard',
      icon: <Settings className="w-8 h-8" />,
      color: 'bg-blue-500',
      description: 'Complete email campaign management',
      details: 'Create templates, manage subscribers, send campaigns',
    },
  ];

  const features = [
    {
      id: 'subscription',
      name: 'Easy Subscription',
      icon: <UserPlus className="w-6 h-6" />,
      color: 'bg-blue-500',
      action: 'Users subscribe with email and name',
      impact: 'Growing subscriber base for updates',
    },
    {
      id: 'admin',
      name: 'Admin Management',
      icon: <Settings className="w-6 h-6" />,
      color: 'bg-purple-500',
      action: 'Admin login to manage all subscribers',
      impact: 'Complete control over email campaigns',
    },
    {
      id: 'templates',
      name: 'Email Templates',
      icon: <Palette className="w-6 h-6" />,
      color: 'bg-green-500',
      action: 'Create custom email designs with buttons',
      impact: 'Professional branded communications',
    },
    {
      id: 'bulk-send',
      name: 'Bulk Email Sending',
      icon: <Send className="w-6 h-6" />,
      color: 'bg-orange-500',
      action: 'Send to all subscribers simultaneously',
      impact: 'Efficient mass communication',
    },
  ];

  const problems = [
    {
      problem: 'Manual Email Management',
      solution: 'Automated subscription system with admin dashboard',
      impact: 'Streamlined email campaign management',
    },
    {
      problem: 'Poor Email Deliverability',
      solution: 'Google SMTP integration for reliable delivery',
      impact: 'High inbox delivery rates and professional sender reputation',
    },
    {
      problem: 'No Subscriber Tracking',
      solution: 'MongoDB database stores all subscriber information',
      impact: 'Complete visibility into subscriber base and growth',
    },
    {
      problem: 'Generic Email Design',
      solution: 'Custom template builder with styling options',
      impact: 'Professional branded emails that match your platform',
    },
  ];

  const buildSteps = [
    {
      step: 1,
      title: 'MongoDB Integration',
      description: 'Set up database collections for subscribers and email templates',
      tech: 'Database',
    },
    {
      step: 2,
      title: 'Subscription API',
      description: 'Built Ballerina endpoints for user subscription management',
      tech: 'Ballerina',
    },
    {
      step: 3,
      title: 'Google SMTP Setup',
      description: 'Configured Google SMTP for reliable email delivery',
      tech: 'Email Service',
    },
    {
      step: 4,
      title: 'Admin Dashboard',
      description: 'Created admin interface for subscriber and campaign management',
      tech: 'Frontend',
    },
    {
      step: 5,
      title: 'Email Template System',
      description: 'Built customizable email template creator with live preview',
      tech: 'Full Stack',
    },
  ];

  const workflow = [
    {
      step: 'User Subscription',
      description: 'User enters email and name on subscription form',
      icon: <User className="w-6 h-6" />,
      color: 'bg-blue-500',
    },
    {
      step: 'Data Storage',
      description: 'Subscriber data saved to MongoDB database',
      icon: <Database className="w-6 h-6" />,
      color: 'bg-green-500',
    },
    {
      step: 'Admin Creates Email',
      description: 'Admin designs email template with custom styling',
      icon: <Palette className="w-6 h-6" />,
      color: 'bg-purple-500',
    },
    {
      step: 'Bulk Email Send',
      description: 'System sends email to all subscribers via Google SMTP',
      icon: <Send className="w-6 h-6" />,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 pt-20">
      {/* Header */}
      <br></br><br></br>
      <div className="bg-white shadow-lg border-b -mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Email Subscription System Architecture
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete email subscription and campaign management system with MongoDB database, Google SMTP delivery, and Ballerina backend
          </p>
          <div className="flex justify-center items-center space-x-6 mt-6">
            <div className="flex items-center space-x-2">
              <Database className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">MongoDB</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-red-600" />
              <span className="text-sm font-medium">Google SMTP</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-medium">Ballerina</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-sm sticky top-20 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8 overflow-x-auto">
            {['overview', 'architecture', 'features', 'workflow', 'admin-panel', 'build'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeSection === section
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
              </button>
            ))}
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">📊 System Capabilities</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">∞</div>
                  <div className="text-gray-600">Subscribers</div>
                  <div className="text-xs text-gray-500 mt-1">Unlimited Storage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
                  <div className="text-gray-600">Delivery Rate</div>
                  <div className="text-xs text-gray-500 mt-1">Google SMTP</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Real</div>
                  <div className="text-gray-600">Time Admin</div>
                  <div className="text-xs text-gray-500 mt-1">Live Dashboard</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">Custom</div>
                  <div className="text-gray-600">Templates</div>
                  <div className="text-xs text-gray-500 mt-1">Drag & Drop</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🎯 Key Features</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="bg-blue-500 text-white rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">Subscriber Management</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Easy subscription form integration</div>
                    <div>• Real-time subscriber count tracking</div>
                    <div>• Export subscriber lists</div>
                    <div>• Subscription date tracking</div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="bg-red-500 text-white rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">Email Campaigns</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Custom email template creator</div>
                    <div>• Live preview functionality</div>
                    <div>• Bulk email sending</div>
                    <div>• Professional email styling</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">For Users</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Simple subscription process</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Receive AI Problem Solver updates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Email privacy protection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Settings className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Easy unsubscribe option</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-orange-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">For Admins</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Settings className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Complete subscriber management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Palette className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Custom email template designer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Send className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Bulk email campaign sending</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Activity className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Real-time analytics dashboard</span>
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">System Architecture Flow</h3>
              <div className="flex flex-col space-y-6">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="bg-blue-100 rounded-lg p-6 border-2 border-blue-200">
                      <Globe className="w-8 h-8 text-blue-600 mb-2" />
                      <div className="text-sm font-medium">Frontend</div>
                      <div className="text-xs text-gray-500">Subscription Form</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="bg-orange-100 rounded-lg p-6 border-2 border-orange-200">
                      <Zap className="w-8 h-8 text-orange-600 mb-2" />
                      <div className="text-sm font-medium">Ballerina API</div>
                      <div className="text-xs text-gray-500">Backend Service</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="bg-green-100 rounded-lg p-6 border-2 border-green-200">
                      <Database className="w-8 h-8 text-green-600 mb-2" />
                      <div className="text-sm font-medium">MongoDB</div>
                      <div className="text-xs text-gray-500">Data Storage</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
                </div>

                <div className="flex justify-center">
                  <div className="bg-red-100 rounded-lg p-8 border-2 border-red-200">
                    <Mail className="w-12 h-12 text-red-600 mb-3 mx-auto" />
                    <div className="text-lg font-medium text-center">Google SMTP</div>
                    <div className="text-sm text-gray-500 text-center">Email Delivery Service</div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
                </div>

                <div className="flex justify-center">
                  <div className="bg-purple-100 rounded-lg p-6 border-2 border-purple-200">
                    <Users className="w-8 h-8 text-purple-600 mb-2" />
                    <div className="text-sm font-medium">All Subscribers</div>
                    <div className="text-xs text-gray-500">Email Delivered</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Database Schema</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Subscribers Collection</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• _id (ObjectId)</li>
                      <li>• email (String, unique)</li>
                      <li>• name (String)</li>
                      <li>• subscribed_date (Date)</li>
                      <li>• status (String)</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Email Templates</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• _id (ObjectId)</li>
                      <li>• subject (String)</li>
                      <li>• content (String)</li>
                      <li>• styling (Object)</li>
                      <li>• created_date (Date)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">API Endpoints</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      POST
                    </div>
                    <div>
                      <div className="font-medium text-sm">/api/subscribe</div>
                      <div className="text-xs text-gray-600">Add new subscriber</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      GET
                    </div>
                    <div>
                      <div className="font-medium text-sm">/api/subscribers</div>
                      <div className="text-xs text-gray-600">Get all subscribers</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
                      POST
                    </div>
                    <div>
                      <div className="font-medium text-sm">/api/send-email</div>
                      <div className="text-xs text-gray-600">Send bulk emails</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                      DELETE
                    </div>
                    <div>
                      <div className="font-medium text-sm">/api/subscriber/:id</div>
                      <div className="text-xs text-gray-600">Remove subscriber</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email Configuration</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Google SMTP Settings</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Host: smtp.gmail.com</li>
                      <li>• Port: 587 (TLS)</li>
                      <li>• Authentication: OAuth2</li>
                      <li>• Rate limit: 100 emails/day</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Email Features</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• HTML email support</li>
                      <li>• Custom styling</li>
                      <li>• Button customization</li>
                      <li>• Responsive design</li>
                    </ul>
                  </div>
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Core Features</h3>
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
                          <h5 className="font-medium text-gray-900 mb-2">Technical Implementation:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• MongoDB integration for data persistence</li>
                            <li>• Ballerina REST API endpoints</li>
                            <li>• Google SMTP email delivery</li>
                            <li>• Real-time admin dashboard</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">📧 Email Template System</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <Palette className="w-8 h-8 text-purple-600 mb-3" />
                  <h4 className="font-medium mb-2">Template Designer</h4>
                  <p className="text-sm text-gray-600 mb-3">Create beautiful emails with custom styling</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Drag-and-drop editor</li>
                    <li>• Color customization</li>
                    <li>• Button styling options</li>
                    <li>• Live preview mode</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Send className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-medium mb-2">Bulk Sending</h4>
                  <p className="text-sm text-gray-600 mb-3">Send to all subscribers with one click</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• One-click bulk sending</li>
                    <li>• Queue management</li>
                    <li>• Delivery tracking</li>
                    <li>• Error handling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Workflow Section */}
        {activeSection === 'workflow' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">System Workflow</h2>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Complete Email Campaign Flow</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {workflow.map((step, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`${step.color} text-white rounded-lg p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center`}
                    >
                      {step.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{step.step}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                    {index < workflow.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-gray-400 mx-auto mt-4 hidden md:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🚀 How It Works</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">1. User Subscribes</h4>
                  <p className="text-gray-600 mb-4">User fills out a simple form with name and email address.</p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• Form validation ensures clean data</li>
                    <li>• Immediate confirmation message</li>
                    <li>• Data stored securely in MongoDB</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">2. Admin Creates Email</h4>
                  <p className="text-gray-600 mb-4">Admin logs in and designs a professional email using the template builder.</p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• Drag-and-drop editor</li>
                    <li>• Live preview before sending</li>
                    <li>• Save templates for reuse</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">3. Email Sent via SMTP</h4>
                  <p className="text-gray-600 mb-4">System sends the email to all subscribers through Google SMTP.</p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• High deliverability rate</li>
                    <li>• Error handling and retries</li>
                    <li>• Logs for debugging</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">4. Users Receive Updates</h4>
                  <p className="text-gray-600 mb-4">Subscribers get the email in their inbox with all styling intact.</p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• Mobile-responsive design</li>
                    <li>• Click tracking (optional)</li>
                    <li>• Unsubscribe link included</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Admin Panel Section */}
        {activeSection === 'admin-panel' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Admin Dashboard</h2>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete Admin Control Panel</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-blue-800 mb-4">📊 Subscriber Management</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>View all subscribers in a table</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Search and filter by date or name</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Export list as CSV</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Delete inactive users</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-green-800 mb-4">🎨 Email Template Studio</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center space-x-3">
                      <Palette className="w-5 h-5 text-purple-600" />
                      <span>Custom color picker</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Type className="w-5 h-5 text-blue-600" />
                      <span>Rich text editor</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Image className="w-5 h-5 text-green-600" />
                      <span>Image upload support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Eye className="w-5 h-5 text-orange-600" />
                      <span>Live preview mode</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🔐 Secure Admin Access</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <Lock className="w-8 h-8 text-red-600 mb-3" />
                  <h4 className="font-medium mb-2">Password Protection</h4>
                  <p className="text-sm text-gray-600">Admin login with secure credentials</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Activity className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-medium mb-2">Activity Logging</h4>
                  <p className="text-sm text-gray-600">Track all email sends and admin actions</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <RefreshCw className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-medium mb-2">Auto Backups</h4>
                  <p className="text-sm text-gray-600">Daily database backups for safety</p>
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
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            step.tech === 'Database'
                              ? 'bg-green-100 text-green-800'
                              : step.tech === 'Ballerina'
                              ? 'bg-orange-100 text-orange-800'
                              : step.tech === 'Email Service'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-purple-100 text-purple-800'
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
                  { week: 'Week 1', task: 'MongoDB Setup', icon: <Database />, color: 'text-green-600' },
                  { week: 'Week 2', task: 'API Dev', icon: <Zap />, color: 'text-orange-600' },
                  { week: 'Week 3', task: 'SMTP Config', icon: <Mail />, color: 'text-red-600' },
                  { week: 'Week 4', task: 'Admin UI', icon: <Settings />, color: 'text-blue-600' },
                  { week: 'Week 5', task: 'Template Builder', icon: <Palette />, color: 'text-purple-600' },
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
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Backend & API</h4>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Ballerina service on port 8091</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>RESTful endpoints for all operations</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Secure admin authentication</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Error handling and logging</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Email & Frontend</h4>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Google SMTP with OAuth2</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Responsive admin dashboard</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Drag-and-drop email builder</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Unsubscribe link compliance</span>
                    </li>
                  </ul>
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
              <Mail className="w-5 h-5 text-red-400" />
              <span>Google SMTP</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-orange-400" />
              <span>Ballerina</span>
            </div>
          </div>
          <p className="text-gray-400">
            Email Subscription System - Built for reliability, scalability, and ease of use
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscriptionOverview;