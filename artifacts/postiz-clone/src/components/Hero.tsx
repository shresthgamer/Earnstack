import { motion } from "framer-motion";
import {
  SiStripe, SiPaypal, SiZoom, SiYoutube, SiZapier,
  SiGoogleanalytics, SiGoogledrive, SiGooglecalendar,
  SiMailchimp, SiShopify, SiWebflow, SiNotion,
  SiAirtable, SiSlack
} from "react-icons/si";
import { Star } from "lucide-react";

const containerVars = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVars = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const iconGrid1 = [
  { Icon: SiStripe, color: "#635BFF", name: "Stripe" },
  { Icon: SiPaypal, color: "#003087", name: "PayPal", bg: "bg-[#009cde]/20" },
  { Icon: SiZoom, color: "#2D8CFF", name: "Zoom" },
  { Icon: SiYoutube, color: "#FF0000", name: "YouTube" },
  { Icon: SiZapier, color: "#FF4A00", name: "Zapier" },
  { Icon: SiGoogleanalytics, color: "#F9AB00", name: "Google Analytics" },
  { Icon: SiGoogledrive, color: "#4285F4", name: "Google Drive" },
  { Icon: SiGooglecalendar, color: "#4285F4", name: "Google Calendar" },
  { Icon: SiMailchimp, color: "#FFE01B", name: "Mailchimp", bg: "bg-[#FFE01B]/10" },
  { Icon: SiShopify, color: "#96BF48", name: "Shopify" },
  { Icon: SiWebflow, color: "#4353FF", name: "Webflow" },
  { Icon: SiNotion, color: "#ffffff", name: "Notion" },
  { Icon: SiAirtable, color: "#18BFFF", name: "Airtable" },
  { Icon: SiSlack, color: "#4A154B", name: "Slack" },
];

export default function Hero() {
  return (
    <section className="relative w-full pt-24 pb-16 overflow-hidden flex flex-col items-center">

      <div className="absolute top-40 right-20 text-[#22c55e] opacity-50 animate-pulse text-2xl">✦</div>
      <div className="absolute top-60 right-32 text-[#eab308] opacity-30 animate-pulse text-xl">✦</div>
      <div className="absolute top-20 left-32 text-gray-500 opacity-30 text-3xl">✧</div>

      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center z-10"
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
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#22c55e] text-black text-lg font-bold px-8 py-4 rounded-full hover:bg-[#16a34a] transition-colors shadow-[0_0_30px_rgba(34,197,94,0.3)] flex items-center gap-2"
          >
            Start Free <span className="font-serif">»</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white/10 text-white text-lg font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-colors border border-white/10 flex items-center gap-2"
          >
            Book a Demo
          </motion.button>
        </motion.div>

        {/* Integrations Grid */}
        <motion.div variants={itemVars} className="w-full max-w-4xl flex flex-col items-center gap-4">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Integrates with your favourite tools</p>
          <div className="flex flex-wrap justify-center gap-3">
            {iconGrid1.map((item, i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer ${item.bg ?? 'bg-white/5 hover:bg-white/10'}`}
                title={item.name}
              >
                <item.Icon className="text-xl" style={{ color: item.color }} />
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
