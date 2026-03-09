import { useState } from "react";
import Navbar from "@/components/Navbar";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputBase =
    "w-full bg-transparent border-b py-3 text-sm outline-none transition-all duration-300 placeholder:tracking-wide focus:border-b-foreground";
  const inputStyle = { borderColor: "hsl(0 0% 75%)", color: "hsl(0 0% 8%)" };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden" style={{ background: "hsl(0 0% 93%)" }}>
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, hsl(0 0% 0%) 0px, hsl(0 0% 0%) 1px, transparent 1px, transparent 80px),
              repeating-linear-gradient(90deg, hsl(0 0% 0%) 0px, hsl(0 0% 0%) 1px, transparent 1px, transparent 80px)`,
          }}
        />
        <div className="relative max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.35em] uppercase mb-6" style={{ color: "hsl(0 0% 50%)" }}>
            Get In Touch
          </p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none" style={{ color: "hsl(0 0% 8%)" }}>
            Let's Build
            <br />
            <span style={{ color: "hsl(0 0% 35%)" }}>Something Great</span>
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 px-6" style={{ background: "hsl(0 0% 98%)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-20">

          {/* Left: info */}
          <div className="lg:col-span-2 flex flex-col gap-16">
            <div>
              <p className="text-xs tracking-[0.35em] uppercase mb-8" style={{ color: "hsl(0 0% 50%)" }}>
                How We Can Help
              </p>
              <div className="flex flex-col gap-10">
                {[
                  {
                    num: "01",
                    title: "Brand Sourcing",
                    desc: "Access our network of 30+ premium brands for your next campaign or corporate gifting initiative.",
                  },
                  {
                    num: "02",
                    title: "Custom Merch",
                    desc: "End-to-end branded merchandise programs — from concept to delivery.",
                  },
                  {
                    num: "03",
                    title: "Strategic Consulting",
                    desc: "Let our team help you build a brand strategy that resonates and performs.",
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-6">
                    <span className="text-xs font-mono mt-1 shrink-0" style={{ color: "hsl(0 0% 65%)" }}>
                      {item.num}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold tracking-wide mb-2" style={{ color: "hsl(0 0% 8%)" }}>
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "hsl(0 0% 45%)" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t pt-10" style={{ borderColor: "hsl(0 0% 88%)" }}>
              <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(0 0% 50%)" }}>
                Direct Contact
              </p>
              <a
                href="mailto:contact@dovetailstrategic.com"
                className="text-sm font-medium transition-colors duration-200 hover:opacity-60"
                style={{ color: "hsl(0 0% 8%)" }}
              >
                contact@dovetailstrategic.com
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full gap-6 py-20">
                <div className="text-xs tracking-[0.35em] uppercase" style={{ color: "hsl(0 0% 50%)" }}>
                  Message Sent
                </div>
                <h2 className="text-4xl font-bold leading-tight" style={{ color: "hsl(0 0% 8%)" }}>
                  We'll be in touch <br />shortly.
                </h2>
                <p className="text-sm leading-relaxed max-w-sm" style={{ color: "hsl(0 0% 45%)" }}>
                  Thank you for reaching out. A member of our team will respond within 1–2 business days.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", service: "", message: "" }); }}
                  className="mt-4 text-xs tracking-widest uppercase border-b pb-0.5 transition-opacity duration-200 hover:opacity-50"
                  style={{ borderColor: "hsl(0 0% 30%)", color: "hsl(0 0% 8%)" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-[0.3em] uppercase" style={{ color: "hsl(0 0% 50%)" }}>
                      Full Name *
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      maxLength={100}
                      className={inputBase}
                      style={inputStyle}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-[0.3em] uppercase" style={{ color: "hsl(0 0% 50%)" }}>
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      maxLength={255}
                      className={inputBase}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {/* Company */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-[0.3em] uppercase" style={{ color: "hsl(0 0% 50%)" }}>
                      Company
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      maxLength={100}
                      className={inputBase}
                      style={inputStyle}
                    />
                  </div>

                  {/* Service */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-[0.3em] uppercase" style={{ color: "hsl(0 0% 50%)" }}>
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={inputBase + " cursor-pointer appearance-none"}
                      style={{ ...inputStyle, paddingRight: "1rem" }}
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="brand-sourcing">Brand Sourcing</option>
                      <option value="custom-merch">Custom Merchandise</option>
                      <option value="corporate-gifting">Corporate Gifting</option>
                      <option value="strategic-consulting">Strategic Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-[0.3em] uppercase" style={{ color: "hsl(0 0% 50%)" }}>
                    Message *
                  </label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, timeline, and budget..."
                    rows={5}
                    maxLength={1000}
                    className={inputBase + " resize-none"}
                    style={inputStyle}
                  />
                  <div className="text-right text-xs" style={{ color: "hsl(0 0% 65%)" }}>
                    {form.message.length}/1000
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="group relative px-12 py-4 text-sm tracking-widest uppercase font-medium border transition-all duration-300 overflow-hidden hover:-translate-y-0.5"
                    style={{ borderColor: "hsl(0 0% 20%)", color: "hsl(0 0% 8%)" }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = "hsl(0 0% 8%)";
                      (e.currentTarget as HTMLElement).style.color = "hsl(0 0% 98%)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "hsl(0 0% 8%)";
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Dark strip */}
      <section className="py-16 px-6" style={{ background: "hsl(0 0% 8%)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-xs tracking-[0.35em] uppercase" style={{ color: "hsl(0 0% 45%)" }}>
            Response within 1–2 business days
          </p>
          <div className="flex items-center gap-12">
            {["Brand Sourcing", "Custom Merch", "Corporate Gifting", "Strategy"].map((s) => (
              <span key={s} className="text-xs tracking-[0.25em] uppercase hidden md:block" style={{ color: "hsl(0 0% 40%)" }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t text-center" style={{ borderColor: "hsl(0 0% 88%)" }}>
        <p className="text-xs tracking-widest uppercase" style={{ color: "hsl(0 0% 60%)" }}>
          © {new Date().getFullYear()} Dovetail Strategic. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
