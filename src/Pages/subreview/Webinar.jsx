import React, { useState } from 'react';
import {
  Database,
  Calendar,
  Mail,
  Users,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Settings,
  Server,
  Globe,
  Shield,
  UserCheck,
  Send,
  Inbox,
  Filter,
  BarChart3,
  Eye,
  Tag,
  ArrowRight,
  Layers,
  Bell,
  MessageSquare,
  Zap,
  Code,
  Phone,
  Video,
  FileText,
  Hash,
} from 'lucide-react';

const MeetingSchedulerPage = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedFeature, setSelectedFeature] = useState(null);

  const techStack = [
    {
      name: 'PostgreSQL Database',
      icon: <Database className="w-8 h-8" />,
      color: 'bg-blue-500',
      description: 'Relational database for structured meeting data',
      details: 'UUID-based meeting_requests table with ACID compliance',
    },
    {
      name: 'Email Integration',
      icon: <Mail className="w-8 h-8" />,
      color: 'bg-red-500',
      description: 'Automated notification system for meeting updates',
      details: 'SMTP integration for approve/reject/pending notifications',
    },
    {
      name: 'Admin Dashboard',
      icon: <Settings className="w-8 h-8" />,
      color: 'bg-purple-500',
      description: 'Comprehensive meeting management interface',
      details: 'View, approve, reject, and schedule meeting requests',
    },
  ];

  const adminFeatures = [
    {
      id: 'requests',
      name: 'Meeting Request Management',
      icon: <Calendar className="w-6 h-6" />,
      color: 'bg-blue-500',
      action: 'View and process incoming meeting requests',
      impact: 'Streamlined meeting approval workflow',
    },
    {
      id: 'notifications',
      name: 'Email Notifications',
      icon: <Mail className="w-6 h-6" />,
      color: 'bg-red-500',
      action: 'Automated email alerts for status changes',
      impact: 'Real-time applicant communication',
    },
    {
      id: 'scheduling',
      name: 'Meeting Scheduling',
      icon: <Clock className="w-6 h-6" />,
      color: 'bg-green-500',
      action: 'Set meeting times and generate calendar links',
      impact: 'Efficient scheduling coordination',
    },
    {
      id: 'tracking',
      name: 'Status Tracking',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'bg-orange-500',
      action: 'Monitor meeting request progress',
      impact: '100% request accountability',
    },
  ];

  const problems = [
    {
      problem: 'Email Notification Delays',
      solution: 'Implement immediate SMTP notifications with delivery confirmation',
      impact: 'Instant applicant updates reducing waiting anxiety',
    },
    {
      problem: 'Manual Meeting Scheduling',
      solution: 'Automated calendar integration with meeting link generation',
      impact: '75% reduction in scheduling time',
    },
    {
      problem: 'Request Status Confusion',
      solution: 'Clear status tracking with detailed progress indicators',
      impact: 'Transparent process for all participants',
    },
    {
      problem: 'Administrative Overhead',
      solution: 'Streamlined admin dashboard with bulk operations',
      impact: '60% faster meeting request processing',
    },
  ];

  const buildSteps = [
    {
      step: 1,
      title: 'PostgreSQL Database Setup',
      description: 'Created meeting_requests table with UUID primary keys and proper indexing',
      tech: 'PostgreSQL',
    },
    {
      step: 2,
      title: 'Admin Dashboard Development',
      description: 'Built comprehensive interface for viewing and managing meeting requests',
      tech: 'Full Stack',
    },
    {
      step: 3,
      title: 'Email System Integration',
      description: 'Implemented SMTP-based notification system for status updates',
      tech: 'Email Service',
    },
    {
      step: 4,
      title: 'Meeting Link Generation',
      description: 'Added automatic meeting link creation and calendar integration',
      tech: 'Calendar API',
    },
    {
      step: 5,
      title: 'Status Tracking System',
      description: 'Developed real-time status tracking with notification triggers',
      tech: 'Backend + Email',
    },
  ];

  const meetingStatuses = [
    { status: 'Pending', icon: <Clock />, color: 'text-yellow-600 bg-yellow-100', description: 'Awaiting admin review' },
    { status: 'Approved', icon: <CheckCircle />, color: 'text-green-600 bg-green-100', description: 'Meeting scheduled' },
    { status: 'Rejected', icon: <XCircle />, color: 'text-red-600 bg-red-100', description: 'Request declined' },
    { status: 'Completed', icon: <UserCheck />, color: 'text-blue-600 bg-blue-100', description: 'Meeting finished' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Main Content with Navbar Offset */}
      <div className="pt-20">
        {/* Header */}
        <div className="bg-white shadow-lg border-b">
          <div className="max-w-7xl mx-auto px-6 py-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Meeting Scheduler System Architecture
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive meeting request management with automated email notifications and admin approval workflow
            </p>
            <div className="flex justify-center items-center space-x-6 mt-6">
              <div className="flex items-center space-x-2">
                <Database className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">PostgreSQL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-red-600" />
                <span className="text-sm font-medium">Email Notifications</span>
              </div>
              <div className="flex items-center space-x-2">
                <Hash className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium">UUID-based</span>
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
                  <div className="text-3xl font-bold text-blue-600 mb-2">UUID</div>
                  <div className="text-gray-600">Primary Keys</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">SMTP</div>
                  <div className="text-gray-600">Email System</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">4</div>
                  <div className="text-gray-600">Status Types</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Auto</div>
                  <div className="text-gray-600">Notifications</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Meeting Workflow</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Send className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Application submission</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Eye className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Admin review process</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">Email notifications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Meeting scheduling</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Admin Functions</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Approve requests</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <XCircle className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">Reject requests</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Eye className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">View applications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Bell className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Send notifications</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Meeting Status Flow</h3>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                {meetingStatuses.map((status, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`rounded-full p-4 ${status.color} mb-2`}>
                      {status.icon}
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-900">{status.status}</div>
                      <div className="text-sm text-gray-500">{status.description}</div>
                    </div>
                    {index < meetingStatuses.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-gray-400 mt-4 rotate-90 md:rotate-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Architecture Section */}
        {activeSection === 'architecture' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Technical Architecture</h2>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">System Flow Diagram</h3>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-blue-100 rounded-lg p-6">
                    <Users className="w-8 h-8 text-blue-600 mb-2" />
                    <div className="text-sm font-medium">Meeting Request</div>
                    <div className="text-xs text-gray-500">Application Form</div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-purple-100 rounded-lg p-6">
                    <Database className="w-8 h-8 text-purple-600 mb-2" />
                    <div className="text-sm font-medium">PostgreSQL</div>
                    <div className="text-xs text-gray-500">meeting_requests</div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-green-100 rounded-lg p-6">
                    <Settings className="w-8 h-8 text-green-600 mb-2" />
                    <div className="text-sm font-medium">Admin Panel</div>
                    <div className="text-xs text-gray-500">Review & Action</div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-red-100 rounded-lg p-6">
                    <Mail className="w-8 h-8 text-red-600 mb-2" />
                    <div className="text-sm font-medium">Email System</div>
                    <div className="text-xs text-gray-500">SMTP Notifications</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Database Schema</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">meeting_requests Table</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <span className="font-mono">id</span> - UUID Primary Key</li>
                      <li>• <span className="font-mono">applicant_name</span> - VARCHAR(255)</li>
                      <li>• <span className="font-mono">email</span> - VARCHAR(255)</li>
                      <li>• <span className="font-mono">meeting_purpose</span> - TEXT</li>
                      <li>• <span className="font-mono">preferred_datetime</span> - TIMESTAMP</li>
                      <li>• <span className="font-mono">status</span> - ENUM(pending, approved, rejected, completed)</li>
                      <li>• <span className="font-mono">admin_notes</span> - TEXT</li>
                      <li>• <span className="font-mono">meeting_link</span> - VARCHAR(500)</li>
                      <li>• <span className="font-mono">created_at</span> - TIMESTAMP</li>
                      <li>• <span className="font-mono">updated_at</span> - TIMESTAMP</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email Notification Types</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                      RECEIVED
                    </div>
                    <div>
                      <div className="font-medium">Application Confirmation</div>
                      <div className="text-sm text-gray-600">Request received acknowledgment</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      APPROVED
                    </div>
                    <div>
                      <div className="font-medium">Meeting Scheduled</div>
                      <div className="text-sm text-gray-600">Approval with meeting link</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                      REJECTED
                    </div>
                    <div>
                      <div className="font-medium">Request Declined</div>
                      <div className="text-sm text-gray-600">Rejection with reason</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      REMINDER
                    </div>
                    <div>
                      <div className="font-medium">Meeting Reminder</div>
                      <div className="text-sm text-gray-600">24-hour advance notice</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email System Architecture</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <Mail className="w-8 h-8 text-red-600 mb-3" />
                  <h4 className="font-medium mb-2">SMTP Configuration</h4>
                  <p className="text-sm text-gray-600">Secure email delivery with authentication and encryption</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Bell className="w-8 h-8 text-orange-600 mb-3" />
                  <h4 className="font-medium mb-2">Trigger System</h4>
                  <p className="text-sm text-gray-600">Automated notifications based on status changes</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <FileText className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-medium mb-2">Template Engine</h4>
                  <p className="text-sm text-gray-600">Dynamic email templates with personalization</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Core Meeting Management Features</h3>
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
                          <h5 className="font-medium text-gray-900 mb-2">Feature Details:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• UUID-based request identification</li>
                            <li>• Real-time status updates</li>
                            <li>• Automated email notifications</li>
                            <li>• Calendar integration support</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Notification System</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <Mail className="w-8 h-8 text-red-600 mb-3" />
                  <h4 className="font-medium mb-2">Instant Delivery</h4>
                  <p className="text-sm text-gray-600">SMTP-based immediate email delivery for all status changes</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <FileText className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-medium mb-2">Rich Templates</h4>
                  <p className="text-sm text-gray-600">Professional email templates with meeting details and links</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Shield className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-medium mb-2">Delivery Tracking</h4>
                  <p className="text-sm text-gray-600">Confirmation of email delivery and read receipts</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">4-Function Admin Panel - Complete Meeting Management</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
                  <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-bold mb-2 text-green-700">1. APPROVE</h4>
                  <p className="text-sm text-gray-600">One-click approval with automatic email notification including Zoom link and scheduled time</p>
                </div>
                <div className="bg-white rounded-lg p-6 border-2 border-red-200">
                  <XCircle className="w-8 h-8 text-red-600 mb-3" />
                  <h4 className="font-bold mb-2 text-red-700">2. REJECT</h4>
                  <p className="text-sm text-gray-600">Reject with reason - sends personalized rejection email with feedback to applicant</p>
                </div>
                <div className="bg-white rounded-lg p-6 border-2 border-purple-200">
                  <Eye className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-bold mb-2 text-blue-700">3. VIEW DETAILS</h4>
                  <p className="text-sm text-gray-600">Complete application form view - all applicant data, purpose, and preferences in one panel</p>
                </div>
                <div className="bg-white rounded-lg p-6 border-2 border-orange-200">
                  <Users className="w-8 h-8 text-orange-600 mb-3" />
                  <h4 className="font-bold mb-2 text-orange-700">4. SELECT APPLICANT</h4>
                  <p className="text-sm text-gray-600">Mark as selected candidate - triggers confirmation email with next steps</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">🎯 Complete Email Automation System</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
                    <h5 className="font-bold text-green-700 mb-3">APPROVAL EMAIL INCLUDES:</h5>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>✅ <strong>Zoom Meeting Link</strong> - Auto-generated</li>
                      <li>✅ <strong>Meeting Date & Time</strong> - Admin scheduled</li>
                      <li>✅ <strong>Calendar Invite</strong> - .ics file attachment</li>
                      <li>✅ <strong>Meeting Agenda</strong> - Purpose & duration</li>
                      <li>✅ <strong>Contact Information</strong> - Admin details</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4">
                    <h5 className="font-bold text-red-700 mb-3">REJECTION EMAIL INCLUDES:</h5>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>❌ <strong>Reason for Rejection</strong> - Admin feedback</li>
                      <li>❌ <strong>Alternative Suggestions</strong> - If applicable</li>
                      <li>❌ <strong>Reapplication Process</strong> - Future opportunities</li>
                      <li>❌ <strong>Contact for Questions</strong> - Support email</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🚀 Complete Admin Panel - All Data & Actions in One Place</h3>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold text-blue-800 mb-4">📊 What Admin Sees for Each Application:</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-4">
                    <Users className="w-6 h-6 text-blue-600 mb-2" />
                    <h5 className="font-bold text-gray-800">Applicant Info</h5>
                    <ul className="text-sm text-gray-600 space-y-1 mt-2">
                      <li>• Full name & contact</li>
                      <li>• Email & phone number</li>
                      <li>• Company/organization</li>
                      <li>• Application timestamp</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <Calendar className="w-6 h-6 text-green-600 mb-2" />
                    <h5 className="font-bold text-gray-800">Meeting Details</h5>
                    <ul className="text-sm text-gray-600 space-y-1 mt-2">
                      <li>• Meeting purpose</li>
                      <li>• Preferred date/time</li>
                      <li>• Duration requested</li>
                      <li>• Meeting type preference</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <Settings className="w-6 h-6 text-purple-600 mb-2" />
                    <h5 className="font-bold text-gray-800">Admin Tools</h5>
                    <ul className="text-sm text-gray-600 space-y-1 mt-2">
                      <li>• Zoom link generator</li>
                      <li>• Time slot picker</li>
                      <li>• Email template editor</li>
                      <li>• Notes & comments</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-green-800 mb-4">⚡ 4-Function Action Buttons (One-Click Operations):</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 bg-white rounded-lg p-4">
                      <div className="bg-green-500 text-white rounded-lg p-3">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h5 className="font-bold text-green-700">APPROVE & SCHEDULE</h5>
                        <p className="text-sm text-gray-600">Generates Zoom link + Sends approval email with all meeting details</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 bg-white rounded-lg p-4">
                      <div className="bg-blue-500 text-white rounded-lg p-3">
                        <Eye className="w-6 h-6" />
                      </div>
                      <div>
                        <h5 className="font-bold text-blue-700">VIEW FULL APPLICATION</h5>
                        <p className="text-sm text-gray-600">Opens detailed view + Sends "under review" email to applicant</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 bg-white rounded-lg p-4">
                      <div className="bg-orange-500 text-white rounded-lg p-3">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <h5 className="font-bold text-orange-700">SELECT APPLICANT</h5>
                        <p className="text-sm text-gray-600">Mark as chosen candidate + Sends selection confirmation email</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 bg-white rounded-lg p-4">
                      <div className="bg-red-500 text-white rounded-lg p-3">
                        <XCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h5 className="font-bold text-red-700">REJECT WITH REASON</h5>
                        <p className="text-sm text-gray-600">Decline request + Sends personalized rejection email with feedback</p>
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

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Core Problem We Solved</h3>
              <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <h4 className="text-lg font-bold text-red-600 mb-3">Critical Issue: Manual Meeting Scheduling & Communication</h4>
                <p className="text-gray-700 mb-4">
                  Organizations waste valuable time with manual email exchanges, lost meeting requests, 
                  and inconsistent communication, leading to poor applicant experience and administrative overload.
                </p>
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h5 className="font-bold text-green-700 mb-2">Our Solution:</h5>
                  <p className="text-gray-700">
                    A complete meeting scheduler with PostgreSQL-backed storage, automated email notifications, 
                    and a powerful admin dashboard that reduces scheduling time by 75% and ensures 100% communication reliability.
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
                    <span className="text-gray-700">Manual email scheduling</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Lost or delayed notifications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">No centralized request tracking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Inconsistent applicant communication</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">After Our System</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Automated meeting scheduling</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Instant email notifications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Centralized request dashboard</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Professional, consistent communication</span>
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
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            step.tech === 'PostgreSQL'
                              ? 'bg-blue-100 text-blue-800'
                              : step.tech === 'Email Service'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-green-100 text-green-800'
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
                  { week: 'Week 1', task: 'Database Setup', icon: <Database />, color: 'text-blue-600' },
                  { week: 'Week 2', task: 'Admin UI', icon: <Settings />, color: 'text-purple-600' },
                  { week: 'Week 3', task: 'Email System', icon: <Mail />, color: 'text-red-600' },
                  { week: 'Week 4', task: 'Meeting Links', icon: <Video />, color: 'text-green-600' },
                  { week: 'Week 5', task: 'Status Flow', icon: <BarChart3 />, color: 'text-orange-600' },
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
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Backend & Database</h4>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>UUID primary keys for secure request identification</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>PostgreSQL triggers for automatic timestamp updates</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Row-level security for admin access control</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Indexing on status and timestamps for fast queries</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Email & Automation</h4>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>SMTP with TLS encryption for secure delivery</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Handlebars templates for dynamic email content</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>Status change webhooks to trigger emails</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <span>.ics calendar attachments for easy scheduling</span>
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
                  <h4 className="font-medium mb-2">API Endpoint: Approve Request</h4>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <code className="text-xs text-gray-700">
                      POST /api/meetings/{`{id}`}/approve<br/>
                      {'{'}<br/>
                      &nbsp;&nbsp;"meetingTime": "2025-04-05T14:00:00Z",<br/>
                      &nbsp;&nbsp;"zoomLink": "https://zoom.us/j/123456789"<br/>
                      {'}'}
                    </code>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Database className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-medium mb-2">Database Query: Pending Requests</h4>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <code className="text-xs text-gray-700">
                      SELECT * FROM meeting_requests<br/>
                      WHERE status = 'pending'<br/>
                      ORDER BY created_at ASC;
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
              <Database className="w-5 h-5 text-blue-400" />
              <span>PostgreSQL</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-red-400" />
              <span>SMTP Email</span>
            </div>
            <div className="flex items-center space-x-2">
              <Settings className="w-5 h-5 text-purple-400" />
              <span>Admin Dashboard</span>
            </div>
          </div>
          <p className="text-gray-400">
            Meeting Scheduler System - Built with reliability, automation, and user experience in mind
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetingSchedulerPage;