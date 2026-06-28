import { DollarSign, TrendingUp, Users, BookOpen, Zap, Star } from "lucide-react";

const row1 = [
  { metric: "$12k", label: "Earned in first month", icon: DollarSign, name: "Sarah Chen — Course Creator" },
  { metric: "3.2x", label: "Revenue increase", icon: TrendingUp, name: "Marcus Wright — Coach" },
  { metric: "4,800", label: "Students enrolled", icon: BookOpen, name: "Priya Patel — Educator" },
  { metric: "$47k", label: "Course launch revenue", icon: DollarSign, name: "James Carter — YouTuber" },
  { metric: "2.1k", label: "Community members", icon: Users, name: "Lisa Park — Designer" },
  { metric: "+380%", label: "Email open rate boost", icon: Zap, name: "Tom Bradley — Freelancer" },
  { metric: "4.9★", label: "Customer satisfaction", icon: Star, name: "Amy Rodriguez — Agency" },
];

const row2 = [
  { metric: "$8,200", label: "Passive income/month", icon: DollarSign, name: "David Kim — Developer" },
  { metric: "890", label: "Funnel conversions", icon: TrendingUp, name: "Maria Santos — Marketer" },
  { metric: "$55k", label: "Product launch total", icon: DollarSign, name: "Robert Nash — Consultant" },
  { metric: "1,400", label: "Members in community", icon: Users, name: "Beth Wilson — Nutritionist" },
  { metric: "+210%", label: "Revenue in 90 days", icon: TrendingUp, name: "Joel Johnson — Podcaster" },
  { metric: "6,200", label: "Email subscribers", icon: Zap, name: "Marie Chen — Writer" },
  { metric: "$29k", label: "Membership revenue", icon: DollarSign, name: "Alex Torres — Fitness Coach" },
];

type CardData = typeof row1[0];

function ReviewCard({ card, gradient }: { card: CardData; gradient: string }) {
  const IconComp = card.icon;
  return (
    <div
      className="flex-shrink-0 rounded-2xl p-5 flex flex-col justify-between w-56 h-40 select-none"
      style={{ background: gradient }}
    >
      <div>
        <div className="text-2xl font-bold text-white leading-none mb-1">{card.metric}</div>
        <div className="text-sm text-white/80 font-medium">{card.label}</div>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <div className="w-6 h-6 rounded-md flex items-center justify-center bg-white/20">
          <IconComp size={14} style={{ color: "white" }} />
        </div>
        <span className="text-xs text-white/70 font-medium">{card.name}</span>
      </div>
    </div>
  );
}

const gradients1 = [
  "linear-gradient(135deg, #14532d, #166534)",
  "linear-gradient(135deg, #16a34a, #15803d)",
  "linear-gradient(135deg, #15803d, #166534)",
  "linear-gradient(135deg, #22c55e, #16a34a)",
  "linear-gradient(135deg, #14532d, #15803d)",
  "linear-gradient(135deg, #166534, #15803d)",
  "linear-gradient(135deg, #15803d, #14532d)",
];

const gradients2 = [
  "linear-gradient(135deg, #713f12, #92400e)",
  "linear-gradient(135deg, #a16207, #854d0e)",
  "linear-gradient(135deg, #92400e, #78350f)",
  "linear-gradient(135deg, #ca8a04, #a16207)",
  "linear-gradient(135deg, #854d0e, #a16207)",
  "linear-gradient(135deg, #78350f, #92400e)",
  "linear-gradient(135deg, #a16207, #78350f)",
];

export default function MarqueeReviews() {
  const doubled1 = [...row1, ...row1];
  const doubled2 = [...row2, ...row2];

  return (
    <section className="py-24 w-full overflow-hidden">
      <div className="text-center mb-14 px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
          Creators around the world are earning more
        </h2>
        <p className="text-gray-400 mt-4 text-sm">Real results from real creators using EarnStack</p>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left {
          animation: marquee-left 30s linear infinite;
        }
        .marquee-right {
          animation: marquee-right 30s linear infinite;
        }
        .marquee-left:hover,
        .marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative mb-4">
        <div className="flex gap-4 marquee-left" style={{ width: "max-content" }}>
          {doubled1.map((card, i) => (
            <ReviewCard key={i} card={card} gradient={gradients1[i % gradients1.length]} />
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-4 marquee-right" style={{ width: "max-content" }}>
          {doubled2.map((card, i) => (
            <ReviewCard key={i} card={card} gradient={gradients2[i % gradients2.length]} />
          ))}
        </div>
      </div>
    </section>
  );
}
