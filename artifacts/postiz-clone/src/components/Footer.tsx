import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0E0E0E] pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#FF4CE2] flex items-center justify-center font-display font-bold text-white text-lg">
                P
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">postiz</span>
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              AI-powered social media scheduling for modern teams and creators.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer transition-colors">X</div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer transition-colors">in</div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer transition-colors">gh</div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Changelog</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">API Docs</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Status</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Community</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-gray-500">© 2024 Postiz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
