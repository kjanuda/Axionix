import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download, ExternalLink, Eye, FileText } from 'lucide-react';

const IntroPDFViewer = () => {
  const [zoom, setZoom] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5); // Estimated
  const [isLoading, setIsLoading] = useState(true);

  // Your Google Drive PDF ID from the link
  const pdfFileId = '1Fln_Lrxks04EgesS2v9nvtqhk9VFTwPC';
  const pdfPreviewUrl = `https://drive.google.com/file/d/${pdfFileId}/preview`;
  const pdfDownloadUrl = `https://drive.google.com/uc?export=download&id=${pdfFileId}`;

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const zoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 150));
  };

  const zoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 75));
  };

  const nextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              
              <div>
                <h1 className="text-xl font-bold text-gray-900">Documentation</h1>
                
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              
              <a
                href={pdfDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Navigation */}
            <div className="flex items-center space-x-3">
              
              
              <div className="px-4 py-2 bg-gray-100 rounded-lg">
                
              </div>
              
             
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center space-x-3">
              <button
                onClick={zoomOut}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              
              <div className="px-3 py-2 bg-gray-100 rounded-lg min-w-16 text-center">
                <span className="text-sm font-medium text-gray-700">{zoom}%</span>
              </div>
              
              <button
                onClick={zoomIn}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <a
                href={`https://drive.google.com/file/d/${pdfFileId}/view`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                title="Open in new tab"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Full View
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Viewer Container */}
      <div className="flex-1 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-600 border-t-transparent"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Loading Introduction PDF...</h3>
                <p className="text-gray-500">Please wait while we prepare the document</p>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* PDF Embed Container */}
              <div 
                className="relative overflow-auto"
                style={{
                  transform: `scale(${zoom / 100})`,
                  transformOrigin: 'center top',
                }}
              >
                <iframe
                  src={pdfPreviewUrl}
                  className="w-full border-0"
                  style={{
                    height: '80vh',
                    minHeight: '600px',
                  }}
                  title="Introduction PDF Preview"
                  loading="lazy"
                />
              </div>
              
              {/* Footer Info */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <FileText className="w-4 h-4" />
                    <span>Introduction </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Click "Full View" or "Download PDF" for better quality
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in learning more?</h2>
            
            <div className="flex items-center justify-center space-x-4">
              <a
                href={pdfDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm font-medium"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Full PDF
              </a>
              <a
                href={`https://drive.google.com/file/d/${pdfFileId}/view`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Open in Drive
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPDFViewer;