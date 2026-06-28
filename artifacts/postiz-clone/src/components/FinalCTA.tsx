import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#22c55e]/5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#eab308]/3 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <div className="flex justify-center mb-6">
          <img src="/earnstack-logo.png" alt="EarnStack" className="w-16 h-16 object-contain" />
        </div>

        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
          Start Building Your<br />Creator Empire Today
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Join 50,000+ creators who use EarnStack to turn their skills into scalable income — courses, products, communities, and funnels all in one place.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#22c55e] text-black font-bold text-lg px-8 py-4 rounded-full shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] transition-all hover:bg-[#16a34a]"
          >
            Start Free — No credit card required
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-full border border-white/10 hover:bg-white/20 transition-all"
          >
            Book a Demo
          </motion.button>
        </div>

        <p className="text-gray-600 text-sm mt-8">0% transaction fees · Cancel anytime · 14-day free trial on paid plans</p>
      </motion.div>
    </section>
  );
}
