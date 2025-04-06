
import React from 'react';
import { CreditCard, Check, Award, Shield, Zap } from 'lucide-react';
import Chart from './Chart';

const ProductFeatures = () => {
  // Sorting customer drive data from highest to lowest value
  const customerDriveData = [
    { name: 'Accessibilità', value: 32 },
    { name: 'Assenza di costi', value: 27 },
    { name: 'Prestigio brand', value: 18 },
    { name: 'Sicurezza', value: 15 },
    { name: 'Altri', value: 8 }
  ].sort((a, b) => b.value - a.value);
  
  const productRatingData = [
    { feature: 'Accessibilità', rating: 5 },
    { feature: 'Costo', rating: 5 },
    { feature: 'Limiti di spesa', rating: 3.5 },
    { feature: 'Benefit aggiuntivi', rating: 3 },
    { feature: 'Sicurezza', rating: 4 },
    { feature: 'Assistenza clienti', rating: 4.5 },
  ];
  
  return (
    <div className="animate-fade-in p-6">
      <h2 className="text-3xl font-bold text-fineu-blue mb-6">Caratteristiche del Prodotto</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="stat-card">
          <div className="flex justify-between mb-2">
            <span className="stat-label">Tipologia</span>
            <span className="gold-badge">Gold Card</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="text-fineu-gold" size={20} />
            <span className="text-lg font-semibold">Mastercard Gold</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="flex justify-between mb-2">
            <span className="stat-label">Modalità</span>
            <span className="gold-badge">A Saldo</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="text-fineu-blue" size={20} />
            <span className="text-lg font-semibold">Addebito Mensile</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="flex justify-between mb-2">
            <span className="stat-label">Costi</span>
            <span className="gold-badge">Zero Spese</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="text-fineu-blue" size={20} />
            <span className="text-lg font-semibold">Canone €0 - Attivazione €0</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="dashboard-card">
          <h3 className="section-title">Caratteristiche Principali</h3>
          
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="bg-fineu-gold/20 p-3 rounded-full">
                <CreditCard className="text-fineu-gold" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-fineu-blue">Carta a Saldo Mastercard Gold</h4>
                <p className="text-gray-600 mt-1">
                  Carta di credito a saldo con addebito mensile completo sul conto corrente. 
                  Non si tratta di una carta revolving, riducendo il rischio di sovraindebitamento 
                  per i clienti.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-fineu-blue/20 p-3 rounded-full">
                <Zap className="text-fineu-blue" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-fineu-blue">Maggiore Accessibilità</h4>
                <p className="text-gray-600 mt-1">
                  Criteri di valutazione del merito creditizio meno stringenti rispetto ai circuiti 
                  bancari tradizionali, pur mantenendo i parametri di sicurezza richiesti dalla normativa.
                  Ideale per professionisti autonomi, giovani con storia creditizia limitata e clienti 
                  non bancabili tramite i canali tradizionali.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Check className="text-green-600" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-fineu-blue">Zero Costi</h4>
                <p className="text-gray-600 mt-1">
                  Nessun canone annuale e nessun costo di attivazione. Il modello di 
                  business si basa sulle commissioni di interscambio e sulle fee di attivazione 
                  che la banca emittente riconosce a FinEu, non sui costi addebitati al cliente.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <Shield className="text-amber-600" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-fineu-blue">Sicurezza e Protezione</h4>
                <p className="text-gray-600 mt-1">
                  Sistemi di sicurezza standard Mastercard, incluso 3D Secure per acquisti 
                  online, sistemi antifrode, assicurazione sugli acquisti e protezione 
                  per i viaggi internazionali.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="dashboard-card">
          <h3 className="section-title">Driver di Sottoscrizione</h3>
          
          <div className="space-y-4">
            <div className="highlight-box">
              <h4 className="font-medium">Fattori chiave per i clienti</h4>
              <Chart 
                type="horizontalBar"
                data={customerDriveData}
                height={250}
                barColors={['#0076CE', '#D4AF37', '#003366', '#88CCEE', '#CC6677']}
              />
              <div className="text-xs text-gray-500 mt-2 text-center">
                Fonte: Ricerca di mercato su preferenze clienti carte di credito Italia
              </div>
            </div>
            
            <div className="highlight-box">
              <h4 className="font-medium">Rating Caratteristiche Prodotto</h4>
              <div className="space-y-3 mt-3">
                {productRatingData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span>{item.feature}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => {
                        const filled = i < Math.floor(item.rating);
                        const half = !filled && i < Math.ceil(item.rating) && item.rating % 1 !== 0;
                        
                        return (
                          <span key={i} className="text-fineu-gold">
                            {filled ? "★" : half ? "★" : "☆"}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="dashboard-card">
        <h3 className="section-title">Dettaglio Caratteristiche</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="subsection-title">Specifiche Tecniche</h4>
            <table className="data-table">
              <tbody>
                <tr>
                  <td className="font-medium">Circuito</td>
                  <td>Mastercard</td>
                </tr>
                <tr>
                  <td className="font-medium">Tipologia</td>
                  <td>Gold Card</td>
                </tr>
                <tr>
                  <td className="font-medium">Modalità</td>
                  <td>Carta a saldo (non revolving)</td>
                </tr>
                <tr>
                  <td className="font-medium">Addebito</td>
                  <td>Mensile sul conto corrente</td>
                </tr>
                <tr>
                  <td className="font-medium">Tecnologia</td>
                  <td>Chip EMV, Contactless, NFC</td>
                </tr>
                <tr>
                  <td className="font-medium">Plafond medio</td>
                  <td>€1.500 - €3.000 (personalizzabile)</td>
                </tr>
                <tr>
                  <td className="font-medium">Emittente</td>
                  <td>Banca lituana con passaporto europeo</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div>
            <h4 className="subsection-title">Costi e Condizioni</h4>
            <table className="data-table">
              <tbody>
                <tr>
                  <td className="font-medium">Canone annuo</td>
                  <td className="text-green-600 font-medium">€0</td>
                </tr>
                <tr>
                  <td className="font-medium">Costo di attivazione</td>
                  <td className="text-green-600 font-medium">€0</td>
                </tr>
                <tr>
                  <td className="font-medium">Prelievi ATM</td>
                  <td>4% (min. €2,50)</td>
                </tr>
                <tr>
                  <td className="font-medium">Commissioni estero</td>
                  <td>1,75% fuori area Euro</td>
                </tr>
                <tr>
                  <td className="font-medium">Interessi</td>
                  <td>Non applicabili (carta a saldo)</td>
                </tr>
                <tr>
                  <td className="font-medium">Sostituzione carta</td>
                  <td>€10</td>
                </tr>
                <tr>
                  <td className="font-medium">Giorni valuta</td>
                  <td>Addebito il 15 del mese successivo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="subsection-title">Servizi Inclusi</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="text-green-500 min-w-5" size={18} />
                <span>Accesso a portale web e app mobile</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 min-w-5" size={18} />
                <span>Notifiche push per ogni transazione</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 min-w-5" size={18} />
                <span>Assistenza clienti 24/7</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 min-w-5" size={18} />
                <span>Protezione acquisti online con 3D Secure</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 min-w-5" size={18} />
                <span>Assicurazione sugli acquisti (90 giorni)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 min-w-5" size={18} />
                <span>Assistenza viaggi internazionali</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 min-w-5" size={18} />
                <span>Accesso ai servizi Mastercard Gold</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="subsection-title">Requisiti di Accessibilità</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="text-green-500 min-w-5" size={18} />
                <span>Maggiore età (18+ anni)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 min-w-5" size={18} />
                <span>Residenza in Italia</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 min-w-5" size={18} />
                <span>Documento d'identità valido</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 min-w-5" size={18} />
                <span>Conto corrente bancario o postale per addebiti</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 min-w-5" size={18} />
                <span>Fonte di reddito verificabile (minimo €800/mese)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 min-w-5" size={18} />
                <span>Assenza di protesti o gravi segnalazioni CR</span>
              </li>
            </ul>
            
            <div className="highlight-box mt-4">
              <div className="flex items-center gap-2">
                <Zap className="text-fineu-gold" size={20} />
                <h4 className="font-medium">Valutazione Semplificata</h4>
              </div>
              <p className="text-sm mt-2">
                La valutazione del merito creditizio è meno rigida rispetto agli standard bancari tradizionali, 
                con particolare attenzione alla capacità di rimborso mensile piuttosto che alla storia creditizia 
                pregressa. Questo approccio rende la carta accessibile anche a soggetti tipicamente esclusi dai 
                canali tradizionali.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
