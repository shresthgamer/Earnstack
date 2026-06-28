import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Star, Download, Eye, Zap, Filter } from "lucide-react";

const categories = ["All", "Courses", "Funnels", "Digital Products", "Communities", "Email", "Link in Bio"];

const templates = [
  {
    category: "Courses",
    title: "6-Week Freelancer Bootcamp",
    desc: "Full course template with 6 modules, quizzes, and a sales page optimized for freelancers.",
    rating: 4.9, reviews: 312, downloads: "2.1k",
    tags: ["Freelancing", "Business"], color: "#22c55e", price: "Free",
    preview: ["Module 1: Finding Clients", "Module 2: Pricing Your Services", "Module 3: Contracts & Proposals", "Module 4: Client Onboarding", "+ 2 more modules"],
  },
  {
    category: "Funnels",
    title: "High-Ticket Coaching Funnel",
    desc: "3-step funnel: Lead magnet → Webinar page → High-ticket offer. Proven to convert at 8–12%.",
    rating: 4.8, reviews: 198, downloads: "1.4k",
    tags: ["Coaching", "High-Ticket"], color: "#3b82f6", price: "Free",
    preview: ["Landing page (lead magnet)", "Webinar registration page", "Sales / offer page", "Thank you + upsell page"],
  },
  {
    category: "Digital Products",
    title: "Notion Business OS Template",
    desc: "Complete business operating system in Notion — projects, clients, finances, goals, and habit tracker.",
    rating: 5.0, reviews: 521, downloads: "4.8k",
    tags: ["Notion", "Productivity"], color: "#a855f7", price: "Free",
    preview: ["Project tracker", "Client CRM", "Finance dashboard", "Goal & habit tracker", "Content calendar"],
  },
  {
    category: "Email",
    title: "5-Day Welcome Email Sequence",
    desc: "Onboard new subscribers and sell your product in 5 emails. Avg. open rate: 62%.",
    rating: 4.7, reviews: 144, downloads: "980",
    tags: ["Email", "Automation"], color: "#f59e0b", price: "Free",
    preview: ["Day 1: Welcome + story", "Day 2: Your biggest win", "Day 3: Social proof", "Day 4: Address objections", "Day 5: The pitch"],
  },
  {
    category: "Communities",
    title: "Paid Community Launch Kit",
    desc: "Everything you need to launch a paid community: onboarding flow, welcome posts, and engagement playbook.",
    rating: 4.9, reviews: 87, downloads: "620",
    tags: ["Community", "Launch"], color: "#ef4444", price: "Free",
    preview: ["Onboarding checklist", "Welcome post templates", "Weekly engagement prompts", "Rules & guidelines", "Pricing strategy guide"],
  },
  {
    category: "Funnels",
    title: "Digital Product Launch Funnel",
    desc: "Viral launch funnel with countdown timer, scarcity tactics, and a bonus stack page.",
    rating: 4.8, reviews: 233, downloads: "1.9k",
    tags: ["Launch", "Scarcity"], color: "#22c55e", price: "Free",
    preview: ["Pre-launch waitlist page", "Launch day sales page", "Countdown timer component", "Bonus stack page", "Cart close email"],
  },
  {
    category: "Link in Bio",
    title: "Creator Link in Bio — Dark",
    desc: "Sleek dark-themed link in bio page to showcase all your products, social links, and latest content.",
    rating: 4.9, reviews: 405, downloads: "3.2k",
    tags: ["Branding", "Social"], color: "#0ea5e9", price: "Free",
    preview: ["Profile header", "Product links grid", "Social media links", "Latest YouTube video", "Newsletter signup"],
  },
  {
    category: "Courses",
    title: "Social Media Mastery Course",
    desc: "8-module course template for teaching social media growth — ready to fill in and publish.",
    rating: 4.6, reviews: 176, downloads: "1.1k",
    tags: ["Social Media", "Growth"], color: "#f97316", price: "Free",
    preview: ["Module 1: Platform selection", "Module 2: Content strategy", "Module 3: Viral hooks", "Module 4: Monetization", "+ 4 more modules"],
  },
  {
    category: "Email",
    title: "Product Launch Email Campaign",
    desc: "7-email launch sequence with pre-launch hype, cart open, and last-chance urgency emails.",
    rating: 4.8, reviews: 219, downloads: "1.6k",
    tags: ["Launch", "Revenue"], color: "#22c55e", price: "Pro",
    preview: ["Pre-launch teaser (×2)", "Cart open announcement", "Day 2: Benefits deep-dive", "Day 3: FAQ / objections", "Last chance (×2)"],
  },
];

export default function Templates() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = templates.filter(t => {
    const matchCat = activeCategory === "All" || t.category === activeCategory;
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.desc.toLowerCase().includes(search.toLowerCase()) ||
      t.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white w-full overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-20 pb-10 px-6 text-center max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-xs text-[#22c55e] uppercase tracking-widest font-semibold border border-[#22c55e]/30 px-3 py-1 rounded-full inline-block mb-6">
            Template Library
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-4">
            Launch faster with<br />
            <span className="text-[#22c55e]">proven templates</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            {templates.length}+ free templates for courses, funnels, products, and more — built by top creators.
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search templates..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#22c55e]/50 transition-colors"
            />
          </div>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="px-6 max-w-7xl mx-auto mb-10">
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <Filter size={14} className="text-gray-500 mr-1" />
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-[#22c55e] text-black"
                  : "bg-white/5 text-gray-400 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 max-w-7xl mx-auto pb-24">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-500">No templates match your search.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
                className="rounded-2xl border border-white/10 bg-[#141414] overflow-hidden hover:border-white/20 transition-all group flex flex-col"
              >
                {/* Preview area */}
                <div className="p-5 border-b border-white/8" style={{ background: t.color + "0a" }}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: t.color + "20", color: t.color }}>
                      {t.category}
                    </span>
                    {t.price === "Pro" ? (
                      <span className="text-xs bg-[#eab308]/20 text-[#eab308] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Zap size={10} /> Pro
                      </span>
                    ) : (
                      <span className="text-xs bg-[#22c55e]/10 text-[#22c55e] font-bold px-2.5 py-1 rounded-full">Free</span>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    {t.preview.map((item, pi) => (
                      <div key={pi} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full shrink-0" style={{ background: t.color }} />
                        <span className="text-xs text-gray-400">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-white mb-2">{t.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1">{t.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {t.tags.map(tag => (
                      <span key={tag} className="text-xs bg-white/5 text-gray-400 px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Star size={11} className="text-[#eab308]" fill="#eab308" />
                      <span className="text-white font-medium">{t.rating}</span>
                      <span>({t.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download size={11} />
                      <span>{t.downloads} uses</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                      className="flex-1 py-2 rounded-xl bg-[#22c55e] text-black font-bold text-sm flex items-center justify-center gap-1.5">
                      <Download size={13} /> Use Template
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                      className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors">
                      <Eye size={14} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
