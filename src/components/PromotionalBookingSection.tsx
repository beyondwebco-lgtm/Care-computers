import React, { useState } from 'react';
import { Phone, MessageSquare, CheckCircle2 } from 'lucide-react';

import { COMPANY_INFO } from '../data/careData';
import confetti from 'canvas-confetti';

export const PromotionalBookingSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    brand: 'Dell',
    model: '',
    serviceOrProblem: '',
    contactMethod: 'Phone'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    try {
      confetti({
        particleCount: 80,
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
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info column */}
          <div className="lg:col-span-5">
            <span className="text-blue-700 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-blue-100 border border-blue-200 rounded-full inline-block mb-3">
              Fast Repair Booking
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Book Your Laptop Repair
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-8 font-medium">
              Tell us what’s wrong and our technical team will get back to you with an estimated fix cost and pickup schedule within minutes.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Free Initial Diagnostic Inspection</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Same-Day Repair for Common Screen &amp; Power Issues</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Free Pickup &amp; Delivery in Secunderabad &amp; Hyderabad</span>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 font-medium">Direct Store Phone</p>
                  <p className="text-base font-extrabold text-slate-900">+91 92463 79771</p>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.primaryPhone}`}
                  className="p-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <div>
                  <p className="text-xs text-slate-500 font-medium">WhatsApp Instant Chat</p>
                  <p className="text-sm font-bold text-emerald-700">+91 92463 79771</p>
                </div>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Care%20Computers,%20I%20want%20to%20book%20a%20repair`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200 bg-white shadow-xl">
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Repair Request Received!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto mb-6 font-medium">
                    Thank you, {formData.name}. Our senior repair engineer will call you shortly at <span className="font-bold text-slate-900">{formData.phone}</span> to confirm your diagnostic appointment.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-100 text-xs font-bold text-slate-800 hover:bg-slate-200 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-extrabold text-slate-900 mb-1">
                    Book Your Repair Request
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mb-4">
                    Fill in your device details to schedule repair or request free pickup.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Srinivas Rao"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 font-medium"
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
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Laptop Brand</label>
                      <select
                        value={formData.brand}
                        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600 font-medium"
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Laptop Model (Optional)</label>
                      <input
                        type="text"
                        placeholder="e.g. Inspiron 15 / MacBook Air M1"
                        value={formData.model}
                        onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Contact Method</label>
                      <select
                        value={formData.contactMethod}
                        onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value as any })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600 font-medium"
                      >
                        <option value="Phone">Phone Call</option>
                        <option value="WhatsApp">WhatsApp Message</option>
                        <option value="Email">Email Response</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Describe Problem / Service Required</label>
                    <textarea
                      rows={3}
                      placeholder="Describe what's wrong (e.g. cracked screen, laptop not turning on, lost files, slow boot)"
                      value={formData.serviceOrProblem}
                      onChange={(e) => setFormData({ ...formData, serviceOrProblem: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 font-medium"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 shadow-xl shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Send Repair Request via WhatsApp</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
