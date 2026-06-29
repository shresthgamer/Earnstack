import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Users, Target, Zap, Globe, Heart, TrendingUp } from "lucide-react";

const fade = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

const team = [
  { name: "Arjun Mehta", role: "CEO & Co-founder", bg: "from-green-600 to-emerald-800", initials: "AM" },
  { name: "Priya Sharma", role: "CTO & Co-founder", bg: "from-blue-600 to-indigo-800", initials: "PS" },
  { name: "Rahul Verma", role: "Head of Product", bg: "from-purple-600 to-violet-800", initials: "RV" },
  { name: "Sneha Iyer", role: "Head of Growth", bg: "from-amber-500 to-orange-700", initials: "SI" },
  { name: "Dev Kapoor", role: "Lead Engineer", bg: "from-teal-500 to-cyan-700", initials: "DK" },
  { name: "Ananya Roy", role: "Head of Design", bg: "from-pink-500 to-rose-700", initials: "AR" },
];

const values = [
  { icon: Heart, title: "Creator-first", desc: "Every decision we make starts with one question: does this help creators earn more?" },
  { icon: Zap, title: "Move fast", desc: "We ship fast, learn fast, and iterate. Creators can't wait — so neither do we." },
  { icon: Target, title: "Radical transparency", desc: "We share our roadmap, our mistakes, and our wins openly with our community." },
  { icon: Globe, title: "Global by default", desc: "Creators everywhere deserve world-class tools, regardless of geography." },
  { icon: TrendingUp, title: "Compound growth", desc: "We build for long-term success — for our creators, and for ourselves." },
  { icon: Users, title: "Community-driven", desc: "Our users shape our product. The best ideas come from the creators using EarnStack every day." },
];

const stats = [
  { value: "50,000+", label: "Creators on platform" },
  { value: "$12M+", label: "Earned by creators" },
  { value: "120+", label: "Countries reached" },
  { value: "4.9★", label: "Average rating" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white font-body">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#22c55e]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-emerald-900/20 rounded-full blur-3xl pointer-events-none" />
        <motion.div variants={fade} initial="hidden" animate="show" className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 text-[#22c55e] text-xs font-semibold uppercase tracking-widest mb-6">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.1] mb-6">
            Built for creators,<br />
            <span className="text-[#22c55e]">by creators</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            EarnStack was born from frustration. We were creators ourselves — juggling 6 different tools, losing 30% of revenue to commissions, and spending more time managing software than creating. So we built the platform we always wished existed.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="text-4xl font-display font-bold text-[#22c55e] mb-1">{s.value}</div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-display font-bold mb-6">Our mission</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              We believe every creator — whether you're a coach, educator, writer, designer, or developer — deserves access to powerful tools that help them build a sustainable income online.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              The internet has unlocked unprecedented opportunity for independent creators. But the tools have always been fragmented, expensive, and complicated. EarnStack changes that with one unified AI-powered platform.
            </p>
            <Link href="/pricing">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="bg-[#22c55e] text-black font-bold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#16a34a] transition-colors">
                Start for free <ArrowRight size={16} />
              </motion.button>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0d1a0d] to-[#0E0E0E] rounded-2xl border border-white/5 p-8">
            <div className="flex flex-col gap-4">
              {["✦ No revenue commissions — keep 100% of what you earn", "✦ AI tools built specifically for creator monetization", "✦ Everything in one place — no more tool juggling", "✦ Launch in minutes, not weeks"].map(t => (
                <div key={t} className="text-gray-300 text-sm leading-relaxed">{t}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">What we believe in</h2>
            <p className="text-gray-400">The principles that guide every decision we make.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-[#0d1a0d] border border-white/5 hover:border-[#22c55e]/20 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-[#22c55e]/15 flex items-center justify-center mb-4 group-hover:bg-[#22c55e]/25 transition-colors">
                  <v.icon size={18} className="text-[#22c55e]" />
                </div>
                <h3 className="font-bold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">The team</h2>
            <p className="text-gray-400">Passionate builders who've been in your shoes as creators.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-[#0d1a0d] border border-white/5 text-center hover:border-[#22c55e]/20 transition-colors">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${m.bg} flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg font-display`}>
                  {m.initials}
                </div>
                <h3 className="font-bold text-white mb-1">{m.name}</h3>
                <p className="text-sm text-gray-400">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0d1a0d] to-[#0E0E0E] rounded-3xl border border-[#22c55e]/20 p-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to join the team?</h2>
            <p className="text-gray-400 mb-8">We're always looking for talented people who love what creators do.</p>
            <Link href="/careers">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="bg-[#22c55e] text-black font-bold px-8 py-4 rounded-full flex items-center gap-2 mx-auto hover:bg-[#16a34a] transition-colors">
                See open roles <ArrowRight size={16} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
