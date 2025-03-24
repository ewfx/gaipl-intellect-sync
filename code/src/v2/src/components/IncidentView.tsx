import React from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { AlertTriangle, Clock, CheckCircle } from 'lucide-react';

export function IncidentView() {
  const { id } = useParams();
  const { incidents } = useStore();
  const incident = incidents.find(i => i.id === id);

  if (!incident) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-12rem)]">
        <div className="text-center">
          <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900">Incident Not Found</h2>
          <p className="mt-2 text-gray-600">The incident you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const getStatusIcon = () => {
    switch (incident.status) {
      case 'open':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'resolved':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {getStatusIcon()}
              <h2 className="text-xl font-semibold text-gray-900">{incident.title}</h2>
            </div>
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                incident.priority === 'critical'
                  ? 'bg-red-100 text-red-800'
                  : incident.priority === 'high'
                  ? 'bg-orange-100 text-orange-800'
                  : incident.priority === 'medium'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-green-100 text-green-800'
              }`}
            >
              {incident.priority}
            </span>
          </div>
          
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Description</h3>
            <p className="mt-2 text-sm text-gray-600">{incident.description}</p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Created</h3>
              <p className="mt-1 text-sm text-gray-600">
                {new Date(incident.createdAt).toLocaleString()}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Last Updated</h3>
              <p className="mt-1 text-sm text-gray-600">
                {new Date(incident.updatedAt).toLocaleString()}
              </p>
            </div>
          </div>

          {incident.assignedTo && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Assigned To</h3>
              <p className="mt-1 text-sm text-gray-600">{incident.assignedTo}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}