
import React from 'react';
import { Zap, X, Check, AlertTriangle } from 'lucide-react';

const SwotAnalysis = () => {
  return (
    <div className="animate-fade-in p-6">
      <h2 className="text-3xl font-bold text-fineu-blue mb-6">Analisi SWOT</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="dashboard-card bg-gradient-to-br from-green-50 to-white border-l-4 border-green-500">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="text-green-500" size={22} />
            <h3 className="text-xl font-semibold text-green-700">Punti di Forza</h3>
          </div>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Check className="min-w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong className="block">Accessibilità prodotto</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Valutazione del merito creditizio meno stringente rispetto ai circuiti bancari tradizionali, apertura a segmenti non bancabili.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="min-w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong className="block">Zero costi per il cliente</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Costo di attivazione e canone azzerati, elemento distintivo rispetto all'offerta standard di mercato.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="min-w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong className="block">Esperienza FinEu</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Competenza nella mediazione creditizia, relazioni consolidate con clientela e presenza territoriale.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="min-w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong className="block">Carte a saldo</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Minore rischio di sovraindebitamento per il cliente e gestione finanziaria più responsabile.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="min-w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <strong className="block">Circuito Mastercard Gold</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Prestigio del brand e accettazione globale, vantaggi e servizi premium associati.
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        {/* Weaknesses */}
        <div className="dashboard-card bg-gradient-to-br from-red-50 to-white border-l-4 border-red-500">
          <div className="flex items-center gap-2 mb-4">
            <X className="text-red-500" size={22} />
            <h3 className="text-xl font-semibold text-red-700">Punti di Debolezza</h3>
          </div>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <X className="min-w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <strong className="block">Rete collaboratori limitata</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Partenza con soli 3 collaboratori, necessità di espansione graduale per aumentare la penetrazione.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <X className="min-w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <strong className="block">Complessità transfrontaliera</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Gestione di partnership con banca estera con potenziali complessità operative e comunicative.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <X className="min-w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <strong className="block">Riconoscibilità del prodotto</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Potenziale percezione di prodotto "di seconda fascia" rispetto alle carte emesse direttamente dalle banche italiane.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <X className="min-w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <strong className="block">Assenza di cross-selling</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Limitata capacità iniziale di offrire prodotti finanziari complementari rispetto alle banche tradizionali.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <X className="min-w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <strong className="block">Dipendenza da partner esterno</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Rischio legato alla continuità operativa e alle politiche della banca emittente lituana.
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        {/* Opportunities */}
        <div className="dashboard-card bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500">
          <div className="flex items-center gap-2 mb-4">
            <Check className="text-blue-500" size={22} />
            <h3 className="text-xl font-semibold text-blue-700">Opportunità</h3>
          </div>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Check className="min-w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <strong className="block">Segmento underbanked</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Ampio mercato di consumatori con limitato accesso ai servizi creditizi tradizionali, in particolare giovani professionisti e lavoratori autonomi.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="min-w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <strong className="block">Trend di digitalizzazione</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Crescente adozione di pagamenti digitali e diminuzione dell'uso del contante, accelerata dalla pandemia.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="min-w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <strong className="block">Open Banking</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Evoluzione normativa favorevole a operatori non bancari tradizionali grazie alla PSD2 e alle successive evoluzioni.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="min-w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <strong className="block">Passaporto europeo</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Sfruttamento delle opportunità del mercato unico europeo per i servizi finanziari, con potenziale espansione in altri paesi UE.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="min-w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <strong className="block">Partnership strategiche</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Potenziali collaborazioni con retailer, piattaforme e-commerce o altre realtà che potrebbero promuovere il prodotto.
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        {/* Threats */}
        <div className="dashboard-card bg-gradient-to-br from-amber-50 to-white border-l-4 border-amber-500">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="text-amber-500" size={22} />
            <h3 className="text-xl font-semibold text-amber-700">Minacce</h3>
          </div>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <AlertTriangle className="min-w-5 h-5 text-amber-500 mt-0.5" />
              <div>
                <strong className="block">Evoluzione normativa</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Potenziali restrizioni future nella regolamentazione italiana o europea sul passaporto bancario o sui requisiti di mediazione creditizia.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="min-w-5 h-5 text-amber-500 mt-0.5" />
              <div>
                <strong className="block">Concorrenza tradizionale</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Reazione delle banche tradizionali con prodotti simili o offerte aggressive per mantenere quota di mercato.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="min-w-5 h-5 text-amber-500 mt-0.5" />
              <div>
                <strong className="block">Fintech emergenti</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Crescente presenza di startup tecnologiche nel settore dei pagamenti con soluzioni innovative e modelli di costo competitivi.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="min-w-5 h-5 text-amber-500 mt-0.5" />
              <div>
                <strong className="block">Rischio reputazionale</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Potenziali problematiche legate alla banca emittente o a casi di insolvenza che potrebbero danneggiare l'immagine di FinEu.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="min-w-5 h-5 text-amber-500 mt-0.5" />
              <div>
                <strong className="block">Instabilità economica</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Rischi macroeconomici che potrebbero influenzare il comportamento dei consumatori e la loro capacità di spesa.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Strategie derivanti dall'analisi SWOT */}
      <div className="mt-6">
        <div className="dashboard-card">
          <h3 className="section-title">Strategie derivanti dall'Analisi SWOT</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
              <h4 className="text-lg font-semibold text-fineu-blue mb-3">Strategie Offensive (S+O)</h4>
              <ul className="space-y-2 pl-2">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-green-500 mt-1"></div>
                  <span><strong>Target marketing</strong>: Focalizzare le campagne sui segmenti underbanked sfruttando le condizioni zero costi</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-green-500 mt-1"></div>
                  <span><strong>Espansione rete</strong>: Accelerare la crescita dei collaboratori per capitalizzare l'opportunità di mercato</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-green-500 mt-1"></div>
                  <span><strong>Digitalizzazione</strong>: Investire nei canali digitali per supportare l'onboarding e l'attivazione</span>
                </li>
              </ul>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-green-50 to-amber-50 rounded-lg">
              <h4 className="text-lg font-semibold text-fineu-blue mb-3">Strategie Difensive (S+T)</h4>
              <ul className="space-y-2 pl-2">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-amber-500 mt-1"></div>
                  <span><strong>Monitoraggio normativo</strong>: Mantenere aggiornamenti costanti sulle evoluzioni regolamentari</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-amber-500 mt-1"></div>
                  <span><strong>Differenziazione</strong>: Valorizzare l'accessibilità e l'assistenza personale vs competitors</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-amber-500 mt-1"></div>
                  <span><strong>Due diligence</strong>: Controlli approfonditi sul partner bancario per mitigare rischi reputazionali</span>
                </li>
              </ul>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-amber-50 to-red-50 rounded-lg">
              <h4 className="text-lg font-semibold text-fineu-blue mb-3">Strategie di Adattamento (W+O)</h4>
              <ul className="space-y-2 pl-2">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-blue-500 mt-1"></div>
                  <span><strong>Reclutamento mirato</strong>: Accelerare l'espansione della rete con un piano strutturato</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-blue-500 mt-1"></div>
                  <span><strong>Processi digitalizzati</strong>: Semplificare l'operatività cross-border con strumenti digitali</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-blue-500 mt-1"></div>
                  <span><strong>Co-branding</strong>: Rafforzare il posizionamento associando a marchi noti</span>
                </li>
              </ul>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-red-50 to-blue-50 rounded-lg">
              <h4 className="text-lg font-semibold text-fineu-blue mb-3">Strategie di Sopravvivenza (W+T)</h4>
              <ul className="space-y-2 pl-2">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-red-500 mt-1"></div>
                  <span><strong>Diversificazione partner</strong>: Valutare collaborazioni con più istituti bancari</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-red-500 mt-1"></div>
                  <span><strong>Stress testing regolatorio</strong>: Preparare scenari alternativi per cambiamenti normativi</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-red-500 mt-1"></div>
                  <span><strong>Innovazione incrementale</strong>: Monitorare e adattarsi alle innovazioni Fintech</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwotAnalysis;
