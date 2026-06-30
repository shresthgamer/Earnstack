import { useState } from "react";
import {
  BarChart2,
  Calendar,
  MessageSquare,
  Image,
  Hash,
  Zap,
  Bell,
  Settings,
  Users,
  TrendingUp,
  ChevronRight,
  Plus,
  Search,
  MoreHorizontal,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Clock,
} from "lucide-react";

const NAV_ITEMS = [
  { icon: BarChart2, label: "Analytics" },
  { icon: Calendar, label: "Calendar" },
  { icon: MessageSquare, label: "Posts", active: true },
  { icon: Image, label: "Media" },
  { icon: Hash, label: "Hashtags" },
  { icon: Zap, label: "Automation" },
  { icon: Bell, label: "Notifications" },
  { icon: Settings, label: "Settings" },
];

const STATS = [
  { label: "Posts Scheduled", value: "1,284", icon: Calendar, color: "#22c55e" },
  { label: "Total Reach", value: "2.4M", icon: TrendingUp, color: "#3b82f6" },
  { label: "Engagement", value: "8.7%", icon: BarChart2, color: "#a855f7" },
  { label: "Followers", value: "94.2K", icon: Users, color: "#f59e0b" },
];

const PLATFORM_COLORS: Record<string, string> = {
  "Twitter / X": "#1d9bf0",
  Instagram: "#e1306c",
  LinkedIn: "#0077b5",
  YouTube: "#ff0000",
};

const PLATFORM_ICONS: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  "Twitter / X": Twitter,
  Instagram: Instagram,
  LinkedIn: Linkedin,
  YouTube: Youtube,
};

const SCHEDULE = [
  {
    time: "9:00 AM",
    platform: "Twitter / X",
    content: "Excited to share our new AI features...",
    status: "scheduled",
  },
  {
    time: "12:30 PM",
    platform: "Instagram",
    content: "Behind the scenes of our latest shoot 🎬",
    status: "scheduled",
  },
  {
    time: "3:00 PM",
    platform: "LinkedIn",
    content: "5 ways AI is transforming content creation...",
    status: "scheduled",
  },
  {
    time: "6:00 PM",
    platform: "YouTube",
    content: "New video drop! Watch how we scaled to 1M...",
    status: "scheduled",
  },
];

const UPCOMING = [
  { day: "Tomorrow", platform: "Twitter / X", count: 3 },
  { day: "Wed, Jul 2", platform: "Instagram", count: 2 },
  { day: "Thu, Jul 3", platform: "LinkedIn", count: 1 },
  { day: "Fri, Jul 4", platform: "YouTube", count: 1 },
];

