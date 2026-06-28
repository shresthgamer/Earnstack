import { motion } from "framer-motion";
import {
  BarChart2, Calendar, MessageSquare, Bell, Settings,
  TrendingUp, Users, Zap, Image, Hash
} from "lucide-react";

const stats = [
  { label: "Posts Scheduled", value: "1,284", icon: Calendar, color: "#22c55e" },
  { label: "Total Reach", value: "2.4M", icon: TrendingUp, color: "#3b82f6" },
  { label: "Engagement", value: "8.7%", icon: BarChart2, color: "#a855f7" },
  { label: "Followers", value: "94.2K", icon: Users, color: "#f59e0b" },
];

const scheduledPosts = [
  { time: "9:00 AM", platform: "Twitter / X", content: "Excited to share our new AI features...", color: "#1d9bf0" },
  { time: "12:30 PM", platform: "Instagram", content: "Behind the scenes of our latest shoot 📸", color: "#e1306c" },
  { time: "3:00 PM", platform: "LinkedIn", content: "5 ways AI is transforming content creation...", color: "#0a66c2" },
  { time: "6:00 PM", platform: "YouTube", content: "New video drop! Watch how we scaled to 1M...", color: "#ff0000" },
];

const sidebarItems = [
  { icon: BarChart2, label: "Analytics" },
  { icon: Calendar, label: "Schedule" },
  { icon: MessageSquare, label: "Inbox", active: true },
  { icon: Image, label: "Media" },
  { icon: Hash, label: "Hashtags" },
  { icon: Zap, label: "Automation" },
  { icon: Bell, label: "Alerts" },
  { icon: Settings, label: "Settings" },
];

export default function AppPreview() {
  return (
    <section className="w-full py-24 px-4 flex flex-col items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <p className="text-xs text-[#22c55e] uppercase tracking-widest font-semibold mb-3">
          Powerful Dashboard
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
          Everything in one place
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
          Manage all your social channels, schedule posts, and track performance from a single, beautiful dashboard.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="w-full max-w-5xl rounded-2xl border border-white/10 bg-[#141414] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.6)] relative"
      >
        {/* Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#22c55e]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top bar */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-[#0E0E0E]">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-4 text-xs text-gray-500">app.postiz.com/dashboard</span>
        </div>

        <div className="flex" style={{ minHeight: 420 }}>
          {/* Sidebar */}
          <div className="w-14 bg-[#0E0E0E] border-r border-white/10 flex flex-col items-center py-4 gap-3 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-[#22c55e] flex items-center justify-center mb-4">
              <span className="text-black font-bold text-sm">P</span>
            </div>
            {sidebarItems.map(({ icon: Icon, label, active }) => (
              <button
                key={label}
                title={label}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                  active
                    ? "bg-[#22c55e]/20 text-[#22c55e]"
                    : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                }`}
              >
                <Icon size={16} />
              </button>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col p-5 gap-5 overflow-hidden">
            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {stats.map(({ label, value, icon: Icon, color }) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{label}</span>
                    <Icon size={14} style={{ color }} />
                  </div>
                  <span className="text-xl font-bold text-white">{value}</span>
                </div>
              ))}
            </div>

            {/* Scheduled Posts */}
            <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-white">Today's Schedule</span>
                <span className="text-xs text-[#22c55e] border border-[#22c55e]/30 rounded-full px-2 py-0.5">
                  {scheduledPosts.length} posts
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {scheduledPosts.map((post, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="flex items-center gap-3 rounded-lg bg-white/5 border border-white/5 px-3 py-2.5"
                  >
                    <span className="text-xs text-gray-500 w-16 shrink-0">{post.time}</span>
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: post.color }}
                    />
                    <span className="text-xs text-gray-400 font-medium w-20 shrink-0">{post.platform}</span>
                    <span className="text-xs text-gray-300 truncate">{post.content}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
