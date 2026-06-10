import React, { useState } from "react";
import { socialLinks } from "../data/v4Data";
import { Send, CheckCircle, Mail, MessageSquare, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSending(true);

    const emailSubject = encodeURIComponent(formState.subject || "Portfolio Inquiry from " + formState.name);
    const emailBody = encodeURIComponent(
      `Hello Nikul,\n\n${formState.message}\n\nBest regards,\n${formState.name}\nEmail: ${formState.email}`
    );
    
    const mailtoLink = `mailto:nikulsuthar.dev@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    
    // Standard window.location approach for mailto links
    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="scroll-mt-32 w-full">
      
      {/* Title Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
          Let's Connect.
        </h2>
        <p className="text-lg sm:text-xl text-[#86868b] dark:text-[#a1a1a6] font-medium leading-relaxed">
          Open for opportunities, collaborations, or a simple hello.
        </p>
      </div>

      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        
        {/* Form Side */}
        <div className="w-full h-fit bg-white dark:bg-[#1d1d1f] rounded-[32px] p-8 md:p-10 border border-black/5 dark:border-white/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formState.name}
                placeholder="Name *"
                onChange={handleInputChange}
                required
                className="w-full bg-[#f5f5f7] dark:bg-[#333336] text-[#1d1d1f] dark:text-[#f5f5f7] px-4 py-4 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-base placeholder-[#86868b] dark:placeholder-[#a1a1a6]"
              />
              <input
                type="email"
                name="email"
                value={formState.email}
                placeholder="Email address *"
                onChange={handleInputChange}
                required
                className="w-full bg-[#f5f5f7] dark:bg-[#333336] text-[#1d1d1f] dark:text-[#f5f5f7] px-4 py-4 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-base placeholder-[#86868b] dark:placeholder-[#a1a1a6]"
              />
              <textarea
                name="message"
                value={formState.message}
                placeholder="Your message *"
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full bg-[#f5f5f7] dark:bg-[#333336] text-[#1d1d1f] dark:text-[#f5f5f7] px-4 py-4 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-base placeholder-[#86868b] dark:placeholder-[#a1a1a6] resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -5 }}
                    className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-semibold"
                  >
                    <CheckCircle size={16} />
                    <span>Opening Mail Client...</span>
                  </motion.div>
                ) : (
                  <div className="text-sm font-medium text-[#86868b] dark:text-[#a1a1a6]">
                    * Required
                  </div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={isSending || isSubmitted}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-medium bg-[#1d1d1f] text-white dark:bg-[#f5f5f7] dark:text-[#1d1d1f] hover:bg-[#333336] dark:hover:bg-white disabled:opacity-50 transition-colors"
              >
                {isSending ? (
                  <span>Sending...</span>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Social Links Side */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-2 text-left">
            <h3 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
              Other ways to connect
            </h3>
            <p className="text-base text-[#86868b] dark:text-[#a1a1a6]">
              Find me on these platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {socialLinks.map((social) => {
              const isMonochrome = ["GitHub", "X (Twitter)", "Dev.to", "Medium"].includes(social.name);
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center gap-3 p-4 rounded-3xl bg-white dark:bg-[#1d1d1f] border border-black/5 dark:border-white/5 transition-all hover:bg-[#f5f5f7] dark:hover:bg-[#333336]"
                >
                  <div 
                    className={`p-3 rounded-full bg-[#f5f5f7] dark:bg-[#000000] border border-black/5 dark:border-white/5 group-hover:scale-110 transition-transform ${isMonochrome ? "text-[#1d1d1f] dark:text-[#f5f5f7]" : ""}`}
                    style={isMonochrome ? {} : { color: social.color }}
                  >
                    {React.cloneElement(social.icon, { size: 22 })}
                  </div>
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
                      {social.name}
                    </h4>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
