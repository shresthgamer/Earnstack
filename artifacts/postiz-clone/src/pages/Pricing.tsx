import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, X, Zap, ChevronDown, ChevronUp, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Perfect for creators just getting started",
    cta: "Start Free",
    highlighted: false,
    features: {
      products: "1 Digital Product",
      courses: "1 Course (5 lessons)",
      community: false,
      funnels: false,
      email: "500 contacts",
      ai: "5 AI generations/mo",
      analytics: "Basic analytics",
      domains: false,
      affiliate: false,
      support: "Community forum",
      fees: "0% transaction fees",
      api: false,
    }
  },
  {
    name: "Creator",
    monthlyPrice: 29,
    yearlyPrice: 19,
    description: "Everything you need to grow your income",
    cta: "Start Free Trial",
    highlighted: true,
    badge: "Most Popular",
    features: {
      products: "Unlimited Products",
      courses: "Unlimited Courses",
      community: "1 Community",
      funnels: "10 Funnels",
      email: "5,000 contacts",
      ai: "100 AI generations/mo",
      analytics: "Advanced analytics",
      domains: "1 Custom Domain",
      affiliate: "Affiliate Program",
      support: "Priority email support",
      fees: "0% transaction fees",
      api: false,
    }
  },
  {
    name: "Pro",
    monthlyPrice: 79,
    yearlyPrice: 49,
    description: "For scaling creators and coaches",
    cta: "Get Started",
    highlighted: false,
    features: {
      products: "Unlimited Products",
      courses: "Unlimited Courses",
      community: "Unlimited Communities",
      funnels: "Unlimited Funnels",
      email: "100,000 contacts",
      ai: "Unlimited AI generations",
      analytics: "Full analytics + exports",
      domains: "5 Custom Domains",
      affiliate: "Affiliate Program + White-label",
      support: "Dedicated account manager",
      fees: "0% transaction fees",
      api: "Full API access",
    }
  },
];

const featureLabels: Record<string, string> = {
  products: "Digital Products",
  courses: "Online Courses",
  community: "Paid Communities",
  funnels: "Sales Funnels",
  email: "Email Contacts",
  ai: "AI Generations",
  analytics: "Analytics",
  domains: "Custom Domains",
  affiliate: "Affiliate Program",
  support: "Support",
  fees: "Transaction Fees",
  api: "API Access",
};

