import { motion } from "framer-motion";
import { MessageSquare, Calendar, Image as ImageIcon, Send, Bot, User } from "lucide-react";

export default function AppPreview() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        animate={{ y: [0, -10, 0] }}
        className="w-full rounded-2xl bg-gradient-to-br from-[#4C1D95] via-[#7C3AED] to-[#FF4CE2] p-[1px] shadow-2xl overflow-hidden"
      >
        <div className="w-full bg-[#161122] rounded-[15px] overflow-hidden flex flex-col md:flex-row h-[600px]">
          
          {/* Left Sidebar */}
          <div className="w-full md:w-64 bg-[#0E0E0E]/50 border-r border-white/5 p-4 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-[#FF4CE2]/20 flex items-center justify-center text-[#FF4CE2]">
                <Calendar size={18} />
              </div>
              <span className="font-bold text-white">Upcoming</span>
            </div>
            
            <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-400">Tomorrow, 9:00 AM</span>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <p className="text-sm text-white font-medium line-clamp-2">10 Tips for developers starting with AI tools...</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Chat Panel */}
          <div className="flex-1 flex flex-col h-full relative">
            <div className="p-4 border-b border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF4CE2] to-[#7C3AED] flex items-center justify-center shadow-lg text-white">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="text-[#FF4CE2] font-display font-bold text-lg">Tell AI What You Want to Create</h3>
                <p className="text-xs text-gray-400">OpenClaw Agent active</p>
              </div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-xs font-bold text-white">ME</div>
                <div className="bg-white/10 text-white p-4 rounded-2xl rounded-tl-sm max-w-[80%] border border-white/5">
                  <p className="text-sm">Can you draft a Twitter thread about how AI agents are changing social media marketing? Include some stats.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF4CE2] to-[#7C3AED] flex-shrink-0 flex items-center justify-center text-white shadow-lg">
                  <Bot size={16} />
                </div>
                <div className="bg-[#161122] text-white p-4 rounded-2xl rounded-tl-sm max-w-[85%] border border-[#FF4CE2]/30 shadow-[0_0_15px_rgba(255,76,226,0.1)]">
                  <p className="text-sm mb-4">Here is a draft for your Twitter thread. I've optimized it for engagement and included recent data.</p>
                  
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 mb-3">
                    <p className="text-sm font-medium mb-2">🧵 Thread (1/4)</p>
                    <p className="text-sm text-gray-300">Social media managers spend ~20hrs/week scheduling. AI agents just changed the game. Here's why "agentic scheduling" is the future of marketing. 👇</p>
                  </div>

                  <div className="flex gap-2">
                    <button className="text-xs px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1">
                      <Calendar size={12} /> Add to Schedule
                    </button>
                    <button className="text-xs px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1">
                      <ImageIcon size={12} /> Generate Image
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#0E0E0E]/80 backdrop-blur-sm border-t border-white/5 absolute bottom-0 left-0 right-0">
              <div className="bg-white/5 border border-white/10 rounded-xl p-2 flex items-center gap-2">
                <input 
                  type="text" 
                  placeholder="Message OpenClaw Agent..." 
                  className="flex-1 bg-transparent border-none outline-none text-white text-sm px-3 placeholder:text-gray-500"
                />
                <button className="p-2 rounded-lg bg-[#FF4CE2] text-white hover:bg-[#FF4CE2]/80 transition-colors">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
