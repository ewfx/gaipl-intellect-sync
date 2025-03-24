import React, { useState, useEffect } from 'react';
import { Activity, Server, Database, Globe, RefreshCw } from 'lucide-react';

interface MetricData {
  value: string | number;
  trend: 'up' | 'down' | 'stable';
  change: number;
}

interface SystemHealth {
  name: string;
  status: 'healthy' | 'warning' | 'critical';
  uptime: string;
  lastIncident?: string;
}

const TelemetryDashboard = () => {
  const [metrics, setMetrics] = useState({
    cpu: { value: '78%', trend: 'up' as const, change: 5 },
    memory: { value: '6.2GB', trend: 'stable' as const, change: 0 },
    connections: { value: 142, trend: 'down' as const, change: 3 },
    traffic: { value: '2.4GB/s', trend: 'up' as const, change: 8 }
  });

  const [systems, setSystems] = useState<SystemHealth[]>([
    { name: 'API Gateway', status: 'healthy', uptime: '99.9%', lastIncident: '7 days ago' },
    { name: 'Auth Service', status: 'warning', uptime: '99.5%', lastIncident: '2 hours ago' },
    { name: 'Database Cluster', status: 'healthy', uptime: '99.9%', lastIncident: '14 days ago' },
    { name: 'Cache Layer', status: 'healthy', uptime: '99.9%', lastIncident: '30 days ago' }
  ]);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshMetrics = () => {
    setIsRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setMetrics(prev => ({
        cpu: { 
          value: `${Math.floor(Math.random() * 20 + 70)}%`,
          trend: Math.random() > 0.5 ? 'up' : 'down',
          change: Math.floor(Math.random() * 10)
        },
        memory: {
          value: `${(Math.random() * 2 + 5).toFixed(1)}GB`,
          trend: Math.random() > 0.5 ? 'up' : 'stable',
          change: Math.floor(Math.random() * 5)
        },
        connections: {
          value: Math.floor(Math.random() * 50 + 100),
          trend: Math.random() > 0.5 ? 'down' : 'stable',
          change: Math.floor(Math.random() * 8)
        },
        traffic: {
          value: `${(Math.random() * 1 + 2).toFixed(1)}GB/s`,
          trend: Math.random() > 0.5 ? 'up' : 'down',
          change: Math.floor(Math.random() * 12)
        }
      }));
      setIsRefreshing(false);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(refreshMetrics, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">System Metrics</h2>
        <button
          onClick={refreshMetrics}
          disabled={isRefreshing}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">CPU Usage</p>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-semibold">{metrics.cpu.value}</p>
                <span className={`text-sm ${
                  metrics.cpu.trend === 'up' ? 'text-red-500' : 
                  metrics.cpu.trend === 'down' ? 'text-green-500' : 
                  'text-gray-500'
                }`}>
                  {metrics.cpu.change}%
                </span>
              </div>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Server className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Memory Usage</p>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-semibold">{metrics.memory.value}</p>
                <span className={`text-sm ${
                  metrics.memory.trend === 'up' ? 'text-red-500' : 
                  metrics.memory.trend === 'down' ? 'text-green-500' : 
                  'text-gray-500'
                }`}>
                  {metrics.memory.change}%
                </span>
              </div>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Activity className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Database Connections</p>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-semibold">{metrics.connections.value}</p>
                <span className={`text-sm ${
                  metrics.connections.trend === 'up' ? 'text-red-500' : 
                  metrics.connections.trend === 'down' ? 'text-green-500' : 
                  'text-gray-500'
                }`}>
                  {metrics.connections.change}%
                </span>
              </div>
            </div>
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <Database className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Network Traffic</p>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-semibold">{metrics.traffic.value}</p>
                <span className={`text-sm ${
                  metrics.traffic.trend === 'up' ? 'text-red-500' : 
                  metrics.traffic.trend === 'down' ? 'text-green-500' : 
                  'text-gray-500'
                }`}>
                  {metrics.traffic.change}%
                </span>
              </div>
            </div>
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <Globe className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">System Health Overview</h2>
        <div className="space-y-4">
          {systems.map((service) => (
            <div key={service.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${
                  service.status === 'healthy' ? 'bg-green-500' :
                  service.status === 'warning' ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}></div>
                <span>{service.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">{service.uptime} uptime</span>
                {service.lastIncident && (
                  <span className="text-sm text-gray-500">Last incident: {service.lastIncident}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TelemetryDashboard;