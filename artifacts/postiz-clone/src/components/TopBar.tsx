import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function TopBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="bg-[#FF4CE2] text-white w-full flex items-center justify-center py-2.5 px-4 relative z-50 font-sans"
    >
      <div className="text-sm font-bold flex items-center gap-2">
        NEW: Generate UGC video with your AI Agent 💌 
        <a href="#" className="underline decoration-white/50 hover:decoration-white underline-offset-4">
          Check agent-media →
        </a>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 p-1 hover:bg-black/10 rounded-full transition-colors"
      >
        <X size={16} />
      </button>
    </motion.div>
  );
}
