import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { PROFILE } from '../constants'; // Ensure this path matches your project structure

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 1. STATE FOR FORM DATA
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // 2. PASTE YOUR GOOGLE SCRIPT URL HERE
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxNVP4Aw29C5Fod2VPJ6ZhmAxyjlCFtwmPWX1MNzBB-hebvpwxzXHwY5U2PfV9ge5a8/exec";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // 3. SEND DATA TO GOOGLE SHEETS
      // We use 'no-cors' mode or simple POST to avoid CORS preflight issues.
      // The content type is effectively text/plain, which your script parses as JSON.
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      // Google Scripts with 'no-cors' don't return readable status, 
      // so if we get here without error, we assume success.
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

    } catch (err) {
      console.error("Submission Error:", err);
      setError("Something went wrong. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 md:py-20 animate-fade-in-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-white">Let's Connect</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I am actively seeking Full-time Software Engineering roles and Internships. If you are looking for a developer who can ship code and integrate AI, let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Card */}
          <div className="h-full">
            <div className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-sm h-full flex flex-col">
              <div>
                <h2 className="text-2xl font-bold mb-8 text-white">Contact Info</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-2xl text-primary-400 border border-white/10 shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <a href={`mailto:${PROFILE.email}`} className="text-slate-400 hover:text-primary-400 transition-colors break-all">{PROFILE.email}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-2xl text-primary-400 border border-white/10 shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Phone</h4>
                      <a href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`} className="text-slate-400 hover:text-primary-400 transition-colors">{PROFILE.phone}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-2xl text-primary-400 border border-white/10 shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Location</h4>
                      <p className="text-slate-400">{PROFILE.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                 <h3 className="text-lg font-semibold text-secondary-400 mb-4">Availability</h3>
                 <div className="space-y-3">
                   <div className="flex items-center gap-3 text-slate-300">
                     <CheckCircle2 size={18} className="text-secondary-400/80" />
                     <span>Full-time Employment</span>
                   </div>
                   <div className="flex items-center gap-3 text-slate-300">
                     <CheckCircle2 size={18} className="text-secondary-400/80" />
                     <span>Internships</span>
                   </div>
                   <div className="flex items-center gap-3 text-slate-300">
                     <CheckCircle2 size={18} className="text-secondary-400/80" />
                     <span>Freelance Projects</span>
                   </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="h-full">
            <div className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-sm h-full flex flex-col">
               {submitted ? (
                 <div className="flex-grow flex flex-col items-center justify-center text-center py-12">
                   <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4 border border-green-500/30">
                     <CheckCircle2 size={32} />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                   <p className="text-slate-300">Thank you for reaching out, Srinath. I'll get back to you shortly.</p>
                   <button
                      onClick={() => setSubmitted(false)}
                     className="mt-6 text-primary-400 hover:text-primary-300 font-medium"
                   >
                     Send another message
                   </button>
                 </div>
               ) : (
                  <form onSubmit={handleSubmit} className="flex-grow flex flex-col justify-between space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-6 text-white">Send a Message</h2>
                      
                      {error && (
                        <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-2 text-red-200 text-sm">
                          <AlertCircle size={16} />
                          {error}
                        </div>
                      )}

                      <div className="space-y-1 mb-4">
                        <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                        <input 
                           type="text" 
                           id="name"
                           value={formData.name}
                           onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-slate-200 placeholder-slate-500"
                          placeholder="Your name"
                        />
                      </div>

                      <div className="space-y-1 mb-4">
                        <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                        <input 
                           type="email" 
                           id="email"
                           value={formData.email}
                           onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-slate-200 placeholder-slate-500"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div className="space-y-1 mb-4">
                        <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                        <textarea 
                           id="message"
                           value={formData.message}
                           onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-slate-200 placeholder-slate-500 resize-none"
                          placeholder="How can I help you?"
                        ></textarea>
                      </div>
                    </div>

                    <button 
                       type="submit" 
                       disabled={isSubmitting}
                      className="w-full py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-bold shadow-lg shadow-primary-500/20 transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-primary-500 flex items-center justify-center gap-2 mt-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={20} />
                        </>
                      )}
                    </button>
                  </form>
               )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};