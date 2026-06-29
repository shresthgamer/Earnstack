import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";

const perks = [
  "100% remote — work from anywhere",
  "Competitive salary + equity",
  "Unlimited PTO policy",
  "Annual learning budget ($2,000)",
  "Health, dental & vision",
  "Home office stipend ($1,500)",
  "Team retreats twice a year",
  "Creator revenue share program",
];

const jobs = [
  {
    dept: "Engineering",
    color: "from-blue-600/20 to-blue-900/10",
    border: "border-blue-500/20",
    tag: "bg-blue-500/15 text-blue-400",
    roles: [
      { title: "Senior Full-Stack Engineer", location: "Remote", type: "Full-time", level: "Senior" },
      { title: "AI/ML Engineer", location: "Remote", type: "Full-time", level: "Mid–Senior" },
      { title: "Frontend Engineer (React)", location: "Remote", type: "Full-time", level: "Mid" },
    ],
  },
  {
    dept: "Product & Design",
    color: "from-purple-600/20 to-purple-900/10",
    border: "border-purple-500/20",
    tag: "bg-purple-500/15 text-purple-400",
    roles: [
      { title: "Product Designer", location: "Remote", type: "Full-time", level: "Mid–Senior" },
      { title: "Product Manager", location: "Remote", type: "Full-time", level: "Senior" },
    ],
  },
  {
    dept: "Growth & Marketing",
    color: "from-[#22c55e]/20 to-emerald-900/10",
    border: "border-[#22c55e]/20",
    tag: "bg-[#22c55e]/15 text-[#22c55e]",
    roles: [
      { title: "Head of Creator Partnerships", location: "Remote", type: "Full-time", level: "Senior" },
      { title: "Content Marketing Manager", location: "Remote", type: "Full-time", level: "Mid" },
      { title: "SEO & Growth Analyst", location: "Remote", type: "Full-time", level: "Junior–Mid" },
    ],
  },
  {
    dept: "Customer Success",
    color: "from-amber-500/20 to-amber-900/10",
    border: "border-amber-500/20",
    tag: "bg-amber-500/15 text-amber-400",
    roles: [
      { title: "Creator Success Manager", location: "Remote", type: "Full-time", level: "Mid" },
      { title: "Support Specialist", location: "Remote", type: "Full-time", level: "Junior" },
    ],
  },
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white font-body">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-20 right-1/3 w-80 h-80 bg-[#22c55e]/8 rounded-full blur-3xl pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 text-[#22c55e] text-xs font-semibold uppercase tracking-widest mb-6">We're hiring</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.1] mb-6">
            Help us empower<br />
            <span className="text-[#22c55e]">every creator</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Join a fully remote team building the platform that helps 50,000+ creators turn their knowledge into income. We move fast, care deeply, and love what we do.
          </p>
          <a href="#roles">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="bg-[#22c55e] text-black font-bold px-8 py-4 rounded-full flex items-center gap-2 mx-auto hover:bg-[#16a34a] transition-colors">
              View open roles <ArrowRight size={16} />
            </motion.button>
          </a>
        </motion.div>
      </section>

      {/* Perks */}
      <section className="py-20 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl font-display font-bold text-center mb-12">Why work at EarnStack</motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {perks.map((p, i) => (
              <motion.div key={p} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#0d1a0d] border border-white/5">
                <span className="text-[#22c55e] mt-0.5 shrink-0">✦</span>
                <span className="text-sm text-gray-300">{p}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="roles" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Open positions</h2>
            <p className="text-gray-400">All roles are fully remote and open to candidates worldwide.</p>
          </motion.div>
          <div className="flex flex-col gap-8">
            {jobs.map((dept, di) => (
              <motion.div key={dept.dept} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: di * 0.1 }}>
                <div className={`rounded-2xl bg-gradient-to-br ${dept.color} border ${dept.border} overflow-hidden`}>
                  <div className="px-6 py-4 border-b border-white/5">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${dept.tag}`}>{dept.dept}</span>
                  </div>
                  <div className="divide-y divide-white/5">
                    {dept.roles.map((role) => (
                      <div key={role.title} className="px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors group">
                        <div>
                          <h3 className="font-semibold text-white mb-1 group-hover:text-[#22c55e] transition-colors">{role.title}</h3>
                          <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                            <span className="flex items-center gap-1"><MapPin size={11} />{role.location}</span>
                            <span className="flex items-center gap-1"><Clock size={11} />{role.type}</span>
                            <span className="flex items-center gap-1"><Briefcase size={11} />{role.level}</span>
                          </div>
                        </div>
                        <button className="shrink-0 px-4 py-2 rounded-full border border-white/10 text-xs font-medium text-gray-300 hover:border-[#22c55e] hover:text-[#22c55e] transition-colors flex items-center gap-1.5">
                          Apply <ArrowRight size={11} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="mt-12 text-center p-8 rounded-2xl border border-white/5 bg-white/[0.01]">
            <p className="text-gray-400 mb-3">Don't see a role that fits?</p>
            <p className="text-sm text-gray-500 mb-6">We're always looking for exceptional talent. Send us your story.</p>
            <a href="mailto:careers@earnstack.in" className="text-[#22c55e] hover:underline font-medium">careers@earnstack.in</a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
