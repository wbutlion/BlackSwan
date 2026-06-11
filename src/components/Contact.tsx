import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Linkedin, Phone, Send, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-navy-50 text-navy text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-1.5 mb-5">
            <span>Get in Touch</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy leading-tight mb-5">
            Let's Start the{' '}
            <span className="text-tangerine">Conversation</span>
          </h2>
          <p className="text-charcoal/70 text-lg leading-relaxed">
            Whether you have a quick question or are ready for a full risk assessment, we're here to
            help. Reach out and we'll respond within one business day.
          </p>
        </div>

        <div
          className={`grid lg:grid-cols-5 gap-10 lg:gap-16 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Contact info panel */}
          <div className="lg:col-span-2 bg-navy rounded-2xl p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">Contact Details</h3>
              <p className="text-white/65 leading-relaxed mb-10">
                We're a boutique operation — when you contact us, you speak to someone who knows your
                file and cares about the outcome.
              </p>

              <div className="space-y-6">
                <ContactDetail icon={Phone} label="Phone" value="+27 21 701 9989" href="tel:+27217019989" />
                <ContactDetail icon={Mail} label="Email" value="hello@blackswaninsurance.co.za" href="mailto:hello@blackswaninsurance.co.za" />
                <ContactDetail icon={Linkedin} label="LinkedIn" value="blackswaninsurance" href="https://www.linkedin.com/company/blackswaninsurance" />
                <ContactDetail icon={MapPin} label="Location" value="Westlake Business Park, Cape Town, South Africa" />
              </div>
            </div>

            {/* Social / availability note */}
            <div className="mt-12 pt-8 border-t border-white/15">
              <p className="text-white/50 text-sm">
                Office hours: Mon – Fri, 8:00 – 17:00 SAST
              </p>
              <p className="text-white/50 text-sm mt-1">
                Claims emergencies handled 24/7
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-tangerine/10 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8 text-tangerine" />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy mb-3">Message Received</h3>
                <p className="text-charcoal/65 max-w-sm leading-relaxed">
                  Thank you for reaching out. A member of our team will be in touch within one business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }); }}
                  className="mt-8 text-tangerine font-semibold text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    label="Full Name"
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <FormField
                  label="Phone (optional)"
                  name="phone"
                  type="tel"
                  placeholder="+27 82 000 0000"
                  value={form.phone}
                  onChange={handleChange}
                />
                <div>
                  <label className="block text-charcoal font-medium text-sm mb-1.5">
                    Message <span className="text-tangerine">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us a bit about what you need — e.g. type of insurance, current situation, or any questions you have..."
                    className="w-full px-4 py-3 rounded-xl border border-slate/20 focus:border-tangerine focus:ring-2 focus:ring-tangerine/15 outline-none text-charcoal placeholder-slate/50 text-sm transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-tangerine hover:bg-tangerine-dark disabled:opacity-70 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-tangerine/30 hover:-translate-y-0.5 text-base"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Get in Touch
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </>
                  )}
                </button>

                <p className="text-slate text-xs mt-3">
                  By submitting this form you agree to be contacted by Black Swan Insurance Brokers.
                  We respect your privacy and will never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactDetail({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-tangerine" />
      </div>
      <div>
        <div className="text-white/50 text-xs uppercase tracking-widest font-medium mb-0.5">{label}</div>
        <div className="text-white text-sm font-medium">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="hover:opacity-80 transition-opacity duration-200 block">
        {content}
      </a>
    );
  }
  return <div>{content}</div>;
}

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required = false,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-charcoal font-medium text-sm mb-1.5">
        {label} {required && <span className="text-tangerine">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-slate/20 focus:border-tangerine focus:ring-2 focus:ring-tangerine/15 outline-none text-charcoal placeholder-slate/50 text-sm transition-all duration-200"
      />
    </div>
  );
}
