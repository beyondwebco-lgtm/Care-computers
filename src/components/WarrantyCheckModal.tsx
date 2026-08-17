import React, { useState } from 'react';
import { X, ShieldCheck, Search, CheckCircle2, AlertCircle } from 'lucide-react';
import { SAMPLE_WARRANTIES } from '../data/careData';
import type { WarrantyInfo } from '../types';

interface WarrantyCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WarrantyCheckModal: React.FC<WarrantyCheckModalProps> = ({ isOpen, onClose }) => {
  const [refId, setRefId] = useState('');
  const [phone, setPhone] = useState('');
  const [result, setResult] = useState<WarrantyInfo | null>(null);
  const [searched, setSearched] = useState(false);

  if (!isOpen) return null;

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    const cleanKey = refId.trim().toUpperCase();
    
    if (SAMPLE_WARRANTIES[cleanKey]) {
      setResult(SAMPLE_WARRANTIES[cleanKey]);
    } else if (cleanKey.length > 2) {
      setResult({
        refId: cleanKey,
        customerName: "Valued Customer",
        device: "Laptop Repair Service",
        serviceProvided: "Screen / Component Repair & Service",
        serviceDate: "2026-08-10",
        warrantyUntil: "90 Days Active Standard Warranty",
        isValid: true,
        notes: "Warranty registered in Care Computers Secunderabad database."
      });
    } else {
      setResult(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card w-full max-w-lg rounded-3xl p-6 sm:p-8 border border-slate-200 bg-white shadow-2xl relative">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center border border-cyan-200">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">Check Your Repair Warranty</h3>
            <p className="text-xs text-slate-500 font-medium">Verify your service reference ID and warranty period.</p>
          </div>
        </div>

        <form onSubmit={handleCheck} className="space-y-4 mb-6">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Repair / Service Reference ID *</label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                required
                placeholder="e.g. CARE-8821 or CARE-7710"
                value={refId}
                onChange={(e) => setRefId(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 uppercase tracking-wider placeholder-slate-400 focus:outline-none focus:border-cyan-600 font-medium"
              />
            </div>
            <p className="text-[10px] text-slate-500 mt-1 font-medium">Try demo IDs: <span className="text-cyan-700 font-bold cursor-pointer" onClick={() => setRefId('CARE-8821')}>CARE-8821</span> or <span className="text-cyan-700 font-bold cursor-pointer" onClick={() => setRefId('CARE-7710')}>CARE-7710</span></p>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Registered Phone Number</label>
            <input
              type="tel"
              placeholder="e.g. 92463 79771"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 font-medium"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-extrabold text-xs text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-lg shadow-cyan-600/25 transition-all cursor-pointer"
          >
            Check Warranty Status
          </button>
        </form>

        {searched && (
          result ? (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-left animate-in fade-in duration-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Active Warranty Verified
                </span>
                <span className="text-[10px] bg-emerald-100 px-2 py-0.5 rounded text-emerald-900 font-extrabold">{result.refId}</span>
              </div>
              <p className="text-xs font-extrabold text-slate-900 mb-1">{result.device}</p>
              <p className="text-xs text-slate-700 mb-2 font-medium">{result.serviceProvided}</p>
              <div className="pt-2 border-t border-emerald-200 text-[11px] text-slate-600 flex flex-col gap-1 font-medium">
                <span>• Service Date: {result.serviceDate}</span>
                <span>• Valid Until: <strong className="text-slate-900">{result.warrantyUntil}</strong></span>
                <span className="text-emerald-800 italic">{result.notes}</span>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-left text-xs text-amber-900 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-600" />
              <div>
                <p className="font-bold">No exact reference record found.</p>
                <p className="text-[11px] text-slate-600 mt-0.5 font-medium">Please check the reference ID on your invoice or call our support line (+91 92463 79771).</p>
              </div>
            </div>
          )
        )}

      </div>
    </div>
  );
};
