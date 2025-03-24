import { create } from 'zustand';
import type { Incident, KnowledgeArticle, AutomationScript, Telemetry } from '../types';

interface Store {
  incidents: Incident[];
  knowledgeBase: KnowledgeArticle[];
  automationScripts: AutomationScript[];
  telemetryData: Telemetry[];
  selectedIncident: Incident | null;
  setSelectedIncident: (incident: Incident | null) => void;
  addIncident: (incident: Incident) => void;
  updateIncident: (incident: Incident) => void;
}

export const useStore = create<Store>((set) => ({
  incidents: [],
  knowledgeBase: [],
  automationScripts: [],
  telemetryData: [],
  selectedIncident: null,
  setSelectedIncident: (incident) => set({ selectedIncident: incident }),
  addIncident: (incident) =>
    set((state) => ({ incidents: [...state.incidents, incident] })),
  updateIncident: (incident) =>
    set((state) => ({
      incidents: state.incidents.map((i) =>
        i.id === incident.id ? incident : i
      ),
    })),
}));