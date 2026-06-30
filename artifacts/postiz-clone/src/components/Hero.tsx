import { motion } from "framer-motion";
import { Link } from "wouter";
import { useSignUp } from "@/context/SignUpContext";
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
  const { openSignUp } = useSignUp();
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
            <motion.button
              onClick={() => openSignUp("hero")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#22c55e] text-black text-lg font-bold px-8 py-4 rounded-full hover:bg-[#16a34a] transition-colors shadow-[0_0_30px_rgba(34,197,94,0.3)] flex items-center gap-2"
            >
              Start Free <ArrowRight size={18} />
            </motion.button>
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

      {/* Animated Dashboard Mockup */}
      <div id="demo-video" className="w-full max-w-5xl mx-auto px-6 mt-20">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-[#0a0f0a]">

          {/* Browser chrome bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0d0d0d] border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 mx-3 bg-white/5 rounded-md px-3 py-1 text-xs text-gray-500 text-center">
              app.earnstack.in/dashboard
            </div>
          </div>

          {/* Dashboard body */}
          <div className="flex h-[480px]">
            {/* Sidebar */}
            <div className="w-14 shrink-0 bg-[#0a0f0a] border-r border-white/5 flex flex-col items-center py-4 gap-5">
              <div className="w-8 h-8 rounded-lg bg-[#22c55e] flex items-center justify-center mb-2">
                <img src="/earnstack-logo.png" alt="" className="w-6 h-6 object-contain" />
              </div>
              {[
                <path key="grid" d="M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h7v7h-7z"/>,
                <path key="bar" d="M18 20V10M12 20V4M6 20v-6"/>,
                <path key="pkg" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>,
                <path key="users" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>,
                <path key="bolt" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>,
              ].map((d, i) => (
                <motion.div key={i} whileHover={{ scale: 1.1 }}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer transition-colors ${i === 0 ? "bg-[#22c55e]/20" : "hover:bg-white/5"}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke={i === 0 ? "#22c55e" : "#4b5563"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    {d}
                  </svg>
                </motion.div>
              ))}
            </div>

            {/* Main content */}
            <div className="flex-1 overflow-hidden p-5 flex flex-col gap-4">

              {/* Top heading */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-bold text-sm">Dashboard</div>
                  <div className="text-gray-500 text-xs">June 2026 · All products</div>
                </div>
                <motion.div whileHover={{ scale: 1.03 }}
                  className="text-[10px] bg-[#22c55e] text-black font-bold px-3 py-1.5 rounded-full cursor-pointer">
                  + New Product
                </motion.div>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-4 gap-3">
                {[
                  { label: "Total Revenue", value: "₹18.4L", change: "+34%", color: "#22c55e", up: true },
                  { label: "Products Sold", value: "3,241", change: "+18%", color: "#818cf8", up: true },
                  { label: "Active Students", value: "12,890", change: "+52%", color: "#f59e0b", up: true },
                  { label: "Avg. Order Value", value: "₹5,680", change: "+9%", color: "#34d399", up: true },
                ].map((s, i) => (
                  <motion.div key={s.label}
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}
                    className="bg-[#111] border border-white/5 rounded-xl p-3">
                    <div className="text-gray-500 text-[9px] mb-1 uppercase tracking-wide">{s.label}</div>
                    <div className="text-white font-bold text-base mb-1">{s.value}</div>
                    <div className="text-[10px] font-medium" style={{ color: s.color }}>↑ {s.change} this month</div>
                  </motion.div>
                ))}
              </div>

              {/* Chart + Recent Sales */}
              <div className="flex gap-3 flex-1 min-h-0">
                {/* Revenue Chart */}
                <div className="flex-1 bg-[#111] border border-white/5 rounded-xl p-4 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-white text-xs font-semibold">Revenue Chart</div>
                    <div className="text-[#22c55e] text-[9px] font-medium">+38% vs last month</div>
                  </div>
                  {/* Animated bar chart */}
                  <div className="flex-1 flex items-end gap-1.5 pb-2">
                    {[55, 42, 68, 80, 58, 90, 73, 95, 62, 88, 76, 100].map((h, i) => (
                      <motion.div key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.06, duration: 0.5, ease: "easeOut" }}
                        className="flex-1 rounded-sm"
                        style={{
                          background: i === 11
                            ? "linear-gradient(to top, #22c55e, #4ade80)"
                            : i > 8
                            ? "rgba(34,197,94,0.4)"
                            : "rgba(255,255,255,0.07)"
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-[8px] text-gray-600 mt-1">
                    {["Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun"].map(m => (
                      <span key={m}>{m}</span>
                    ))}
                  </div>
                </div>

                {/* Recent Sales */}
                <div className="w-44 bg-[#111] border border-white/5 rounded-xl p-3 flex flex-col">
                  <div className="text-white text-xs font-semibold mb-3">Recent Sales</div>
                  <div className="flex flex-col gap-2.5 overflow-hidden">
                    {[
                      { name: "Notion Masterclass", amt: "₹2,499", avatar: "NM", color: "#818cf8" },
                      { name: "SEO Playbook PDF", amt: "₹799", avatar: "SP", color: "#f59e0b" },
                      { name: "AI Tools Bundle", amt: "₹3,999", avatar: "AI", color: "#22c55e" },
                      { name: "YouTube Course", amt: "₹1,999", avatar: "YT", color: "#f87171" },
                      { name: "Email Templates", amt: "₹499", avatar: "ET", color: "#34d399" },
                    ].map((s, i) => (
                      <motion.div key={s.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.12 }}
                        className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg shrink-0 flex items-center justify-center text-[8px] font-bold text-black"
                          style={{ background: s.color }}>
                          {s.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[9px] text-gray-300 truncate">{s.name}</div>
                          <div className="text-[9px] font-bold text-white">{s.amt}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live pulse indicator */}
              <div className="flex items-center gap-2">
                <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-[#22c55e]" />
                <span className="text-[10px] text-gray-500">Live data · updated just now</span>
              </div>

            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
