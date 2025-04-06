
import React from 'react';
import Chart from './Chart';
import { FileText, TrendingUp, Target, Clock, DollarSign, AlertTriangle } from 'lucide-react';

const BusinessPlan = () => {
  const financialProjectionData = [
    { 
      year: 'Anno 1', 
      'Ricavi': 99900, 
      'Costi': 80000,
      'Profitto': 19900
    },
    { 
      year: 'Anno 2', 
      'Ricavi': 134865, 
      'Costi': 92500,
      'Profitto': 42365
    },
    { 
      year: 'Anno 3', 
      'Ricavi': 164580, 
      'Costi': 105000,
      'Profitto': 59580
    },
  ];
  
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
  
  return (
    <div className="animate-fade-in p-6">
      <h2 className="text-3xl font-bold text-fineu-blue mb-6">Business Plan (3 Anni)</h2>
      
      <div className="mb-6">
        <div className="dashboard-card">
          <div className="flex items-center gap-2 mb-4">
            <Target className="text-fineu-blue" size={20} />
            <h3 className="section-title">Obiettivi Strategici</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="stat-card bg-fineu-blue/5">
              <div className="text-lg font-semibold text-fineu-blue mb-2">Volumi</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Carte distribuite:</span>
                  <span className="font-medium">3.000</span>
                </div>
                <div className="flex justify-between">
                  <span>Carte attive (anno 3):</span>
                  <span className="font-medium">2.315</span>
                </div>
              </div>
            </div>
            
            <div className="stat-card bg-fineu-blue/5">
              <div className="text-lg font-semibold text-fineu-blue mb-2">Finanziari</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Ricavi totali:</span>
                  <span className="font-medium">€399.345</span>
                </div>
                <div className="flex justify-between">
                  <span>Profitto operativo:</span>
                  <span className="font-medium">€121.845</span>
                </div>
              </div>
            </div>
            
            <div className="stat-card bg-fineu-blue/5">
              <div className="text-lg font-semibold text-fineu-blue mb-2">Crescita</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Collaboratori (anno 3):</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex justify-between">
                  <span>ROI stimato:</span>
                  <span className="font-medium">43,8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="dashboard-card">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="text-fineu-blue" size={20} />
            <h3 className="section-title">Proiezioni Economico-Finanziarie</h3>
          </div>
          
          <Chart 
            type="bar"
            data={financialProjectionData}
            xAxisKey="year"
            bars={[
              { dataKey: 'Ricavi', color: '#0076CE' },
              { dataKey: 'Costi', color: '#CC6677' },
              { dataKey: 'Profitto', color: '#D4AF37' }
            ]}
          />
          
          <div className="mt-4">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Anno</th>
                  <th>Ricavi</th>
                  <th>Costi</th>
                  <th>Profitto</th>
                  <th>Margine</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Anno 1</td>
                  <td>€99.900</td>
                  <td>€80.000</td>
                  <td>€19.900</td>
                  <td>19,9%</td>
                </tr>
                <tr>
                  <td>Anno 2</td>
                  <td>€134.865</td>
                  <td>€92.500</td>
                  <td>€42.365</td>
                  <td>31,4%</td>
                </tr>
                <tr>
                  <td>Anno 3</td>
                  <td>€164.580</td>
                  <td>€105.000</td>
                  <td>€59.580</td>
                  <td>36,2%</td>
                </tr>
                <tr className="bg-fineu-blue/10">
                  <td><strong>Totale</strong></td>
                  <td><strong>€399.345</strong></td>
                  <td><strong>€277.500</strong></td>
                  <td><strong>€121.845</strong></td>
                  <td><strong>30,5%</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="dashboard-card">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="text-fineu-blue" size={20} />
            <h3 className="section-title">Investimenti e ROI</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="highlight-box">
              <h4 className="font-medium">Investimento Iniziale</h4>
              <div className="mt-3 space-y-2">
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Setup operativo</span>
                  <span className="font-medium">€15.000</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Formazione collaboratori</span>
                  <span className="font-medium">€7.500</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Marketing iniziale</span>
                  <span className="font-medium">€12.500</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="font-bold">Totale investimento</span>
                  <span className="font-bold">€35.000</span>
                </div>
              </div>
            </div>
            
            <div className="highlight-box">
              <h4 className="font-medium">ROI Stimato (3 anni)</h4>
              <div className="mt-3 space-y-2">
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Investimento iniziale</span>
                  <span className="font-medium">€35.000</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Profitto operativo (3 anni)</span>
                  <span className="font-medium">€121.845</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Rapporto Ritorno/Investimento</span>
                  <span className="font-medium">3,48x</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="font-bold">ROI percentuale</span>
                  <span className="font-bold">248%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="highlight-box">
            <h4 className="font-medium">Dettaglio Costi per Carta</h4>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between items-center border-b pb-2">
                <span>Costo acquisizione cliente</span>
                <span className="font-medium">€50</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>Costo operativo</span>
                <span className="font-medium">€150</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="font-bold">Costo totale per carta</span>
                <span className="font-bold">€200</span>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex items-center gap-2">
                <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-fineu-gold" style={{ width: '45%' }}></div>
                </div>
                <span className="font-medium w-20">45%</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">Margine per carta (€90 su €200 di costo)</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="dashboard-card">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="text-fineu-blue" size={20} />
            <h3 className="section-title">Roadmap di Implementazione</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="subsection-title">Fase 1: Avvio (Primi 6 mesi)</h4>
              <ul className="space-y-2 pl-2 mt-2">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                  <span>Finalizzazione accordo con banca lituana</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                  <span>Formazione primi 3 collaboratori</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                  <span>Creazione materiale marketing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                  <span>Setup processi operativi</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                  <span>Lancio prime 300 carte</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="subsection-title">Fase 2: Crescita (6-18 mesi)</h4>
              <ul className="space-y-2 pl-2 mt-2">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                  <span>Espansione a 6 collaboratori</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                  <span>Rafforzamento marketing digitale</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                  <span>Distribuzione di ulteriori 1.200 carte</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                  <span>Affinamento processi post-valutazione</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="subsection-title">Fase 3: Consolidamento (19-36 mesi)</h4>
              <ul className="space-y-2 pl-2 mt-2">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                  <span>Espansione a 9-12 collaboratori</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                  <span>Diversificazione canali acquisizione</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                  <span>Distribuzione di ulteriori 1.500 carte</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                  <span>Valutazione nuove opportunità cross-selling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="dashboard-card">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="text-fineu-blue" size={20} />
            <h3 className="section-title">Analisi di Sensitività e Rischi</h3>
          </div>
          
          <div className="space-y-4">
            <div className="highlight-box">
              <h4 className="font-medium">Analisi di Sensitività</h4>
              <table className="data-table mt-3">
                <thead>
                  <tr>
                    <th>Scenario</th>
                    <th>Var. %</th>
                    <th>Profitto</th>
                    <th>Impatto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-fineu-blue/5">
                    <td><strong>Base</strong></td>
                    <td>-</td>
                    <td>€121.845</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Tasso attivazione -10%</td>
                    <td>-10%</td>
                    <td>€108.661</td>
                    <td>-10,8%</td>
                  </tr>
                  <tr>
                    <td>Transato medio -15%</td>
                    <td>-15%</td>
                    <td>€112.393</td>
                    <td>-7,8%</td>
                  </tr>
                  <tr>
                    <td>Costi acquisizione +20%</td>
                    <td>+20%</td>
                    <td>€103.845</td>
                    <td>-14,8%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div>
              <h4 className="subsection-title">Principali Rischi e Mitigazioni</h4>
              <div className="space-y-3 mt-2">
                <div className="p-3 border rounded-md bg-orange-50 border-orange-200">
                  <div className="flex items-center gap-2">
                    <AlertTriangle size={16} className="text-orange-500" />
                    <h5 className="font-medium">Rischio Regolamentare</h5>
                  </div>
                  <p className="text-sm mt-1">Cambiamenti nella normativa europea o italiana</p>
                  <div className="mt-1 text-sm bg-white p-2 rounded border border-gray-100">
                    <strong className="block text-fineu-blue">Mitigazione:</strong>
                    Monitoraggio continuo, consulenza legale specializzata, flessibilità nei contratti
                  </div>
                </div>
                
                <div className="p-3 border rounded-md bg-blue-50 border-blue-200">
                  <div className="flex items-center gap-2">
                    <AlertTriangle size={16} className="text-blue-500" />
                    <h5 className="font-medium">Rischio Reputazionale</h5>
                  </div>
                  <p className="text-sm mt-1">Problematiche con la banca emittente o insolvenze clienti</p>
                  <div className="mt-1 text-sm bg-white p-2 rounded border border-gray-100">
                    <strong className="block text-fineu-blue">Mitigazione:</strong>
                    Due diligence approfondita, comunicazione trasparente, monitoraggio qualità</div>
                </div>
                
                <div className="p-3 border rounded-md bg-purple-50 border-purple-200">
                  <div className="flex items-center gap-2">
                    <AlertTriangle size={16} className="text-purple-500" />
                    <h5 className="font-medium">Rischio Operativo</h5>
                  </div>
                  <p className="text-sm mt-1">Difficoltà di scalabilità o gestione collaboratori</p>
                  <div className="mt-1 text-sm bg-white p-2 rounded border border-gray-100">
                    <strong className="block text-fineu-blue">Mitigazione:</strong>
                    Processi standardizzati, formazione continua, controlli di qualità</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlan;
