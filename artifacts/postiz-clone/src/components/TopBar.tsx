import { useState } from "react";
import { motion } from "framer-motion";
import { X, Sparkles } from "lucide-react";

export default function TopBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="w-full flex items-center justify-center py-2.5 px-4 relative z-50 font-sans"
      style={{ background: "linear-gradient(90deg, #16a34a, #22c55e, #eab308, #22c55e, #16a34a)" }}
    >
      <div className="text-sm font-bold flex items-center gap-2 text-black">
        <Sparkles size={14} />
        NEW: AI Course Generator — build & launch your course in minutes!{" "}
        <a href="#" className="underline decoration-black/50 hover:decoration-black underline-offset-4">
          Try it free →
        </a>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 p-1 hover:bg-black/10 rounded-full transition-colors text-black"
      >
        <X size={16} />
      </button>
    </motion.div>
  );
}
