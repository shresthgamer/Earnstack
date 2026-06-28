import { motion } from "framer-motion";
import { Bot, ShoppingBag, Users } from "lucide-react";

export default function AllTools() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-3 leading-tight">
          Every tool a creator needs<br />to build & grow income
        </h2>
        <svg viewBox="0 0 200 12" fill="none" className="w-48 mx-auto mt-2">
          <path d="M0,8 C50,0 150,12 200,4" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Digital Product Store */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl p-8 overflow-hidden"
          style={{ background: "linear-gradient(145deg, #14532d, #052e16)" }}
        >
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-5 tracking-widest">DIGITAL PRODUCTS</span>
          <h3 className="text-2xl font-display font-bold text-white mb-3">Creator Store & Checkout</h3>
          <p className="text-sm text-white/70 mb-6 leading-relaxed">Launch your digital product store in minutes. Sell ebooks, templates, presets, courses, and more — with built-in checkout and instant payouts.</p>

          <div className="rounded-2xl bg-black/30 border border-white/10 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <span className="text-xs font-bold text-white">My Products</span>
              <button className="text-xs bg-[#22c55e] text-black font-bold px-3 py-1 rounded-lg">+ Add Product</button>
            </div>
            <div className="p-4 space-y-3">
              {[
                { name: "Ultimate Notion Template Pack", price: "$47", sales: "342 sales", color: "#22c55e" },
                { name: "Freelancer Business Kit", price: "$97", sales: "128 sales", color: "#eab308" },
                { name: "Social Media Masterclass", price: "$197", sales: "89 sales", color: "#3b82f6" },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: row.color + "30" }}>
                    <ShoppingBag size={12} style={{ color: row.color }} />
                  </div>
                  <span className="text-xs text-white/70 flex-1">{row.name}</span>
                  <span className="text-xs font-bold text-[#22c55e]">{row.price}</span>
                  <span className="text-xs text-white/40">{row.sales}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 mt-2">
                <button className="text-xs bg-[#22c55e] text-black px-3 py-1 rounded-lg flex items-center gap-1 font-bold"><Bot size={10} /> AI Generate Product</button>
              </div>
            </div>
            <div className="mx-4 mb-4">
              <div className="bg-gradient-to-r from-[#22c55e] to-[#16a34a] rounded-xl p-2 flex items-center gap-2">
                <span className="text-black font-bold text-sm">$4,820 earned this month 🚀</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Course Builder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-3xl p-8 overflow-hidden"
          style={{ background: "linear-gradient(145deg, #1a3a1a, #0a1a0a)" }}
        >
          <div className="flex mb-5">
            {["#22c55e", "#eab308", "#3b82f6", "#f97316"].map((color, i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1a3a1a] -ml-2 first:ml-0" style={{ background: color }} />
            ))}
            <span className="ml-3 text-xs text-white/50 self-center">12,400+ enrolled students</span>
          </div>

          <div className="rounded-2xl bg-black/30 border border-white/10 overflow-hidden mb-5">
            <div className="p-3 space-y-3">
              <div className="bg-[#22c55e]/20 border border-[#22c55e]/30 rounded-xl p-3 flex items-start gap-2">
                <Bot size={14} className="text-[#22c55e] mt-0.5 flex-shrink-0" />
                <span className="text-xs text-[#22c55e] font-medium">AI Course Generator</span>
              </div>
              <div className="bg-white/5 rounded-xl p-3 text-xs text-white/70 leading-relaxed">
                I can generate a full course outline, lesson scripts, quizzes, and landing page for you. What topic do you want to teach?
              </div>
              <div className="bg-white/5 rounded-xl p-3 text-xs text-white/70">
                Create a 6-week freelancing course for designers
              </div>
              <button className="w-full bg-[#22c55e] text-black text-xs font-bold py-2 rounded-xl">
                Generate my course →
              </button>
            </div>
          </div>

          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-5 tracking-widest">AI COURSE BUILDER</span>
          <h3 className="text-2xl font-display font-bold text-white mb-3">Build & Sell Online Courses</h3>
          <p className="text-sm text-white/70 leading-relaxed">AI generates your curriculum, lessons, and sales page. You record, we host it — and payments go straight to you.</p>
        </motion.div>

        {/* Community Builder — full width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-3xl p-8 overflow-hidden md:col-span-2"
          style={{ background: "linear-gradient(145deg, #1a3a14, #0f2008)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-5 tracking-widest">COMMUNITY</span>
              <h3 className="text-2xl font-display font-bold text-white mb-3">Build Membership Communities</h3>
              <p className="text-sm text-white/70 leading-relaxed">Create a paid community where members get exclusive content, live sessions, and direct access to you. Charge monthly or annually.</p>
            </div>
            <div className="rounded-2xl bg-black/30 border border-white/10 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <span className="text-sm font-bold text-white flex items-center gap-2"><Users size={14} className="text-[#22c55e]" /> Creator Circle</span>
                <button className="bg-[#22c55e] text-black text-xs font-bold px-3 py-1 rounded-lg">Join Community</button>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  {[
                    { name: "Sarah K.", msg: "Just closed my first $5k client 🎉", time: "2m" },
                    { name: "Mike R.", msg: "The funnel template worked perfectly!", time: "8m" },
                    { name: "Priya L.", msg: "Hit $10k MRR this month!", time: "15m" },
                  ].map((m, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#22c55e]/30 flex items-center justify-center text-[10px] font-bold text-[#22c55e] shrink-0">{m.name[0]}</div>
                      <div className="flex-1">
                        <span className="text-xs font-bold text-white">{m.name}</span>
                        <p className="text-xs text-white/60">{m.msg}</p>
                      </div>
                      <span className="text-xs text-white/30">{m.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
