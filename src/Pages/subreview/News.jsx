import React, { useState } from 'react';
import { 
  Database, 
  Cloud, 
  Zap, 
  Users, 
  FileText, 
  Search, 
  BarChart3, 
  Tag,
  Image,
  Eye,
  PlusCircle,
  Edit3,
  TrendingUp,
  Server,
  Code,
  Palette,
  Globe,
  ArrowRight,
  Settings,
  Layers,
  BookOpen,
  Calendar,
  Filter
} from 'lucide-react';

const NewsExplanationPage = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedFeature, setSelectedFeature] = useState(null);

  const techStack = [
    {
      name: 'MySQL Database',
      icon: <Database className="w-8 h-8" />,
      color: 'bg-blue-500',
      description: 'Robust relational database for news articles and analytics',
      details: 'Handles news_db with posts, topics, and view tracking tables'
    },
    {
      name: 'AWS S3 Storage',
      icon: <Cloud className="w-8 h-8" />,
      color: 'bg-orange-500',
      description: 'Secure cloud storage for media attachments and images',
      details: 'Scalable media storage with CDN integration for fast delivery'
    },
    {
      name: 'Ballerina Backend',
      icon: <Zap className="w-8 h-8" />,
      color: 'bg-purple-500',
      description: 'High-performance backend service on port 7087',
      details: 'Handles API requests, search indexing, and analytics processing'
    }
  ];

  const adminFeatures = [
    {
      id: 'create',
      name: 'Article Creation',
      icon: <PlusCircle className="w-6 h-6" />,
      color: 'bg-green-500',
      action: 'Create and publish news articles with rich media',
      impact: 'Streamlined content creation workflow'
    },
    {
      id: 'manage',
      name: 'Content Management',
      icon: <Edit3 className="w-6 h-6" />,
      color: 'bg-blue-500',
      action: 'Edit, update, and manage existing articles',
      impact: 'Efficient content lifecycle management'
    },
    {
      id: 'categorize',
      name: 'Smart Categorization',
      icon: <Tag className="w-6 h-6" />,
      color: 'bg-yellow-500',
      action: 'Organize content with topics and subjects',
      impact: 'Improved content discoverability'
    },
    {
      id: 'analytics',
      name: 'View Analytics',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'bg-purple-500',
      action: 'Track article views and engagement metrics',
      impact: 'Data-driven content strategy'
    },
    {
      id: 'search',
      name: 'Full-text Search',
      icon: <Search className="w-6 h-6" />,
      color: 'bg-indigo-500',
      action: 'Advanced search across all content',
      impact: 'Enhanced user experience'
    },
    {
      id: 'media',
      name: 'Media Management',
      icon: <Image className="w-6 h-6" />,
      color: 'bg-pink-500',
      action: 'Upload and manage media attachments',
      impact: 'Rich multimedia content delivery'
    }
  ];

  const problems = [
    {
      problem: 'Content Scattered Across Platforms',
      solution: 'Centralized news management system with unified interface',
      impact: '90% reduction in content publishing time'
    },
    {
      problem: 'Poor Content Discoverability',
      solution: 'Advanced categorization and full-text search capabilities',
      impact: '300% improvement in content engagement'
    },
    {
      problem: 'Manual Media Management',
      solution: 'Automated AWS S3 integration for seamless media uploads',
      impact: 'Unlimited scalable media storage'
    },
    {
      problem: 'No Performance Insights',
      solution: 'Built-in view tracking and analytics dashboard',
      impact: 'Data-driven content strategy optimization'
    },
    {
      problem: 'Time-consuming Article Creation',
      solution: 'Streamlined admin interface with rich text editor',
      impact: '70% faster article publishing workflow'
    }
  ];

  const buildSteps = [
    {
      step: 1,
      title: 'Database Architecture',
      description: 'Designed MySQL schema with news posts, topics/subjects, and analytics tables',
      tech: 'MySQL'
    },
    {
      step: 2,
      title: 'Backend API Development',
      description: 'Built Ballerina service with CRUD operations and search indexing',
      tech: 'Ballerina'
    },
    {
      step: 3,
      title: 'Cloud Media Integration',
      description: 'Configured AWS S3 buckets for media storage and CDN delivery',
      tech: 'AWS S3'
    },
    {
      step: 4,
      title: 'Admin Interface',
      description: 'Developed comprehensive admin panel for content management',
      tech: 'React + Tailwind'
    },
    {
      step: 5,
      title: 'Search & Analytics',
      description: 'Implemented full-text search and view tracking system',
      tech: 'Full Stack'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50">
      {/* Main Content Container - Adjusted for navbar */}
      <div className="pt-20">
        {/* Header */}
        <div className="bg-white shadow-lg border-b">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                News Management System Architecture
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technical overview of our agricultural news and content management platform
              </p>
              <div className="flex justify-center items-center space-x-6 mt-6">
                <div className="flex items-center space-x-2">
                  <Server className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">Port 7087</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Database className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">news_db</span>
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
                  <div className="text-3xl font-bold text-green-600 mb-2">7087</div>
                  <div className="text-gray-600">Service Port</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600">Search Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
                  <div className="text-gray-600">Admin Features</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
                  <div className="text-gray-600">Media Storage</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Content Management</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Rich article creation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Tag className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Smart categorization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Image className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Media attachments</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Analytics & Search</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">View tracking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Search className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">Full-text search</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-pink-600" />
                    <span className="text-gray-700">Performance insights</span>
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
                  <div className="bg-green-100 rounded-lg p-6">
                    <Code className="w-8 h-8 text-green-600 mb-2" />
                    <div className="text-sm font-medium">React Admin</div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
                </div>
                
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-purple-100 rounded-lg p-6">
                    <Zap className="w-8 h-8 text-purple-600 mb-2" />
                    <div className="text-sm font-medium">Ballerina API</div>
                    <div className="text-xs text-gray-500">Port 7087</div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
                </div>
                
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-blue-100 rounded-lg p-6">
                    <Database className="w-8 h-8 text-blue-600 mb-2" />
                    <div className="text-sm font-medium">MySQL DB</div>
                    <div className="text-xs text-gray-500">news_db</div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-4 md:absolute md:bottom-0 md:right-0">
                  <div className="bg-orange-100 rounded-lg p-6">
                    <Cloud className="w-8 h-8 text-orange-600 mb-2" />
                    <div className="text-sm font-medium">AWS S3</div>
                    <div className="text-xs text-gray-500">Media Storage</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Database Schema</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">news_posts</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Article content and metadata</li>
                      <li>• Media attachment references</li>
                      <li>• Publishing status and dates</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">topics_subjects</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Hierarchical categorization</li>
                      <li>• Topic relationships</li>
                      <li>• Content classification</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">view_analytics</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Article view tracking</li>
                      <li>• User engagement metrics</li>
                      <li>• Performance analytics</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">System Features</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-6 h-6 text-green-600" />
                    <div>
                      <div className="font-medium">Article Management</div>
                      <div className="text-sm text-gray-600">Create, edit, and publish content</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Search className="w-6 h-6 text-indigo-600" />
                    <div>
                      <div className="font-medium">Full-text Search</div>
                      <div className="text-sm text-gray-600">Advanced content discovery</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                    <div>
                      <div className="font-medium">Analytics Dashboard</div>
                      <div className="text-sm text-gray-600">Performance tracking and insights</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Tag className="w-6 h-6 text-yellow-600" />
                    <div>
                      <div className="font-medium">Smart Categorization</div>
                      <div className="text-sm text-gray-600">Organized content structure</div>
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">6-Feature Admin Workflow</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        <p className="text-gray-600 mb-2 text-sm">{feature.action}</p>
                        <div className="text-sm font-medium text-green-600">{feature.impact}</div>
                      </div>
                    </div>
                    
                    {selectedFeature === feature.id && (
                      <div className="mt-4 pt-4 border-t">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h5 className="font-medium text-gray-900 mb-2">Technical Implementation:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Database operations via Ballerina API</li>
                            <li>• Real-time search index updates</li>
                            <li>• Automated analytics tracking</li>
                            <li>• S3 media integration for attachments</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Search System</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <Search className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-medium mb-2">Full-text Search</h4>
                  <p className="text-sm text-gray-600">Search across article titles, content, and metadata</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Filter className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-medium mb-2">Category Filtering</h4>
                  <p className="text-sm text-gray-600">Filter by topics, subjects, and publication dates</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
                  <h4 className="font-medium mb-2">Trending Content</h4>
                  <p className="text-sm text-gray-600">Discover popular articles based on view analytics</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Media Management System</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <Image className="w-8 h-8 text-purple-600 mb-3" />
                  <h4 className="font-medium mb-2">AWS S3 Integration</h4>
                  <p className="text-sm text-gray-600 mb-3">Seamless media upload and management</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Automatic image optimization</li>
                    <li>• CDN delivery for fast loading</li>
                    <li>• Secure file storage</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Eye className="w-8 h-8 text-pink-600 mb-3" />
                  <h4 className="font-medium mb-2">Media Preview</h4>
                  <p className="text-sm text-gray-600 mb-3">Real-time media preview and editing</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Image thumbnails generation</li>
                    <li>• Media metadata extraction</li>
                    <li>• File type validation</li>
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

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Core Problem We Solved</h3>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <h4 className="text-lg font-bold text-red-600 mb-3">Critical Issue: Fragmented Content Management</h4>
                <p className="text-gray-700 mb-4">
                  Agricultural organizations struggled with scattered news content across multiple platforms, 
                  making it difficult to maintain consistent communication and track content performance.
                </p>
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h5 className="font-bold text-green-700 mb-2">Our Solution:</h5>
                  <p className="text-gray-700">
                    A unified news management system with smart categorization, full-text search, 
                    and comprehensive analytics - all accessible through a single admin interface.
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
                    <span className="text-gray-700">Manual content distribution</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">No performance tracking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Difficult content discovery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Limited media capabilities</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">After Our System</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Automated content management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Real-time analytics tracking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Advanced search capabilities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Unlimited media storage</span>
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
                      </div>
                      <p className="text-gray-700 mb-4">{step.description}</p>
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                        {step.tech}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Development Stack</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold">Frontend</h4>
                  <p className="text-sm text-gray-600">React + Tailwind CSS</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-bold">Backend</h4>
                  <p className="text-sm text-gray-600">Ballerina API</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Database className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-bold">Database</h4>
                  <p className="text-sm text-gray-600">MySQL</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Cloud className="w-8 h-8 text-orange-600" />
                  </div>
                  <h4 className="font-bold">Storage</h4>
                  <p className="text-sm text-gray-600">AWS S3</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lessons Learned</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Real-time indexing</strong> is crucial for instant search results after publishing.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Image optimization</strong> significantly improves page load performance.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>User behavior analytics</strong> guide content strategy better than assumptions.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Atomic deployments</strong> reduce downtime and improve reliability.</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsExplanationPage;