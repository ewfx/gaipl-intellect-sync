import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  AlertCircle, 
  Book, 
  PlayCircle, 
  MessageSquare,
  Menu
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const navItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/incident/new', label: 'Incidents', icon: AlertCircle },
    { path: '/knowledge-base', label: 'Knowledge Base', icon: Book },
    { path: '/automations', label: 'Automations', icon: PlayCircle },
    { path: '/ai-chat', label: 'AI Chat', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className={`bg-white w-64 border-r transition-all duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-64'
        }`}>
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800">IPE Console</h1>
          </div>
          <nav className="mt-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                    location.pathname === item.path ? 'bg-gray-100' : ''
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="sticky top-0 z-10 bg-white border-b">
            <div className="flex items-center px-6 py-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {navItems.find((item) => item.path === location.pathname)?.label || 'Dashboard'}
                </h2>
              </div>
            </div>
          </div>
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}