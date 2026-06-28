import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "This tool completely changed how we handle social media. The AI agent generates content that actually sounds like our brand voice. I save about 15 hours a week.",
    author: "Sarah Jenkins",
    role: "Marketing Director",
    initials: "SJ",
    color: "bg-blue-500"
  },
  {
    quote: "I've tried Buffer, Hootsuite, and Sprout. Postiz is the only one that feels like it was built in this decade. The interface is gorgeous and lightning fast.",
    author: "David Chen",
    role: "Agency Owner",
    initials: "DC",
    color: "bg-green-500"
  },
  {
    quote: "The ability to schedule threads and Instagram carousels with AI assistance is incredible. It's like having a full-time social media manager on the team.",
    author: "Elena Rodriguez",
    role: "Founder & CEO",
    initials: "ER",
    color: "bg-purple-500"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Loved by 50,000+ managers</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Don't just take our word for it. Here's what our users have to say.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-[#161122] rounded-2xl p-8 border border-white/5 flex flex-col justify-between"
          >
            <p className="text-gray-300 leading-relaxed mb-8 italic">"{t.quote}"</p>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-lg`}>
                {t.initials}
              </div>
              <div>
                <h4 className="font-bold text-white">{t.author}</h4>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
