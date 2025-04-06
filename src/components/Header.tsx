
import React from 'react';
import { CreditCard, Download, Printer } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-3 px-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex items-center gap-2">
          <CreditCard className="h-7 w-7 text-fineu-blue" />
          <div>
            <h1 className="text-xl font-bold text-fineu-blue">FinEu Credit Compass</h1>
            <p className="text-sm text-gray-500">Business Analysis Dashboard</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button 
          className="print-button"
          onClick={() => window.print()}
        >
          <Printer size={18} />
          <span>Export PDF</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
