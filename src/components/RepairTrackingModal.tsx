import React, { useState } from 'react';
import { X, Search, CheckCircle2, Clock, Wrench, Package, Truck, AlertCircle } from 'lucide-react';
import { SAMPLE_REPAIR_STATUSES } from '../data/careData';
import type { RepairTrackingInfo } from '../types';

interface RepairTrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RepairTrackingModal: React.FC<RepairTrackingModalProps> = ({ isOpen, onClose }) => {
  const [searchKey, setSearchKey] = useState('');
  const [result, setResult] = useState<RepairTrackingInfo | null>(null);
  const [searched, setSearched] = useState(false);

  if (!isOpen) return null;

  const timelineSteps = [
    { title: "Request Received", icon: Package },
    { title: "Device Diagnosed", icon: Search },
    { title: "Repair In Progress", icon: Wrench },
    { title: "Quality Check", icon: Clock },
    { title: "Ready for Pickup / Delivery", icon: Truck },
    { title: "Completed", icon: CheckCircle2 }
  ];

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    const key = searchKey.trim().toUpperCase();

    if (SAMPLE_REPAIR_STATUSES[key]) {
      setResult(SAMPLE_REPAIR_STATUSES[key]);
    } else if (key.length >= 3) {
      setResult({
        repairId: key,
        customerName: "Customer Record",
        device: "Laptop Repair Service",
        issue: "Technical Diagnostics & Service",
        receivedDate: "2026-08-17",
        estimatedCompletion: "In Progress",
        currentStepIndex: 2,
        statusNotes: "Laptop currently on workbench under inspection by certified engineer."
      });
    } else {
      setResult(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card w-full max-w-2xl rounded-3xl p-6 sm:p-8 border border-slate-200 bg-white shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
            <Search className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">Track Your Repair</h3>
            <p className="text-xs text-slate-500 font-medium">Live status lookup for Care Computers service center jobs.</p>
          </div>
        </div>

        <form onSubmit={handleTrack} className="space-y-4 mb-6">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Repair ID or Mobile Number *</label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                required
                placeholder="e.g. CARE-8821 or 9246379771"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 uppercase tracking-wider placeholder-slate-400 focus:outline-none focus:border-blue-600 font-medium"
              />
            </div>
            <p className="text-[10px] text-slate-500 mt-1 font-medium">Try demo IDs: <span className="text-blue-700 font-bold cursor-pointer" onClick={() => setSearchKey('CARE-8821')}>CARE-8821</span>, <span className="text-blue-700 font-bold cursor-pointer" onClick={() => setSearchKey('CARE-9014')}>CARE-9014</span>, or <span className="text-blue-700 font-bold cursor-pointer" onClick={() => setSearchKey('9246379771')}>9246379771</span></p>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-extrabold text-xs text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-600/25 transition-all cursor-pointer"
          >
            Track Status
          </button>
        </form>

        {searched && (
          result ? (
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left animate-in fade-in duration-200">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200">
                <div>
                  <span className="text-[10px] uppercase font-extrabold text-blue-800 bg-blue-100 border border-blue-200 px-2 py-0.5 rounded">Job #{result.repairId}</span>
                  <h4 className="text-base font-extrabold text-slate-900 mt-1">{result.device}</h4>
                  <p className="text-xs text-slate-600 font-medium">{result.issue}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-500 font-bold">Est. Completion:</span>
                  <p className="text-xs font-extrabold text-emerald-700">{result.estimatedCompletion}</p>
                </div>
              </div>

              {/* Status Timeline */}
              <div className="mb-4">
                <p className="text-xs font-bold text-slate-800 mb-3">Live Progress Timeline:</p>
                <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                  {timelineSteps.map((step, idx) => {
                    const isDone = idx <= result.currentStepIndex;
                    const isCurrent = idx === result.currentStepIndex;
                    const IconComp = step.icon;

                    return (
                      <div
                        key={idx}
                        className={`p-2 rounded-xl border text-center flex flex-col items-center justify-between ${
                          isCurrent
                            ? 'bg-blue-100 border-blue-600 text-blue-900 shadow-md animate-pulse'
                            : isDone
                            ? 'bg-blue-50 border-blue-300 text-blue-700'
                            : 'bg-white border-slate-200 text-slate-400'
                        }`}
                      >
                        <IconComp className="w-4 h-4 mb-1" />
                        <span className="text-[9px] font-bold leading-tight line-clamp-2">{step.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-medium shadow-xs">
                <span className="font-extrabold text-blue-700">Technician Note: </span>
                {result.statusNotes}
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-left text-xs text-amber-900 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-600" />
              <div>
                <p className="font-bold">No active job found for that query.</p>
                <p className="text-[11px] text-slate-600 mt-0.5 font-medium">Please double-check your Repair ID on your receipt or call our service desk at +91 92463 79771.</p>
              </div>
            </div>
          )
        )}

      </div>
    </div>
  );
};
