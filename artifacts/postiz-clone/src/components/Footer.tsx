import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0f0a] pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">

          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <img src="/earnstack-logo.png" alt="EarnStack" className="w-8 h-8 object-contain" />
              <span className="font-display font-bold text-xl text-white tracking-tight">EarnStack</span>
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              The all-in-one AI creator monetization platform. Turn your skills into income.
            </p>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#22c55e] cursor-pointer transition-colors text-xs font-bold">X</div>
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#22c55e] cursor-pointer transition-colors text-xs font-bold">in</div>
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#22c55e] cursor-pointer transition-colors text-xs font-bold">yt</div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Products</h4>
            <ul className="space-y-3">
              {["Digital Products", "Courses", "Memberships", "Funnels", "Creator Store"].map(item => (
                <li key={item}><Link href="#" className="text-sm text-gray-400 hover:text-[#22c55e] transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm">AI Tools</h4>
            <ul className="space-y-3">
              {["AI Product Generator", "AI Course Generator", "AI Funnel Builder", "AI Email Writer", "AI Chatbot Builder"].map(item => (
                <li key={item}><Link href="#" className="text-sm text-gray-400 hover:text-[#22c55e] transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Resources</h4>
            <ul className="space-y-3">
              {["Documentation", "Blog", "Templates", "Help Center", "API"].map(item => (
                <li key={item}><Link href="#" className="text-sm text-gray-400 hover:text-[#22c55e] transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Company</h4>
            <ul className="space-y-3">
              {["About", "Careers", "Pricing", "Privacy Policy", "Terms"].map(item => (
                <li key={item}><Link href="#" className="text-sm text-gray-400 hover:text-[#22c55e] transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© 2025 EarnStack. All rights reserved.</p>
          <p className="text-sm text-gray-600">Turn Your Skills Into Income. 🚀</p>
        </div>
      </div>
    </footer>
  );
}
