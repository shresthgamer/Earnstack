import { SiInstagram, SiYoutube, SiTiktok, SiFacebook, SiReddit } from "react-icons/si";
import { Linkedin } from "lucide-react";

const row1 = [
  { metric: "+5%", label: "Increase in followers", icon: Linkedin, iconColor: "#0A66C2", name: "Larry Williams" },
  { metric: "+50%", label: "Increase in followers", icon: Linkedin, iconColor: "#0A66C2", name: "Paula Wright" },
  { metric: "+3k", label: "Saved per month", icon: SiInstagram, iconColor: "#E4405F", name: "Gilbert Ward" },
  { metric: "+20%", label: "Followers", icon: SiYoutube, iconColor: "#FF0000", name: "Sherry Porter" },
  { metric: "+10%", label: "Grew following", icon: SiTiktok, iconColor: "#000000", name: "Raymond Harrison" },
  { metric: "x2", label: "Boost in reach", icon: SiReddit, iconColor: "#FF4500", name: "Lisa Park" },
  { metric: "+35%", label: "Engagement rate", icon: SiFacebook, iconColor: "#1877F2", name: "Tom Bradley" },
];

const row2 = [
  { metric: "3x", label: "Increase in traffic", icon: SiInstagram, iconColor: "#E4405F", name: "Betty McGee" },
  { metric: "3k", label: "Saved per month", icon: SiFacebook, iconColor: "#1877F2", name: "Jonathan Turner" },
  { metric: "+3k", label: "Followers", icon: Linkedin, iconColor: "#0A66C2", name: "Frank Grant" },
  { metric: "2k", label: "Saved per month", icon: SiReddit, iconColor: "#FF4500", name: "Bernice Wilson" },
  { metric: "+10%", label: "Increase in impressions", icon: SiTiktok, iconColor: "#000000", name: "Joel Johnson" },
  { metric: "+45%", label: "New subscribers", icon: SiYoutube, iconColor: "#FF0000", name: "Marie Chen" },
  { metric: "+2x", label: "Content output", icon: SiInstagram, iconColor: "#E4405F", name: "Alex Torres" },
];

type CardData = typeof row1[0];

function ReviewCard({ card, gradient }: { card: CardData; gradient: string }) {
  const IconComp = card.icon;
  return (
    <div
      className="flex-shrink-0 rounded-2xl p-5 flex flex-col justify-between w-52 h-36 select-none"
      style={{ background: gradient }}
    >
      <div>
        <div className="text-2xl font-bold text-white leading-none mb-1">{card.metric}</div>
        <div className="text-sm text-white/80 font-medium">{card.label}</div>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <div
          className="w-6 h-6 rounded-md flex items-center justify-center text-white"
          style={{ backgroundColor: card.icon === SiTiktok ? "#000" : card.iconColor }}
        >
          <IconComp size={14} style={{ color: card.icon === SiTiktok ? "white" : "white" }} />
        </div>
        <span className="text-xs text-white/70 font-medium">{card.name}</span>
      </div>
    </div>
  );
}

const gradients1 = [
  "linear-gradient(135deg, #6D28D9, #4C1D95)",
  "linear-gradient(135deg, #7C3AED, #6D28D9)",
  "linear-gradient(135deg, #5B21B6, #4C1D95)",
  "linear-gradient(135deg, #6D28D9, #7C3AED)",
  "linear-gradient(135deg, #4C1D95, #5B21B6)",
  "linear-gradient(135deg, #7C3AED, #5B21B6)",
  "linear-gradient(135deg, #6D28D9, #4C1D95)",
];

const gradients2 = [
  "linear-gradient(135deg, #BE185D, #9D174D)",
  "linear-gradient(135deg, #DB2777, #BE185D)",
  "linear-gradient(135deg, #9D174D, #831843)",
  "linear-gradient(135deg, #EC4899, #DB2777)",
  "linear-gradient(135deg, #BE185D, #DB2777)",
  "linear-gradient(135deg, #9D174D, #BE185D)",
  "linear-gradient(135deg, #DB2777, #9D174D)",
];

export default function MarqueeReviews() {
  const doubled1 = [...row1, ...row1];
  const doubled2 = [...row2, ...row2];

  return (
    <section className="py-24 w-full overflow-hidden">
      <div className="text-center mb-14 px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
          Trusted by customers all over the world
        </h2>
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

      {/* Row 1 — scrolls left */}
      <div className="relative mb-4">
        <div className="flex gap-4 marquee-left" style={{ width: "max-content" }}>
          {doubled1.map((card, i) => (
            <ReviewCard key={i} card={card} gradient={gradients1[i % gradients1.length]} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
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
