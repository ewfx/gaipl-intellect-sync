import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Bot, Activity, Bell, Database, Terminal } from 'lucide-react';
import ChatInterface from './components/ChatInterface';
import TelemetryDashboard from './components/TelemetryDashboard';
import IncidentManager from './components/IncidentManager';
import AutomationConsole from './components/AutomationConsole';
import Header from './components/Header';
import KnowledgeBase from './components/KnowledgeBase';
import Analytics from './components/Analytics';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <Header />
        
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/" element={
            <main className="container mx-auto px-4 py-6">
              <Tabs defaultValue="chat" className="space-y-4">
                <TabsList className="grid grid-cols-4 gap-4 bg-white p-1 rounded-lg shadow-sm">
                  <TabsTrigger value="chat" className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-blue-700">
                    <Bot className="w-4 h-4" />
                    AI Assistant
                  </TabsTrigger>
                  <TabsTrigger value="incidents" className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-blue-700">
                    <Bell className="w-4 h-4" />
                    Incidents
                  </TabsTrigger>
                  <TabsTrigger value="telemetry" className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-blue-700">
                    <Activity className="w-4 h-4" />
                    Telemetry
                  </TabsTrigger>
                  <TabsTrigger value="automation" className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-blue-700">
                    <Terminal className="w-4 h-4" />
                    Automation
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="chat" className="space-y-4">
                  <ChatInterface />
                </TabsContent>

                <TabsContent value="incidents" className="space-y-4">
                  <IncidentManager />
                </TabsContent>

                <TabsContent value="telemetry" className="space-y-4">
                  <TelemetryDashboard />
                </TabsContent>

                <TabsContent value="automation" className="space-y-4">
                  <AutomationConsole />
                </TabsContent>
              </Tabs>
            </main>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;