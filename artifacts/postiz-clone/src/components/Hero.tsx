import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  SiStripe, SiPaypal, SiZoom, SiYoutube, SiZapier,
  SiGoogleanalytics, SiGoogledrive, SiGooglecalendar,
  SiMailchimp, SiShopify, SiWebflow, SiNotion,
  SiAirtable, SiSlack
} from "react-icons/si";
import { Star, TrendingUp, Users, DollarSign, ArrowRight, Play } from "lucide-react";

const containerVars = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } }
};
const itemVars = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const iconGrid1 = [
  { Icon: SiStripe, color: "#635BFF", name: "Stripe" },
  { Icon: SiPaypal, color: "#009cde", name: "PayPal" },
  { Icon: SiZoom, color: "#2D8CFF", name: "Zoom" },
  { Icon: SiYoutube, color: "#FF0000", name: "YouTube" },
  { Icon: SiZapier, color: "#FF4A00", name: "Zapier" },
  { Icon: SiGoogleanalytics, color: "#F9AB00", name: "Analytics" },
  { Icon: SiGoogledrive, color: "#4285F4", name: "Drive" },
  { Icon: SiGooglecalendar, color: "#4285F4", name: "Calendar" },
  { Icon: SiMailchimp, color: "#FFE01B", name: "Mailchimp" },
  { Icon: SiShopify, color: "#96BF48", name: "Shopify" },
  { Icon: SiWebflow, color: "#4353FF", name: "Webflow" },
  { Icon: SiNotion, color: "#ffffff", name: "Notion" },
  { Icon: SiAirtable, color: "#18BFFF", name: "Airtable" },
  { Icon: SiSlack, color: "#4A154B", name: "Slack" },
];

/* Floating stat cards shown beside the headline */
const floatingCards = [
  {
    icon: DollarSign,
    color: "#22c55e",
    bg: "from-[#0d1a0d] to-[#0a1a0a]",
    border: "border-[#22c55e]/20",
    label: "Revenue This Month",
    value: "$24,380",
    sub: "+38% vs last month",
    subColor: "text-[#22c55e]",
    side: "left",
    delay: 0.2,
    float: "0s",
  },
  {
    icon: Users,
    color: "#818cf8",
    bg: "from-[#0e0e1a] to-[#0d0d18]",
    border: "border-indigo-500/20",
    label: "New Students",
    value: "1,240",
    sub: "This week",
    subColor: "text-indigo-400",
    side: "right",
    delay: 0.4,
    float: "1.5s",
  },
  {
    icon: TrendingUp,
    color: "#f59e0b",
    bg: "from-[#1a120a] to-[#180f08]",
    border: "border-amber-500/20",
    label: "Conversion Rate",
    value: "14.7%",
    sub: "↑ +2.3% this week",
    subColor: "text-amber-400",
    side: "left",
    delay: 0.6,
    float: "0.8s",
  },
];

