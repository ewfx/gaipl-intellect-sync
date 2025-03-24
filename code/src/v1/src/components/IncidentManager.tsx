import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Clock, ArrowUpRight, Plus, X } from 'lucide-react';

interface Incident {
  id: string;
  title: string;
  status: 'critical' | 'warning' | 'resolved';
  time: string;
  system: string;
  description?: string;
}

const initialIncidents: Incident[] = [
  {
    id: 'INC-001',
    title: 'Database Connection Failure',
    status: 'critical',
    time: '10 min ago',
    system: 'Payment Gateway',
    description: 'Multiple timeout errors observed in database connections'
  },
  {
    id: 'INC-002',
    title: 'High CPU Usage',
    status: 'warning',
    time: '1 hour ago',
    system: 'Auth Service',
    description: 'CPU utilization peaked at 95% for over 15 minutes'
  },
  {
    id: 'INC-003',
    title: 'Memory Leak Detected',
    status: 'resolved',
    time: '2 hours ago',
    system: 'User Service',
    description: 'Memory usage gradually increased over time'
  },
];

const IncidentManager = () => {
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);
  const [showNewIncidentModal, setShowNewIncidentModal] = useState(false);
  const [newIncident, setNewIncident] = useState<Partial<Incident>>({
    status: 'warning',
    time: 'Just now'
  });

  const handleCreateIncident = () => {
    if (!newIncident.title || !newIncident.system) return;

    const incident: Incident = {
      id: `INC-${String(incidents.length + 1).padStart(3, '0')}`,
      title: newIncident.title,
      status: newIncident.status as 'critical' | 'warning' | 'resolved',
      time: newIncident.time || 'Just now',
      system: newIncident.system,
      description: newIncident.description
    };

    setIncidents(prev => [incident, ...prev]);
    setShowNewIncidentModal(false);
    setNewIncident({ status: 'warning', time: 'Just now' });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Active Incidents</h2>
        <button 
          onClick={() => setShowNewIncidentModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          New Incident
        </button>
      </div>

      <div className="space-y-4">
        {incidents.map((incident) => (
          <div
            key={incident.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {incident.status === 'critical' && (
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  )}
                  {incident.status === 'warning' && (
                    <AlertCircle className="w-5 h-5 text-yellow-500" />
                  )}
                  {incident.status === 'resolved' && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                  <span className="font-medium">{incident.id}</span>
                </div>
                <h3 className="text-lg font-medium">{incident.title}</h3>
                {incident.description && (
                  <p className="text-gray-600">{incident.description}</p>
                )}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {incident.time}
                  </span>
                  <span>{incident.system}</span>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <ArrowUpRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {showNewIncidentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Create New Incident</h3>
              <button 
                onClick={() => setShowNewIncidentModal(false)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={newIncident.title || ''}
                  onChange={(e) => setNewIncident(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter incident title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  System
                </label>
                <input
                  type="text"
                  value={newIncident.system || ''}
                  onChange={(e) => setNewIncident(prev => ({ ...prev, system: e.target.value }))}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter affected system"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  value={newIncident.status}
                  onChange={(e) => setNewIncident(prev => ({ ...prev, status: e.target.value as 'critical' | 'warning' | 'resolved' }))}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="critical">Critical</option>
                  <option value="warning">Warning</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={newIncident.description || ''}
                  onChange={(e) => setNewIncident(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Enter incident description"
                />
              </div>
              <button
                onClick={handleCreateIncident}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Create Incident
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IncidentManager;