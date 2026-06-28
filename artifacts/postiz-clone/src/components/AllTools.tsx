import { motion } from "framer-motion";
import { Calendar, Bot, Image as ImageIcon } from "lucide-react";

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
          All the tools required for social<br />media growth in one place
        </h2>
        <svg viewBox="0 0 200 12" fill="none" className="w-48 mx-auto mt-2">
          <path d="M0,8 C50,0 150,12 200,4" stroke="#FF4CE2" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Planning / Seamless scheduling */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl p-8 overflow-hidden"
          style={{ background: "linear-gradient(145deg, #5b21b6, #3b0764)" }}
        >
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-5 tracking-widest">PLANNING</span>
          <h3 className="text-2xl font-display font-bold text-white mb-3">Seamless scheduling</h3>
          <p className="text-sm text-white/70 mb-6 leading-relaxed">Schedule, analyze, and engage with your audience. Cross post your social media posts into multiple channels.</p>

          {/* Calendar UI mockup */}
          <div className="rounded-2xl bg-black/30 border border-white/10 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <span className="text-xs font-bold text-white">Channel</span>
              <div className="flex items-center gap-2 text-xs text-white/60">
                <span>‹</span><span>Feb 11</span><span>17</span><span>›</span>
              </div>
              <div className="flex gap-1 text-xs text-white/40">
                <span>Mon</span><span className="ml-3">Tue</span><span className="ml-3">Wed</span><span className="ml-3">Thu</span>
              </div>
            </div>
            <div className="p-4 space-y-3">
              {[
                { name: "Daniel Hamilton", color: "#0A66C2", time: "1:00 PM" },
                { name: "Daniel Hamilton", color: "#1877F2", time: "1:00 PM" },
                { name: "HamiltonJan", color: "#0A66C2", time: "" },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ background: row.color }}>
                    {row.name[0]}
                  </div>
                  <span className="text-xs text-white/70 flex-1">{row.name}</span>
                  {row.time && <span className="text-xs bg-[#FF4CE2]/30 text-[#FF4CE2] px-2 py-0.5 rounded font-bold">{row.time}</span>}
                </div>
              ))}
              <div className="flex items-center gap-2 mt-2">
                <button className="text-xs bg-[#FF4CE2] text-white px-3 py-1 rounded-lg flex items-center gap-1"><span>+</span> New Channel</button>
                <button className="text-xs bg-white/10 text-white px-3 py-1 rounded-lg flex items-center gap-1"><Bot size={10} /> Generate Posts</button>
              </div>
            </div>
            {/* Time indicator */}
            <div className="mx-4 mb-4">
              <div className="bg-gradient-to-r from-[#FF4CE2] to-[#7C3AED] rounded-xl p-2 flex items-center gap-2">
                <span className="text-white font-bold text-sm">2:50 PM ♦</span>
                <div className="ml-auto">
                  <div className="w-8 h-8 rounded-full bg-white/20" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Content assistant */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-3xl p-8 overflow-hidden"
          style={{ background: "linear-gradient(145deg, #3730a3, #1e1b4b)" }}
        >
          {/* Avatar stack */}
          <div className="flex mb-5">
            {["#e74c3c", "#3498db", "#2ecc71", "#f39c12"].map((color, i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-[#3730a3] -ml-2 first:ml-0" style={{ background: color }} />
            ))}
          </div>

          {/* AI Chat mockup */}
          <div className="rounded-2xl bg-black/30 border border-white/10 overflow-hidden mb-5">
            <div className="p-3 space-y-3">
              <div className="bg-[#FF4CE2]/20 border border-[#FF4CE2]/30 rounded-xl p-3 flex items-start gap-2">
                <Bot size={14} className="text-[#FF4CE2] mt-0.5 flex-shrink-0" />
                <span className="text-xs text-[#FF4CE2] font-medium">AI Content Assistant</span>
              </div>
              <div className="bg-white/5 rounded-xl p-3 text-xs text-white/70 leading-relaxed">
                Hi! I'm your AI assistant — I can help with any plan for you. What do you want to say and where do you want to post it?
              </div>
              <div className="bg-white/5 rounded-xl p-3 text-xs text-white/70">
                Create post about time management
              </div>
              <button className="w-full bg-[#FF4CE2] text-white text-xs font-bold py-2 rounded-xl">
                Let's start →
              </button>
            </div>
          </div>

          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-5 tracking-widest">ARTIFICIAL INTELLIGENCE</span>
          <h3 className="text-2xl font-display font-bold text-white mb-3">AI Content assistant</h3>
          <p className="text-sm text-white/70 leading-relaxed">Improve your content creation process with Ai Agent that performs all tasks for you.</p>
        </motion.div>

        {/* Design it with AI — full width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-3xl p-8 overflow-hidden md:col-span-2"
          style={{ background: "linear-gradient(145deg, #4c1d95, #2d1462)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-5 tracking-widest">AI IMAGE</span>
              <h3 className="text-2xl font-display font-bold text-white mb-3">Design it with AI</h3>
              <p className="text-sm text-white/70 leading-relaxed">Use a Canva-like tool to create stunning visuals for your social media posts and generate pictures with AI.</p>
            </div>
            {/* Design Media mockup */}
            <div className="rounded-2xl bg-black/30 border border-white/10 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <span className="text-sm font-bold text-white">Design Media</span>
                <button className="bg-[#FF4CE2] text-white text-xs font-bold px-3 py-1 rounded-lg">Use this media</button>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 mb-3 border border-white/10">
                  <ImageIcon size={14} className="text-white/40" />
                  <span className="text-xs text-white/40">Search...</span>
                </div>
                <div className="text-xs text-white/50 mb-3">Photos from Unsplash</div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { bg: "#4a5568", label: "Photo" },
                    { bg: "#718096", label: "Photo" },
                    { bg: "#2d3748", label: "1:03" },
                    { bg: "#553c9a", label: "Photo" },
                    { bg: "#6b46c1", label: "Photo" },
                    { bg: "#322659", label: "Photo" },
                  ].map((item, i) => (
                    <div key={i} className="aspect-square rounded-lg flex items-end justify-end p-1 text-[10px] text-white/60 font-medium" style={{ background: item.bg }}>
                      {item.label !== "Photo" && item.label}
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
