import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Bot, Sparkles, FileText, Mail, Target, MessageSquare,
  Image, BarChart2, Zap, BookOpen, ArrowRight, Play, Check
} from "lucide-react";

const tools = [
  {
    icon: BookOpen,
    color: "#22c55e",
    tag: "COURSES",
    title: "AI Course Generator",
    desc: "Describe your topic and EarnStack's AI builds a complete course — full curriculum, lesson scripts, quizzes, and a sales page ready to publish.",
    bullets: ["Generates full curriculum outline", "Writes lesson scripts & notes", "Creates quiz questions automatically", "Drafts your sales page copy", "Suggests course pricing strategy"],
    demo: [
      { role: "user", text: "Create a 6-week freelancing course for designers" },
      { role: "ai", text: "✅ Generated: 6 modules, 24 lessons, 48 quiz questions, sales page with headline & 3 pricing tiers — ready to publish." },
    ]
  },
  {
    icon: Target,
    color: "#3b82f6",
    tag: "FUNNELS",
    title: "AI Funnel Builder",
    desc: "Describe your offer and audience. AI writes your landing page, upsell copy, email sequences, and designs the entire funnel flow.",
    bullets: ["Landing page copy & structure", "Upsell & downsell scripts", "Automated email sequence (7 emails)", "A/B variant suggestions", "Conversion rate benchmarks"],
    demo: [
      { role: "user", text: "Build a funnel for a $297 social media coaching program" },
      { role: "ai", text: "✅ Funnel ready: opt-in page, VSL script, 3-step checkout, 2 upsells, and a 7-email nurture sequence." },
    ]
  },
  {
    icon: FileText,
    color: "#a855f7",
    tag: "DIGITAL PRODUCTS",
    title: "AI Product Generator",
    desc: "Turn your expertise into a sellable digital product in minutes. AI generates the product outline, table of contents, description, and checkout page.",
    bullets: ["Product idea generation from your niche", "Full ebook or guide outline", "Product description & bullet points", "Checkout page copywriting", "Pricing recommendations"],
    demo: [
      { role: "user", text: "Create a Notion productivity template for solopreneurs" },
      { role: "ai", text: "✅ Template structure, product description, 5 bullet points, suggested price $47–$97, checkout page ready." },
    ]
  },
  {
    icon: Mail,
    color: "#f59e0b",
    tag: "EMAIL",
    title: "AI Email Writer",
    desc: "Write high-converting email campaigns in seconds. From welcome sequences to launch campaigns — just describe your goal and let AI handle the words.",
    bullets: ["Welcome & onboarding sequences", "Product launch email campaigns", "Re-engagement campaigns", "Abandoned cart recovery", "Subject line A/B variants"],
    demo: [
      { role: "user", text: "Write a 5-day welcome sequence for my course waitlist" },
      { role: "ai", text: "✅ 5 emails written: intro story, value bomb, social proof, objection handler, and pitch — avg. 62% open rate." },
    ]
  },
  {
    icon: MessageSquare,
    color: "#ef4444",
    tag: "CHATBOT",
    title: "AI Chatbot Builder",
    desc: "Build a sales chatbot that handles DMs, answers product questions, and closes sales 24/7 — without you lifting a finger.",
    bullets: ["Custom personality & tone", "Product-aware responses", "Handles FAQs automatically", "Escalates to you when needed", "Works on Instagram, WhatsApp & web"],
    demo: [
      { role: "user", text: "Build a chatbot that sells my $97 Notion template" },
      { role: "ai", text: "✅ Chatbot ready: greets visitors, handles 14 FAQs, captures emails, and sends checkout link automatically." },
    ]
  },
  {
    icon: Image,
    color: "#0ea5e9",
    tag: "CONTENT",
    title: "AI Caption & Content Writer",
    desc: "Generate social media captions, hooks, carousels, and content calendars for Instagram, TikTok, X, and LinkedIn — all tuned to your voice.",
    bullets: ["30-day content calendar", "Platform-specific caption styles", "Viral hook generator", "Hashtag strategy", "Repurpose long-form → short-form"],
    demo: [
      { role: "user", text: "Write 10 Instagram captions promoting my course" },
      { role: "ai", text: "✅ 10 captions with hooks, CTAs, and emojis — mix of story, value, and promotional formats." },
    ]
  },
];

