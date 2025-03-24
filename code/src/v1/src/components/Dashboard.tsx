import React from 'react';
import { Activity, Users, Server, Clock } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Platform Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">Active Users</p>
              <p className="text-3xl font-bold">1,234</p>
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <Users className="w-6 h-6" />
            </div>
          </div>
          <p className="text-blue-100 mt-2">↑ 12% from last week</p>
        </div>

        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-indigo-100">System Health</p>
              <p className="text-3xl font-bold">98%</p>
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <Activity className="w-6 h-6" />
            </div>
          </div>
          <p className="text-indigo-100 mt-2">All systems operational</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">Server Load</p>
              <p className="text-3xl font-bold">76%</p>
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <Server className="w-6 h-6" />
            </div>
          </div>
          <p className="text-purple-100 mt-2">Normal operating range</p>
        </div>

        <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-pink-100">Response Time</p>
              <p className="text-3xl font-bold">124ms</p>
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <Clock className="w-6 h-6" />
            </div>
          </div>
          <p className="text-pink-100 mt-2">↓ 8% improvement</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { time: '2 minutes ago', event: 'New incident reported', type: 'alert' },
              { time: '15 minutes ago', event: 'System backup completed', type: 'success' },
              { time: '1 hour ago', event: 'Performance check initiated', type: 'info' },
              { time: '2 hours ago', event: 'Security scan completed', type: 'success' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'alert' ? 'bg-red-500' :
                    activity.type === 'success' ? 'bg-green-500' :
                    'bg-blue-500'
                  }`}></div>
                  <span>{activity.event}</span>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">System Status</h2>
          <div className="space-y-4">
            {[
              { name: 'API Gateway', status: 'Operational', uptime: '99.9%' },
              { name: 'Database Cluster', status: 'Operational', uptime: '99.9%' },
              { name: 'Authentication Service', status: 'Degraded', uptime: '95.5%' },
              { name: 'Storage Service', status: 'Operational', uptime: '99.9%' },
            ].map((service, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    service.status === 'Operational' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}></div>
                  <span>{service.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-sm ${
                    service.status === 'Operational' ? 'text-green-600' : 'text-yellow-600'
                  }`}>
                    {service.status}
                  </span>
                  <span className="text-sm text-gray-500">{service.uptime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;