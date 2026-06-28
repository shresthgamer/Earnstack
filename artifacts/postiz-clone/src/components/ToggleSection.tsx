import { useState } from "react";
import { motion } from "framer-motion";

export default function ToggleSection() {
  const [isNormal, setIsNormal] = useState(false);

  return (
    <section className="py-12 flex justify-center w-full">
      <div className="flex items-center gap-4 bg-[#161122] p-2 rounded-full border border-white/5">
        <button 
          onClick={() => setIsNormal(false)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!isNormal ? "text-white" : "text-gray-500"}`}
        >
          I need agentic scheduling
        </button>
        
        <div 
          className="w-14 h-7 bg-black/50 rounded-full border border-white/10 relative cursor-pointer"
          onClick={() => setIsNormal(!isNormal)}
        >
          <motion.div 
            className="w-5 h-5 bg-[#FF4CE2] rounded-full absolute top-1 shadow-lg"
            animate={{ left: isNormal ? "calc(100% - 24px)" : "4px" }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </div>

        <button 
          onClick={() => setIsNormal(true)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isNormal ? "text-white" : "text-gray-500"}`}
        >
          I need normal scheduling
        </button>
      </div>
    </section>
  );
}