const miniTools = [
  { icon: BarChart2, title: "AI Analytics Insights", desc: "Plain-English summaries of your revenue & engagement data." },
  { icon: Zap, title: "AI Automation Builder", desc: "Describe a workflow in plain English — AI builds it for you." },
  { icon: Sparkles, title: "AI Headline Tester", desc: "Score and improve any headline for clarity and click-through." },
  { icon: Bot, title: "AI Niche Finder", desc: "Enter your skills and AI suggests profitable creator niches." },
];

// AI ticker data — live AI outputs (different from CreatorEarnings)
const tickerItems = [
  "🤖 Course generated for @priya.teaches — 6 modules in 4 min",
  "⚡ Funnel built for @lukecreates — 3 pages, 62% opt-in rate",
  "✉️ 7-email sequence written for @sarah.sells — ready to launch",
  "🛒 Product checkout page drafted for @notionpro — $79 price set",
  "💬 Chatbot live for @alexfit — 340 DMs handled today",
  "📱 30-day content plan generated for @markscales — Instagram & TikTok",
  "📊 Analytics report for @devkim — $8.2k earned this month",
  "🎓 Quiz set of 48 questions created for @tomteaches — published",
  "🤖 Course generated for @priya.teaches — 6 modules in 4 min",
  "⚡ Funnel built for @lukecreates — 3 pages, 62% opt-in rate",
  "✉️ 7-email sequence written for @sarah.sells — ready to launch",
  "🛒 Product checkout page drafted for @notionpro — $79 price set",
  "💬 Chatbot live for @alexfit — 340 DMs handled today",
  "📱 30-day content plan generated for @markscales — Instagram & TikTok",
  "📊 Analytics report for @devkim — $8.2k earned this month",
  "🎓 Quiz set of 48 questions created for @tomteaches — published",
];

