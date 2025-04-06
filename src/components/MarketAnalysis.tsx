
import React from 'react';
import Chart from './Chart';
import { Target, Users, TrendingUp, BarChart3 } from 'lucide-react';

const MarketAnalysis = () => {
  // Sort market share data from highest to lowest for horizontal bar chart
  const marketShareData = [
    { name: 'Banche Tradizionali', value: 68 },
    { name: 'Fintech', value: 15 },
    { name: 'Carte Co-branded', value: 12 },
    { name: 'Altri', value: 5 }
  ].sort((a, b) => b.value - a.value);

  const marketTrendsData = [
    { year: '2022', 'Pagamenti Digitali': 80, 'Contante': 20 },
    { year: '2023', 'Pagamenti Digitali': 85, 'Contante': 15 },
    { year: '2024', 'Pagamenti Digitali': 88, 'Contante': 12 },
    { year: '2025', 'Pagamenti Digitali': 90, 'Contante': 10 }
  ];

  const competitorComparison = [
    { 
      competitor: 'Banche tradizionali', 
      accessibilità: 3, 
      costo: 2, 
      valore: 4, 
      digitalizzazione: 4 
    },
    { 
      competitor: 'Fintech (es. Revolut)', 
      accessibilità: 4, 
      costo: 4, 
      valore: 3, 
      digitalizzazione: 5 
    },
    { 
      competitor: 'Carte co-branded', 
      accessibilità: 3, 
      costo: 3, 
      valore: 4, 
      digitalizzazione: 3 
    },
    { 
      competitor: 'Neobanks', 
      accessibilità: 4, 
      costo: 4, 
      valore: 3, 
      digitalizzazione: 5 
    },
    { 
      competitor: 'FinEu Gold Card', 
      accessibilità: 5, 
      costo: 5, 
      valore: 4, 
      digitalizzazione: 3 
    }
  ];

  return (
    <div className="animate-fade-in p-6">
      <h2 className="text-3xl font-bold text-fineu-blue mb-6">Analisi di Mercato e Competitor</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="dashboard-card">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="text-fineu-blue" size={20} />
            <h3 className="section-title">Panoramica del Mercato Italiano</h3>
          </div>
          
          <div className="space-y-4">
            <div className="highlight-box">
              <h4 className="font-medium">Dimensioni del Mercato</h4>
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <div className="stat-value">41M</div>
                  <div className="text-sm text-gray-500">Carte di pagamento attive</div>
                </div>
                <div>
                  <div className="stat-value">1,3</div>
                  <div className="text-sm text-gray-500">Carte per abitante (media)</div>
                </div>
                <div>
                  <div className="stat-value">€186B</div>
                  <div className="text-sm text-gray-500">Transato annuo con carte</div>
                </div>
                <div>
                  <div className="stat-value">+7,4%</div>
                  <div className="text-sm text-gray-500">CAGR mercato carte (5 anni)</div>
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-3 text-center">
                Fonte: Banca d'Italia, Osservatorio Innovative Payments - Politecnico di Milano
              </div>
            </div>
            
            <div className="highlight-box">
              <h4 className="font-medium">Trend del Mercato</h4>
              <Chart 
                type="line"
                data={marketTrendsData}
                xAxisKey="year"
                lines={[
                  { dataKey: 'Pagamenti Digitali', color: '#0076CE' },
                  { dataKey: 'Contante', color: '#888888' }
                ]}
                height={200}
              />
              <div className="text-xs text-gray-500 mt-2 text-center">
                Fonte: BCE - Rapporto sui pagamenti nell'area Euro
              </div>
            </div>
          </div>
        </div>
        
        <div className="dashboard-card">
          <div className="flex items-center gap-2 mb-4">
            <Target className="text-fineu-blue" size={20} />
            <h3 className="section-title">Segmentazione e Quote di Mercato</h3>
          </div>
          
          <div className="space-y-4">
            <div className="highlight-box">
              <h4 className="font-medium">Quote di Mercato per Emittente</h4>
              <Chart 
                type="horizontalBar"
                data={marketShareData}
                height={250}
                barColors={['#003366', '#D4AF37', '#0076CE', '#88CCEE']}
              />
              <div className="text-xs text-gray-500 mt-2 text-center">
                Fonte: Osservatorio Fintech & Insurtech - Politecnico di Milano
              </div>
            </div>
            
            <div className="highlight-box">
              <h4 className="font-medium">Segmentazione Carte di Credito</h4>
              <div className="mt-3">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Segmento</th>
                      <th>Quota %</th>
                      <th>Caratteristiche</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Carte di base</td>
                      <td>64%</td>
                      <td>Limiti bassi, benefit minimi</td>
                    </tr>
                    <tr>
                      <td>Carte Gold/Premium</td>
                      <td>25%</td>
                      <td>Limiti medio-alti, alcuni benefit</td>
                    </tr>
                    <tr>
                      <td>Carte Platinum</td>
                      <td>8%</td>
                      <td>Limiti elevati, benefit significativi</td>
                    </tr>
                    <tr>
                      <td>Carte Black/Elite</td>
                      <td>3%</td>
                      <td>Limiti molto elevati, servizi esclusivi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="dashboard-card">
          <div className="flex items-center gap-2 mb-4">
            <Users className="text-fineu-blue" size={20} />
            <h3 className="section-title">Analisi Competitiva</h3>
          </div>
          
          <div className="space-y-5">
            <div className="overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Competitor</th>
                    <th>Prodotto</th>
                    <th>Canone</th>
                    <th>Fee attivazione</th>
                    <th>Target primario</th>
                    <th>Punti di forza</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Banche tradizionali</td>
                    <td>Carte Gold</td>
                    <td>€40-80/anno</td>
                    <td>€0-20</td>
                    <td>Clienti con history creditizia solida</td>
                    <td>Fiducia del brand, servizi integrati</td>
                  </tr>
                  <tr>
                    <td>Fintech (es. Revolut)</td>
                    <td>Carte virtuali/fisiche</td>
                    <td>€0-10/mese</td>
                    <td>€0</td>
                    <td>Giovani digitalizzati</td>
                    <td>UX innovativa, rapidità emissione</td>
                  </tr>
                  <tr>
                    <td>Carte co-branded</td>
                    <td>Carte retail/airlines</td>
                    <td>€25-60/anno</td>
                    <td>€0</td>
                    <td>Clienti del brand partner</td>
                    <td>Programmi fedeltà, vantaggi dedicati</td>
                  </tr>
                  <tr>
                    <td>Neobanks</td>
                    <td>Carte digitali</td>
                    <td>€0-8/mese</td>
                    <td>€0</td>
                    <td>Early adopters</td>
                    <td>Innovazione, trasparenza costi</td>
                  </tr>
                  <tr className="bg-fineu-blue/5">
                    <td><strong>FinEu Gold Card</strong></td>
                    <td>Mastercard Gold</td>
                    <td><strong>€0/anno</strong></td>
                    <td>€0</td>
                    <td>Non bancabili, giovani professionisti</td>
                    <td>Accessibilità, costo zero, supporto locale</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="highlight-box">
              <h4 className="font-medium">Valutazione Comparativa (1-5)</h4>
              <div className="grid grid-cols-5 gap-1 mt-3">
                <div className="bg-gray-100 p-2 text-xs text-center font-medium">Competitor</div>
                <div className="bg-gray-100 p-2 text-xs text-center font-medium">Accessibilità</div>
                <div className="bg-gray-100 p-2 text-xs text-center font-medium">Costo</div>
                <div className="bg-gray-100 p-2 text-xs text-center font-medium">Valore</div>
                <div className="bg-gray-100 p-2 text-xs text-center font-medium">Digital</div>
              </div>
              
              {competitorComparison.map((competitor, index) => (
                <div key={index} className={`grid grid-cols-5 gap-1 ${competitor.competitor === 'FinEu Gold Card' ? 'bg-fineu-gold/10' : index % 2 === 1 ? 'bg-gray-50' : ''}`}>
                  <div className="p-2 text-xs">{competitor.competitor}</div>
                  <div className="p-2 flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-3 h-3 rounded-full mx-0.5 ${i < competitor.accessibilità ? 'bg-fineu-blue' : 'bg-gray-200'}`}
                      ></div>
                    ))}
                  </div>
                  <div className="p-2 flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-3 h-3 rounded-full mx-0.5 ${i < competitor.costo ? 'bg-fineu-blue' : 'bg-gray-200'}`}
                      ></div>
                    ))}
                  </div>
                  <div className="p-2 flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-3 h-3 rounded-full mx-0.5 ${i < competitor.valore ? 'bg-fineu-blue' : 'bg-gray-200'}`}
                      ></div>
                    ))}
                  </div>
                  <div className="p-2 flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-3 h-3 rounded-full mx-0.5 ${i < competitor.digitalizzazione ? 'bg-fineu-blue' : 'bg-gray-200'}`}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="dashboard-card">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="text-fineu-blue" size={20} />
            <h3 className="section-title">Posizionamento e Strategia</h3>
          </div>
          
          <div className="space-y-4">
            <div className="highlight-box">
              <h4 className="font-medium">Matrice di Posizionamento</h4>
              <div className="relative h-64 border border-gray-200 rounded-lg mt-3 overflow-hidden">
                <div className="absolute inset-0">
                  {/* X and Y axis labels */}
                  <div className="absolute bottom-0 left-0 w-full text-center text-xs font-medium">Accessibilità</div>
                  <div className="absolute -rotate-90 -left-10 top-1/2 text-xs font-medium">Costo (inverso)</div>
                  
                  {/* X axis */}
                  <div className="absolute bottom-8 left-8 w-[calc(100%-64px)] h-px bg-gray-300"></div>
                  <div className="absolute bottom-7 left-8 h-2 w-px bg-gray-300"></div>
                  <div className="absolute bottom-7 right-8 h-2 w-px bg-gray-300"></div>
                  <div className="absolute bottom-5 left-8 text-xs text-gray-500">Bassa</div>
                  <div className="absolute bottom-5 right-8 text-xs text-gray-500">Alta</div>
                  
                  {/* Y axis */}
                  <div className="absolute bottom-8 left-8 w-px h-[calc(100%-64px)] bg-gray-300"></div>
                  <div className="absolute top-8 left-7 w-2 h-px bg-gray-300"></div>
                  <div className="absolute bottom-8 left-7 w-2 h-px bg-gray-300"></div>
                  <div className="absolute top-8 left-0 text-xs text-gray-500">Basso</div>
                  <div className="absolute bottom-8 left-0 text-xs text-gray-500">Alto</div>
                  
                  {/* Competitors */}
                  <div className="absolute bottom-[35%] left-[30%] w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xs" title="Banche tradizionali">BT</div>
                  <div className="absolute bottom-[60%] left-[70%] w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xs" title="Fintech">FT</div>
                  <div className="absolute bottom-[45%] left-[40%] w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-xs" title="Carte co-branded">CB</div>
                  <div className="absolute bottom-[60%] left-[60%] w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-xs" title="Neobanks">NB</div>
                  <div className="absolute bottom-[70%] left-[80%] w-16 h-16 rounded-full bg-fineu-gold/20 border-2 border-fineu-gold flex items-center justify-center text-xs font-bold animate-pulse" title="FinEu Gold Card">FinEu</div>
                </div>
              </div>
            </div>
            
            <div className="highlight-box">
              <h4 className="font-medium">Strategia di Differenziazione</h4>
              <ul className="space-y-2 mt-3">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-gold mt-1"></div>
                  <div>
                    <strong className="block">Posizionamento di Alta Accessibilità</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Focus sulla semplicità di ottenimento per segmenti tradizionalmente esclusi, con criteri di merito creditizio meno restrittivi.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-gold mt-1"></div>
                  <div>
                    <strong className="block">Vantaggio di Costo Zero</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Enfasi sul canone gratuito e assenza di costi di attivazione, elemento differenziante rispetto a carte premium similari.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-gold mt-1"></div>
                  <div>
                    <strong className="block">Equilibrio Sicurezza/Flessibilità</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Carta a saldo che permette controllo della spesa ma con criteri di accesso più inclusivi.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-gold mt-1"></div>
                  <div>
                    <strong className="block">Assistenza Personalizzata</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Servizio di consulenza e supporto tramite la rete FinEu, rispetto all'approccio esclusivamente digitale dei competitor Fintech.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysis;
