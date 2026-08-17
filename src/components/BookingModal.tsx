import React, { useState, useEffect } from 'react';
import { X, Send, Phone, CheckCircle2, Laptop, MessageSquare } from 'lucide-react';

import { COMPANY_INFO } from '../data/careData';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    brand: 'Dell',
    model: '',
    serviceOrProblem: initialService,
    contactMethod: 'Phone'
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceOrProblem: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log(err);
    }

    const text = `Hi Care Computers, I would like to book a laptop repair:

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'N/A'}
*Brand:* ${formData.brand}
*Model:* ${formData.model || 'N/A'}
*Problem / Service:* ${formData.serviceOrProblem || 'General Diagnostic'}
*Preferred Contact:* ${formData.contactMethod}`;

    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
  };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card w-full max-w-xl rounded-3xl p-6 sm:p-8 border border-slate-200 bg-white shadow-2xl relative max-h-[92vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Repair Request Received!</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto mb-6 font-medium">
              Thank you, {formData.name}. Our senior technician will contact you at <strong className="text-slate-900">{formData.phone}</strong> shortly to confirm your service or pickup schedule.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white transition-colors cursor-pointer shadow-md"
            >
              Done &amp; Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
                <Laptop className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">Book Laptop Repair</h3>
                <p className="text-xs text-slate-500 font-medium">Care Computers • Secunderabad &amp; Hyderabad</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Srinivas Rao"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Laptop Brand</label>
                  <select
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 font-medium"
                  >
                    <option value="Dell">Dell</option>
                    <option value="HP">HP</option>
                    <option value="Lenovo">Lenovo</option>
                    <option value="Apple MacBook">Apple MacBook</option>
                    <option value="Asus">Asus</option>
                    <option value="Acer">Acer</option>
                    <option value="Sony VAIO">Sony VAIO</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Toshiba">Toshiba</option>
                    <option value="Other">Other Brand</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Laptop Model (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Inspiron 15 / MacBook Pro"
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Contact</label>
                  <select
                    value={formData.contactMethod}
                    onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value as any })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 font-medium"
                  >
                    <option value="Phone">Phone Call</option>
                    <option value="WhatsApp">WhatsApp Message</option>
                    <option value="Email">Email</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Problem / Service Required</label>
                <textarea
                  rows={2}
                  placeholder="Describe your issue or requested service"
                  value={formData.serviceOrProblem}
                  onChange={(e) => setFormData({ ...formData, serviceOrProblem: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 font-medium"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-extrabold text-xs text-white bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 shadow-xl shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Send Repair Request via WhatsApp</span>
              </button>


              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 font-medium border-t border-slate-100">
                <span>Or call directly:</span>
                <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="font-bold text-blue-700 flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  +91 92463 79771
                </a>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
