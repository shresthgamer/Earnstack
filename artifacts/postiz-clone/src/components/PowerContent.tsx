import { motion } from "framer-motion";
import { Bot, Terminal, Send } from "lucide-react";

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
          Power Your Content<br />
          with{" "}
          <span className="relative inline-block">
            <span
              className="relative z-10"
              style={{
                background: "linear-gradient(135deg,#FF4CE2,#7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI
            </span>
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 60 60"
              fill="none"
              style={{ top: "-4px", left: "-6px", width: "calc(100% + 12px)", height: "calc(100% + 8px)" }}
            >
              <ellipse cx="30" cy="30" rx="27" ry="24" stroke="#FF4CE2" strokeWidth="2" fill="none" />
            </svg>
          </span>{" "}
          and Automation
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ChatGPT Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl p-8 overflow-hidden relative"
          style={{ background: "linear-gradient(145deg, #1d2671, #1a1a3e)" }}
        >
          <div className="w-12 h-12 rounded-2xl bg-[#10A37F] flex items-center justify-center mb-5">
            <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
              <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.05 14.06A4.501 4.501 0 0 1 2.34 7.893zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.768 2.75a4.5 4.5 0 0 1-.67 8.127V12.56a.79.79 0 0 0-.391-.808zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.767-2.746a4.5 4.5 0 0 1 6.678 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
            </svg>
          </div>
          <h3 className="text-xl font-display font-bold text-white mb-2">Via ChatGPT</h3>
          <p className="text-sm text-white/70 mb-6 leading-relaxed">Generate and refine social media posts using ChatGPT with simple prompts.</p>

          {/* ChatGPT UI mockup */}
          <div className="rounded-xl bg-black/30 border border-white/10 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <div className="w-6 h-6 rounded bg-[#10A37F] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" width="12" height="12"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073z" /></svg>
              </div>
              <span className="text-sm font-bold text-white">ChatGPT</span>
              <span className="ml-auto text-xs text-white/40">Create 3 social media posts ab...</span>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-center gap-2"><div className="w-20 h-2 bg-white/20 rounded" /><div className="w-12 h-2 bg-white/10 rounded" /></div>
              <div className="flex items-center gap-2"><div className="w-14 h-2 bg-white/20 rounded" /><div className="w-20 h-2 bg-white/10 rounded" /></div>
              <div className="w-4 h-4 rounded-full bg-white/20 ml-2 mt-1" />
            </div>
          </div>
        </motion.div>

        {/* OpenClaw Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-3xl p-8 overflow-hidden relative"
          style={{ background: "linear-gradient(145deg, #2d1b69, #1a0a3e)" }}
        >
          <div className="rounded-xl bg-black/30 border border-white/10 overflow-hidden mb-5">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF4CE2] to-[#7C3AED] flex items-center justify-center text-white text-xs font-bold">
                <Bot size={16} />
              </div>
              <div>
                <div className="text-sm font-bold text-white">OpenClaw Agent</div>
                <div className="text-xs text-white/40">bot</div>
              </div>
            </div>
            <div className="p-4 space-y-2">
              {["1. 5 eye-catching workout content ideas 🏋", "2. Post workout at-home 30-min full body HIIT", "3. Top 3 stretches to relieve back pain after sit day", "4. Healthy meal + workout = perfect balance 🥗", "5. \"I saved 5% this month\""].map((t, i) => (
                <div key={i} className="text-xs text-white/60 truncate">{t}</div>
              ))}
              <div className="flex items-center gap-2 mt-3 bg-white/5 rounded-lg p-2">
                <span className="text-xs text-white/30 flex-1">Message...</span>
                <Send size={12} className="text-white/30" />
              </div>
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#FF4CE2] to-[#7C3AED] flex items-center justify-center mb-4">
            <Bot size={20} className="text-white" />
          </div>
          <h3 className="text-xl font-display font-bold text-white mb-2">Via OpenClaw</h3>
          <p className="text-sm text-white/70 leading-relaxed">Automate content creation and scheduling through Telegram with simple workflows.</p>
        </motion.div>

        {/* Claude Code Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-3xl p-8 overflow-hidden relative"
          style={{ background: "linear-gradient(145deg, #1e1b4b, #0f0e2a)" }}
        >
          <div className="w-10 h-10 rounded-xl bg-[#CC785C] flex items-center justify-center mb-5">
            <svg viewBox="0 0 24 24" fill="white" width="20" height="20"><path d="M17.304 4.63c-1.27-.522-2.597-.793-3.942-.81L12 3.808l-1.362.012c-1.345.017-2.671.288-3.942.81C4.452 5.522 2.792 7.162 2.792 7.162L0 15.03l3.99-1.078 1.296 2.16 3.318-1.422c1.054.54 2.174.81 3.396.81s2.342-.27 3.396-.81l3.318 1.422 1.296-2.16L24 15.03l-2.792-7.868S20.548 5.522 17.304 4.63zm-5.304 9.9a3.53 3.53 0 1 1 0-7.06 3.53 3.53 0 0 1 0 7.06z" /></svg>
          </div>
          <h3 className="text-xl font-display font-bold text-white mb-2">Via Claude Code</h3>
          <p className="text-sm text-white/70 mb-6 leading-relaxed">Create and schedule posts directly from your terminal using Claude Code.</p>

          {/* Terminal mockup */}
          <div className="rounded-xl bg-black/50 border border-white/10 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5">
              <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-500/70" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" /><div className="w-2.5 h-2.5 rounded-full bg-green-500/70" /></div>
            </div>
            <div className="p-4 font-mono text-xs">
              <div className="text-green-400">$ claude schedule-post --content</div>
              <div className="text-white/50 ml-2">"Share 5 productivity tips"</div>
              <div className="text-white/50 ml-2">--platforms twitter,linkedin</div>
              <div className="text-green-400 mt-2">✓ Post scheduled for 9:00 AM</div>
              <div className="text-white/30">→ 2 platforms configured</div>
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
          style={{ background: "linear-gradient(145deg, #1a1a2e, #0d0d1a)" }}
        >
          <div className="w-10 h-10 rounded-xl bg-[#FF4CE2]/20 flex items-center justify-center mb-5 border border-[#FF4CE2]/30">
            <Terminal size={20} className="text-[#FF4CE2]" />
          </div>
          <h3 className="text-xl font-display font-bold text-white mb-2">Via API</h3>
          <p className="text-sm text-white/70 mb-6 leading-relaxed">Integrate Postiz into your own tools and workflows with our powerful REST API.</p>

          {/* API mockup */}
          <div className="rounded-xl bg-black/50 border border-white/10 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <span className="text-xs text-white/40">https://api.postiz.com/public/v1/posts</span>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">POST</span>
                <span className="text-xs text-white/50">https://api.postiz.com/public/v1/posts</span>
                <span className="ml-auto bg-green-500 text-white text-xs font-bold px-3 py-1 rounded">SEND</span>
              </div>
              <div className="bg-black/50 rounded-lg p-3 font-mono text-xs">
                <div className="text-white/40">{"{"}</div>
                <div className="ml-4 text-green-400">"success": <span className="text-blue-400">true</span>,</div>
                <div className="ml-4 text-green-400">"message": <span className="text-yellow-400">"Posts scheduled successfully"</span></div>
                <div className="text-white/40">{"}"}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
