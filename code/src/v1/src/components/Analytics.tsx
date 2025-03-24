import React from 'react';
import { BarChart, PieChart, LineChart, Activity } from 'lucide-react';

const Analytics = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Analytics Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100">Total Incidents</p>
              <p className="text-3xl font-bold">2,547</p>
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <Activity className="w-6 h-6" />
            </div>
          </div>
          <p className="text-emerald-100 mt-2">↓ 15% from last month</p>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">Resolution Time</p>
              <p className="text-3xl font-bold">45m</p>
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <LineChart className="w-6 h-6" />
            </div>
          </div>
          <p className="text-blue-100 mt-2">↑ 8% improvement</p>
        </div>

        <div className="bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-violet-100">Success Rate</p>
              <p className="text-3xl font-bold">94%</p>
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <PieChart className="w-6 h-6" />
            </div>
          </div>
          <p className="text-violet-100 mt-2">↑ 3% improvement</p>
        </div>

        <div className="bg-gradient-to-br from-rose-500 to-rose-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-rose-100">Automation Rate</p>
              <p className="text-3xl font-bold">67%</p>
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <BarChart className="w-6 h-6" />
            </div>
          </div>
          <p className="text-rose-100 mt-2">↑ 12% from target</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6">Incident Categories</h2>
          <div className="space-y-4">
            {[
              { category: 'Infrastructure', count: 450, percentage: 35 },
              { category: 'Security', count: 320, percentage: 25 },
              { category: 'Performance', count: 280, percentage: 22 },
              { category: 'Configuration', count: 230, percentage: 18 },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.category}</span>
                  <span className="text-gray-500">{item.count} incidents</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6">Response Time Trends</h2>
          <div className="space-y-4">
            {[
              { period: 'Last 24 hours', time: '32m', trend: 'down' },
              { period: 'Last 7 days', time: '45m', trend: 'up' },
              { period: 'Last 30 days', time: '38m', trend: 'down' },
              { period: 'Last quarter', time: '41m', trend: 'stable' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b last:border-b-0">
                <span className="font-medium">{item.period}</span>
                <div className="flex items-center gap-4">
                  <span className="text-gray-500">{item.time}</span>
                  <span className={`${
                    item.trend === 'down' ? 'text-green-500' :
                    item.trend === 'up' ? 'text-red-500' :
                    'text-gray-500'
                  }`}>
                    {item.trend === 'down' ? '↓' :
                     item.trend === 'up' ? '↑' :
                     '→'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;