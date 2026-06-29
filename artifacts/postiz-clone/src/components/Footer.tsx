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
      { label: "Help Center", href: "/help" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

const socials = [
  { label: "𝕏", href: "https://twitter.com/earnstack", title: "X / Twitter" },
  { label: "in", href: "https://linkedin.com/company/earnstack", title: "LinkedIn" },
  { label: "▶", href: "https://youtube.com/@earnstack", title: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0f0a] pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">

          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <img src="/earnstack-logo.png" alt="EarnStack" className="w-8 h-8 object-contain" />
              <span className="font-display font-bold text-xl text-white tracking-tight">EarnStack</span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 max-w-xs leading-relaxed">
              The all-in-one AI creator monetization platform. Turn your skills into income — products, courses, communities, and more.
            </p>
            <div className="flex gap-3">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.title}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#22c55e] hover:bg-[#22c55e]/10 transition-all text-xs font-bold">
                  {s.label}
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
                    <Link href={href} className="text-sm text-gray-400 hover:text-[#22c55e] transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© 2026 EarnStack Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms</Link>
            <Link href="/help" className="hover:text-gray-400 transition-colors">Help Center</Link>
            <a href="mailto:support@earnstack.in" className="hover:text-gray-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
