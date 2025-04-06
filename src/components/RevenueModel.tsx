
import React from 'react';
import Chart from './Chart';
import { Coins, SwitchCamera, DollarSign, TrendingUp } from 'lucide-react';

const RevenueModel = () => {
  const revenueFlowData = [
    { name: "Transazione Cliente", value: 100 },
    { name: "Commissione Interchange (0,30%)", value: 0.30 },
    { name: "Quota Mastercard (0,05%)", value: 0.05 },
    { name: "Quota Banca Lituana (0,15%)", value: 0.15 },
    { name: "Quota FinEu (0,10%)", value: 0.10 },
  ];
  
  const revenueForecastData = [
    { 
      year: 'Anno 1', 
      'Commissioni Transato': 18900, 
      'Fee Attivazione': 81000, 
      'Totale': 99900 
    },
    { 
      year: 'Anno 2', 
      'Commissioni Transato': 53865, 
      'Fee Attivazione': 81000, 
      'Totale': 134865 
    },
    { 
      year: 'Anno 3', 
      'Commissioni Transato': 83580, 
      'Fee Attivazione': 81000, 
      'Totale': 164580 
    },
  ];
  
  const monthlyTransactionData = [
    { month: 'Gen', transazioni: 350 },
    { month: 'Feb', transazioni: 350 },
    { month: 'Mar', transazioni: 350 },
    { month: 'Apr', transazioni: 350 },
    { month: 'Mag', transazioni: 350 },
    { month: 'Giu', transazioni: 350 },
    { month: 'Lug', transazioni: 350 },
    { month: 'Ago', transazioni: 350 },
    { month: 'Set', transazioni: 350 },
    { month: 'Ott', transazioni: 350 },
    { month: 'Nov', transazioni: 350 },
    { month: 'Dic', transazioni: 350 },
  ];
  
  return (
    <div className="animate-fade-in p-6">
      <h2 className="text-3xl font-bold text-fineu-blue mb-6">Revenue Sharing Model</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="dashboard-card">
          <div className="flex items-center gap-2 mb-4">
            <SwitchCamera className="text-fineu-blue" size={20} />
            <h3 className="section-title">Struttura Revenue Sharing</h3>
          </div>
          
          <div className="mb-6">
            <div className="highlight-box mb-4">
              <h4 className="font-medium">Flusso Commissioni su Transato</h4>
              <p className="text-sm text-gray-600 mt-1">
                Per ogni transazione con carta, la fee di interscambio (0,30%) viene suddivisa tra gli attori del sistema
              </p>
            </div>
            
            <div className="relative overflow-hidden h-10 bg-gray-100 rounded-full mb-2">
              <div className="absolute h-full w-[5%] bg-gray-400 left-0"></div>
              <div className="absolute h-full w-[15%] bg-fineu-blue left-[5%]"></div>
              <div className="absolute h-full w-[10%] bg-fineu-gold left-[20%]"></div>
              <div className="absolute h-full text-xs flex items-center justify-center text-white font-medium w-full">
                0,05% Mastercard | 0,15% Banca Lituana | 0,10% FinEu
              </div>
            </div>
            
            <div className="text-xs text-gray-500 flex justify-between">
              <span>0%</span>
              <span>0,30% (Fee Interchange)</span>
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="subsection-title">Fee di Attivazione</h4>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex-1 h-10 bg-fineu-gold/20 rounded flex items-center justify-center">
                <div className="font-medium">€90 per carta</div>
              </div>
              <div className="text-3xl font-bold text-fineu-blue">→</div>
              <div className="flex-1 h-10 bg-fineu-blue/20 rounded flex items-center justify-center">
                <div className="font-medium">100% a FinEu</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              FinEu trattiene il 100% della commissione di attivazione per coprire i costi di acquisizione e marketing
            </p>
          </div>
        </div>
        
        <div className="dashboard-card">
          <div className="flex items-center gap-2 mb-4">
            <Coins className="text-fineu-blue" size={20} />
            <h3 className="section-title">Benchmark di Mercato</h3>
          </div>
          
          <div className="space-y-4">
            <div className="highlight-box">
              <h4 className="font-medium">Revenue Sharing su Modelli Simili</h4>
              <div className="overflow-x-auto">
                <table className="data-table mt-3">
                  <thead>
                    <tr>
                      <th>Modello Partnership</th>
                      <th>Quota Mediatore</th>
                      <th>Fee Attivazione</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Advanzia/Affida.it</td>
                      <td>0,08-0,12%</td>
                      <td>€75-95</td>
                    </tr>
                    <tr>
                      <td>Benchmark europeo medio</td>
                      <td>0,10%</td>
                      <td>€80-100</td>
                    </tr>
                    <tr className="bg-fineu-gold/10">
                      <td><strong>FinEu (proposto)</strong></td>
                      <td><strong>0,10%</strong></td>
                      <td><strong>€90</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="highlight-box">
              <h4 className="font-medium">Vantaggiosità del Modello</h4>
              <ul className="mt-2 space-y-1">
                <li className="flex items-start gap-2">
                  <div className="min-w-2 h-2 rounded-full bg-fineu-blue mt-2"></div>
                  <span className="text-sm">Commissione in linea con benchmark di mercato</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-2 h-2 rounded-full bg-fineu-blue mt-2"></div>
                  <span className="text-sm">Fee di attivazione competitiva e sostenibile</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-2 h-2 rounded-full bg-fineu-blue mt-2"></div>
                  <span className="text-sm">Margini adeguati per investimenti in crescita</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-2 h-2 rounded-full bg-fineu-blue mt-2"></div>
                  <span className="text-sm">Benefit da volumi crescenti negli anni successivi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="dashboard-card">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="text-fineu-blue" size={20} />
            <h3 className="section-title">Proiezione Ricavi FinEu</h3>
          </div>
          
          <Chart 
            type="line"
            data={revenueForecastData}
            xAxisKey="year"
            lines={[
              { dataKey: 'Totale', color: '#003366' },
              { dataKey: 'Fee Attivazione', color: '#D4AF37' },
              { dataKey: 'Commissioni Transato', color: '#0076CE' }
            ]}
          />
          
          <div className="mt-4">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Anno</th>
                  <th>Commissioni Transato</th>
                  <th>Fee Attivazione</th>
                  <th>Totale</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Anno 1</td>
                  <td>€18.900</td>
                  <td>€81.000</td>
                  <td>€99.900</td>
                </tr>
                <tr>
                  <td>Anno 2</td>
                  <td>€53.865</td>
                  <td>€81.000</td>
                  <td>€134.865</td>
                </tr>
                <tr>
                  <td>Anno 3</td>
                  <td>€83.580</td>
                  <td>€81.000</td>
                  <td>€164.580</td>
                </tr>
                <tr className="bg-fineu-blue/10">
                  <td><strong>Totale</strong></td>
                  <td><strong>€156.345</strong></td>
                  <td><strong>€243.000</strong></td>
                  <td><strong>€399.345</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="dashboard-card">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="text-fineu-blue" size={20} />
            <h3 className="section-title">Calcolo del Ricavo per Carta</h3>
          </div>
          
          <div className="space-y-5">
            <div className="highlight-box">
              <h4 className="font-medium">Transato Medio Mensile</h4>
              <Chart 
                type="bar"
                data={monthlyTransactionData}
                xAxisKey="month"
                dataKey="transazioni"
              />
              <div className="mt-2 text-center text-sm text-gray-600">
                Spesa media mensile per carta: <strong>€350</strong>
              </div>
            </div>
            
            <div className="highlight-box">
              <h4 className="font-medium">Calcolo Ricavi per Singola Carta (Anno 1)</h4>
              <div className="mt-3 space-y-2">
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Fee di attivazione</span>
                  <span className="font-medium">€90,00</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Transato mensile</span>
                  <span className="font-medium">€350,00</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Commissione (0,10%)</span>
                  <span className="font-medium">€0,35/mese</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Commissione annuale</span>
                  <span className="font-medium">€4,20/anno</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="font-bold">Ricavo totale 1° anno</span>
                  <span className="font-bold">€94,20</span>
                </div>
              </div>
            </div>
            
            <div className="highlight-box">
              <h4 className="font-medium">Life-Time Value (3 anni)</h4>
              <div className="mt-3 space-y-2">
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Fee di attivazione (una tantum)</span>
                  <span className="font-medium">€90,00</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Commissioni Anno 1</span>
                  <span className="font-medium">€4,20</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Commissioni Anno 2</span>
                  <span className="font-medium">€4,20</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Commissioni Anno 3</span>
                  <span className="font-medium">€4,20</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="font-bold">LTV totale (3 anni)</span>
                  <span className="font-bold">€102,60</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueModel;
