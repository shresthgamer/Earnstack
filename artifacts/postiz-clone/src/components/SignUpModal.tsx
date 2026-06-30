import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, Eye, EyeOff, Check, Loader2, Mail, Lock, User,
  AlertCircle, ShieldCheck, Zap, TrendingUp,
} from "lucide-react";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

type Step = "form" | "success";

const SOCIAL_PROOF = [
  { icon: <Zap size={13} />, text: "2 min setup — no credit card" },
  { icon: <ShieldCheck size={13} />, text: "256-bit encryption" },
  { icon: <TrendingUp size={13} />, text: "Trusted by 50,000+ creators" },
];

function StrengthBar({ password }: { password: string }) {
  const score = (() => {
    if (!password) return 0;
    let s = 0;
    if (password.length >= 8) s++;
    if (password.length >= 12) s++;
    if (/[A-Z]/.test(password)) s++;
    if (/[0-9]/.test(password)) s++;
    if (/[^A-Za-z0-9]/.test(password)) s++;
    return s;
  })();
  const label = ["", "Weak", "Fair", "Good", "Strong", "Very Strong"][score];
  const color = ["", "#ef4444", "#f59e0b", "#eab308", "#22c55e", "#16a34a"][score];
  if (!password) return null;
  return (
    <div className="mt-2.5">
      <div className="flex gap-1 mb-1.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="flex-1 h-1 rounded-full transition-all duration-400"
            style={{ background: i <= score ? color : "rgba(255,255,255,0.08)" }}
          />
        ))}
      </div>
      <div className="flex justify-between items-center">
        <p className="text-xs font-medium" style={{ color }}>{label}</p>
        {score < 3 && (
          <p className="text-xs text-gray-600">Add uppercase, numbers, symbols</p>
        )}
      </div>
    </div>
  );
}

interface FieldProps {
  label: string;
  icon: React.ReactNode;
  error?: string;
  hint?: string;
  children: React.ReactNode;
  success?: boolean;
}

