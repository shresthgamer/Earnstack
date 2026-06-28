import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, BookOpen, Target, Star } from "lucide-react";

const row1 = [
  { stat: "3.2x", label: "Revenue increase", creator: "Marcus Wright", role: "Coach", Icon: TrendingUp },
  { stat: "4,800", label: "Students enrolled", creator: "Priya Patel", role: "Educator", Icon: BookOpen },
  { stat: "$47k", label: "Course launch revenue", creator: "James Carter", role: "YouTuber", Icon: DollarSign },
  { stat: "2.1k", label: "Community members", creator: "Lisa Park", role: "Designer", Icon: Users },
  { stat: "+380%", label: "Email open rate boost", creator: "Tom Bradley", role: "Freelancer", Icon: TrendingUp },
  { stat: "4.9★", label: "Customer satisfaction", creator: "Amy Rodriguez", role: "Agency Owner", Icon: Star },
];

const row2 = [
  { stat: "$29k", label: "Membership revenue", creator: "Alex Torres", role: "Fitness Coach", Icon: DollarSign },
  { stat: "$8,200", label: "Passive income/month", creator: "David Kim", role: "Developer", Icon: DollarSign },
  { stat: "890", label: "Funnel conversions", creator: "Maria Santos", role: "Marketer", Icon: Target },
  { stat: "$55k", label: "Product launch total", creator: "Robert Nash", role: "Consultant", Icon: DollarSign },
  { stat: "1,400", label: "Members in community", creator: "Beth Wilson", role: "Nutritionist", Icon: Users },
  { stat: "+210%", label: "Revenue in 90 days", creator: "Joel Johnson", role: "Podcaster", Icon: TrendingUp },
];

function GreenCard({ stat, label, creator, role, Icon }: typeof row1[0]) {
  return (
    <div
      className="flex-shrink-0 w-52 rounded-2xl p-5 flex flex-col justify-between mx-2"
      style={{
        background: "linear-gradient(145deg, #166534 0%, #14532d 60%, #0f3320 100%)",
        border: "1px solid rgba(34,197,94,0.18)",
        minHeight: 165,
      }}
    >
      <div>
        <p className="text-3xl font-display font-bold text-white leading-none mb-1">{stat}</p>
        <p className="text-sm text-green-200/75">{label}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <div className="w-6 h-6 rounded-full bg-[#22c55e]/20 flex items-center justify-center shrink-0">
          <Icon size={11} className="text-[#4ade80]" />
        </div>
        <span className="text-xs text-green-100/65 leading-tight">{creator} — {role}</span>
      </div>
    </div>
  );
}

function AmberCard({ stat, label, creator, role, Icon }: typeof row2[0]) {
  return (
    <div
      className="flex-shrink-0 w-52 rounded-2xl p-5 flex flex-col justify-between mx-2"
      style={{
        background: "linear-gradient(145deg, #b45309 0%, #92400e 60%, #78350f 100%)",
        border: "1px solid rgba(234,179,8,0.18)",
        minHeight: 165,
      }}
    >
      <div>
        <p className="text-3xl font-display font-bold text-white leading-none mb-1">{stat}</p>
        <p className="text-sm text-amber-200/75">{label}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <div className="w-6 h-6 rounded-full bg-[#f59e0b]/20 flex items-center justify-center shrink-0">
          <Icon size={11} className="text-[#fbbf24]" />
        </div>
        <span className="text-xs text-amber-100/65 leading-tight">{creator} — {role}</span>
      </div>
    </div>
  );
}

// 4 copies → seamless, no visible seam even on wide screens
const copies1 = [...row1, ...row1, ...row1, ...row1];
const copies2 = [...row2, ...row2, ...row2, ...row2];

export default function CreatorEarnings() {
  return (
    <section className="w-full py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12 px-6"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
          Creators around the world<br />are earning more
        </h2>
        <p className="text-gray-400 text-base">Real results from real creators using EarnStack</p>
      </motion.div>

      <div className="flex flex-col gap-4">
        {/* Row 1 — scrolls left at 35s */}
        <div className="overflow-hidden w-full">
          <div
            className="flex"
            style={{
              width: "max-content",
              animation: "marquee-left 35s linear infinite",
            }}
          >
            {copies1.map((card, i) => <GreenCard key={i} {...card} />)}
          </div>
        </div>

        {/* Row 2 — scrolls right at 45s */}
        <div className="overflow-hidden w-full">
          <div
            className="flex"
            style={{
              width: "max-content",
              animation: "marquee-right 45s linear infinite",
            }}
          >
            {copies2.map((card, i) => <AmberCard key={i} {...card} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
