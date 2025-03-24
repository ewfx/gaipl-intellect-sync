export interface Incident {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved';
  priority: 'low' | 'medium' | 'high' | 'critical';
  createdAt: string;
  updatedAt: string;
  assignedTo?: string;
}

export interface KnowledgeArticle {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  lastUpdated: string;
}

export interface AutomationScript {
  id: string;
  name: string;
  description: string;
  type: 'ansible' | 'python' | 'shell';
  status: 'available' | 'running' | 'completed' | 'failed';
}

export interface Telemetry {
  timestamp: string;
  metric: string;
  value: number;
  unit: string;
  source: string;
}