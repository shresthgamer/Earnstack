import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, ChevronDown, BookOpen, Zap, CreditCard, Users, Settings, LifeBuoy, ArrowRight } from "lucide-react";

const categories = [
  { icon: Zap, label: "Getting Started", color: "text-[#22c55e]", bg: "bg-[#22c55e]/10", count: 12 },
  { icon: CreditCard, label: "Billing & Payments", color: "text-amber-400", bg: "bg-amber-400/10", count: 8 },
  { icon: BookOpen, label: "Courses & Products", color: "text-blue-400", bg: "bg-blue-400/10", count: 15 },
  { icon: Users, label: "Community", color: "text-purple-400", bg: "bg-purple-400/10", count: 9 },
  { icon: Settings, label: "Account & Settings", color: "text-gray-400", bg: "bg-gray-400/10", count: 11 },
  { icon: LifeBuoy, label: "Troubleshooting", color: "text-red-400", bg: "bg-red-400/10", count: 7 },
];

const faqs = [
  {
    q: "How do I get started on EarnStack?",
    a: "Getting started is easy! Sign up for a free account, complete your creator profile, and you can create your first product within minutes. Our onboarding wizard will guide you step by step. You can also explore our template library to launch even faster.",
  },
  {
    q: "What does EarnStack cost?",
    a: "EarnStack offers a free plan with core features. Paid plans start at ₹999/month (or $19/month) and include unlimited products, AI tools, and advanced analytics. We never charge a commission on your sales — you keep 100% of your revenue.",
  },
  {
    q: "How do payouts work?",
    a: "When a customer purchases from you, the payment is collected and held securely. Payouts are processed every 2–7 business days to your connected bank account or UPI. You can also set up instant payouts for a small fee.",
  },
  {
    q: "Can I sell courses, digital products, and memberships together?",
    a: "Absolutely! EarnStack is built to handle all your creator income streams from one place. Mix and match courses, digital downloads, membership tiers, coaching calls, and community access — all managed from a single dashboard.",
  },
  {
    q: "How do the AI tools work?",
    a: "Our AI tools are designed specifically for creators. Use AI to generate sales copy, email sequences, social media posts, course outlines, and more. Just describe what you want and the AI handles the writing. All generated content is yours to edit and use freely.",
  },
  {
    q: "Can I migrate my existing products from other platforms?",
    a: "Yes! We have migration tools for Teachable, Gumroad, Kajabi, Thinkific, and Podia. You can import your course content, student lists, and products. Our team can also assist with complex migrations — contact support@earnstack.in.",
  },
  {
    q: "What payment methods do customers support?",
    a: "Your customers can pay with credit/debit cards, UPI, net banking, PayPal, and more. We support payments in 30+ currencies, making it easy to sell globally.",
  },
  {
    q: "Is there a student or customer limit?",
    a: "No! All EarnStack plans support unlimited students and customers. You can grow your audience as large as you want without worrying about hitting a cap.",
  },
  {
    q: "Do I get a custom domain for my storefront?",
    a: "Yes. All paid plans include a custom domain. You can connect any domain you own (e.g., shop.yourname.com) and we'll set up SSL automatically. Free plans get a yourname.earnstack.in subdomain.",
  },
  {
    q: "How do I contact support?",
    a: "You can reach us via live chat inside the platform (fastest, typically <5 min response), or email support@earnstack.in. We also have a creator community forum where thousands of creators help each other.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div layout className="border-b border-white/5 last:border-0">
      <button onClick={() => setOpen(v => !v)} className="w-full flex items-start justify-between gap-4 py-5 text-left group">
        <span className="font-medium text-white group-hover:text-[#22c55e] transition-colors text-sm md:text-base">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0 mt-0.5">
          <ChevronDown size={18} className="text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <p className="text-sm text-gray-400 leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function HelpCenter() {
  const [search, setSearch] = useState("");
  const filtered = faqs.filter(f => f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white font-body">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#0d1a0d]/60 to-transparent">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#22c55e]/8 rounded-full blur-3xl pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Help <span className="text-[#22c55e]">Center</span>
          </h1>
          <p className="text-gray-400 mb-8">Find answers to your questions, or contact our support team.</p>
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search for answers..."
              className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#22c55e]/40 focus:bg-white/8 transition-all text-sm" />
          </div>
        </motion.div>
      </section>

      {/* Categories */}
      {!search && (
        <section className="pb-16 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((c, i) => (
              <motion.button key={c.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                whileHover={{ y: -2 }} className={`p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 text-left transition-all`}>
                <div className={`w-9 h-9 rounded-xl ${c.bg} flex items-center justify-center mb-3`}>
                  <c.icon size={17} className={c.color} />
                </div>
                <div className="font-semibold text-sm text-white mb-1">{c.label}</div>
                <div className="text-xs text-gray-500">{c.count} articles</div>
              </motion.button>
            ))}
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl font-display font-bold mb-8">
            {search ? `Results for "${search}"` : "Frequently Asked Questions"}
          </motion.h2>
          {filtered.length > 0
            ? filtered.map(f => <FaqItem key={f.q} q={f.q} a={f.a} />)
            : <p className="text-gray-400 text-sm">No results found. Try a different search or <a href="mailto:support@earnstack.in" className="text-[#22c55e] hover:underline">contact support</a>.</p>
          }
        </div>
      </section>

      {/* Contact CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4">
          {[
            { icon: "💬", title: "Live Chat", desc: "Talk to our team in real time — avg. response under 5 minutes.", action: "Start chat", href: "#" },
            { icon: "📧", title: "Email Support", desc: "Send us a message and we'll reply within 24 hours.", action: "Email us", href: "mailto:support@earnstack.in" },
            { icon: "👥", title: "Community Forum", desc: "Get help from thousands of fellow EarnStack creators.", action: "Visit forum", href: "#" },
          ].map(c => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="p-6 rounded-2xl bg-[#0d1a0d] border border-white/5 hover:border-[#22c55e]/20 transition-colors group">
              <div className="text-2xl mb-3">{c.icon}</div>
              <h3 className="font-bold text-white mb-2">{c.title}</h3>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">{c.desc}</p>
              <a href={c.href} className="text-sm text-[#22c55e] font-medium flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                {c.action} <ArrowRight size={13} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
