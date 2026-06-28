import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 bg-[#161122]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#FF4CE2] flex items-center justify-center font-display font-bold text-white text-lg">
            P
          </div>
          <span className="font-display font-bold text-xl text-white tracking-tight">postiz</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["AI Agents CLI", "Dev Docs", "News", "Blog", "Pricing"].map((item) => (
            <Link 
              key={item} 
              href="#" 
              className="text-sm text-gray-300 hover:text-white transition-colors relative group font-medium"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF4CE2] transition-all group-hover:w-full"></span>
            </Link>
          ))}
          
          <div className="relative group flex items-center gap-1 cursor-pointer">
            <span className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">Channels</span>
            <ChevronDown size={14} className="text-gray-400 group-hover:text-white transition-colors" />
          </div>
        </nav>

        {/* Auth Actions */}
        <div className="flex items-center gap-4">
          <Link href="#" className="hidden sm:block text-sm font-medium text-white hover:text-[#FF4CE2] transition-colors">
            Log In
          </Link>
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white text-black text-sm font-bold px-4 py-2 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            Start for $0 <span className="font-serif">»</span>
          </motion.button>
        </div>

      </div>
    </header>
  );
}
