import { Link } from "wouter";

const navLinks = [
  {
    title: "Platform",
    links: [
      { label: "Features", href: "/features" },
      { label: "AI Tools", href: "/ai-tools" },
      { label: "Pricing", href: "/pricing" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Digital Products", href: "/features" },
      { label: "Online Courses", href: "/features" },
      { label: "Memberships", href: "/features" },
      { label: "Sales Funnels", href: "/features" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "API", href: "#" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0f0a] pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">

          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#22c55e] flex items-center justify-center">
                <span className="text-black font-bold text-sm font-display">E</span>
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">EarnStack</span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 max-w-xs">
              The all-in-one AI creator monetization platform. Turn your skills into income — products, courses, communities, and more.
            </p>
            <div className="flex gap-3">
              {["X", "in", "yt"].map(s => (
                <a key={s} href="#"
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#22c55e] transition-colors text-xs font-bold">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {navLinks.map(col => (
            <div key={col.title}>
              <h4 className="font-bold text-white mb-4 text-sm">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map(({ label, href }) => (
                  <li key={label}>
                    {href.startsWith("/") ? (
                      <Link href={href} className="text-sm text-gray-400 hover:text-[#22c55e] transition-colors">
                        {label}
                      </Link>
                    ) : (
                      <a href={href} className="text-sm text-gray-400 hover:text-[#22c55e] transition-colors">
                        {label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© 2026 EarnStack. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Help Center</a>
            <a href="#" className="hover:text-gray-400 transition-colors">API</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
