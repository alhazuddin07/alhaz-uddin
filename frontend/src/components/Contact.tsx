import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background ambient glowing gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 h-72 sm:h-96 w-full max-w-7xl bg-linear-to-t from-purple-900/20 via-blue-900/10 to-transparent blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
          <span className="h-0.5 w-5 sm:w-6 bg-blue-400 rounded-full" />
          <span>Get In Touch</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
          Let's Work Together
        </h2>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-base lg:text-lg text-slate-400 max-w-2xl font-normal">
          Have a project in mind or just want to say hello? Feel free to reach out. I'd love to hear from you!
        </p>

        {/* 2-Column on Desktop (lg), neatly organized on Tablet (md) & Mobile */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Contact Info Cards: 1 col on mobile, 3 cols on tablet (md), 1 col inside lg:col-span-5 */}
          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
            
            {/* Email */}
            <a
              href="mailto:alhazuddin365@gmail.com"
              className="group flex items-center gap-3.5 sm:gap-4 rounded-2xl border border-slate-800/80 bg-[#070c24]/80 p-4 transition-all hover:border-purple-500/40 hover:bg-[#0c143a]/80"
            >
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-purple-600/15 border border-purple-500/20 text-purple-400 group-hover:scale-105 transition-transform">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] sm:text-xs font-medium text-slate-400">
                  Email
                </span>
                <span className="block truncate text-xs sm:text-sm lg:text-base font-semibold text-slate-100 group-hover:text-purple-300 transition-colors">
                  alhazuddin365@gmail.com
                </span>
              </div>
            </a>

            {/* WhatsApp / Phone */}
            <a
              href="https://wa.me/8801319360019"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3.5 sm:gap-4 rounded-2xl border border-slate-800/80 bg-[#070c24]/80 p-4 transition-all hover:border-emerald-500/40 hover:bg-[#0c143a]/80"
            >
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 group-hover:scale-105 transition-transform">
                <Phone className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] sm:text-xs font-medium text-slate-400">
                  WhatsApp / Phone
                </span>
                <span className="block truncate text-xs sm:text-sm lg:text-base font-semibold text-slate-100 group-hover:text-emerald-300 transition-colors">
                  +880 1319-360019
                </span>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-3.5 sm:gap-4 rounded-2xl border border-slate-800/80 bg-[#070c24]/80 p-4">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 border border-blue-500/20 text-blue-400">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] sm:text-xs font-medium text-slate-400">
                  Location
                </span>
                <span className="block truncate text-xs sm:text-sm lg:text-base font-semibold text-slate-100">
                  Bangladesh
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 w-full">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 rounded-2xl border border-slate-800/80 bg-[#070c24]/85 p-5 sm:p-7 md:p-8 backdrop-blur-md shadow-2xl"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mb-4 animate-bounce">
                    <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400">
                    Thank you, Alhaz will get back to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="bg-slate-900/60 border-slate-800 focus-visible:border-purple-500 text-slate-100 text-xs sm:text-sm h-11 sm:h-12"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="bg-slate-900/60 border-slate-800 focus-visible:border-purple-500 text-slate-100 text-xs sm:text-sm h-11 sm:h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <Textarea
                      placeholder="Message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      className="bg-slate-900/60 border-slate-800 focus-visible:border-purple-500 text-slate-100 text-xs sm:text-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full mt-2 font-semibold text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 rounded-full py-3 sm:py-3.5 shadow-lg shadow-purple-500/25 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="h-4 w-4" />
                  </Button>
                </>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
