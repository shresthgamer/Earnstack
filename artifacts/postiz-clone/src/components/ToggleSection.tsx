import { useState } from "react";
import { motion } from "framer-motion";

export default function ToggleSection() {
  const [isAdvanced, setIsAdvanced] = useState(false);

  return (
    <section className="py-12 flex justify-center w-full">
      <div className="flex items-center gap-4 bg-[#0f1a0f] p-2 rounded-full border border-white/5">
        <button
          onClick={() => setIsAdvanced(false)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!isAdvanced ? "text-white" : "text-gray-500"}`}
        >
          I want to sell digital products
        </button>

        <div
          className="w-14 h-7 bg-black/50 rounded-full border border-white/10 relative cursor-pointer"
          onClick={() => setIsAdvanced(!isAdvanced)}
        >
          <motion.div
            className="w-5 h-5 bg-[#22c55e] rounded-full absolute top-1 shadow-lg"
            animate={{ left: isAdvanced ? "calc(100% - 24px)" : "4px" }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </div>

        <button
          onClick={() => setIsAdvanced(true)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isAdvanced ? "text-white" : "text-gray-500"}`}
        >
          I want to build a community
        </button>
      </div>
    </section>
  );
}