function FloatingCard({ card }: { card: typeof floatingCards[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: card.side === "left" ? -40 : 40, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: card.delay, duration: 0.7, ease: "easeOut" }}
      className={`absolute ${
        card.side === "left"
          ? "left-4 md:-left-16 xl:-left-28"
          : "right-4 md:-right-16 xl:-right-28"
      } hidden lg:block`}
      style={{ top: card.side === "left" ? "15%" : "45%" }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: parseFloat(card.float) }}
        className={`w-44 p-4 rounded-2xl bg-gradient-to-br ${card.bg} border ${card.border} shadow-xl backdrop-blur-sm`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: card.color + "20" }}>
            <card.icon size={13} style={{ color: card.color }} />
          </div>
          <span className="text-[10px] text-gray-400 font-medium">{card.label}</span>
        </div>
        <div className="text-xl font-display font-bold text-white mb-0.5">{card.value}</div>
        <div className={`text-[10px] font-medium ${card.subColor}`}>{card.sub}</div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full pt-24 pb-16 overflow-hidden flex flex-col items-center">

      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#22c55e]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 left-10 w-48 h-48 bg-emerald-900/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-32 right-10 w-64 h-64 bg-green-900/15 rounded-full blur-3xl pointer-events-none" />

      {/* Swirl decorative line */}
      <img
        src="/swirl-line.png"
        alt=""
        aria-hidden
        className="absolute bottom-24 right-0 w-40 md:w-56 opacity-20 pointer-events-none select-none"
      />
      <img
        src="/swirl-line.png"
        alt=""
        aria-hidden
        className="absolute top-16 left-0 w-32 opacity-10 pointer-events-none select-none rotate-180"
      />

      {/* Sparkle decorations */}
      <motion.div animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.2, 1] }} transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute top-40 right-20 text-[#22c55e] text-2xl pointer-events-none">✦</motion.div>
      <motion.div animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.3, 1] }} transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
        className="absolute top-60 right-32 text-[#eab308] text-xl pointer-events-none">✦</motion.div>
      <motion.div animate={{ opacity: [0.15, 0.5, 0.15] }} transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
        className="absolute top-20 left-32 text-gray-500 text-3xl pointer-events-none">✧</motion.div>

      {/* Floating stat cards */}
      <div className="relative w-full max-w-5xl mx-auto px-6">
        {floatingCards.map(c => <FloatingCard key={c.label} card={c} />)}

        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center z-10"
        >
          {/* Badges */}
          <motion.div variants={itemVars} className="flex flex-wrap justify-center gap-4 mb-8">
            {["#1 AI Creator Platform", "Trusted by 50,000+ Creators", "4.9★ Rating"].map((text) => (
              <div key={text} className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#22c55e]/20 bg-[#22c55e]/5 text-xs text-[#22c55e] font-medium">
                <Star size={12} className="text-[#eab308]" fill="#eab308" />
                {text}
              </div>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVars} className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl">
            Build, Sell & Scale Your<br />
            Creator Business with{" "}
            <span className="relative inline-block">
              AI
              <svg className="absolute w-full h-3 -bottom-1 left-0" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
                <path d="M0,8 C25,0 75,12 100,4" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p variants={itemVars} className="text-lg md:text-xl text-gray-400 max-w-[620px] mb-10 leading-relaxed">
            Create digital products, online courses, memberships, AI funnels, websites, communities and marketing campaigns from one powerful platform.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVars} className="flex flex-wrap gap-4 justify-center mb-16">
            <Link href="/pricing">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#22c55e] text-black text-lg font-bold px-8 py-4 rounded-full hover:bg-[#16a34a] transition-colors shadow-[0_0_30px_rgba(34,197,94,0.3)] flex items-center gap-2"
              >
                Start Free <ArrowRight size={18} />
              </motion.button>
            </Link>
            <a href="#demo-video">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white/10 text-white text-lg font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-colors border border-white/10 flex items-center gap-2"
              >
                <Play size={16} className="fill-white" /> Watch Demo
              </motion.button>
            </a>
          </motion.div>

          {/* Integrations Grid */}
          <motion.div variants={itemVars} className="w-full max-w-4xl flex flex-col items-center gap-4">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Integrates with your favourite tools</p>
            <div className="flex flex-wrap justify-center gap-3">
              {iconGrid1.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors"
                  title={item.name}
                >
                  <item.Icon className="text-xl" style={{ color: item.color }} />
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Demo Video Section */}
      <div id="demo-video" className="w-full max-w-5xl mx-auto px-6 mt-20">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-[#0a0f0a]">
          {/* Browser chrome bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 mx-3 bg-white/5 rounded-md px-3 py-1 text-xs text-gray-500 text-center">
              app.earnstack.in/dashboard
            </div>
          </div>
          <video
            src="/earnstack-demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full"
          />
        </motion.div>
      </div>

    </section>
  );
}
