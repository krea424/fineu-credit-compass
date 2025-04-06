
import React from 'react';
import { ArrowUpRight, CreditCard, DollarSign, Percent, Users } from 'lucide-react';
import Chart from './Chart';

const Dashboard = () => {
  const cardDistributionData = [
    { year: 'Anno 1', cards: 1000 },
    { year: 'Anno 2', cards: 1000 },
    { year: 'Anno 3', cards: 1000 }
  ];

  const activeCardsData = [
    { year: 'Anno 1', cards: 900 },
    { year: 'Anno 2', cards: 1665 },
    { year: 'Anno 3', cards: 2315 }
  ];

  const revenueProjectionData = [
    { year: 'Anno 1', 'Commissioni Transato': 18900, 'Fee Attivazione': 81000 },
    { year: 'Anno 2', 'Commissioni Transato': 53865, 'Fee Attivazione': 81000 },
    { year: 'Anno 3', 'Commissioni Transato': 83580, 'Fee Attivazione': 81000 }
  ];

  return (
    <div className="animate-fade-in p-6 space-y-6">
      <h2 className="text-3xl font-bold text-fineu-blue mb-6">
        Dashboard Progetto Mastercard Gold
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="stat-card">
          <div className="flex justify-between items-start mb-2">
            <span className="stat-label">Carte Distribuite (3 anni)</span>
            <CreditCard className="text-fineu-blue opacity-70" size={20} />
          </div>
          <div className="stat-value">3.000</div>
        </div>
        
        <div className="stat-card">
          <div className="flex justify-between items-start mb-2">
            <span className="stat-label">Carte Attive (Fine Anno 3)</span>
            <CreditCard className="text-fineu-blue opacity-70" size={20} />
          </div>
          <div className="stat-value">2.315</div>
        </div>
        
        <div className="stat-card">
          <div className="flex justify-between items-start mb-2">
            <span className="stat-label">Ricavi Totali (3 anni)</span>
            <DollarSign className="text-fineu-blue opacity-70" size={20} />
          </div>
          <div className="stat-value">€318.345</div>
        </div>
        
        <div className="stat-card">
          <div className="flex justify-between items-start mb-2">
            <span className="stat-label">Commissione Media Transato</span>
            <Percent className="text-fineu-blue opacity-70" size={20} />
          </div>
          <div className="stat-value">0,10%</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="dashboard-card">
          <h3 className="section-title">Distribuzione Carte</h3>
          <Chart
            type="bar"
            data={cardDistributionData}
            xAxisKey="year"
            dataKey="cards"
          />
        </div>
        
        <div className="dashboard-card">
          <h3 className="section-title">Carte Attive (Fine Anno)</h3>
          <Chart
            type="line"
            data={activeCardsData}
            xAxisKey="year"
            dataKey="cards"
          />
        </div>
        
        <div className="dashboard-card">
          <h3 className="section-title">Proiezione Ricavi</h3>
          <Chart
            type="bar"
            data={revenueProjectionData}
            xAxisKey="year"
            bars={[
              { dataKey: 'Commissioni Transato', color: '#0076CE' },
              { dataKey: 'Fee Attivazione', color: '#D4AF37' }
            ]}
          />
        </div>
        
        <div className="dashboard-card">
          <h3 className="section-title">Principali KPI</h3>
          <div className="space-y-4">
            <div className="highlight-box">
              <h4 className="font-medium mb-1">Carte Attive Medie Annue</h4>
              <div className="grid grid-cols-3 gap-4 mt-3">
                <div>
                  <div className="stat-value text-xl">450</div>
                  <div className="text-xs text-gray-500">Anno 1</div>
                </div>
                <div>
                  <div className="stat-value text-xl">1.283</div>
                  <div className="text-xs text-gray-500">Anno 2</div>
                </div>
                <div>
                  <div className="stat-value text-xl">1.990</div>
                  <div className="text-xs text-gray-500">Anno 3</div>
                </div>
              </div>
            </div>
            
            <div className="highlight-box">
              <h4 className="font-medium mb-1">Transato Medio Mensile per Carta</h4>
              <div className="stat-value text-xl">€350</div>
            </div>
            
            <div className="highlight-box">
              <h4 className="font-medium mb-1">Fee di Attivazione</h4>
              <div className="stat-value text-xl">€90 <span className="text-sm text-gray-500">per carta</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
