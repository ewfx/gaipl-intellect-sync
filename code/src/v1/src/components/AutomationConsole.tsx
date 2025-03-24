import React, { useState } from 'react';
import { Play, RefreshCw, AlertCircle, CheckCircle, Terminal, FileText } from 'lucide-react';

interface Automation {
  id: string;
  name: string;
  description: string;
  status: 'ready' | 'running' | 'completed' | 'failed';
  output?: string;
  duration?: string;
}

const AutomationConsole = () => {
  const [automations, setAutomations] = useState<Automation[]>([
    {
      id: 'auto-1',
      name: 'Health Check',
      description: 'Run comprehensive health check across all services',
      status: 'ready',
    },
    {
      id: 'auto-2',
      name: 'Log Analysis',
      description: 'Analyze system logs for potential issues',
      status: 'running',
      output: 'Analyzing logs from the last 24 hours...\nFound 3 potential issues...',
      duration: '2:30'
    },
    {
      id: 'auto-3',
      name: 'Backup Verification',
      description: 'Verify integrity of system backups',
      status: 'completed',
      output: 'All backup checksums verified successfully',
      duration: '5:45'
    },
    {
      id: 'auto-4',
      name: 'Security Scan',
      description: 'Run security vulnerability scan',
      status: 'failed',
      output: 'Error: Unable to access security service endpoint',
      duration: '1:15'
    },
  ]);

  const [selectedAutomation, setSelectedAutomation] = useState<Automation | null>(null);
  const [showOutput, setShowOutput] = useState(false);

  const runAutomation = (automation: Automation) => {
    if (automation.status !== 'ready') return;

    setAutomations(prev => prev.map(a => 
      a.id === automation.id 
        ? { ...a, status: 'running' as const, output: 'Initializing automation...' }
        : a
    ));

    // Simulate automation running
    setTimeout(() => {
      setAutomations(prev => prev.map(a => 
        a.id === automation.id 
          ? { 
              ...a, 
              status: Math.random() > 0.2 ? 'completed' as const : 'failed' as const,
              output: Math.random() > 0.2 
                ? 'Automation completed successfully\nAll checks passed'
                : 'Error: Failed to complete automation\nCheck logs for details',
              duration: '1:30'
            }
          : a
      ));
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Available Automations</h2>
        
        <div className="space-y-4">
          {automations.map((automation) => (
            <div
              key={automation.id}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="font-medium">{automation.name}</h3>
                  <p className="text-sm text-gray-500">{automation.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  {automation.status === 'ready' && (
                    <button 
                      onClick={() => runAutomation(automation)}
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      <Play className="w-4 h-4" />
                    </button>
                  )}
                  {automation.status === 'running' && (
                    <RefreshCw className="w-5 h-5 text-blue-600 animate-spin" />
                  )}
                  {automation.status === 'completed' && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                  {automation.status === 'failed' && (
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  )}
                  {automation.output && (
                    <button
                      onClick={() => {
                        setSelectedAutomation(automation);
                        setShowOutput(true);
                      }}
                      className="p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <Terminal className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Automation History</h2>
        <div className="space-y-2">
          {[
            {
              name: 'Health Check',
              timestamp: '2024-03-15 14:30:00',
              status: 'success',
              duration: '2:15'
            },
            {
              name: 'Security Scan',
              timestamp: '2024-03-15 13:15:00',
              status: 'failed',
              duration: '1:45'
            },
            {
              name: 'Log Analysis',
              timestamp: '2024-03-15 12:00:00',
              status: 'success',
              duration: '3:30'
            },
          ].map((record, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 border-b last:border-b-0"
            >
              <div className="flex items-center gap-2">
                {record.status === 'success' ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-red-500" />
                )}
                <span>{record.name}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{record.duration}</span>
                <span>{record.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showOutput && selectedAutomation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                <h3 className="text-lg font-semibold">{selectedAutomation.name} Output</h3>
              </div>
              <button 
                onClick={() => setShowOutput(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap">
              {selectedAutomation.output}
            </div>
            {selectedAutomation.duration && (
              <div className="mt-4 text-sm text-gray-500">
                Duration: {selectedAutomation.duration}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AutomationConsole;