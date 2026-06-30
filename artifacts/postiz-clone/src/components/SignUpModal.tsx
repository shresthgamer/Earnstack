import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, EyeOff, Check, Loader2, Mail, Lock, User, AlertCircle } from "lucide-react";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

type Step = "form" | "success";

export default function SignUpModal({ isOpen, onClose, source = "website" }: SignUpModalProps) {
  const [step, setStep] = useState<Step>("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!name.trim() || name.trim().length < 2) errors.name = "Enter your full name";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email address";
    if (!password || password.length < 8) errors.password = "Password must be at least 8 characters";
    if (!agreed) errors.agreed = "Please accept the terms to continue";
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setLoading(true);
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.toLowerCase().trim(), password, source }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.error ?? "Something went wrong. Please try again.");
      } else {
        setStep("success");
      }
    } catch {
      setError("Unable to connect. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep("form");
      setName(""); setEmail(""); setPassword("");
      setShowPassword(false); setAgreed(false);
      setError(null); setFieldErrors({});
    }, 300);
  };

  const passwordStrength = (() => {
    if (!password) return 0;
    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
  })();

  const strengthLabel = ["", "Weak", "Fair", "Good", "Strong", "Very Strong"][passwordStrength];
  const strengthColor = ["", "#ef4444", "#f59e0b", "#eab308", "#22c55e", "#16a34a"][passwordStrength];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Green glow at top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-[#22c55e]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all"
            >
              <X size={16} />
            </button>

            <AnimatePresence mode="wait">
              {step === "form" ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8"
                >
                  {/* Header */}
                  <div className="text-center mb-7">
                    <div className="w-12 h-12 rounded-xl bg-[#22c55e]/15 border border-[#22c55e]/20 flex items-center justify-center mx-auto mb-4">
                      <img src="/earnstack-logo.png" alt="EarnStack" className="w-7 h-7 object-contain" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-1.5">Create your account</h2>
                    <p className="text-sm text-gray-400">Join 50,000+ creators on EarnStack</p>
                  </div>

                  {/* Global error */}
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="flex items-start gap-2.5 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 mb-5"
                      >
                        <AlertCircle size={16} className="text-red-400 mt-0.5 shrink-0" />
                        <p className="text-sm text-red-400">{error}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Full name</label>
                      <div className={`flex items-center gap-3 bg-white/5 border rounded-xl px-4 py-3 transition-colors ${fieldErrors.name ? "border-red-500/50" : "border-white/10 focus-within:border-[#22c55e]/50"}`}>
                        <User size={16} className="text-gray-500 shrink-0" />
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => { setName(e.target.value); setFieldErrors(f => ({ ...f, name: "" })); }}
                          placeholder="Alex Johnson"
                          className="flex-1 bg-transparent text-white placeholder:text-gray-600 text-sm outline-none"
                          autoComplete="name"
                        />
                      </div>
                      {fieldErrors.name && <p className="text-xs text-red-400 mt-1.5">{fieldErrors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Email address</label>
                      <div className={`flex items-center gap-3 bg-white/5 border rounded-xl px-4 py-3 transition-colors ${fieldErrors.email ? "border-red-500/50" : "border-white/10 focus-within:border-[#22c55e]/50"}`}>
                        <Mail size={16} className="text-gray-500 shrink-0" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => { setEmail(e.target.value); setFieldErrors(f => ({ ...f, email: "" })); }}
                          placeholder="alex@example.com"
                          className="flex-1 bg-transparent text-white placeholder:text-gray-600 text-sm outline-none"
                          autoComplete="email"
                        />
                      </div>
                      {fieldErrors.email && <p className="text-xs text-red-400 mt-1.5">{fieldErrors.email}</p>}
                    </div>

                    {/* Password */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
                      <div className={`flex items-center gap-3 bg-white/5 border rounded-xl px-4 py-3 transition-colors ${fieldErrors.password ? "border-red-500/50" : "border-white/10 focus-within:border-[#22c55e]/50"}`}>
                        <Lock size={16} className="text-gray-500 shrink-0" />
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => { setPassword(e.target.value); setFieldErrors(f => ({ ...f, password: "" })); }}
                          placeholder="Min. 8 characters"
                          className="flex-1 bg-transparent text-white placeholder:text-gray-600 text-sm outline-none"
                          autoComplete="new-password"
                        />
                        <button type="button" onClick={() => setShowPassword(v => !v)} className="text-gray-500 hover:text-gray-300 transition-colors">
                          {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                        </button>
                      </div>
                      {fieldErrors.password && <p className="text-xs text-red-400 mt-1.5">{fieldErrors.password}</p>}

                      {/* Strength bar */}
                      {password && (
                        <div className="mt-2">
                          <div className="flex gap-1 mb-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <div key={i} className="flex-1 h-1 rounded-full transition-all duration-300"
                                style={{ background: i <= passwordStrength ? strengthColor : "rgba(255,255,255,0.08)" }} />
                            ))}
                          </div>
                          <p className="text-xs" style={{ color: strengthColor }}>{strengthLabel}</p>
                        </div>
                      )}
                    </div>

                    {/* Terms */}
                    <div>
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div
                          onClick={() => { setAgreed(v => !v); setFieldErrors(f => ({ ...f, agreed: "" })); }}
                          className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-all ${agreed ? "bg-[#22c55e] border-[#22c55e]" : "border-white/20 bg-white/5 group-hover:border-white/40"}`}
                        >
                          {agreed && <Check size={12} className="text-black" strokeWidth={3} />}
                        </div>
                        <span className="text-sm text-gray-400 leading-relaxed">
                          I agree to the{" "}
                          <a href="/terms" className="text-[#22c55e] hover:underline" target="_blank">Terms of Service</a>
                          {" "}and{" "}
                          <a href="/privacy" className="text-[#22c55e] hover:underline" target="_blank">Privacy Policy</a>
                        </span>
                      </label>
                      {fieldErrors.agreed && <p className="text-xs text-red-400 mt-1.5">{fieldErrors.agreed}</p>}
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={!loading ? { scale: 1.02 } : {}}
                      whileTap={!loading ? { scale: 0.98 } : {}}
                      className="w-full bg-[#22c55e] hover:bg-[#16a34a] disabled:opacity-60 disabled:cursor-not-allowed text-black font-bold py-3.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.25)]"
                    >
                      {loading ? (
                        <><Loader2 size={16} className="animate-spin" /> Creating account…</>
                      ) : (
                        "Create Free Account"
                      )}
                    </motion.button>
                  </form>

                  <p className="text-center text-xs text-gray-600 mt-5">
                    No credit card required · Cancel anytime
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 flex flex-col items-center text-center"
                >
                  {/* Success ring animation */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-[#22c55e]/15 border-2 border-[#22c55e] flex items-center justify-center mb-6 relative"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.25, type: "spring" }}
                    >
                      <Check size={36} className="text-[#22c55e]" strokeWidth={2.5} />
                    </motion.div>
                    {/* Ping effect */}
                    <motion.div
                      animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full border-2 border-[#22c55e]"
                    />
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-white mb-2"
                  >
                    You're in! 🎉
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400 text-sm mb-2"
                  >
                    Welcome to EarnStack, <span className="text-white font-medium">{name}</span>!
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-500 text-xs mb-8"
                  >
                    A confirmation has been sent to <span className="text-gray-300">{email}</span>
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    onClick={handleClose}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold px-8 py-3 rounded-xl text-sm transition-colors"
                  >
                    Get Started →
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
