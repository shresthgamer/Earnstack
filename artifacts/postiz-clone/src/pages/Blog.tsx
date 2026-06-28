import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Clock, ArrowRight, Tag } from "lucide-react";

const categories = ["All", "Creator Tips", "AI & Tools", "Marketing", "Product Launches", "Case Studies"];

const posts = [
  {
    category: "Case Studies",
    title: "How Sarah Made $42k in 30 Days Selling a $97 Notion Template",
    excerpt: "Sarah went from zero to $42k in a single month by launching one Notion template. Here's the exact strategy she used — and how you can replicate it.",
    author: "EarnStack Team",
    readTime: "8 min read",
    date: "Jun 18, 2026",
    featured: true,
    color: "#22c55e",
    tag: "Case Study",
  },
  {
    category: "AI & Tools",
    title: "How to Build a Full Online Course with AI in Under 2 Hours",
    excerpt: "Our AI Course Generator can create a full curriculum, lesson scripts, and sales page before you drink your morning coffee.",
    author: "Priya Mehta",
    readTime: "6 min read",
    date: "Jun 22, 2026",
    featured: false,
    color: "#3b82f6",
    tag: "AI Guide",
  },
  {
    category: "Marketing",
    title: "The 5-Email Launch Sequence That Generated $80k in 7 Days",
    excerpt: "One creator used this exact 5-email sequence to launch a $297 course to a list of 3,000 subscribers — and cleared $80k in one week.",
    author: "Marcus J.",
    readTime: "10 min read",
    date: "Jun 20, 2026",
    featured: false,
    color: "#f59e0b",
    tag: "Email Marketing",
  },
  {
    category: "Creator Tips",
    title: "The $0 to $10k Creator Roadmap: A Step-by-Step Playbook",
    excerpt: "If you're starting from scratch, this roadmap will show you exactly which products to build first, which audience to target, and how to make your first $10k.",
    author: "EarnStack Team",
    readTime: "15 min read",
    date: "Jun 16, 2026",
    featured: false,
    color: "#a855f7",
    tag: "Beginner Guide",
  },
  {
    category: "Product Launches",
    title: "How to Price Your Digital Products (Without Leaving Money on the Table)",
    excerpt: "Most creators underprice by 3–5x. Here's the psychological framework top creators use to price their products with confidence — and charge more.",
    author: "Aisha B.",
    readTime: "7 min read",
    date: "Jun 14, 2026",
    featured: false,
    color: "#ef4444",
    tag: "Pricing",
  },
  {
    category: "AI & Tools",
    title: "10 Ways to Use EarnStack's AI to Save 10+ Hours a Week",
    excerpt: "From generating product ideas to writing email sequences, here are 10 specific workflows where AI does the heavy lifting.",
    author: "Dev Chen",
    readTime: "9 min read",
    date: "Jun 10, 2026",
    featured: false,
    color: "#22c55e",
    tag: "Productivity",
  },
  {
    category: "Creator Tips",
    title: "Build a Paid Community That Retains 80%+ of Members Month-Over-Month",
    excerpt: "Churn is the silent killer for community builders. These 7 retention tactics have helped top creators keep their communities thriving.",
    author: "Sarah K.",
    readTime: "11 min read",
    date: "Jun 8, 2026",
    featured: false,
    color: "#0ea5e9",
    tag: "Community",
  },
  {
    category: "Case Studies",
    title: "From 0 to $5k MRR in 90 Days: A Membership Case Study",
    excerpt: "Jake launched a $49/mo design community and reached $5k in recurring monthly revenue in just 3 months. Here's the behind-the-scenes breakdown.",
    author: "EarnStack Team",
    readTime: "12 min read",
    date: "Jun 5, 2026",
    featured: false,
    color: "#f97316",
    tag: "Case Study",
  },
  {
    category: "Marketing",
    title: "The Content Flywheel: How to Attract Buyers Without Paid Ads",
    excerpt: "Paid ads burn money. This content flywheel strategy turns your expertise into a buyer-attracting machine — and it compounds over time.",
    author: "Priya Mehta",
    readTime: "8 min read",
    date: "Jun 1, 2026",
    featured: false,
    color: "#22c55e",
    tag: "Organic Growth",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const featured = posts.find(p => p.featured);
  const rest = posts.filter(p => !p.featured).filter(p => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white w-full overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero with decorative glows */}
      <section className="relative pt-20 pb-8 px-6 text-center max-w-3xl mx-auto overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[580px] h-[240px] bg-[#22c55e]/7 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-8 right-6 text-[#22c55e] opacity-40 animate-pulse text-2xl select-none">✦</div>
        <div className="absolute top-24 left-6 text-[#eab308] opacity-25 animate-pulse text-xl select-none">✦</div>
        <div className="absolute bottom-2 right-16 text-gray-500 opacity-20 text-3xl select-none">✧</div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="relative z-10"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="text-xs text-[#22c55e] uppercase tracking-widest font-semibold border border-[#22c55e]/30 px-3 py-1 rounded-full inline-block mb-6"
          >
            EarnStack Blog
          </motion.span>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-4"
          >
            Grow your creator<br />
            <span className="text-[#22c55e]">income, faster</span>
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="text-xl text-gray-400 mb-8"
          >
            Actionable guides, case studies, and strategies from creators who've done it.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="relative max-w-md mx-auto"
          >
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#22c55e]/50 transition-colors"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Post */}
      {featured && activeCategory === "All" && search === "" && (
        <section className="px-6 max-w-7xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-[#22c55e]/30 bg-gradient-to-br from-[#0f2a0f] to-[#141414] p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#22c55e]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs bg-[#22c55e] text-black font-bold px-3 py-1 rounded-full">Featured</span>
                <span className="text-xs bg-white/10 text-gray-400 px-3 py-1 rounded-full">{featured.tag}</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
                {featured.title}
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="w-7 h-7 rounded-full bg-[#22c55e]/30 flex items-center justify-center text-xs font-bold text-[#22c55e]">
                  {featured.author[0]}
                </div>
                <span>{featured.author}</span>
                <span>·</span>
                <Clock size={13} />
                <span>{featured.readTime}</span>
                <span>·</span>
                <span>{featured.date}</span>
              </div>
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 bg-[#22c55e] text-black font-bold px-6 py-3 rounded-full text-sm hover:bg-[#16a34a] transition-colors">
                Read Full Story <ArrowRight size={14} />
              </motion.button>
            </div>
          </motion.div>
        </section>
      )}

      {/* Category filters */}
      <section className="px-6 max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-2 flex-wrap">
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

      {/* Post Grid */}
      <section className="px-6 max-w-7xl mx-auto pb-24">
        {rest.length === 0 ? (
          <div className="text-center py-20 text-gray-500">No articles match your search.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.07 }}
                className="group rounded-2xl border border-white/10 bg-[#141414] overflow-hidden hover:border-white/20 transition-all flex flex-col cursor-pointer"
              >
                {/* Color bar */}
                <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${post.color}, ${post.color}80)` }} />

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: post.color + "15", color: post.color }}>
                      <Tag size={9} className="inline mr-1" />{post.tag}
                    </span>
                  </div>

                  <h3 className="font-bold text-white text-base leading-snug mb-3 group-hover:text-[#22c55e] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-5 flex-1">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: post.color + "30", color: post.color }}>
                        {post.author[0]}
                      </div>
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Clock size={11} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-4">
                  <div className="flex items-center justify-between text-xs text-gray-600 border-t border-white/5 pt-3">
                    <span>{post.date}</span>
                    <span className="text-[#22c55e] group-hover:gap-2 flex items-center gap-1 transition-all font-medium">
                      Read more <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 max-w-2xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-3xl border border-[#22c55e]/20 bg-[#0f2a0f]/50 p-10">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">Get creator tips weekly</h2>
          <p className="text-gray-400 mb-6 text-sm">Join 24,000 creators getting actionable income strategies every Tuesday.</p>
          <div className="flex gap-3 flex-wrap justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-full py-3 px-5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#22c55e]/50 transition-colors"
            />
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              className="bg-[#22c55e] text-black font-bold px-6 py-3 rounded-full text-sm hover:bg-[#16a34a] transition-colors shrink-0">
              Subscribe Free →
            </motion.button>
          </div>
          <p className="text-gray-600 text-xs mt-4">No spam. Unsubscribe anytime.</p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
