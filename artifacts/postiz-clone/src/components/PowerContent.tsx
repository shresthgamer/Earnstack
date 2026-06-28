import { motion } from "framer-motion";
import { Bot, Terminal, Send, Zap } from "lucide-react";

export default function PowerContent() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
          AI Does the Heavy Lifting<br />
          so{" "}
          <span className="relative inline-block">
            <span
              className="relative z-10"
              style={{
                background: "linear-gradient(135deg,#22c55e,#eab308)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              You
            </span>
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 60 60"
              fill="none"
              style={{ top: "-4px", left: "-6px", width: "calc(100% + 12px)", height: "calc(100% + 8px)" }}
            >
              <ellipse cx="30" cy="30" rx="27" ry="24" stroke="#22c55e" strokeWidth="2" fill="none" />
            </svg>
          </span>{" "}
          Focus on Creating
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* AI Product Generator */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl p-8 overflow-hidden relative"
          style={{ background: "linear-gradient(145deg, #14532d, #052e16)" }}
        >
          <div className="w-12 h-12 rounded-2xl bg-[#22c55e] flex items-center justify-center mb-5">
            <Bot size={24} className="text-black" />
          </div>
          <h3 className="text-xl font-display font-bold text-white mb-2">AI Product Generator</h3>
          <p className="text-sm text-white/70 mb-6 leading-relaxed">Describe your idea and AI generates a complete digital product — ebook, template pack, mini-course — ready to sell.</p>

          <div className="rounded-xl bg-black/30 border border-white/10 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <div className="w-6 h-6 rounded bg-[#22c55e] flex items-center justify-center">
                <Bot size={12} className="text-black" />
              </div>
              <span className="text-sm font-bold text-white">AI Product Generator</span>
              <span className="ml-auto text-xs text-white/40">Create a notion template for...</span>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-xs text-white/70">✅ Product outline generated</div>
              <div className="text-xs text-white/70">✅ Sales copy written</div>
              <div className="text-xs text-white/70">✅ Pricing page created</div>
              <div className="text-xs text-[#22c55e] font-bold">🚀 Ready to publish & sell</div>
            </div>
          </div>
        </motion.div>

        {/* AI Funnel Builder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-3xl p-8 overflow-hidden relative"
          style={{ background: "linear-gradient(145deg, #1a3a10, #0a1a05)" }}
        >
          <div className="rounded-xl bg-black/30 border border-white/10 overflow-hidden mb-5">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#22c55e] to-[#eab308] flex items-center justify-center text-black text-xs font-bold">
                <Zap size={16} />
              </div>
              <div>
                <div className="text-sm font-bold text-white">AI Funnel Builder</div>
                <div className="text-xs text-white/40">generating your funnel...</div>
              </div>
            </div>
            <div className="p-4 space-y-2">
              {[
                "1. 🎯 Opt-in page with lead magnet",
                "2. 📧 5-email nurture sequence",
                "3. 💰 Sales page with VSL script",
                "4. 🔥 Order bump + upsell page",
                "5. 🎉 Thank you + onboarding page",
              ].map((t, i) => (
                <div key={i} className="text-xs text-white/60">{t}</div>
              ))}
              <div className="flex items-center gap-2 mt-3 bg-white/5 rounded-lg p-2">
                <span className="text-xs text-white/30 flex-1">Describe your offer...</span>
                <Send size={12} className="text-white/30" />
              </div>
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#22c55e] to-[#eab308] flex items-center justify-center mb-4">
            <Zap size={20} className="text-black" />
          </div>
          <h3 className="text-xl font-display font-bold text-white mb-2">AI Funnel Generator</h3>
          <p className="text-sm text-white/70 leading-relaxed">Build high-converting sales funnels in minutes — landing pages, emails, upsells, all written by AI.</p>
        </motion.div>

        {/* AI Email & Content Writer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-3xl p-8 overflow-hidden relative"
          style={{ background: "linear-gradient(145deg, #1a3a14, #0a2010)" }}
        >
          <div className="w-10 h-10 rounded-xl bg-[#eab308] flex items-center justify-center mb-5">
            <svg viewBox="0 0 24 24" fill="black" width="20" height="20"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </div>
          <h3 className="text-xl font-display font-bold text-white mb-2">AI Email Marketing</h3>
          <p className="text-sm text-white/70 mb-6 leading-relaxed">Write email sequences, newsletters, and broadcast campaigns in seconds. AI personalizes every message for higher opens and conversions.</p>

          <div className="rounded-xl bg-black/50 border border-white/10 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <span className="text-xs text-white/40 ml-2">AI Email Writer</span>
            </div>
            <div className="p-4 font-mono text-xs">
              <div className="text-[#eab308]">Subject: Here's how I made $10k last month...</div>
              <div className="text-white/50 mt-2">Hey {"{{first_name}}"},</div>
              <div className="text-white/50">I want to share the exact strategy that helped me...</div>
              <div className="text-[#22c55e] mt-2">✓ 68% open rate predicted</div>
            </div>
          </div>
        </motion.div>

        {/* API Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-3xl p-8 overflow-hidden relative"
          style={{ background: "linear-gradient(145deg, #1a2a1a, #0d170d)" }}
        >
          <div className="w-10 h-10 rounded-xl bg-[#22c55e]/20 flex items-center justify-center mb-5 border border-[#22c55e]/30">
            <Terminal size={20} className="text-[#22c55e]" />
          </div>
          <h3 className="text-xl font-display font-bold text-white mb-2">Automation & API</h3>
          <p className="text-sm text-white/70 mb-6 leading-relaxed">Connect EarnStack to any tool via Zapier, webhooks, or our REST API. Automate customer journeys end-to-end.</p>

          <div className="rounded-xl bg-black/50 border border-white/10 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <span className="text-xs text-white/40">https://api.earnstack.io/v1/products</span>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#22c55e] text-black text-xs font-bold px-2 py-1 rounded">POST</span>
                <span className="text-xs text-white/50">Create product</span>
                <span className="ml-auto bg-green-500 text-white text-xs font-bold px-3 py-1 rounded">200 OK</span>
              </div>
              <div className="bg-black/50 rounded-lg p-3 font-mono text-xs">
                <div className="text-white/40">{"{"}</div>
                <div className="ml-4 text-green-400">"success": <span className="text-blue-400">true</span>,</div>
                <div className="ml-4 text-green-400">"product_id": <span className="text-yellow-400">"prod_abc123"</span></div>
                <div className="text-white/40">{"}"}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
