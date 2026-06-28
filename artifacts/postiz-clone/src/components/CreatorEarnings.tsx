import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, DollarSign, Globe, Users } from "lucide-react";

const feeds = [
  { name: "Aisha B.", location: "Lagos, NG 🇳🇬", amount: "$2,340", product: "Notion Finance Kit", color: "#22c55e" },
  { name: "Marcus J.", location: "London, UK 🇬🇧", amount: "$890", product: "Freelancer Funnel", color: "#3b82f6" },
  { name: "Priya M.", location: "Mumbai, IN 🇮🇳", amount: "$5,200", product: "Design Masterclass", color: "#a855f7" },
  { name: "Jake T.", location: "Austin, US 🇺🇸", amount: "$1,450", product: "Creator Community", color: "#f59e0b" },
  { name: "Yuki S.", location: "Tokyo, JP 🇯🇵", amount: "$3,100", product: "AI Course Bundle", color: "#ef4444" },
  { name: "Sofia R.", location: "Madrid, ES 🇪🇸", amount: "$670", product: "Email Templates Pack", color: "#0ea5e9" },
  { name: "Liam O.", location: "Sydney, AU 🇦🇺", amount: "$4,800", product: "Business OS Kit", color: "#22c55e" },
  { name: "Fatima A.", location: "Dubai, AE 🇦🇪", amount: "$2,970", product: "Coaching Funnel", color: "#f97316" },
  { name: "Chen W.", location: "Singapore, SG 🇸🇬", amount: "$1,230", product: "Social Media Kit", color: "#3b82f6" },
  { name: "Amara K.", location: "Toronto, CA 🇨🇦", amount: "$6,500", product: "Video Course Pro", color: "#a855f7" },
  { name: "Diego M.", location: "São Paulo, BR 🇧🇷", amount: "$980", product: "Productivity Pack", color: "#22c55e" },
  { name: "Zara H.", location: "Amsterdam, NL 🇳🇱", amount: "$3,400", product: "UX Design Course", color: "#f59e0b" },
];

function useCounter(target: number, duration = 2000, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

const stats = [
  { icon: DollarSign, label: "Paid out to creators", value: 12400000, format: (n: number) => `$${(n / 1000000).toFixed(1)}M+`, color: "#22c55e" },
  { icon: Users, label: "Active creators worldwide", value: 50000, format: (n: number) => `${(n / 1000).toFixed(0)}k+`, color: "#3b82f6" },
  { icon: Globe, label: "Countries represented", value: 140, format: (n: number) => `${n}+`, color: "#a855f7" },
  { icon: TrendingUp, label: "Avg. monthly growth", value: 340, format: (n: number) => `${n}%`, color: "#f59e0b" },
];

export default function CreatorEarnings() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [visibleFeeds, setVisibleFeeds] = useState(feeds.slice(0, 5));
  const [idx, setIdx] = useState(5);

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      setIdx(prev => {
        const next = prev % feeds.length;
        setVisibleFeeds(current => {
          const updated = [feeds[next], ...current.slice(0, 4)];
          return updated;
        });
        return next + 1;
      });
    }, 1800);
    return () => clearInterval(timer);
  }, [inView]);

  const c0 = useCounter(stats[0].value, 2200, inView);
  const c1 = useCounter(stats[1].value, 2000, inView);
  const c2 = useCounter(stats[2].value, 1800, inView);
  const c3 = useCounter(stats[3].value, 1600, inView);
  const counts = [c0, c1, c2, c3];

  return (
    <section ref={ref} className="w-full py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs text-[#22c55e] uppercase tracking-widest font-semibold border border-[#22c55e]/30 px-3 py-1 rounded-full inline-block mb-4">
            🌍 Live Earnings
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
            Creators around the world<br />
            <span className="text-[#22c55e]">are earning more</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
            Every minute, creators on EarnStack are making sales — from Lagos to London, Mumbai to Melbourne.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left — live feed */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="text-xs text-[#22c55e] font-semibold uppercase tracking-widest">Live Sales Feed</span>
            </div>

            <div className="space-y-3 relative min-h-[300px]">
              {visibleFeeds.map((feed, i) => (
                <motion.div
                  key={`${feed.name}-${i}`}
                  initial={{ opacity: 0, x: -30, scale: 0.97 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#141414] px-5 py-4"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                    style={{ background: feed.color + "25", color: feed.color }}>
                    {feed.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white truncate">{feed.name}</p>
                    <p className="text-xs text-gray-500 truncate">{feed.location} · {feed.product}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-base font-bold" style={{ color: feed.color }}>{feed.amount}</p>
                    <p className="text-[10px] text-gray-600">just now</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — stats + globe ring */}
          <div className="flex flex-col gap-6">

            {/* Animated globe ring */}
            <div className="relative flex items-center justify-center h-56">
              <div className="absolute w-48 h-48 rounded-full border border-[#22c55e]/20 animate-spin" style={{ animationDuration: "20s" }} />
              <div className="absolute w-36 h-36 rounded-full border border-[#3b82f6]/20 animate-spin" style={{ animationDuration: "14s", animationDirection: "reverse" }} />
              <div className="absolute w-24 h-24 rounded-full border border-[#a855f7]/20 animate-spin" style={{ animationDuration: "9s" }} />

              {/* Dots on rings */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <div key={i}
                  className="absolute w-2.5 h-2.5 rounded-full"
                  style={{
                    background: ["#22c55e","#3b82f6","#f59e0b","#ef4444","#a855f7","#0ea5e9"][i],
                    transform: `rotate(${deg}deg) translateX(96px)`,
                    transformOrigin: "center",
                  }}
                />
              ))}

              <div className="z-10 text-center">
                <Globe size={28} className="text-[#22c55e] mx-auto mb-1" />
                <p className="text-xs text-gray-400 font-medium">140+ Countries</p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="rounded-2xl border border-white/10 bg-[#141414] p-5"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: s.color + "20" }}>
                        <Icon size={14} style={{ color: s.color }} />
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-white mb-1">
                      {s.format(counts[i])}
                    </p>
                    <p className="text-xs text-gray-500">{s.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
