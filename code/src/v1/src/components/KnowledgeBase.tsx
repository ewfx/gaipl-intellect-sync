import React from 'react';
import { Book, FileText, Search, Tag } from 'lucide-react';

const KnowledgeBase = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Knowledge Base</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-96 px-4 py-2 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Book className="w-6 h-6" />
            <h2 className="text-xl font-semibold">Getting Started</h2>
          </div>
          <p className="text-blue-100 mb-4">Essential guides and documentation for new users</p>
          <span className="text-sm bg-white/20 px-3 py-1 rounded-full">12 articles</span>
        </div>

        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6" />
            <h2 className="text-xl font-semibold">Troubleshooting</h2>
          </div>
          <p className="text-indigo-100 mb-4">Common issues and their solutions</p>
          <span className="text-sm bg-white/20 px-3 py-1 rounded-full">24 articles</span>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Tag className="w-6 h-6" />
            <h2 className="text-xl font-semibold">Best Practices</h2>
          </div>
          <p className="text-purple-100 mb-4">Recommended approaches and guidelines</p>
          <span className="text-sm bg-white/20 px-3 py-1 rounded-full">18 articles</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">Recent Articles</h2>
        <div className="space-y-6">
          {[
            {
              title: 'Understanding System Metrics',
              category: 'Monitoring',
              date: '2024-03-15',
              views: 1234
            },
            {
              title: 'Common Database Issues',
              category: 'Troubleshooting',
              date: '2024-03-14',
              views: 856
            },
            {
              title: 'Security Best Practices',
              category: 'Security',
              date: '2024-03-13',
              views: 2145
            },
            {
              title: 'Performance Optimization Guide',
              category: 'Best Practices',
              date: '2024-03-12',
              views: 1567
            },
          ].map((article, index) => (
            <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="space-y-1">
                <h3 className="font-medium text-lg text-gray-900">{article.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span>Updated: {article.date}</span>
                  <span>{article.views} views</span>
                </div>
              </div>
              <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;