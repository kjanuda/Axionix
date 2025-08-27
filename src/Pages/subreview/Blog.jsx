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
  Layers,
  Search,
  Filter,
  Upload,
  Edit3,
  Trash2,
  BarChart3,
  Image,
  Tag
} from 'lucide-react';

const BlogSystemOverview = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedFeature, setSelectedFeature] = useState(null);

  const techStack = [
    {
      name: 'Ballerina Backend',
      icon: <Zap className="w-8 h-8" />,
      color: 'bg-purple-500',
      description: 'RESTful API service with HTTP endpoints and middleware',
      details: 'Handles CRUD operations, image uploads, and search functionality'
    },
    {
      name: 'MySQL Database',
      icon: <Database className="w-8 h-8" />,
      color: 'bg-blue-500',
      description: 'Relational database with blog_posts table and indexing',
      details: 'Stores metadata, content, and supports advanced querying'
    },
    {
      name: 'AWS S3 + CLI',
      icon: <Cloud className="w-8 h-8" />,
      color: 'bg-orange-500',
      description: 'Image storage via AWS CLI integration',
      details: 'Handles file uploads and provides public CDN URLs'
    }
  ];

  const apiFeatures = [
    {
      id: 'create',
      name: 'Create Post',
      icon: <Edit3 className="w-6 h-6" />,
      color: 'bg-green-500',
      endpoint: 'POST /blogs',
      action: 'Create new blog post with multipart form data',
      impact: 'Supports rich content with image uploads'
    },
    {
      id: 'read',
      name: 'Read & Search',
      icon: <Search className="w-6 h-6" />,
      color: 'bg-blue-500',
      endpoint: 'GET /blogs',
      action: 'Paginated listing with filtering and search',
      impact: 'Efficient content discovery and browsing'
    },
    {
      id: 'update',
      name: 'Update Post',
      icon: <Settings className="w-6 h-6" />,
      color: 'bg-yellow-500',
      endpoint: 'PUT /blogs/{id}',
      action: 'Modify existing posts with validation',
      impact: 'Content management and maintenance'
    },
    {
      id: 'delete',
      name: 'Soft Delete',
      icon: <Trash2 className="w-6 h-6" />,
      color: 'bg-red-500',
      endpoint: 'DELETE /blogs/{id}',
      action: 'Mark as deleted without data loss',
      impact: 'Data recovery and audit trail preservation'
    }
  ];

  const problems = [
    {
      problem: 'Complex Image Management',
      solution: 'AWS CLI integration for seamless S3 uploads',
      impact: 'Automated image processing and CDN delivery'
    },
    {
      problem: 'Inefficient Content Discovery',
      solution: 'Advanced pagination, filtering, and search capabilities',
      impact: 'Fast content browsing with category and author filters'
    },
    {
      problem: 'Data Loss Risk',
      solution: 'Soft delete mechanism preserves all data',
      impact: '100% data recovery capability for deleted posts'
    },
    {
      problem: 'Scalability Concerns',
      solution: 'Configurable environment variables and cloud storage',
      impact: 'Easy deployment across dev, staging, and production'
    }
  ];

  const dataFlow = [
    {
      step: 1,
      title: 'Request Reception',
      description: 'Client sends multipart/form-data with content and images',
      tech: 'HTTP Service',
      icon: <Globe className="w-6 h-6" />
    },
    {
      step: 2,
      title: 'Data Parsing',
      description: 'Ballerina parses form fields and file uploads',
      tech: 'Ballerina Parser',
      icon: <Code className="w-6 h-6" />
    },
    {
      step: 3,
      title: 'Image Processing',
      description: 'Files saved locally then uploaded to S3 via AWS CLI',
      tech: 'AWS S3',
      icon: <Upload className="w-6 h-6" />
    },
    {
      step: 4,
      title: 'Database Storage',
      description: 'Metadata and S3 URLs stored in MySQL blog_posts table',
      tech: 'MySQL',
      icon: <Database className="w-6 h-6" />
    },
    {
      step: 5,
      title: 'Response Generation',
      description: 'JSON response with success status and blog ID',
      tech: 'JSON API',
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const keyFeatures = [
    {
      name: 'View Tracking',
      icon: <BarChart3 className="w-6 h-6" />,
      description: 'Automatic view count increment for analytics',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      name: 'Category System',
      icon: <Tag className="w-6 h-6" />,
      description: 'Organized content with category filtering',
      color: 'bg-green-100 text-green-600'
    },
    {
      name: 'CORS Support',
      icon: <Shield className="w-6 h-6" />,
      description: 'Cross-origin requests handled securely',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'UUID Generation',
      icon: <Settings className="w-6 h-6" />,
      description: 'Unique identifiers for all blog posts',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50">
      {/* Main Content Container */}
      <div className="pt-8">
        {/* Header */}
        <div className="bg-white shadow-lg border-b">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Blog System Backend Architecture
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Production-ready RESTful API built with Ballerina for comprehensive blog management
              </p>
              <div className="flex justify-center items-center space-x-6 mt-6">
                <div className="flex items-center space-x-2">
                  <Server className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium">RESTful API</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Database className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">blog_posts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Cloud className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium">S3 Storage</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex space-x-8 overflow-x-auto">
              {['overview', 'architecture', 'api', 'features', 'problems'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeSection === section
                      ? 'border-purple-500 text-purple-600'
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Capabilities</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">CRUD</div>
                  <div className="text-gray-600">Full Operations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">S3</div>
                  <div className="text-gray-600">Image Storage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">Soft</div>
                  <div className="text-gray-600">Delete System</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">API</div>
                  <div className="text-gray-600">REST Endpoints</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                  <div className={`${feature.color} rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.name}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Architecture Section */}
        {activeSection === 'architecture' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">System Architecture</h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Data Flow for Blog Post Creation</h3>
              <div className="space-y-6">
                {dataFlow.map((step, index) => (
                  <div key={index} className="flex items-center space-x-6">
                    <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                          <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                            {step.tech}
                          </span>
                          <div className="text-purple-600">
                            {step.icon}
                          </div>
                        </div>
                      </div>
                    </div>
                    {index < dataFlow.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Database Schema</h3>
                <div className="border rounded-lg p-6">
                  <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                    <Database className="w-5 h-5 mr-2 text-blue-600" />
                    blog_posts Table
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">id</span>
                      <span className="text-purple-600 font-mono">UUID (Primary)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">title</span>
                      <span className="text-blue-600 font-mono">VARCHAR</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">content</span>
                      <span className="text-green-600 font-mono">TEXT</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">author</span>
                      <span className="text-blue-600 font-mono">VARCHAR</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">category</span>
                      <span className="text-orange-600 font-mono">VARCHAR</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">image_url</span>
                      <span className="text-purple-600 font-mono">VARCHAR (S3)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">views</span>
                      <span className="text-indigo-600 font-mono">INTEGER</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">status</span>
                      <span className="text-red-600 font-mono">ENUM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Configuration System</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <Settings className="w-4 h-4 mr-2 text-purple-600" />
                      Environment Variables
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Database credentials (host, user, password)</li>
                      <li>• S3 bucket configuration</li>
                      <li>• Server port settings</li>
                      <li>• CORS origins whitelist</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-green-600" />
                      Production Ready
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Easy dev/staging/prod deployment</li>
                      <li>• No code changes needed</li>
                      <li>• Secure credential management</li>
                      <li>• Environment-specific configs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* API Section */}
        {activeSection === 'api' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">RESTful API Endpoints</h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">CRUD Operations</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {apiFeatures.map((feature) => (
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
                        <div className="bg-gray-100 px-3 py-1 rounded text-sm font-mono mb-2 inline-block">
                          {feature.endpoint}
                        </div>
                        <p className="text-gray-600 mb-2">{feature.action}</p>
                        <div className="text-sm font-medium text-purple-600">{feature.impact}</div>
                      </div>
                    </div>
                    
                    {selectedFeature === feature.id && (
                      <div className="mt-4 pt-4 border-t">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h5 className="font-medium text-gray-900 mb-2">Technical Implementation:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {feature.id === 'create' && (
                              <>
                                <li>• Multipart form data parsing</li>
                                <li>• Image upload to S3 via AWS CLI</li>
                                <li>• MySQL insertion with UUID generation</li>
                                <li>• JSON response with blog ID</li>
                              </>
                            )}
                            {feature.id === 'read' && (
                              <>
                                <li>• Pagination with page and pageLimit</li>
                                <li>• Category and author filtering</li>
                                <li>• View count increment on single post</li>
                                <li>• Status-based soft delete filtering</li>
                              </>
                            )}
                            {feature.id === 'update' && (
                              <>
                                <li>• Partial updates with validation</li>
                                <li>• Image replacement handling</li>
                                <li>• Timestamp updates for modified date</li>
                                <li>• Error handling for non-existent posts</li>
                              </>
                            )}
                            {feature.id === 'delete' && (
                              <>
                                <li>• Soft delete - status set to 'deleted'</li>
                                <li>• Data preservation for recovery</li>
                                <li>• Audit trail maintenance</li>
                                <li>• Immediate removal from public queries</li>
                              </>
                            )}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Query Features</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <Search className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-medium mb-2">Search & Filter</h4>
                  <p className="text-sm text-gray-600">Category and author-based filtering with pagination support</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <BarChart3 className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-medium mb-2">Analytics Tracking</h4>
                  <p className="text-sm text-gray-600">Automatic view count increment for engagement metrics</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Shield className="w-8 h-8 text-purple-600 mb-3" />
                  <h4 className="font-medium mb-2">Error Handling</h4>
                  <p className="text-sm text-gray-600">Structured error responses with appropriate HTTP status codes</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Features Section */}
        {activeSection === 'features' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Key Features & Innovations</h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Unique AWS CLI Integration</h3>
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 border-l-4 border-orange-500">
                <div className="flex items-start space-x-4">
                  <Cloud className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-orange-800 mb-3">Why AWS CLI Instead of SDK?</h4>
                    <p className="text-gray-700 mb-4">
                      This implementation uses the AWS CLI directly rather than an SDK, which is a notable architectural choice. 
                      This approach provides several benefits:
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Simplified dependency management - no need for AWS SDK libraries</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Direct system-level integration with existing AWS CLI configurations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Leverages mature, well-tested AWS CLI functionality</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Easier debugging and monitoring through CLI output</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Soft Delete System</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Trash2 className="w-6 h-6 text-red-600" />
                    <div>
                      <div className="font-medium">Data Preservation</div>
                      <div className="text-sm text-gray-600">Never actually deletes data from database</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    <div>
                      <div className="font-medium">Recovery Ready</div>
                      <div className="text-sm text-gray-600">Easy restoration of "deleted" content</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="font-medium">Audit Trail</div>
                      <div className="text-sm text-gray-600">Complete history for compliance</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Production Architecture</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Settings className="w-6 h-6 text-purple-600" />
                    <div>
                      <div className="font-medium">Configurable Variables</div>
                      <div className="text-sm text-gray-600">Environment-specific deployment</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Code className="w-6 h-6 text-indigo-600" />
                    <div>
                      <div className="font-medium">Structured Errors</div>
                      <div className="text-sm text-gray-600">Consistent API error handling</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-6 h-6 text-cyan-600" />
                    <div>
                      <div className="font-medium">CORS Support</div>
                      <div className="text-sm text-gray-600">Cross-origin request handling</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Performance & Scalability</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-indigo-600 mb-2">Pagination</div>
                  <div className="text-gray-600">Efficient large dataset handling</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">Indexing</div>
                  <div className="text-gray-600">Optimized database queries</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">CDN</div>
                  <div className="text-gray-600">S3-backed image delivery</div>
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

            <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Critical Challenge We Addressed</h3>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500 mb-6">
                <h4 className="text-lg font-bold text-red-600 mb-3">Core Problem: Content Management Complexity</h4>
                <p className="text-gray-700 mb-4">
                  Traditional blog systems struggle with image management, data integrity, and scalable content delivery. 
                  Many solutions either compromise on features or become overly complex to maintain and deploy.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                <h5 className="font-bold text-green-700 mb-2">Our Comprehensive Solution:</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Seamless S3 integration via AWS CLI for reliable image handling</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Soft delete system ensures zero data loss with full recovery</span>
                    </li>
                  </ul>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Environment-agnostic configuration for easy deployment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Robust error handling with structured API responses</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Benefits Summary</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-purple-600 mb-3">Development Benefits</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Clean, maintainable Ballerina codebase</li>
                    <li>• Standardized RESTful API design</li>
                    <li>• Comprehensive error handling patterns</li>
                    <li>• Production-ready configuration system</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-3">Operational Benefits</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Zero-downtime deployments across environments</li>
                    <li>• Scalable cloud storage integration</li>
                    <li>• Built-in analytics and view tracking</li>
                    <li>• Robust data recovery mechanisms</li>
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
              <Zap className="w-5 h-5 text-purple-400" />
              <span>Ballerina</span>
            </div>
            <div className="flex items-center space-x-2">
              <Database className="w-5 h-5 text-blue-400" />
              <span>MySQL</span>
            </div>
            <div className="flex items-center space-x-2">
              <Cloud className="w-5 h-5 text-orange-400" />
              <span>AWS S3</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-green-400" />
              <span>REST API</span>
            </div>
          </div>
          <p className="text-gray-400">
            Blog System Backend - Production-ready RESTful API with modern architecture
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogSystemOverview;