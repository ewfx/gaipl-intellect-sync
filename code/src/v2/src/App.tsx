import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { IncidentView } from './components/IncidentView';
import { KnowledgeBase } from './components/KnowledgeBase';
import { Automations } from './components/Automations';
import { AIChat } from './components/AIChat';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/incident/:id" element={<IncidentView />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/automations" element={<Automations />} />
          <Route path="/ai-chat" element={<AIChat />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;