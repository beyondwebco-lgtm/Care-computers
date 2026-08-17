import React, { useState } from 'react';
import { PROBLEM_OPTIONS } from '../data/careData';
import { 
  PowerOff, MonitorX, Gauge, Flame, BatteryWarning, Keyboard, 
  HardDrive, Tv, WifiOff, AlertTriangle, ShieldAlert, Cpu, 
  Database, Droplets, CircuitBoard, HelpCircle, ArrowRight, Wrench, PhoneCall, CheckCircle2, ShieldCheck
} from 'lucide-react';

interface ProblemFinderProps {
  onOpenBooking: (serviceName?: string) => void;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  PowerOff,
  MonitorX,
  Gauge,
  Flame,
  BatteryWarning,
  Keyboard,
  HardDrive,
  Tv,
  WifiOff,
  AlertTriangle,
  ShieldAlert,
  Cpu,
  Database,
  Droplets,
  CircuitBoard,
  HelpCircle
};

const problemImages: Record<string, { src: string; caption: string }> = {
  "broken-screen": { src: "/images/screen_repair.png", caption: "Laptop Screen Panel Replacement Visual" },
  "no-display": { src: "/images/screen_repair.png", caption: "Display Cable & GPU Inspection Visual" },
  "not-turning-on": { src: "/images/motherboard_repair.png", caption: "Motherboard Power Jack Repair Visual" },
  "motherboard-problem": { src: "/images/motherboard_repair.png", caption: "Chip-Level Micro-Soldering Workbench Visual" },
  "overheating": { src: "/images/motherboard_repair.png", caption: "Thermal Paste & Fan Cleaning Visual" },
  "blue-screen": { src: "/images/motherboard_repair.png", caption: "Hardware & Memory Diagnostics Visual" },
  "liquid-damage": { src: "/images/motherboard_repair.png", caption: "Motherboard Corrosion Cleaning Visual" },
  "hard-drive-failure": { src: "/images/data_recovery_lab.png", caption: "Cleanroom Storage Recovery Visual" },
  "data-recovery": { src: "/images/data_recovery_lab.png", caption: "Forensic Hard Drive Extraction Visual" },
  "slow-laptop": { src: "/images/hero_technician_repair.png", caption: "SSD & Speed Upgrade Workbench Visual" },
  "battery-problem": { src: "/images/hero_technician_repair.png", caption: "Original Battery Replacement Visual" },
  "keyboard-problem": { src: "/images/hero_technician_repair.png", caption: "Laptop Keyboard Repair Visual" },
  "wifi-problem": { src: "/images/hero_technician_repair.png", caption: "Wireless Card & Antenna Repair Visual" },
  "virus-malware": { src: "/images/hero_technician_repair.png", caption: "OS System & Virus Cleanup Visual" },
  "os-problem": { src: "/images/hero_technician_repair.png", caption: "OS Reinstallation & Driver Setup Visual" },
  "other-issue": { src: "/images/hero_technician_repair.png", caption: "General Laptop Diagnostic Visual" }
};

export const ProblemFinder: React.FC<ProblemFinderProps> = ({ onOpenBooking }) => {
  const [selectedId, setSelectedId] = useState<string>("broken-screen");

  const selectedProblem = PROBLEM_OPTIONS.find(p => p.id === selectedId) || PROBLEM_OPTIONS[0];

  const currentVisual = problemImages[selectedProblem.id] || {
    src: "/images/hero_technician_repair.png",
    caption: "Technical Repair Workbench Visual"
  };

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Background soft lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Interactive Diagnostic Finder</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            What’s wrong with your laptop?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Select your specific symptom below to instantly view the recommended repair visual, probable cause, and get a fast cost estimate.
          </p>
        </div>

        {/* Interactive Options Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
          {PROBLEM_OPTIONS.map((prob) => {
            const IconComponent = iconMap[prob.iconName] || HelpCircle;
            const isSelected = prob.id === selectedId;

            return (
              <button
                key={prob.id}
                onClick={() => setSelectedId(prob.id)}
                className={`flex flex-col items-center justify-center p-3.5 rounded-2xl transition-all text-center cursor-pointer border ${
                  isSelected
                    ? 'bg-gradient-to-b from-blue-600 to-blue-700 border-blue-500 text-white shadow-xl shadow-blue-600/30 scale-105 z-10'
                    : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className={`p-2.5 rounded-xl mb-2 ${isSelected ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold leading-tight line-clamp-2">
                  {prob.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Problem Solution Box with HD Photo Visual */}
        {selectedProblem && (
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 bg-white shadow-xl relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Image Visual Column */}
              <div className="lg:col-span-4 relative">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg relative bg-slate-100 group">
                  <img
                    src={currentVisual.src}
                    alt={`Care Computers ${selectedProblem.title} Repair Visual`}
                    className="w-full h-56 sm:h-64 lg:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 border border-slate-200 backdrop-blur-md">
                    <span className="text-[10px] uppercase font-black tracking-wider text-blue-800 bg-blue-100 px-2 py-0.5 rounded border border-blue-200 block w-max mb-1">
                      {selectedProblem.title}
                    </span>
                    <p className="text-xs font-extrabold text-slate-900 line-clamp-1">{currentVisual.caption}</p>
                  </div>
                </div>
              </div>

              {/* Diagnostic Text & Details Column */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-md bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold uppercase tracking-wider">
                    Diagnostic Summary
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Issue #{selectedProblem.id}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                  {selectedProblem.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                  {selectedProblem.explanation}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>Free Inspection at Secunderabad Center</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-cyan-600" />
                    <span>90-Day Standard Warranty on Replacement Parts</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                  <span className="text-xs text-slate-500 font-bold">Recommended Service:</span>
                  <span className="text-xs font-extrabold text-blue-700 flex items-center gap-1.5">
                    <Wrench className="w-4 h-4 text-blue-600" />
                    {selectedProblem.relevantService}
                  </span>
                </div>
              </div>

              {/* Action Buttons Column */}
              <div className="lg:col-span-3 flex flex-col gap-3 justify-center">
                <button
                  onClick={() => onOpenBooking(`Repair for ${selectedProblem.title}`)}
                  className="w-full py-4 px-6 rounded-2xl font-extrabold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Get This Fixed</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+919246379771"
                  className="w-full py-3 px-4 rounded-2xl font-bold text-xs text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all text-center flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-blue-600" />
                  <span>Call Engineer (+91 92463 79771)</span>
                </a>
              </div>

            </div>

          </div>
        )}

        {/* Not Sure Banner */}
        <div className="mt-10 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 px-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-sm text-slate-700 font-semibold">
              Not sure what's wrong with your device? Let our engineers inspect it for free.
            </span>
            <button
              onClick={() => onOpenBooking("Free Device Diagnostic Inspection")}
              className="px-5 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-xs font-bold text-blue-700 transition-all cursor-pointer whitespace-nowrap"
            >
              Talk to an Expert
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
