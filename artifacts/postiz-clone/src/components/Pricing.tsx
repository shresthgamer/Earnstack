import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "",
    description: "Perfect for creators just getting started",
    features: [
      "1 Digital Product",
      "Basic Course Builder",
      "Link in Bio Page",
      "Stripe & PayPal Payments",
      "Community Support",
    ],
    highlighted: false,
    cta: "Start Free"
  },
  {
    name: "Creator",
    price: "$29",
    period: "/mo",
    description: "Everything you need to grow your income",
    features: [
      "Unlimited Digital Products",
      "Full Course Builder",
      "Membership Builder",
      "Email Marketing (5k contacts)",
      "AI Content Generator",
      "Funnel Builder",
      "Affiliate Program",
      "Priority Support",
    ],
    highlighted: true,
    badge: "Most Popular",
    cta: "Start Free Trial"
  },
  {
    name: "Pro",
    price: "$79",
    period: "/mo",
    description: "For scaling creators and coaches",
    features: [
      "Everything in Creator",
      "AI Funnel Generator",
      "AI Course Generator",
      "AI Chatbot Builder",
      "CRM & Automation",
      "White-label Checkout",
      "API Access",
      "Dedicated Account Manager",
    ],
    highlighted: false,
    cta: "Get Started"
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
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
          Simple, creator-first pricing
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Start free. Upgrade when you're ready to scale. No hidden fees, no transaction cuts.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className={`rounded-3xl p-8 relative ${
              plan.highlighted
                ? "bg-gradient-to-b from-[#0f2a0f] to-[#22c55e]/10 border-2 border-[#22c55e] shadow-[0_0_30px_rgba(34,197,94,0.15)]"
                : "bg-[#0f1a0f] border border-white/5"
            } flex flex-col`}
          >
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-[#22c55e] text-black text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                  <Zap size={10} /> {plan.badge}
                </span>
              </div>
            )}

            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
            <p className="text-sm text-gray-400 mb-6">{plan.description}</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">{plan.price}</span>
              {plan.period && <span className="text-gray-400">{plan.period}</span>}
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-[#22c55e]/20 flex items-center justify-center text-[#22c55e] shrink-0">
                    <Check size={12} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-3 px-6 rounded-full font-bold transition-colors ${
              plan.highlighted
                ? "bg-[#22c55e] text-black hover:bg-[#16a34a]"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}>
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-gray-500 text-sm mt-10"
      >
        All plans include 0% transaction fees. Enterprise plans available for teams &amp; agencies.
      </motion.p>
    </section>
  );
}
