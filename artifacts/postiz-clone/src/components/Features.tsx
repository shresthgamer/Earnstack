import { motion } from "framer-motion";
import { Sparkles, Share2, CalendarDays, Users } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="text-[#FF4CE2]" size={24} />,
    title: "AI Content Generation",
    description: "Tell the AI what you want to talk about, and it will generate platform-specific posts, threads, and captions."
  },
  {
    icon: <Share2 className="text-[#FF4CE2]" size={24} />,
    title: "30+ Social Networks",
    description: "Post to X, LinkedIn, Instagram, TikTok, Reddit, and dozens of other platforms from a single interface."
  },
  {
    icon: <CalendarDays className="text-[#FF4CE2]" size={24} />,
    title: "Visual Calendar",
    description: "Drag and drop your scheduled content on a beautiful, intuitive visual calendar to plan your week."
  },
  {
    icon: <Users className="text-[#FF4CE2]" size={24} />,
    title: "Team Collaboration",
    description: "Invite your team members, set up approval workflows, and manage multiple workspaces easily."
  }
];

export default function Features() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Why Postiz?</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Everything you need to grow your audience and build your brand on autopilot.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-[#161122] rounded-2xl p-8 border border-white/5 hover:border-[#FF4CE2]/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