const containerVars = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};
const itemVars = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function AITools() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white w-full overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero with decorative glows */}
      <section className="relative pt-16 pb-16 px-6 text-center max-w-4xl mx-auto overflow-hidden">
        {/* Glow orbs */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#22c55e]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 left-10 text-[#22c55e] opacity-40 animate-pulse text-2xl select-none">✦</div>
        <div className="absolute top-20 right-16 text-[#eab308] opacity-30 animate-pulse text-xl select-none">✦</div>
        <div className="absolute bottom-10 left-24 text-gray-500 opacity-20 text-3xl select-none">✧</div>

        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="relative z-10"
        >
          <motion.div variants={itemVars} className="inline-flex items-center gap-2 border border-[#22c55e]/30 bg-[#22c55e]/5 px-4 py-1.5 rounded-full mb-6">
            <Sparkles size={13} className="text-[#22c55e]" />
            <span className="text-xs text-[#22c55e] font-semibold uppercase tracking-widest">AI-Powered Tools</span>
          </motion.div>

          <motion.h1 variants={itemVars} className="text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
            Your AI creative team,<br />
            <span className="text-[#22c55e]">always on.</span>
          </motion.h1>

          <motion.p variants={itemVars} className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Six specialized AI tools that write, build, and sell for you — so you can focus on creating, not copy-pasting.
          </motion.p>

          <motion.div variants={itemVars} className="flex flex-wrap gap-4 justify-center">
            <Link href="/pricing">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                className="bg-[#22c55e] text-black font-bold px-8 py-3.5 rounded-full text-base shadow-[0_0_24px_rgba(34,197,94,0.3)] hover:bg-[#16a34a] transition-colors flex items-center gap-2">
                Try AI Free <ArrowRight size={16} />
              </motion.button>
            </Link>
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              className="bg-white/10 text-white font-bold px-8 py-3.5 rounded-full text-base border border-white/10 hover:bg-white/20 transition-colors flex items-center gap-2">
              <Play size={14} /> Watch Demo
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Live AI output ticker — unique to this page */}
      <div className="w-full border-y border-white/5 bg-[#0a0a0a] py-3 overflow-hidden mb-16">
        <div className="flex animate-ticker" style={{ width: "max-content" }}>
          {tickerItems.map((item, i) => (
            <span key={i} className="text-xs text-gray-400 font-medium whitespace-nowrap px-8 border-r border-white/10 last:border-r-0">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Tool cards */}
      <section className="px-6 max-w-7xl mx-auto space-y-24 pb-12">
        {tools.map((tool, i) => {
          const Icon = tool.icon;
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: tool.color + "20" }}>
                    <Icon size={20} style={{ color: tool.color }} />
                  </div>
                  <span className="text-xs font-bold tracking-widest" style={{ color: tool.color }}>{tool.tag}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">{tool.title}</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">{tool.desc}</p>
                <ul className="space-y-3 mb-8">
                  {tool.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: tool.color + "20" }}>
                        <Check size={11} style={{ color: tool.color }} />
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 font-bold px-6 py-2.5 rounded-full text-sm text-black transition-colors"
                  style={{ background: tool.color }}
                >
                  Try {tool.title.split(" ").slice(-1)[0]} Free <ArrowRight size={13} />
                </motion.button>
              </div>

              <div className="flex-1 w-full">
                <div className="rounded-2xl border border-white/10 bg-[#141414] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#0E0E0E]">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    <div className="ml-3 flex items-center gap-2">
                      <div className="w-4 h-4 rounded flex items-center justify-center" style={{ background: tool.color + "30" }}>
                        <Icon size={10} style={{ color: tool.color }} />
                      </div>
                      <span className="text-xs text-gray-500">{tool.title} · EarnStack AI</span>
                    </div>
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#22c55e]/20 flex items-center justify-center shrink-0">
                        <Icon size={12} style={{ color: tool.color }} />
                      </div>
                      <div className="flex-1 bg-white/5 rounded-xl p-3 text-xs text-gray-300 leading-relaxed">
                        Hi! I'm your {tool.title.replace("AI ", "")}. Tell me what you want to build and I'll handle the rest.
                      </div>
                    </div>
                    {tool.demo.map((msg, mi) => (
                      <motion.div
                        key={mi}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + mi * 0.15 }}
                        className={`flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                      >
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold ${
                          msg.role === "user" ? "bg-white/10 text-white" : "text-black"
                        }`} style={msg.role === "ai" ? { background: tool.color } : {}}>
                          {msg.role === "user" ? "U" : "AI"}
                        </div>
                        <div className={`flex-1 rounded-xl p-3 text-xs leading-relaxed ${
                          msg.role === "user" ? "bg-white/10 text-white text-right" : "text-gray-200 border border-white/10"
                        }`} style={msg.role === "ai" ? { background: tool.color + "10" } : {}}>
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}
                    <div className="flex gap-2 mt-2">
                      <input readOnly placeholder="Type your request..."
                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-gray-500 focus:outline-none" />
                      <button className="px-3 py-2 rounded-xl text-black text-xs font-bold" style={{ background: tool.color }}>
                        <Zap size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Mini tools */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Plus 4 more AI utilities</h2>
          <p className="text-gray-400">Small tools, big impact.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {miniTools.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-[#141414] p-6 hover:border-[#22c55e]/30 transition-colors group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-[#22c55e]/10 flex items-center justify-center mb-4 group-hover:bg-[#22c55e]/20 transition-colors">
                  <Icon size={18} className="text-[#22c55e]" />
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{t.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#22c55e]/5 pointer-events-none" />
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="relative z-10">
          <Bot size={36} className="text-[#22c55e] mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Let AI do the heavy lifting</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">Start free — all AI tools included on every plan.</p>
          <Link href="/pricing">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="bg-[#22c55e] text-black font-bold px-10 py-4 rounded-full text-lg shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:bg-[#16a34a] transition-colors">
              Start Using AI Free →
            </motion.button>
          </Link>
          <p className="text-gray-600 text-sm mt-4">No credit card · Cancel anytime</p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
