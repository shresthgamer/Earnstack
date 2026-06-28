import { motion } from "framer-motion";
import { 
  SiInstagram, SiYoutube, SiBuffer, SiDribbble,
  SiReddit, SiTiktok, SiFacebook, SiPinterest, SiThreads, 
  SiX, SiSlack, SiDiscord, SiMastodon,
  SiMessenger, SiTelegram, SiVk, SiMedium, SiWordpress, 
  SiKickstarter, SiTwitch 
} from "react-icons/si";
import { Trophy, Linkedin } from "lucide-react";

const containerVars = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVars = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const iconGrid1 = [
  { Icon: SiInstagram, color: "#E4405F", name: "Instagram" },
  { Icon: SiYoutube, color: "#FF0000", name: "YouTube" },
  { Icon: SiBuffer, color: "#232427", name: "Buffer" },
  { Icon: SiDribbble, color: "#EA4C89", name: "Dribbble" },
  { Icon: Linkedin, color: "#0A66C2", name: "LinkedIn" },
  { Icon: SiReddit, color: "#FF4500", name: "Reddit" },
  { Icon: SiTiktok, color: "#000000", name: "TikTok", bg: "bg-white text-black" },
  { Icon: SiFacebook, color: "#1877F2", name: "Facebook" },
  { Icon: SiPinterest, color: "#BD081C", name: "Pinterest" },
  { Icon: SiThreads, color: "#000000", name: "Threads", bg: "bg-white text-black" },
  { Icon: SiX, color: "#000000", name: "X/Twitter", bg: "bg-white text-black" },
  { Icon: SiSlack, color: "#4A154B", name: "Slack" },
  { Icon: SiDiscord, color: "#5865F2", name: "Discord" },
  { Icon: SiMastodon, color: "#6364FF", name: "Mastodon" }
];

const iconGrid2 = [
  { Icon: SiMessenger, color: "#00B2FF", name: "Messenger" },
  { Icon: SiTelegram, color: "#26A5E4", name: "Telegram" },
  { Icon: SiVk, color: "#4680C2", name: "VK" },
  { Icon: SiMedium, color: "#000000", name: "Medium", bg: "bg-white text-black" },
  { Icon: SiWordpress, color: "#21759B", name: "WordPress" },
  { Icon: SiKickstarter, color: "#05CE78", name: "Kickstarter" },
  { Icon: SiTwitch, color: "#9146FF", name: "Twitch" }
];

export default function Hero() {
  return (
    <section className="relative w-full pt-24 pb-16 overflow-hidden flex flex-col items-center">
      
      {/* Decorative stars/shapes */}
      <div className="absolute top-40 right-20 text-[#FF4CE2] opacity-50 animate-pulse text-2xl">✦</div>
      <div className="absolute top-60 right-32 text-white opacity-30 animate-pulse text-xl">✦</div>
      <div className="absolute top-20 left-32 text-gray-500 opacity-30 text-3xl">✧</div>

      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center z-10"
      >
        
        {/* Badges */}
        <motion.div variants={itemVars} className="flex flex-wrap justify-center gap-4 mb-8">
          {["Product of the day | 1st", "Product of the week | 1st", "Product of the month | 1st"].map((text) => (
            <div key={text} className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-xs text-white font-medium">
              <Trophy size={14} className="text-[#FF4CE2]" />
              {text}
            </div>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={itemVars} className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl">
          Run your social media on<br />
          autopilot with <span className="relative inline-block">
            AI agents
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FF4CE2]" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
              <path d="M0,8 C50,0 150,12 200,4" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p variants={itemVars} className="text-lg md:text-xl text-gray-400 max-w-[600px] mb-10 leading-relaxed">
          Plan, generate, and schedule posts automatically to 30+ social media networks — then review and edit everything in a visual calendar.
          <br/><br/>
          Use any agent: OpenClaw / Hermes / Claude / ChatGPT / Codex / Cursor
        </motion.p>

        {/* CTA */}
        <motion.div variants={itemVars} className="mb-16">
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white text-black text-lg font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 mx-auto"
          >
            Start a 7-day trial for $0 <span className="font-serif">»</span>
          </motion.button>
        </motion.div>

        {/* Icons Grid */}
        <motion.div variants={itemVars} className="w-full max-w-4xl flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-3">
            {iconGrid1.map((item, i) => (
              <div 
                key={i} 
                className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group ${item.bg ? item.bg : 'bg-white/5 hover:bg-white/10'}`}
                title={item.name}
              >
                <item.Icon className="text-xl" style={{ color: item.bg ? "black" : item.color }} />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {iconGrid2.map((item, i) => (
              <div 
                key={i} 
                className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group ${item.bg ? item.bg : 'bg-white/5 hover:bg-white/10'}`}
                title={item.name}
              >
                <item.Icon className="text-xl" style={{ color: item.bg ? "black" : item.color }} />
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
