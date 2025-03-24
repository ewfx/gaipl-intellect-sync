import React from 'react';
import { useStore } from '../store/useStore';
import { 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  ArrowUpCircle
} from 'lucide-react';

export function Dashboard() {
  const { incidents, telemetryData } = useStore();

  const stats = [
    {
      label: 'Open Incidents',
      value: incidents.filter(i => i.status === 'open').length,
      icon: AlertCircle,
      color: 'text-red-500',
    },
    {
      label: 'In Progress',
      value: incidents.filter(i => i.status === 'in-progress').length,
      icon: Clock,
      color: 'text-yellow-500',
    },
    {
      label: 'Resolved',
      value: incidents.filter(i => i.status === 'resolved').length,
      icon: CheckCircle2,
      color: 'text-green-500',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white p-6 rounded-lg shadow-sm border"
            >
              <div className="flex items-center">
                <Icon className={`w-8 h-8 ${stat.color}`} />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Incidents */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900">Recent Incidents</h3>
          <div className="mt-6 space-y-4">
            {incidents.slice(0, 5).map((incident) => (
              <div
                key={incident.id}
                className="flex items-center p-4 bg-gray-50 rounded-lg"
              >
                {incident.priority === 'critical' && (
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                )}
                {incident.priority === 'high' && (
                  <ArrowUpCircle className="w-5 h-5 text-orange-500" />
                )}
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    {incident.title}
                  </p>
                  <p className="text-sm text-gray-500">{incident.description}</p>
                </div>
                <div className="ml-auto">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      incident.status === 'open'
                        ? 'bg-red-100 text-red-800'
                        : incident.status === 'in-progress'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {incident.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Health */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-medium text-gray-900">System Health</h3>
        <div className="mt-6">
          {/* Add system health metrics visualization here */}
          <p className="text-sm text-gray-500">
            System health metrics and telemetry data visualization will be displayed here
          </p>
        </div>
      </div>
    </div>
  );
}