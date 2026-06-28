import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "AI Tools", href: "/ai-tools" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="w-full sticky top-0 z-40 bg-[#0a0f0a]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-[#22c55e] flex items-center justify-center shrink-0">
              <span className="text-black font-bold text-sm font-display">E</span>
            </div>
            <span className="font-display font-bold text-xl text-white tracking-tight">EarnStack</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm transition-colors relative group font-medium ${
                  location === item.href ? "text-[#22c55e]" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#22c55e] transition-all ${
                  location === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-sm font-medium text-white hover:text-[#22c55e] transition-colors">
              Login
            </Link>
            <Link href="/pricing">
              <motion.button
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="bg-[#22c55e] text-black text-sm font-bold px-4 py-2 rounded-full hover:bg-[#16a34a] transition-colors flex items-center gap-1.5"
              >
                Start Free <ArrowRight size={13} />
              </motion.button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-black/60 md:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-16 right-0 bottom-0 z-40 w-72 bg-[#0d1a0d] border-l border-white/10 flex flex-col md:hidden"
            >
              <nav className="flex flex-col p-6 gap-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        location === item.href
                          ? "bg-[#22c55e]/15 text-[#22c55e]"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {location === item.href && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shrink-0" />
                      )}
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto p-6 border-t border-white/5 flex flex-col gap-3">
                <Link href="#" className="text-center py-2.5 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  Login
                </Link>
                <Link href="/pricing">
                  <motion.button
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#22c55e] text-black text-sm font-bold py-3 rounded-full hover:bg-[#16a34a] transition-colors flex items-center justify-center gap-2"
                  >
                    Start Free <ArrowRight size={14} />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