const faqs = [
  {
    q: "Is there really a free plan forever?",
    a: "Yes! The Starter plan is free forever with no time limit. You can sell your first digital product and course without paying anything. Upgrade only when you're ready to scale."
  },
  {
    q: "Do you take a cut of my revenue?",
    a: "Never. EarnStack charges 0% transaction fees on all plans. You keep 100% of what you earn (minus the standard Stripe/PayPal processing fees of ~2.9% + $0.30)."
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. Upgrade or downgrade at any time. If you upgrade mid-cycle, you're billed the pro-rated difference. Downgrades take effect at the end of your current billing period."
  },
  {
    q: "Is there a free trial on paid plans?",
    a: "Yes — Creator and Pro plans come with a 14-day free trial. No credit card required to start the trial."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and bank transfers for annual plans. Your customers can pay via Stripe or PayPal through your checkout."
  },
  {
    q: "Do you offer discounts for annual billing?",
    a: "Yes — save ~35% when you pay annually. The Creator plan drops from $29/mo to $19/mo, and the Pro plan drops from $79/mo to $49/mo."
  },
  {
    q: "Can I get a refund?",
    a: "Yes. If you're not satisfied within the first 30 days on any paid plan, we'll give you a full refund — no questions asked."
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white w-full overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-20 pb-8 px-6 text-center max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-xs text-[#22c55e] uppercase tracking-widest font-semibold border border-[#22c55e]/30 px-3 py-1 rounded-full inline-block mb-6">
            Simple Pricing
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-4">
            Start free.<br />Scale when ready.
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            No hidden fees, no transaction cuts. Just tools that help you earn more.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!annual ? "text-white" : "text-gray-500"}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-colors ${annual ? "bg-[#22c55e]" : "bg-white/20"}`}
            >
              <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${annual ? "translate-x-7" : "translate-x-1"}`} />
            </button>
            <span className={`text-sm font-medium ${annual ? "text-white" : "text-gray-500"}`}>
              Annual <span className="text-[#22c55e] font-bold">Save 35%</span>
            </span>
          </div>
        </motion.div>
      </section>

      {/* Plans */}
      <section className="py-12 px-6 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-gradient-to-b from-[#0f2a0f] to-[#22c55e]/10 border-2 border-[#22c55e] shadow-[0_0_40px_rgba(34,197,94,0.15)]"
                  : "bg-[#141414] border border-white/8"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#22c55e] text-black text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                    <Zap size={10} /> {plan.badge}
                  </span>
                </div>
              )}

              <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
              <p className="text-sm text-gray-400 mb-5">{plan.description}</p>

              <div className="mb-6">
                <AnimatePresence mode="wait">
                  <motion.div key={annual ? "annual" : "monthly"}
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>
                    <span className="text-5xl font-bold text-white">
                      ${annual ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    {(annual ? plan.yearlyPrice : plan.monthlyPrice) > 0 && (
                      <span className="text-gray-400 ml-1">/mo</span>
                    )}
                  </motion.div>
                </AnimatePresence>
                {annual && plan.monthlyPrice > 0 && (
                  <p className="text-xs text-gray-500 mt-1">Billed annually (${plan.yearlyPrice * 12}/yr)</p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {Object.entries(plan.features).map(([key, value]) => (
                  <li key={key} className="flex items-start gap-3 text-sm">
                    {value === false ? (
                      <>
                        <X size={14} className="text-gray-600 mt-0.5 shrink-0" />
                        <span className="text-gray-600">{featureLabels[key]}</span>
                      </>
                    ) : (
                      <>
                        <div className="w-4 h-4 rounded-full bg-[#22c55e]/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={10} className="text-[#22c55e]" />
                        </div>
                        <span className="text-gray-300">{value as string}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className={`w-full py-3 rounded-full font-bold text-sm transition-colors ${
                  plan.highlighted
                    ? "bg-[#22c55e] text-black hover:bg-[#16a34a]"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center text-gray-600 text-sm mt-8">
          All plans include 0% transaction fees. Enterprise plans available for teams & agencies —{" "}
          <a href="#" className="text-[#22c55e] hover:underline">contact us</a>.
        </motion.p>
      </section>

      {/* Feature comparison table */}
      <section className="py-16 px-6 max-w-5xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-10">
          <h2 className="text-3xl font-display font-bold text-white mb-3">Full Feature Comparison</h2>
          <p className="text-gray-400">See exactly what's included in each plan</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="rounded-2xl border border-white/10 overflow-hidden">
          <div className="grid grid-cols-4 bg-[#141414] border-b border-white/10">
            <div className="p-4 text-sm font-bold text-gray-400">Features</div>
            {plans.map(p => (
              <div key={p.name} className={`p-4 text-center text-sm font-bold ${p.highlighted ? "text-[#22c55e]" : "text-white"}`}>
                {p.name}
              </div>
            ))}
          </div>
          {Object.keys(featureLabels).map((key, ri) => (
            <div key={key} className={`grid grid-cols-4 border-b border-white/5 ${ri % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
              <div className="p-4 text-sm text-gray-400">{featureLabels[key]}</div>
              {plans.map(p => {
                const val = p.features[key as keyof typeof p.features];
                return (
                  <div key={p.name} className="p-4 text-center text-xs text-gray-300">
                    {val === false ? <X size={14} className="text-gray-700 mx-auto" /> :
                      val === true ? <Check size={14} className="text-[#22c55e] mx-auto" /> :
                      <span>{val as string}</span>
                    }
                  </div>
                );
              })}
            </div>
          ))}
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 max-w-3xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-10">
          <h2 className="text-3xl font-display font-bold text-white mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-400">Everything you need to know about EarnStack pricing.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-[#141414] overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-sm font-semibold text-white">{faq.q}</span>
                {openFaq === i
                  ? <ChevronUp size={16} className="text-[#22c55e] shrink-0" />
                  : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <Sparkles size={28} className="text-[#22c55e] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Start free today</h2>
          <p className="text-gray-400 mb-8">No credit card required. 14-day free trial on all paid plans.</p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="bg-[#22c55e] text-black font-bold px-10 py-4 rounded-full text-base shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:bg-[#16a34a] transition-colors">
            Get Started Free →
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
