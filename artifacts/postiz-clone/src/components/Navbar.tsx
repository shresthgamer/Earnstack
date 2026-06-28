import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 bg-[#0a0f0a]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2.5">
          <img src="/earnstack-logo.png" alt="EarnStack" className="w-8 h-8 object-contain" />
          <span className="font-display font-bold text-xl text-white tracking-tight">EarnStack</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {[
            { label: "Home", href: "/" },
            { label: "Features", href: "/features" },
            { label: "AI Tools", href: "/ai-tools" },
            { label: "Pricing", href: "/pricing" },
            { label: "Blog", href: "/blog" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-gray-300 hover:text-white transition-colors relative group font-medium"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#22c55e] transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="#" className="hidden sm:block text-sm font-medium text-white hover:text-[#22c55e] transition-colors">
            Login
          </Link>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#22c55e] text-black text-sm font-bold px-4 py-2 rounded-full hover:bg-[#16a34a] transition-colors flex items-center gap-2"
          >
            Start Free <span className="font-serif">»</span>
          </motion.button>
        </div>

      </div>
    </header>
  );
}
