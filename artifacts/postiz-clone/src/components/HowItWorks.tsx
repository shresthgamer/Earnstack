import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Connect your channels",
    description: "Link all your social accounts securely in one click. We support over 30 platforms."
  },
  {
    num: "02",
    title: "Generate with AI",
    description: "Tell the AI what to create, or use our prompts to get inspired instantly."
  },
  {
    num: "03",
    title: "Schedule & Publish",
    description: "Set it and forget it. Review everything in a calendar and let the agents do the rest."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">How It Works</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Three simple steps to put your social media on autopilot.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#FF4CE2]/10 border border-[#FF4CE2]/30 flex items-center justify-center mb-6">
              <span className="text-2xl font-display font-bold text-[#FF4CE2]">{step.num}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
            <p className="text-gray-400">{step.description}</p>
            
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[calc(50%+4rem)] right-[calc(-50%+4rem)] h-[1px] bg-gradient-to-r from-[#FF4CE2]/30 to-transparent" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