const CHANNELS = [
  { name: "Twitter / X", handle: "@earnstack", followers: "24.1K", color: "#1d9bf0", icon: Twitter },
  { name: "Instagram", handle: "@earnstack", followers: "41.8K", color: "#e1306c", icon: Instagram },
  { name: "LinkedIn", handle: "EarnStack", followers: "18.3K", color: "#0077b5", icon: Linkedin },
  { name: "YouTube", handle: "EarnStack", followers: "10.0K", color: "#ff0000", icon: Youtube },
];

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState(2);

  return (
    <div className="flex h-screen bg-[#0e0e0e] text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="flex flex-col items-center w-[60px] bg-[#141414] border-r border-white/5 py-4 gap-2 flex-shrink-0">
        {/* Logo */}
        <div className="w-9 h-9 rounded-lg bg-[#22c55e] flex items-center justify-center mb-4 flex-shrink-0">
          <span className="text-black font-bold text-lg">P</span>
        </div>

        {/* Nav icons */}
        <div className="flex flex-col gap-1 flex-1">
          {NAV_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <button
                key={i}
                onClick={() => setActiveNav(i)}
                title={item.label}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  activeNav === i
                    ? "bg-[#22c55e]/15 text-[#22c55e]"
                    : "text-white/30 hover:text-white/70 hover:bg-white/5"
                }`}
              >
                <Icon size={18} />
              </button>
            );
          })}
        </div>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold mt-2">
          JD
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center justify-between px-6 py-3 border-b border-white/5 bg-[#141414] flex-shrink-0">
          <div className="flex items-center gap-3">
            <h1 className="text-base font-semibold text-white">Dashboard</h1>
            <span className="text-xs text-white/30 bg-white/5 px-2 py-0.5 rounded-full">Monday, Jun 30</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-1.5 w-52">
              <Search size={14} className="text-white/30" />
              <input
                className="bg-transparent text-sm text-white/60 outline-none w-full placeholder:text-white/30"
                placeholder="Search posts..."
              />
            </div>
            <button className="flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-black text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors">
              <Plus size={15} />
              New Post
            </button>
          </div>
        </header>

        {/* Body */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left panel */}
          <div className="flex flex-col flex-1 overflow-y-auto px-6 py-5 gap-5">
            {/* Stats */}
            <div className="grid grid-cols-4 gap-3">
              {STATS.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="bg-[#1a1a1a] rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-white/40">{stat.label}</span>
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{ background: stat.color + "20" }}
                      >
                        <Icon size={14} style={{ color: stat.color }} />
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-[#22c55e] mt-1">+12.5% this month</p>
                  </div>
                );
              })}
            </div>

            {/* Today's Schedule */}
            <div className="bg-[#1a1a1a] rounded-xl border border-white/5 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Clock size={15} className="text-white/40" />
                  <h2 className="text-sm font-semibold">Today's Schedule</h2>
                </div>
                <span className="text-xs bg-[#22c55e]/15 text-[#22c55e] px-2.5 py-1 rounded-full font-medium">
                  4 posts
                </span>
              </div>
              <div className="divide-y divide-white/5">
                {SCHEDULE.map((post, i) => {
                  const Icon = PLATFORM_ICONS[post.platform];
                  const color = PLATFORM_COLORS[post.platform];
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-4 px-5 py-3.5 hover:bg-white/3 transition-colors group"
                    >
                      <span className="text-xs text-white/30 w-16 flex-shrink-0 font-mono">{post.time}</span>
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                      <div className="flex items-center gap-2 w-28 flex-shrink-0">
                        <Icon size={13} color={color} />
                        <span className="text-xs font-medium text-white/70">{post.platform}</span>
                      </div>
                      <p className="text-sm text-white/60 flex-1 truncate">{post.content}</p>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-[10px] bg-[#22c55e]/15 text-[#22c55e] px-2 py-0.5 rounded-full">
                          Scheduled
                        </span>
                        <button className="text-white/20 hover:text-white/60">
                          <MoreHorizontal size={15} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Connected Channels */}
            <div className="bg-[#1a1a1a] rounded-xl border border-white/5 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
                <h2 className="text-sm font-semibold">Connected Channels</h2>
                <button className="text-xs text-[#22c55e] hover:underline flex items-center gap-1">
                  Add channel <ChevronRight size={12} />
                </button>
              </div>
              <div className="grid grid-cols-4 divide-x divide-white/5">
                {CHANNELS.map((ch, i) => {
                  const Icon = ch.icon;
                  return (
                    <div key={i} className="px-4 py-4 flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center"
                          style={{ background: ch.color + "20" }}
                        >
                          <Icon size={13} color={ch.color} />
                        </div>
                        <span className="text-xs font-medium">{ch.name}</span>
                      </div>
                      <p className="text-xs text-white/30">{ch.handle}</p>
                      <p className="text-lg font-bold">{ch.followers}</p>
                      <p className="text-[10px] text-white/30">followers</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right panel */}
          <aside className="w-64 flex-shrink-0 border-l border-white/5 bg-[#141414] overflow-y-auto p-4 flex flex-col gap-4">
            {/* Mini calendar */}
            <div className="bg-[#1a1a1a] rounded-xl p-4 border border-white/5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold">June 2026</span>
                <ChevronRight size={14} className="text-white/30" />
              </div>
              <div className="grid grid-cols-7 gap-0.5 text-center">
                {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                  <span key={i} className="text-[10px] text-white/20 py-1">{d}</span>
                ))}
                {[...Array(30)].map((_, i) => {
                  const day = i + 1;
                  const hasPost = [2, 5, 9, 14, 18, 22, 25, 28, 30].includes(day);
                  const isToday = day === 30;
                  return (
                    <button
                      key={i}
                      className={`text-[11px] py-1 rounded transition-colors ${
                        isToday
                          ? "bg-[#22c55e] text-black font-bold"
                          : hasPost
                          ? "text-[#22c55e] font-medium hover:bg-white/5"
                          : "text-white/30 hover:bg-white/5"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Upcoming posts */}
            <div className="bg-[#1a1a1a] rounded-xl border border-white/5 overflow-hidden">
              <div className="px-4 py-3 border-b border-white/5">
                <h3 className="text-xs font-semibold">Upcoming Posts</h3>
              </div>
              <div className="divide-y divide-white/5">
                {UPCOMING.map((item, i) => {
                  const Icon = PLATFORM_ICONS[item.platform];
                  const color = PLATFORM_COLORS[item.platform];
                  return (
                    <div key={i} className="flex items-center gap-3 px-4 py-3">
                      <div
                        className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                        style={{ background: color + "20" }}
                      >
                        <Icon size={11} color={color} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] text-white/60 truncate">{item.day}</p>
                        <p className="text-[11px] text-white/30">{item.platform}</p>
                      </div>
                      <span className="text-[10px] bg-white/5 text-white/40 px-1.5 py-0.5 rounded-full">
                        {item.count}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick compose */}
            <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-4">
              <h3 className="text-xs font-semibold mb-3">Quick Compose</h3>
              <textarea
                className="w-full bg-[#0e0e0e] border border-white/10 rounded-lg p-3 text-xs text-white/60 placeholder:text-white/20 outline-none resize-none focus:border-[#22c55e]/40 transition-colors"
                rows={4}
                placeholder="What's on your mind?"
              />
              <div className="flex items-center justify-between mt-3">
                <div className="flex gap-1.5">
                  {[Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                    <button
                      key={i}
                      className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                      <Icon size={11} className="text-white/40" />
                    </button>
                  ))}
                </div>
                <button className="text-xs bg-[#22c55e] hover:bg-[#16a34a] text-black font-semibold px-3 py-1 rounded-lg transition-colors">
                  Schedule
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
