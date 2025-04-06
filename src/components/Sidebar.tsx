
import React, { useState } from 'react';
import { 
  BarChart3, FileText, PieChart, Users, Briefcase, 
  LineChart, ShieldCheck, Target, Award, CreditCard 
} from 'lucide-react';
import { cn } from '@/lib/utils';

type NavItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <BarChart3 size={18} /> },
  { id: 'business-model', label: 'Modello di Business', icon: <Briefcase size={18} /> },
  { id: 'revenue-model', label: 'Revenue Sharing', icon: <LineChart size={18} /> },
  { id: 'business-plan', label: 'Business Plan', icon: <FileText size={18} /> },
  { id: 'swot', label: 'Analisi SWOT', icon: <PieChart size={18} /> },
  { id: 'compliance', label: 'Compliance', icon: <ShieldCheck size={18} /> },
  { id: 'market', label: 'Analisi di Mercato', icon: <Target size={18} /> },
  { id: 'product', label: 'Caratteristiche Prodotto', icon: <CreditCard size={18} /> },
];

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-[calc(100vh-64px)] fixed top-16 left-0 overflow-y-auto">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-6 px-3">
          <Award size={18} className="text-fineu-gold" />
          <span className="text-sm font-medium text-fineu-gray">Mastercard Gold Card</span>
        </div>
        <nav>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={cn(
                    "nav-link w-full text-left",
                    activeSection === item.id && "active"
                  )}
                  onClick={() => onSectionChange(item.id)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
