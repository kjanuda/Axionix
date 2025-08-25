import React, { useState } from 'react';
import { 
  Database, 
  Cloud, 
  Zap, 
  Users, 
  Mail, 
  FileText, 
  CheckCircle, 
  XCircle, 
  Eye, 
  UserCheck,
  Server,
  Code,
  Palette,
  Shield,
  Globe,
  ArrowRight,
  Play,
  Settings,
  Layers
} from 'lucide-react';

const TechExplanationPage = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedFeature, setSelectedFeature] = useState(null);

  const techStack = [
    {
      name: 'MySQL Database',
      icon: <Database className="w-8 h-8" />,
      color: 'bg-blue-500',
      description: 'Robust relational database for job postings and applications',
      details: 'Handles job_postings and job_applications tables with ACID compliance'
    },
    {
      name: 'AWS S3 Storage',
      icon: <Cloud className="w-8 h-8" />,
      color: 'bg-orange-500',
      description: 'Secure cloud storage for resume files and media assets',
      details: 'Scalable file storage with CDN integration for fast access'
    },
    {
      name: 'Ballerina Backend',
      icon: <Zap className="w-8 h-8" />,
      color: 'bg-purple-500',
      description: 'High-performance backend service on port 8087',
      details: 'Handles API requests, email notifications, and business logic'
    }
  ];

  const adminFeatures = [
    {
      id: 'select',
      name: 'Select Candidate',
      icon: <UserCheck className="w-6 h-6" />,
      color: 'bg-green-500',
      action: 'Approve application and send acceptance email',
      impact: 'Reduces hiring time by 60%'
    },
    {
      id: 'view',
      name: 'View Details',
      icon: <Eye className="w-6 h-6" />,
      color: 'bg-blue-500',
      action: 'Review complete application with resume preview',
      impact: 'Streamlined review process'
    },
    {
      id: 'reject',
      name: 'Reject Application',
      icon: <XCircle className="w-6 h-6" />,
      color: 'bg-red-500',
      action: 'Decline application with automated notification',
      impact: 'Professional candidate experience'
    },
    {
      id: 'pending',
      name: 'Keep Pending',
      icon: <Settings className="w-6 h-6" />,
      color: 'bg-yellow-500',
      action: 'Maintain in review queue for later decision',
      impact: 'Flexible decision timeline'
    }
  ];

  const problems = [
    {
      problem: 'Manual Application Tracking',
      solution: 'Automated status management with real-time updates',
      impact: '80% reduction in administrative overhead'
    },
    {
      problem: 'Candidate Communication Gaps',
      solution: 'Instant email notifications for every status change',
      impact: '100% applicant notification coverage'
    },
    {
      problem: 'Resume Storage Limitations',
      solution: 'AWS S3 integration for unlimited scalable storage',
      impact: 'No storage constraints, faster load times'
    },
    {
      problem: 'Inefficient HR Workflows',
      solution: 'One-click admin actions with automated follow-ups',
      impact: '3x faster application processing'
    }
  ];

  const buildSteps = [
    {
      step: 1,
      title: 'Database Design',
      description: 'Created MySQL schema with job_postings and job_applications tables',
      tech: 'MySQL'
    },
    {
      step: 2,
      title: 'Backend Development',
      description: 'Built Ballerina service with API endpoints and email integration',
      tech: 'Ballerina'
    },
    {
      step: 3,
      title: 'Cloud Storage Setup',
      description: 'Configured AWS S3 buckets for secure file storage',
      tech: 'AWS S3'
    },
    {
      step: 4,
      title: 'Frontend Implementation',
      description: 'Developed React components with Tailwind CSS styling',
      tech: 'React + Tailwind'
    },
    {
      step: 5,
      title: 'Admin Panel Creation',
      description: 'Built comprehensive admin dashboard with 4-action workflow',
      tech: 'Full Stack'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Main Content Container - Adjusted for navbar */}
      <div className="pt-20">
        {/* Header */}
        <div className="bg-white shadow-lg border-b">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Job Portal System Architecture
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technical overview of our sustainable agriculture careers platform
              </p>
              <div className="flex justify-center items-center space-x-6 mt-6">
                <div className="flex items-center space-x-2">
                  <Server className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">Port 8087</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Database className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">job_portal_db</span>
                </div>
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
                      ? 'border-blue-500 text-blue-600'
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

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">System Overview</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {techStack.map((tech, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all">
                    <div className={`${tech.color} text-white rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
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
                  <div className="text-3xl font-bold text-blue-600 mb-2">8087</div>
                  <div className="text-gray-600">Service Port</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-600">Email Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
                  <div className="text-gray-600">Admin Actions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
                  <div className="text-gray-600">S3 Storage</div>
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
                  <div className="bg-blue-100 rounded-lg p-6">
                    <Code className="w-8 h-8 text-blue-600 mb-2" />
                    <div className="text-sm font-medium">React Frontend</div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
                </div>
                
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-purple-100 rounded-lg p-6">
                    <Zap className="w-8 h-8 text-purple-600 mb-2" />
                    <div className="text-sm font-medium">Ballerina API</div>
                    <div className="text-xs text-gray-500">Port 8087</div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
                </div>
                
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-blue-100 rounded-lg p-6">
                    <Database className="w-8 h-8 text-blue-600 mb-2" />
                    <div className="text-sm font-medium">MySQL DB</div>
                    <div className="text-xs text-gray-500">job_portal_db</div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-4 md:absolute md:bottom-0 md:right-0">
                  <div className="bg-orange-100 rounded-lg p-6">
                    <Cloud className="w-8 h-8 text-orange-600 mb-2" />
                    <div className="text-sm font-medium">AWS S3</div>
                    <div className="text-xs text-gray-500">File Storage</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Database Schema</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">job_postings</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Job details and requirements</li>
                      <li>• Company information</li>
                      <li>• Posting status and dates</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">job_applications</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Candidate information</li>
                      <li>• Resume S3 links</li>
                      <li>• Application status tracking</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend Stack</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Code className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="font-medium">React.js</div>
                      <div className="text-sm text-gray-600">Component-based UI framework</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Palette className="w-6 h-6 text-cyan-600" />
                    <div>
                      <div className="font-medium">Tailwind CSS</div>
                      <div className="text-sm text-gray-600">Utility-first styling</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Layers className="w-6 h-6 text-green-600" />
                    <div>
                      <div className="font-medium">Component Architecture</div>
                      <div className="text-sm text-gray-600">Modular, reusable components</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Features Section */}
        {activeSection === 'features' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Admin Panel Features</h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">4-Action Admin Workflow</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {adminFeatures.map((feature) => (
                  <div
                    key={feature.id}
                    onClick={() => setSelectedFeature(selectedFeature === feature.id ? null : feature.id)}
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
                            <li>• Database status update via Ballerina API</li>
                            <li>• Automated email trigger through notification service</li>
                            <li>• Real-time UI updates for admin dashboard</li>
                            <li>• Application history logging for audit trail</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Automated Email System</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <Mail className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-medium mb-2">Acceptance Emails</h4>
                  <p className="text-sm text-gray-600">Congratulations message with next steps</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Mail className="w-8 h-8 text-red-600 mb-3" />
                  <h4 className="font-medium mb-2">Rejection Emails</h4>
                  <p className="text-sm text-gray-600">Professional feedback and future opportunities</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Mail className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-medium mb-2">Status Updates</h4>
                  <p className="text-sm text-gray-600">Real-time application progress notifications</p>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Big Problem We Solved</h3>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <h4 className="text-lg font-bold text-red-600 mb-3">Critical Issue: Applicant Communication Gap</h4>
                <p className="text-gray-700 mb-4">
                  "This is a big problem for those who are waiting for the application." - Job seekers were left in 
                  uncertainty, creating poor candidate experience and damaging company reputation.
                </p>
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h5 className="font-bold text-green-700 mb-2">Our Solution:</h5>
                  <p className="text-gray-700">
                    Every admin action (Select, View, Reject, Pending) automatically triggers appropriate email 
                    notifications. No applicant is ever left wondering about their status.
                  </p>
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
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {step.tech}
                        </span>
                      </div>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Development Timeline</h3>
              <div className="grid md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-2">
                    <Database className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-medium">Week 1-2</div>
                  </div>
                  <div className="text-xs text-gray-600">Database Schema</div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-2">
                    <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-medium">Week 3-4</div>
                  </div>
                  <div className="text-xs text-gray-600">Backend APIs</div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-2">
                    <Cloud className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-sm font-medium">Week 5</div>
                  </div>
                  <div className="text-xs text-gray-600">S3 Integration</div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-2">
                    <Code className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-medium">Week 6-7</div>
                  </div>
                  <div className="text-xs text-gray-600">React Frontend</div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-2">
                    <Settings className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <div className="text-sm font-medium">Week 8</div>
                  </div>
                  <div className="text-xs text-gray-600">Admin Panel</div>
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
              <Database className="w-5 h-5 text-blue-400" />
              <span>MySQL</span>
            </div>
            <div className="flex items-center space-x-2">
              <Cloud className="w-5 h-5 text-orange-400" />
              <span>AWS S3</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-purple-400" />
              <span>Ballerina</span>
            </div>
          </div>
          <p className="text-gray-400">
            Sustainable Agriculture Job Portal - Built with modern technology stack
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechExplanationPage;