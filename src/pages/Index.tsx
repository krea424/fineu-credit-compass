
import React, { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import BusinessModelCanvas from '@/components/BusinessModelCanvas';
import RevenueModel from '@/components/RevenueModel';
import BusinessPlan from '@/components/BusinessPlan';
import SwotAnalysis from '@/components/SwotAnalysis';
import ComplianceFramework from '@/components/ComplianceFramework';
import MarketAnalysis from '@/components/MarketAnalysis';
import ProductFeatures from '@/components/ProductFeatures';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'business-model':
        return <BusinessModelCanvas />;
      case 'revenue-model':
        return <RevenueModel />;
      case 'business-plan':
        return <BusinessPlan />;
      case 'swot':
        return <SwotAnalysis />;
      case 'compliance':
        return <ComplianceFramework />;
      case 'market':
        return <MarketAnalysis />;
      case 'product':
        return <ProductFeatures />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <div className="flex">
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        <main className="ml-64 w-[calc(100%-16rem)]">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
