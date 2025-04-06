
import React from 'react';
import { PenTool, Briefcase, Users, Heart, Send, Key, Anchor, Coins, Building } from 'lucide-react';

const BusinessModelCanvas = () => {
  return (
    <div className="animate-fade-in p-6">
      <h2 className="text-3xl font-bold text-fineu-blue mb-6">Business Model Canvas</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Key Partners */}
          <div className="dashboard-card">
            <div className="flex items-center gap-2 mb-3">
              <Building className="text-fineu-blue" size={20} />
              <h3 className="text-lg font-medium text-fineu-blue">Partner Chiave</h3>
            </div>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Banca lituana emittente con passaporto europeo</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Circuito Mastercard</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Collaboratori e agenti FinEu</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>OAM per supervisione normativa</span>
              </li>
            </ul>
          </div>
          
          {/* Key Activities */}
          <div className="dashboard-card">
            <div className="flex items-center gap-2 mb-3">
              <Anchor className="text-fineu-blue" size={20} />
              <h3 className="text-lg font-medium text-fineu-blue">Attività Chiave</h3>
            </div>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Promozione e distribuzione carte</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Valutazione preliminare dei clienti</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Gestione della rete collaboratori</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Marketing e promozione</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Monitoraggio compliance</span>
              </li>
            </ul>
          </div>
          
          {/* Key Resources */}
          <div className="dashboard-card">
            <div className="flex items-center gap-2 mb-3">
              <Key className="text-fineu-blue" size={20} />
              <h3 className="text-lg font-medium text-fineu-blue">Risorse Chiave</h3>
            </div>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Base clienti esistente</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Rete di collaboratori (3-12)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Know-how nella mediazione creditizia</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Presenza territoriale</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Iscrizione OAM</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Middle Column */}
        <div className="space-y-4">
          {/* Value Propositions */}
          <div className="dashboard-card border-2 border-fineu-blue">
            <div className="flex items-center gap-2 mb-3">
              <PenTool className="text-fineu-blue" size={20} />
              <h3 className="text-lg font-medium text-fineu-blue">Proposta di Valore</h3>
            </div>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-gold mt-1"></div>
                <span><strong>Maggiore accessibilità</strong>: Valutazione del merito creditizio meno stringente</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-gold mt-1"></div>
                <span><strong>Mastercard Gold</strong>: Prestigio e benefici internazionali</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-gold mt-1"></div>
                <span><strong>Zero costi di attivazione</strong> e canone annuo</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-gold mt-1"></div>
                <span><strong>Carta a saldo</strong>: Controllo della spesa senza rischio sovraindebitamento</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-gold mt-1"></div>
                <span><strong>Supporto locale</strong>: Assistenza personalizzata attraverso la rete FinEu</span>
              </li>
            </ul>
          </div>
          
          {/* Customer Relationships */}
          <div className="dashboard-card">
            <div className="flex items-center gap-2 mb-3">
              <Heart className="text-fineu-blue" size={20} />
              <h3 className="text-lg font-medium text-fineu-blue">Relazioni con i Clienti</h3>
            </div>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Assistenza personalizzata</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Consulenza finanziaria</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Processo di onboarding supportato</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Follow-up periodico</span>
              </li>
            </ul>
          </div>
          
          {/* Channels */}
          <div className="dashboard-card">
            <div className="flex items-center gap-2 mb-3">
              <Send className="text-fineu-blue" size={20} />
              <h3 className="text-lg font-medium text-fineu-blue">Canali</h3>
            </div>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Rete di collaboratori diretti</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Marketing digitale</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Social media</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Passaparola e referral</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Partnership locali</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="space-y-4">
          {/* Customer Segments */}
          <div className="dashboard-card">
            <div className="flex items-center gap-2 mb-3">
              <Users className="text-fineu-blue" size={20} />
              <h3 className="text-lg font-medium text-fineu-blue">Segmenti di Clientela</h3>
            </div>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-gold mt-1"></div>
                <span><strong>Clienti non bancabili</strong> tramite canali tradizionali</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Giovani professionisti con storia creditizia limitata</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Lavoratori autonomi e liberi professionisti</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Clienti con necessità di gestire spese mensili</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Clientela esistente FinEu</span>
              </li>
            </ul>
          </div>
          
          {/* Cost Structure */}
          <div className="dashboard-card">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="text-fineu-blue" size={20} />
              <h3 className="text-lg font-medium text-fineu-blue">Struttura dei Costi</h3>
            </div>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Costo acquisizione cliente: <strong>€50</strong> per carta</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Costi operativi: <strong>€150</strong> per carta</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Investimenti marketing e comunicazione</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Formazione e gestione collaboratori</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Costi di compliance normativa</span>
              </li>
            </ul>
          </div>
          
          {/* Revenue Streams */}
          <div className="dashboard-card">
            <div className="flex items-center gap-2 mb-3">
              <Coins className="text-fineu-blue" size={20} />
              <h3 className="text-lg font-medium text-fineu-blue">Flussi di Ricavo</h3>
            </div>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-gold mt-1"></div>
                <span><strong>Fee di attivazione</strong>: €90 per carta</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-gold mt-1"></div>
                <span><strong>Commissione sul transato</strong>: 0,10% (su €350 mensili medi)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Potenziali cross-selling su altri prodotti finanziari</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 h-4 rounded-full bg-fineu-blue mt-1"></div>
                <span>Incentivi per volume dalla banca emittente</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelCanvas;
