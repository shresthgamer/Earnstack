import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, ArrowLeft, Tag, ArrowRight } from "lucide-react";

const posts = [
  {
    id: "1",
    category: "Case Studies",
    title: "How Sarah Made $42k in 30 Days Selling a $97 Notion Template",
    excerpt: "Sarah went from zero to $42k in a single month by launching one Notion template. Here's the exact strategy she used — and how you can replicate it.",
    author: "EarnStack Team",
    readTime: "8 min read",
    date: "Jun 18, 2026",
    color: "#22c55e",
    tag: "Case Study",
    body: [
      "Sarah Nguyen had been creating Notion templates as a hobby for two years — sharing free ones on Reddit and Twitter, getting good feedback, but never charging a dime.",
      "In March 2026, she decided to list her most popular template — a life OS and productivity dashboard — on EarnStack for $97. She wasn't expecting much. She'd tried Gumroad before and made maybe $400 in three months.",
      "What happened next surprised even her: $42,000 in 30 days.",
      "**The strategy:** Sarah didn't change the product. She changed the positioning. Instead of calling it a 'Notion template,' she reframed it as a 'Complete Life Operating System for High Performers.' The price stayed $97. The audience was the same. But the perceived value was completely different.",
      "**Distribution:** She ran a 5-day launch sequence using EarnStack's AI Email Writer. The emails went to a 3,200-person list she'd built over two years of free content. Open rates hit 61%. Click rates hit 22%.",
      "**Upsell:** At checkout, EarnStack automatically offered a $49 'Notion Mastery Workshop' recording. 34% of buyers added it — adding another $14k to the total.",
      "**Key takeaways:** Positioning matters more than the product. A 5-email launch sequence can outperform months of passive promotion. Upsells at checkout are the highest-ROI sales lever most creators ignore.",
      "Sarah is now building her second product — a $197 course — using EarnStack's AI Course Generator.",
    ],
  },
  {
    id: "2",
    category: "AI & Tools",
    title: "How to Build a Full Online Course with AI in Under 2 Hours",
    excerpt: "Our AI Course Generator can create a full curriculum, lesson scripts, and sales page before you drink your morning coffee.",
    author: "Priya Mehta",
    readTime: "6 min read",
    date: "Jun 22, 2026",
    color: "#3b82f6",
    tag: "AI Guide",
    body: [
      "Building an online course used to take months. You'd spend weeks planning a curriculum, more weeks scripting lessons, and then somehow squeeze in recording, editing, and writing a sales page.",
      "With EarnStack's AI Course Generator, that timeline collapses to under two hours.",
      "**Step 1 — Describe your topic (2 min).** Type a sentence or two about what you want to teach and who it's for. Example: 'A 6-week freelancing course for designers who want to land their first $5k client.'",
      "**Step 2 — Review the curriculum (10 min).** The AI generates a full module breakdown — 6 modules, 4 lessons each, quiz questions, and learning objectives. You can edit, reorder, or regenerate any section.",
      "**Step 3 — Generate lesson scripts (30 min).** Click 'Generate Scripts' and the AI writes a full teaching script for every lesson — including examples, transitions, and key takeaways. You just record yourself reading (and improvising) from the script.",
      "**Step 4 — Sales page (5 min).** The AI writes your full sales page — headline, bullet points, pricing section, FAQs, and a guarantee statement — all based on your course content.",
      "**Step 5 — Publish.** Upload your recordings (or use EarnStack's screen recorder), set your price, and publish. Your course is live.",
      "The average creator using this workflow publishes their first course in 90 minutes of active work time. The AI handles the structure. You bring the expertise.",
    ],
  },
  {
    id: "3",
    category: "Marketing",
    title: "The 5-Email Launch Sequence That Generated $80k in 7 Days",
    excerpt: "One creator used this exact 5-email sequence to launch a $297 course to a list of 3,000 subscribers — and cleared $80k in one week.",
    author: "Marcus J.",
    readTime: "10 min read",
    date: "Jun 20, 2026",
    color: "#f59e0b",
    tag: "Email Marketing",
    body: [
      "When Marcus launched his $297 social media coaching course, he had 3,000 email subscribers and a simple 5-email sequence. The result: $80,400 in 7 days.",
      "Here's the exact sequence.",
      "**Email 1 — The Story Email (Day 1):** Don't pitch. Tell a story. Marcus shared how he went from posting for free to charging $10k/month for consulting. Subject line: 'The moment everything changed for me.' Open rate: 68%.",
      "**Email 2 — The Value Email (Day 2):** Give your best tip for free. Marcus sent a detailed breakdown of the exact content calendar format he uses. Subject line: 'My actual content calendar (steal this).' Open rate: 54%.",
      "**Email 3 — The Social Proof Email (Day 3):** Share 3 student stories with specific numbers. '$4,200 in the first week.' '23 brand deals in 6 months.' '0 to 14k followers in 90 days.' Subject line: 'What happened when they tried this.'",
      "**Email 4 — The Launch Email (Day 5):** The direct pitch. Clear offer, clear price, clear deadline. 'The course is open. Here's what's inside. Here's what it costs. Closes Friday.' Subject line: 'It's open (closes in 72 hours).'",
      "**Email 5 — The Final Call (Day 7):** Send this 4 hours before close. 'Last chance' is not enough — remind them what they'll miss. Subject line: 'Closing tonight at midnight.' Open rate: 71% — highest of the sequence.",
      "Marcus used EarnStack's AI Email Writer to draft all 5 emails from a 3-sentence brief. The sequence took 25 minutes to create.",
    ],
  },
  {
    id: "4",
    category: "Creator Tips",
    title: "The $0 to $10k Creator Roadmap: A Step-by-Step Playbook",
    excerpt: "If you're starting from scratch, this roadmap will show you exactly which products to build first, which audience to target, and how to make your first $10k.",
    author: "EarnStack Team",
    readTime: "15 min read",
    date: "Jun 16, 2026",
    color: "#a855f7",
    tag: "Beginner Guide",
    body: [
      "Most creators overcomplicate their first $10k. They try to build courses, start podcasts, launch memberships, and grow on three platforms simultaneously — before they've made their first dollar.",
      "The $0 to $10k path is simpler than you think. Here's the exact sequence.",
      "**Week 1–2: Pick one skill, one audience, one platform.** Don't spread thin. Choose the skill you're most confident teaching, the audience you understand best, and the one platform where they already hang out.",
      "**Week 3–4: Create your first free lead magnet.** A useful checklist, template, or short guide — something you can create in a weekend. This builds your email list, which is your most valuable asset.",
      "**Week 5–8: Launch your first paid product at $27–$47.** This should be a simple digital product — a template, a swipe file, a Notion system, a mini course. Use EarnStack's AI Product Generator to create the outline, description, and checkout page in under an hour.",
      "**Week 9–12: Email your list weekly with value.** Every email ends with a soft mention of your paid product. By week 12, you should have 200–500 subscribers and be making consistent sales.",
      "**Month 4–5: Launch a $97–$197 course.** You now have audience feedback, testimonials, and a validated topic. Use EarnStack's AI Course Generator to build it in a weekend.",
      "**Month 6: Launch your paid community at $29–$49/mo.** Recurring revenue is the goal. Your community can generate $3k–$10k MRR within 90 days if you've built genuine relationships.",
      "Most creators hit $10k total revenue between months 3 and 6. Focus, consistency, and the right tools are the only variables you can control.",
    ],
  },
  {
    id: "5",
    category: "Product Launches",
    title: "How to Price Your Digital Products (Without Leaving Money on the Table)",
    excerpt: "Most creators underprice by 3–5x. Here's the psychological framework top creators use to price their products with confidence — and charge more.",
    author: "Aisha B.",
    readTime: "7 min read",
    date: "Jun 14, 2026",
    color: "#ef4444",
    tag: "Pricing",
    body: [
      "The most common mistake new creators make isn't a bad product. It's a bad price.",
      "Most creators underprice by 3x to 5x. A course that should sell for $197 gets listed at $37. A template that solves a $500 problem gets priced at $9. Why? Fear. Imposter syndrome. The belief that 'nobody will pay that much for my stuff.'",
      "Here's the framework top creators use to price with confidence.",
      "**Step 1: Price the outcome, not the hours.** Your $97 course doesn't represent 40 hours of work. It represents the outcome — a new skill, a new client, a saved week of time. What is that outcome worth to your buyer?",
      "**Step 2: Use the 10x rule.** If your product delivers $1,000 in value, pricing at $97–$197 feels like a steal. Price = 1/10th the value delivered. Work backwards from outcome.",
      "**Step 3: Test high first.** It's easier to lower a price than raise one. List at $147. See conversion rates. If they're strong, you priced correctly. If they're weak, test $97.",
      "**Step 4: Add an upsell.** The product isn't the ceiling — the relationship is. A $47 template with a $97 'template + workshop' upsell increases revenue per customer by 40–60%.",
      "**Step 5: Stop comparing to competitors.** If your competitor charges $29, that's their problem. Compete on transformation, not on who can charge least.",
      "One EarnStack creator repriced her Notion template from $19 to $79 after reading this framework. Her conversion rate dropped 8%. Her revenue increased 290%.",
    ],
  },
  {
    id: "6",
    category: "AI & Tools",
    title: "10 Ways to Use EarnStack's AI to Save 10+ Hours a Week",
    excerpt: "From generating product ideas to writing email sequences, here are 10 specific workflows where AI does the heavy lifting.",
    author: "Dev Chen",
    readTime: "9 min read",
    date: "Jun 10, 2026",
    color: "#22c55e",
    tag: "Productivity",
    body: [
      "The average EarnStack creator saves 11.4 hours per week using AI tools. Here are 10 specific workflows where AI does the work.",
      "**1. Product idea generation (10 min → 2 min).** Describe your niche. AI generates 20 product ideas ranked by revenue potential. Stop staring at a blank screen.",
      "**2. Course curriculum (3 hours → 15 min).** Describe your course topic. AI generates a complete module and lesson structure. Edit rather than create from scratch.",
      "**3. Email sequences (2 hours → 20 min).** Tell the AI your goal (launch, nurture, onboarding) and your audience. It writes all 5–7 emails. You review and approve.",
      "**4. Sales page copy (3 hours → 25 min).** Input your product details. AI writes headline, subheadline, bullet points, FAQ, and guarantee. Professional copy in minutes.",
      "**5. Social media captions (1 hour → 8 min).** Input your content idea. AI generates 10 platform-specific captions for Instagram, LinkedIn, TikTok, and X.",
      "**6. Chatbot scripts (4 hours → 30 min).** Describe your offer and FAQ. AI writes a complete chatbot script that handles objections and directs buyers to checkout.",
      "**7. Funnel copy (2 hours → 20 min).** Describe your funnel goal. AI writes opt-in page, thank you page, upsell page, and confirmation email.",
      "**8. Product descriptions (30 min → 3 min).** Input product features. AI generates compelling bullet-point descriptions optimized for conversion.",
      "**9. Blog posts (3 hours → 30 min).** Input your topic and key points. AI generates a full draft. You edit and personalize.",
      "**10. Analytics summaries (45 min → instant).** EarnStack's AI reads your dashboard data and generates a plain-English weekly summary with action recommendations.",
      "Total time saved across these 10 workflows: 15+ hours per week.",
    ],
  },
  {
    id: "7",
    category: "Creator Tips",
    title: "Build a Paid Community That Retains 80%+ of Members Month-Over-Month",
    excerpt: "Churn is the silent killer for community builders. These 7 retention tactics have helped top creators keep their communities thriving.",
    author: "Sarah K.",
    readTime: "11 min read",
    date: "Jun 8, 2026",
    color: "#0ea5e9",
    tag: "Community",
    body: [
      "Community churn is brutal. You work hard to get members in, then watch them leave month after month. The average paid community retains about 60% of members each month — meaning 40% leave.",
      "Top EarnStack community builders retain 80–90% of members. Here's how.",
      "**1. Onboard aggressively in week 1.** Most churn happens in the first 30 days. Build a 5-day onboarding email sequence that gets new members active fast. A member who posts in week 1 stays for 6+ months.",
      "**2. Schedule weekly live events.** Nothing retains members like a reason to show up. A weekly live Q&A, hot seat, or workshop creates appointment-viewing behavior.",
      "**3. Create a wins channel.** Celebrate member wins publicly. When people see others succeeding, they stay to be next. When people feel invisible, they leave.",
      "**4. Use 'at-risk' signals.** Track last login date. Any member who hasn't logged in for 14 days gets an automated personal-feeling check-in email: 'Haven't seen you around — anything I can help with?'",
      "**5. Deliver monthly surprise value.** Once a month, give something they didn't pay for — a bonus resource, a guest expert session, a template. Make them feel like they're getting 2x what they paid for.",
      "**6. Build member relationships.** Know your top 20% of members by name. Recognize them publicly. They become community champions who attract and retain others.",
      "**7. Survey your exits.** When someone cancels, ask why. One sentence: 'What would have made you stay?' Read every response. Patterns emerge within 10 cancellations.",
      "Community retention is a product problem, not a marketing problem. Fix retention before scaling acquisition.",
    ],
  },
  {
    id: "8",
    category: "Case Studies",
    title: "From 0 to $5k MRR in 90 Days: A Membership Case Study",
    excerpt: "Jake launched a $49/mo design community and reached $5k in recurring monthly revenue in just 3 months. Here's the behind-the-scenes breakdown.",
    author: "EarnStack Team",
    readTime: "12 min read",
    date: "Jun 5, 2026",
    color: "#f97316",
    tag: "Case Study",
    body: [
      "Jake Marsh had 4,800 Instagram followers and a consistent weekly newsletter with 1,400 subscribers. He was a UI/UX designer who shared design tips and breakdowns.",
      "In January 2026, he launched 'Design Lab' — a $49/month community on EarnStack. Three months later, he hit $5,100 MRR with 106 active members.",
      "**The launch strategy:** Jake soft-launched to his email list first, offering a 'Founding Member' rate of $29/month for the first 50 people. 34 signed up in 24 hours. He opened public pricing at $49/month 2 weeks later.",
      "**What members got:** Weekly live design critiques, a searchable resource vault, private Discord access, and monthly guest speakers (successful freelancers and design directors).",
      "**The content engine:** Jake spent 4 hours per week on community content — 1 hour for the live session, 2 hours for async feedback on member work, 1 hour for community management. Everything else ran on EarnStack automations.",
      "**Retention rate at 90 days:** 88%. Jake credits the live critique sessions: 'People come for the resources, but they stay for the feedback on their actual work.'",
      "**Month 4 projections:** With organic growth from member referrals (he offers a $25 affiliate commission), Jake is projected to hit $8k MRR by month 6.",
      "He's now using EarnStack's AI Course Generator to build a $197 companion course for community members — an additional revenue stream with zero extra audience.",
    ],
  },
  {
    id: "9",
    category: "Marketing",
    title: "The Content Flywheel: How to Attract Buyers Without Paid Ads",
    excerpt: "Paid ads burn money. This content flywheel strategy turns your expertise into a buyer-attracting machine — and it compounds over time.",
    author: "Priya Mehta",
    readTime: "8 min read",
    date: "Jun 1, 2026",
    color: "#22c55e",
    tag: "Organic Growth",
    body: [
      "Paid ads are a treadmill. Stop paying, stop growing. Content is a flywheel. Once it builds momentum, it keeps spinning.",
      "Here's the exact flywheel system that top EarnStack creators use to attract buyers without spending a dollar on ads.",
      "**Hub: Your email list.** Every other channel feeds this. Your email list owns the audience relationship. Social media borrows it. Build the list first.",
      "**Spoke 1 — Long-form content (1x/week).** One YouTube video, podcast episode, or long blog post. This is the foundational piece that gets indexed, shared, and found for years.",
      "**Spoke 2 — Repurposed short-form (3x/week).** Every long-form piece becomes 3 short-form posts — one for LinkedIn, one for Instagram/TikTok, one for X/Twitter. Your AI tools do this in minutes.",
      "**Spoke 3 — Weekly email (1x/week).** Your newsletter synthesizes the week's content, adds a personal insight, and includes a soft CTA to your paid product or community.",
      "**The flywheel effect:** Long-form content attracts search traffic → viewers become subscribers → subscribers become buyers → buyers share content → flywheel accelerates.",
      "**Timeline to results:** Most creators see meaningful organic traffic in months 3–6. By month 12, consistent creators have an audience that generates $5k–$30k/month without ad spend.",
      "**The key insight:** You're not making content. You're building an asset. Every piece compounds. A video from 18 months ago is still bringing subscribers today.",
      "EarnStack's AI Caption Writer handles spoke 2. You focus on spoke 1. That's the division of labor that makes this sustainable.",
    ],
  },
];

