import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out the platform",
    features: [
      "3 Social Channels",
      "Basic Scheduling",
      "Standard Analytics",
      "Community Support"
    ],
    highlighted: false
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    description: "For creators and small teams",
    features: [
      "20 Social Channels",
      "AI Content Generation",
      "Advanced Analytics",
      "Priority Support",
      "Unlimited Team Members"
    ],
    highlighted: true
  },
  {
    name: "Agency",
    price: "$79",
    period: "/mo",
    description: "For agencies managing multiple brands",
    features: [
      "Unlimited Channels",
      "White-label Reports",
      "API Access",
      "Dedicated Account Manager",
      "Custom Workflows"
    ],
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Simple, transparent pricing</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Choose the plan that's right for you. No hidden fees.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className={`rounded-3xl p-8 ${
              plan.highlighted 
                ? "bg-gradient-to-b from-[#161122] to-[#FF4CE2]/10 border-2 border-[#FF4CE2] shadow-[0_0_30px_rgba(255,76,226,0.15)]" 
                : "bg-[#161122] border border-white/5"
            } flex flex-col`}
          >
            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
            <p className="text-sm text-gray-400 mb-6">{plan.description}</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">{plan.price}</span>
              {plan.period && <span className="text-gray-400">{plan.period}</span>}
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-[#FF4CE2]/20 flex items-center justify-center text-[#FF4CE2] shrink-0">
                    <Check size={12} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-3 px-6 rounded-full font-bold transition-colors ${
              plan.highlighted 
                ? "bg-white text-black hover:bg-gray-100" 
                : "bg-white/10 text-white hover:bg-white/20"
            }`}>
              {plan.name === "Free" ? "Start for Free" : "Get Started"}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
