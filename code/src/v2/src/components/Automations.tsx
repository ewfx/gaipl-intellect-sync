import React from 'react';
import { Play, Pause, CheckCircle, XCircle } from 'lucide-react';
import type { AutomationScript } from '../types';

export function Automations() {
  const [scripts, setScripts] = React.useState<AutomationScript[]>([
    {
      id: '1',
      name: 'Health Check',
      description: 'Run system health check across all services',
      type: 'ansible',
      status: 'available',
    },
    {
      id: '2',
      name: 'Log Analysis',
      description: 'Analyze system logs for errors and warnings',
      type: 'python',
      status: 'available',
    },
    {
      id: '3',
      name: 'Backup Verification',
      description: 'Verify backup integrity and accessibility',
      type: 'shell',
      status: 'available',
    },
  ]);

  const handleRunScript = (scriptId: string) => {
    setScripts(scripts.map(script => {
      if (script.id === scriptId) {
        return { ...script, status: 'running' };
      }
      return script;
    }));

    // Simulate script completion
    setTimeout(() => {
      setScripts(scripts.map(script => {
        if (script.id === scriptId) {
          return { ...script, status: Math.random() > 0.2 ? 'completed' : 'failed' };
        }
        return script;
      }));
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900">Automation Scripts</h2>
          <div className="mt-6 space-y-4">
            {scripts.map((script) => (
              <div
                key={script.id}
                className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {script.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {script.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        script.status === 'available'
                          ? 'bg-gray-100 text-gray-800'
                          : script.status === 'running'
                          ? 'bg-yellow-100 text-yellow-800'
                          : script.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {script.status === 'available' && 'Ready'}
                      {script.status === 'running' && 'Running'}
                      {script.status === 'completed' && 'Completed'}
                      {script.status === 'failed' && 'Failed'}
                    </span>
                    {script.status === 'available' && (
                      <button
                        onClick={() => handleRunScript(script.id)}
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <Play className="w-4 h-4 mr-1" />
                        Run
                      </button>
                    )}
                    {script.status === 'running' && (
                      <button
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                      >
                        <Pause className="w-4 h-4 mr-1" />
                        Stop
                      </button>
                    )}
                    {script.status === 'completed' && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                    {script.status === 'failed' && (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}