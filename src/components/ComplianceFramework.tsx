
import React from 'react';
import { ShieldCheck, AlertTriangle, FileText, Globe, CheckCircle2, Scale } from 'lucide-react';

const ComplianceFramework = () => {
  return (
    <div className="animate-fade-in p-6">
      <h2 className="text-3xl font-bold text-fineu-blue mb-6">Compliance e Regolamentazione</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="dashboard-card">
          <div className="flex items-center gap-2 mb-4">
            <Scale className="text-fineu-blue" size={20} />
            <h3 className="section-title">Quadro Normativo di Riferimento</h3>
          </div>
          
          <div className="space-y-4">
            <div className="highlight-box">
              <h4 className="font-medium">Normative Europee</h4>
              <ul className="space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                  <div>
                    <strong className="block">Direttiva PSD2 (2015/2366/UE)</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Regola i servizi di pagamento nell'UE, incluso il passaporto europeo per istituti di credito che consente alla banca lituana di operare in Italia
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                  <div>
                    <strong className="block">Regolamento Interchange Fee (2015/751/UE)</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Limita le commissioni interbancarie per transazioni con carta al massimo dello 0,30% per carte di credito consumer
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                  <div>
                    <strong className="block">GDPR (2016/679/UE)</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Regolamento sulla protezione dei dati personali con implicazioni per la raccolta e gestione dati dei clienti
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="highlight-box">
              <h4 className="font-medium">Normative Italiane e OAM</h4>
              <ul className="space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                  <div>
                    <strong className="block">D.lgs. 141/2010 e successive modifiche</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Disciplina dell'attività di mediazione creditizia e requisiti per iscrizione all'OAM
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                  <div>
                    <strong className="block">Regolamento OAM</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Obblighi di trasparenza, formazione continua, requisiti patrimoniali e di onorabilità per i mediatori
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                  <div>
                    <strong className="block">Normativa Antiriciclaggio (D.lgs. 231/2007)</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Obblighi di adeguata verifica della clientela e segnalazione operazioni sospette
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="dashboard-card">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="text-fineu-blue" size={20} />
            <h3 className="section-title">Implicazioni della Collaborazione Internazionale</h3>
          </div>
          
          <div className="space-y-4">
            <div className="highlight-box">
              <h4 className="font-medium">Passaporto Europeo</h4>
              <p className="text-sm mt-2">
                La banca lituana, autorizzata nel suo paese d'origine, può operare in Italia senza necessità di una licenza bancaria italiana grazie al meccanismo del passaporto europeo per i servizi bancari.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <CheckCircle2 className="text-green-500" size={18} />
                <p className="text-sm font-medium">Meccanismo validato da precedenti collaborazioni simili nel mercato italiano</p>
              </div>
            </div>
            
            <div className="highlight-box">
              <h4 className="font-medium">Supervisione e Vigilanza</h4>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                  <div>
                    <strong>Banca Centrale Lituana</strong>: Vigilanza primaria sull'istituto emittente
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                  <div>
                    <strong>BCE</strong>: Supervisione nell'ambito del Meccanismo di Vigilanza Unico
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                  <div>
                    <strong>Banca d'Italia</strong>: Monitoraggio delle attività cross-border nel territorio italiano
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                  <div>
                    <strong>OAM</strong>: Vigilanza sull'attività di FinEu come mediatore creditizio
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="highlight-box">
              <h4 className="font-medium">Aspetti Fiscali</h4>
              <p className="text-sm mt-2">
                Le commissioni percepite da FinEu sono soggette a normativa fiscale italiana, mentre l'emissione delle carte dalla banca lituana segue il regime fiscale del paese baltico, generando potenziali vantaggi di efficienza fiscale nell'ambito della partnership.
              </p>
              <div className="flex items-center gap-2 mt-3 bg-amber-50 p-2 rounded">
                <AlertTriangle className="text-amber-500" size={18} />
                <p className="text-sm font-medium">Necessaria documentazione dettagliata dei flussi finanziari tra i partner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="dashboard-card">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="text-fineu-blue" size={20} />
            <h3 className="section-title">Requisiti Specifici OAM e Governance</h3>
          </div>
          
          <div className="space-y-4">
            <div className="highlight-box">
              <h4 className="font-medium">Obblighi OAM per FinEu</h4>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="min-w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <strong>Mantenimento requisiti iscrizione</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Onorabilità degli esponenti, aggiornamento professionale, copertura assicurativa RC professionale
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="min-w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <strong>Trasparenza e correttezza</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Comunicazione chiara delle condizioni, assenza di conflitti di interesse, pubblicità non ingannevole
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="min-w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <strong>Formazione collaboratori</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Tutti i collaboratori devono essere formati e aggiornati sulle normative
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="min-w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <strong>Documentazione rapporti</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Conservazione documentazione relativa ai clienti e ai rapporti di collaborazione
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="min-w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <strong>Reportistica periodica</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Invio dati statistici periodici all'OAM sulle attività svolte
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="highlight-box">
              <h4 className="font-medium">Governance della Compliance</h4>
              <div className="mt-3">
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-fineu-blue text-white p-3">
                    <h5 className="font-medium">Modello a Tre Linee di Difesa</h5>
                  </div>
                  <div className="p-3 border-b">
                    <strong className="block text-sm">1. Prima Linea</strong>
                    <p className="text-sm text-gray-600">
                      Controlli operativi quotidiani svolti dai collaboratori e responsabili delle aree di business
                    </p>
                  </div>
                  <div className="p-3 border-b">
                    <strong className="block text-sm">2. Seconda Linea</strong>
                    <p className="text-sm text-gray-600">
                      Funzione compliance dedicata che monitora l'aderenza alle normative e gestisce i rischi
                    </p>
                  </div>
                  <div className="p-3">
                    <strong className="block text-sm">3. Terza Linea</strong>
                    <p className="text-sm text-gray-600">
                      Audit periodici indipendenti per verificare l'efficacia dei controlli interni
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="dashboard-card">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="text-fineu-blue" size={20} />
            <h3 className="section-title">Sfide Normative e Gestione del Rischio</h3>
          </div>
          
          <div className="space-y-4">
            <div className="highlight-box">
              <h4 className="font-medium">Principali Sfide Normative</h4>
              <div className="space-y-3 mt-3">
                <div className="p-3 border rounded-md bg-amber-50 border-amber-200">
                  <div className="flex items-center gap-2">
                    <AlertTriangle size={16} className="text-amber-500" />
                    <h5 className="font-medium">Evoluzione Passaporto Europeo</h5>
                  </div>
                  <p className="text-sm mt-1">Possibili modifiche dopo Brexit e pressioni per maggiore controllo nazionale</p>
                  <div className="mt-1 text-sm bg-white p-2 rounded border border-gray-100">
                    <strong className="block text-fineu-blue">Mitigazione:</strong>
                    Monitoraggio continuo delle evoluzioni normative a livello UE
                  </div>
                </div>
                
                <div className="p-3 border rounded-md bg-amber-50 border-amber-200">
                  <div className="flex items-center gap-2">
                    <AlertTriangle size={16} className="text-amber-500" />
                    <h5 className="font-medium">Regolamentazione Antiriciclaggio</h5>
                  </div>
                  <p className="text-sm mt-1">Requisiti crescenti per KYC e monitoraggio delle transazioni</p>
                  <div className="mt-1 text-sm bg-white p-2 rounded border border-gray-100">
                    <strong className="block text-fineu-blue">Mitigazione:</strong>
                    Implementazione di procedure robuste di verifica clientela
                  </div>
                </div>
                
                <div className="p-3 border rounded-md bg-amber-50 border-amber-200">
                  <div className="flex items-center gap-2">
                    <AlertTriangle size={16} className="text-amber-500" />
                    <h5 className="font-medium">Tutela del Consumatore</h5>
                  </div>
                  <p className="text-sm mt-1">Focus crescente su trasparenza e appropriatezza dei prodotti</p>
                  <div className="mt-1 text-sm bg-white p-2 rounded border border-gray-100">
                    <strong className="block text-fineu-blue">Mitigazione:</strong>
                    Documentazione chiara ed esaustiva, verifica periodica dei requisiti
                  </div>
                </div>
              </div>
            </div>
            
            <div className="highlight-box">
              <h4 className="font-medium">Gestione del Rischio Reputazionale</h4>
              <div className="mt-3 space-y-2">
                <div className="bg-white p-3 border rounded-md">
                  <div className="flex items-center gap-2">
                    <FileText className="text-fineu-blue" size={18} />
                    <h5 className="font-medium">Due Diligence Continua</h5>
                  </div>
                  <p className="text-sm mt-1">
                    Monitoraggio periodico della solidità e reputazione della banca partner lituana, revisione indicatori di stabilità finanziaria e compliance
                  </p>
                </div>
                
                <div className="bg-white p-3 border rounded-md">
                  <div className="flex items-center gap-2">
                    <FileText className="text-fineu-blue" size={18} />
                    <h5 className="font-medium">Piano di Comunicazione di Crisi</h5>
                  </div>
                  <p className="text-sm mt-1">
                    Protocollo dettagliato per gestire eventuali crisi reputazionali, con procedure di comunicazione trasparente verso clienti e stakeholder
                  </p>
                </div>
                
                <div className="bg-white p-3 border rounded-md">
                  <div className="flex items-center gap-2">
                    <FileText className="text-fineu-blue" size={18} />
                    <h5 className="font-medium">Clausole Contrattuali Protettive</h5>
                  </div>
                  <p className="text-sm mt-1">
                    Inserimento nell'accordo con la banca lituana di clausole che tutelino FinEu in caso di problemi reputazionali o operativi dell'emittente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceFramework;
