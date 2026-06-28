import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FF4CE2]/10 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
          Start Running Your Social Media on Autopilot
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Join thousands of marketers who are saving time and growing faster with AI agents.
        </p>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black font-bold text-lg px-8 py-4 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all"
        >
          Start for $0 — No credit card required
        </motion.button>
      </motion.div>
    </section>
  );
}