export default function BlogPost() {
  const params = useParams<{ id: string }>();
  const post = posts.find(p => p.id === params.id) || posts[0];

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white w-full overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16 pb-12 px-6 max-w-3xl mx-auto overflow-hidden">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full blur-3xl pointer-events-none"
          style={{ background: post.color + "10" }} />
        <div className="relative z-10">
          <Link href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#22c55e] transition-colors mb-8">
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: post.color + "15", color: post.color }}>
                <Tag size={9} className="inline mr-1" />{post.tag}
              </span>
              <span className="text-xs text-gray-500">{post.category}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-gray-400 mb-6">{post.excerpt}</p>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-white/5">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: post.color + "30", color: post.color }}>
                {post.author[0]}
              </div>
              <span className="text-white">{post.author}</span>
              <span>·</span>
              <Clock size={13} />
              <span>{post.readTime}</span>
              <span>·</span>
              <span>{post.date}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="px-6 max-w-3xl mx-auto pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {post.body.map((para, i) => {
            const isBold = para.startsWith("**");
            if (isBold) {
              const parts = para.split("**");
              return (
                <p key={i} className="text-gray-300 leading-relaxed text-lg">
                  <span className="font-bold text-white">{parts[1]}</span>
                  {parts[2]}
                </p>
              );
            }
            return (
              <p key={i} className="text-gray-300 leading-relaxed text-lg">{para}</p>
            );
          })}
        </motion.div>

        {/* CTA box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl p-8 text-center border"
          style={{ background: post.color + "08", borderColor: post.color + "30" }}
        >
          <p className="text-xl font-bold text-white mb-2">Ready to put this into action?</p>
          <p className="text-gray-400 text-sm mb-6">Start free on EarnStack — no credit card required.</p>
          <Link href="/pricing">
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              className="px-8 py-3.5 rounded-full font-bold text-black text-sm flex items-center gap-2 mx-auto"
              style={{ background: post.color }}>
              Get Started Free <ArrowRight size={14} />
            </motion.button>
          </Link>
        </motion.div>

        {/* More articles */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-white mb-6">More from EarnStack Blog</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {posts.filter(p => p.id !== post.id).slice(0, 2).map((related) => (
              <Link key={related.id} href={`/blog/${related.id}`}>
                <div className="rounded-xl border border-white/10 bg-[#141414] p-5 hover:border-white/20 transition-colors cursor-pointer group">
                  <span className="text-xs px-2 py-0.5 rounded-full mb-3 inline-block"
                    style={{ background: related.color + "15", color: related.color }}>
                    {related.tag}
                  </span>
                  <h4 className="text-sm font-bold text-white leading-snug group-hover:text-[#22c55e] transition-colors">
                    {related.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                    <Clock size={10} /> {related.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