function Field({ label, icon, error, hint, children, success }: FieldProps) {
  const borderClass = error
    ? "border-red-500/50 bg-red-500/5"
    : success
    ? "border-[#22c55e]/40 bg-[#22c55e]/5"
    : "border-white/10 bg-white/5 focus-within:border-[#22c55e]/50 focus-within:bg-white/7";

  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1.5">{label}</label>
      <div className={`flex items-center gap-3 border rounded-xl px-4 py-3 transition-all duration-200 ${borderClass}`}>
        <span className={`shrink-0 transition-colors ${error ? "text-red-400" : success ? "text-[#22c55e]" : "text-gray-500"}`}>
          {success ? <Check size={16} strokeWidth={2.5} /> : icon}
        </span>
        {children}
      </div>
      <AnimatePresence mode="wait">
        {error ? (
          <motion.p key="err" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
            <AlertCircle size={11} /> {error}
          </motion.p>
        ) : hint ? (
          <motion.p key="hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-xs text-gray-600 mt-1.5">{hint}</motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default function SignUpModal({ isOpen, onClose, source = "website" }: SignUpModalProps) {
  const [step, setStep] = useState<Step>("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const clearField = (field: string) =>
    setFieldErrors((f) => ({ ...f, [field]: "" }));

  const touch = (field: string) =>
    setTouched((t) => ({ ...t, [field]: true }));

  const validateField = (field: string, value: string | boolean): string => {
    switch (field) {
      case "name":
        return typeof value === "string" && value.trim().length >= 2 ? "" : "Enter your full name (min. 2 chars)";
      case "email":
        return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Enter a valid email address";
      case "password":
        return typeof value === "string" && value.length >= 8 ? "" : "Password must be at least 8 characters";
      case "confirmPassword":
        return value === password ? "" : "Passwords do not match";
      case "agreed":
        return value ? "" : "Please accept the terms to continue";
      default:
        return "";
    }
  };

  const handleBlur = (field: string, value: string | boolean) => {
    touch(field);
    const err = validateField(field, value);
    setFieldErrors((f) => ({ ...f, [field]: err }));
  };

  const validate = () => {
    const fields: Record<string, string | boolean> = {
      name, email, password, confirmPassword, agreed,
    };
    const errors: Record<string, string> = {};
    for (const [field, value] of Object.entries(fields)) {
      const err = validateField(field, value);
      if (err) errors[field] = err;
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const errors = validate();
    setFieldErrors(errors);
    setTouched({ name: true, email: true, password: true, confirmPassword: true, agreed: true });
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
      setName(""); setEmail(""); setPassword(""); setConfirmPassword("");
      setShowPassword(false); setShowConfirm(false); setAgreed(false);
      setError(null); setFieldErrors({}); setTouched({});
    }, 300);
  };

  const confirmOk = confirmPassword.length > 0 && confirmPassword === password;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 24 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="relative w-full max-w-[440px] bg-[#111] border border-white/10 rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            {/* Decorative top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-20 bg-[#22c55e]/8 rounded-full blur-3xl pointer-events-none" />
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22c55e]/40 to-transparent" />

            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/5 hover:bg-white/12 flex items-center justify-center text-white/40 hover:text-white transition-all"
            >
              <X size={15} />
            </button>

            <AnimatePresence mode="wait">
              {step === "form" ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-7"
                >
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="w-11 h-11 rounded-xl bg-[#22c55e]/12 border border-[#22c55e]/20 flex items-center justify-center mx-auto mb-4">
                      <img src="/earnstack-logo.png" alt="EarnStack" className="w-6 h-6 object-contain" />
                    </div>
                    <h2 className="text-[22px] font-bold text-white mb-1">Create your free account</h2>
                    <p className="text-sm text-gray-500">Start building your creator business today</p>
                  </div>

                  {/* Social proof pills */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {SOCIAL_PROOF.map(({ icon, text }) => (
                      <div key={text} className="flex items-center gap-1.5 bg-white/4 border border-white/8 rounded-full px-3 py-1 text-xs text-gray-400">
                        <span className="text-[#22c55e]">{icon}</span>
                        {text}
                      </div>
                    ))}
                  </div>

                  {/* Global error */}
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -8, height: 0 }}
                        className="flex items-start gap-2.5 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 mb-5 overflow-hidden"
                      >
                        <AlertCircle size={15} className="text-red-400 mt-0.5 shrink-0" />
                        <p className="text-sm text-red-400">{error}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-3.5">
                    {/* Name */}
                    <Field
                      label="Full name"
                      icon={<User size={15} />}
                      error={touched.name ? fieldErrors.name : undefined}
                      success={touched.name && !fieldErrors.name && name.trim().length >= 2}
                    >
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => { setName(e.target.value); clearField("name"); }}
                        onBlur={() => handleBlur("name", name)}
                        placeholder="Alex Johnson"
                        className="flex-1 bg-transparent text-white placeholder:text-gray-600 text-sm outline-none"
                        autoComplete="name"
                      />
                    </Field>

                    {/* Email */}
                    <Field
                      label="Email address"
                      icon={<Mail size={15} />}
                      error={touched.email ? fieldErrors.email : undefined}
                      success={touched.email && !fieldErrors.email && email.length > 0}
                    >
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); clearField("email"); }}
                        onBlur={() => handleBlur("email", email)}
                        placeholder="alex@example.com"
                        className="flex-1 bg-transparent text-white placeholder:text-gray-600 text-sm outline-none"
                        autoComplete="email"
                      />
                    </Field>

                    {/* Password */}
                    <Field
                      label="Password"
                      icon={<Lock size={15} />}
                      error={touched.password ? fieldErrors.password : undefined}
                      hint={!touched.password ? "Min. 8 characters" : undefined}
                      success={touched.password && !fieldErrors.password && password.length >= 8}
                    >
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); clearField("password"); if (confirmPassword) handleBlur("confirmPassword", confirmPassword); }}
                        onBlur={() => handleBlur("password", password)}
                        placeholder="Min. 8 characters"
                        className="flex-1 bg-transparent text-white placeholder:text-gray-600 text-sm outline-none"
                        autoComplete="new-password"
                      />
                      <button type="button" onClick={() => setShowPassword((v) => !v)}
                        className="text-gray-500 hover:text-gray-300 transition-colors shrink-0">
                        {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                      </button>
                    </Field>
                    <StrengthBar password={password} />

                    {/* Confirm Password */}
                    <Field
                      label="Confirm password"
                      icon={<Lock size={15} />}
                      error={touched.confirmPassword ? fieldErrors.confirmPassword : undefined}
                      success={confirmOk}
                    >
                      <input
                        type={showConfirm ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => { setConfirmPassword(e.target.value); clearField("confirmPassword"); }}
                        onBlur={() => handleBlur("confirmPassword", confirmPassword)}
                        placeholder="Re-enter your password"
                        className="flex-1 bg-transparent text-white placeholder:text-gray-600 text-sm outline-none"
                        autoComplete="new-password"
                      />
                      <button type="button" onClick={() => setShowConfirm((v) => !v)}
                        className="text-gray-500 hover:text-gray-300 transition-colors shrink-0">
                        {showConfirm ? <EyeOff size={14} /> : <Eye size={14} />}
                      </button>
                    </Field>

                    {/* Terms */}
                    <div className="pt-0.5">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <button
                          type="button"
                          onClick={() => { setAgreed((v) => !v); handleBlur("agreed", !agreed); }}
                          className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                            agreed ? "bg-[#22c55e] border-[#22c55e]" : `border-white/20 bg-white/5 group-hover:border-white/40 ${fieldErrors.agreed && touched.agreed ? "border-red-500/50" : ""}`
                          }`}
                        >
                          {agreed && <Check size={11} className="text-black" strokeWidth={3} />}
                        </button>
                        <span className="text-[13px] text-gray-400 leading-relaxed">
                          I agree to the{" "}
                          <a href="/terms" className="text-[#22c55e] hover:underline" target="_blank">Terms of Service</a>
                          {" "}and{" "}
                          <a href="/privacy" className="text-[#22c55e] hover:underline" target="_blank">Privacy Policy</a>
                        </span>
                      </label>
                      {fieldErrors.agreed && touched.agreed && (
                        <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle size={11} /> {fieldErrors.agreed}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={!loading ? { scale: 1.02 } : {}}
                      whileTap={!loading ? { scale: 0.98 } : {}}
                      className="w-full bg-[#22c55e] hover:bg-[#16a34a] disabled:opacity-60 disabled:cursor-not-allowed text-black font-bold py-3.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(34,197,94,0.22)] mt-1"
                    >
                      {loading ? (
                        <><Loader2 size={15} className="animate-spin" /> Creating your account…</>
                      ) : (
                        "Create Free Account →"
                      )}
                    </motion.button>
                  </form>

                  <p className="text-center text-[11px] text-gray-600 mt-4">
                    No credit card required · Cancel anytime · Free forever plan
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-8 flex flex-col items-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 14, stiffness: 220, delay: 0.05 }}
                    className="w-20 h-20 rounded-full bg-[#22c55e]/12 border-2 border-[#22c55e] flex items-center justify-center mb-5 relative"
                  >
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }}>
                      <Check size={34} className="text-[#22c55e]" strokeWidth={2.5} />
                    </motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.7], opacity: [0.5, 0] }}
                      transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full border-2 border-[#22c55e]"
                    />
                  </motion.div>

                  <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
                    className="text-2xl font-bold text-white mb-2">
                    You're in! 🎉
                  </motion.h2>
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                    className="text-gray-400 text-sm mb-1">
                    Welcome to EarnStack, <span className="text-white font-semibold">{name}</span>!
                  </motion.p>
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
                    className="text-gray-600 text-xs mb-7">
                    Account created for <span className="text-gray-400">{email}</span>
                  </motion.p>

                  {/* What's next checklist */}
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                    className="w-full bg-white/4 border border-white/8 rounded-xl p-4 mb-6 text-left space-y-2.5">
                    {[
                      "Set up your creator profile",
                      "Create your first digital product",
                      "Launch your AI-powered funnel",
                    ].map((item, i) => (
                      <motion.div key={item} className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.55 + i * 0.08 }}>
                        <div className="w-5 h-5 rounded-full bg-[#22c55e]/15 border border-[#22c55e]/30 flex items-center justify-center shrink-0">
                          <Check size={10} className="text-[#22c55e]" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-gray-300">{item}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
                    onClick={handleClose}
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold px-8 py-3.5 rounded-xl text-sm transition-colors shadow-[0_0_24px_rgba(34,197,94,0.22)]"
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
