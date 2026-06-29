import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.

**Account information:** Name, email address, password, and profile details.
**Payment information:** Billing address and payment method details (processed securely by our payment providers — we do not store full card numbers).
**Content:** Digital products, courses, community posts, and other content you create on EarnStack.
**Usage data:** Information about how you use our platform, including pages visited, features used, and actions taken.
**Device information:** IP address, browser type, operating system, and device identifiers.
**Communications:** Records of your interactions with our support team.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Process transactions and send related information
• Send technical notices, updates, and support messages
• Respond to your comments and questions
• Monitor and analyze trends and usage
• Detect, prevent, and address fraud and abuse
• Personalize your experience with AI-powered recommendations
• Send marketing communications (you can opt out at any time)
• Comply with legal obligations`,
  },
  {
    title: "3. Sharing of Information",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:

**Service providers:** With vendors who help us provide our services (hosting, payment processing, analytics, email delivery).
**Business transfers:** In connection with a merger, acquisition, or sale of assets — your information may be transferred.
**Legal requirements:** When required by law, court order, or government authority.
**Protection of rights:** To protect the rights, property, or safety of EarnStack, our users, or the public.
**With your consent:** In any other case where we have your explicit consent.`,
  },
  {
    title: "4. Data Retention",
    content: `We retain your personal information for as long as your account is active or as needed to provide you with our services. You may delete your account at any time, after which we will delete or anonymize your personal data within 30 days, except where we are required to retain it for legal or legitimate business purposes.`,
  },
  {
    title: "5. Security",
    content: `We implement industry-standard security measures to protect your information, including:

• SSL/TLS encryption for all data in transit
• AES-256 encryption for sensitive data at rest
• Regular security audits and penetration testing
• Strict access controls for our team
• Two-factor authentication available for all accounts

Despite these measures, no security system is impenetrable, and we cannot guarantee the absolute security of your information.`,
  },
  {
    title: "6. Cookies & Tracking",
    content: `We use cookies and similar tracking technologies to collect and use information about your use of EarnStack. Cookies help us remember your preferences, understand how you use our platform, and show you relevant content.

You can control cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our services.`,
  },
  {
    title: "7. Your Rights",
    content: `Depending on your location, you may have the following rights regarding your personal data:

• **Access:** Request a copy of the personal data we hold about you.
• **Correction:** Request correction of inaccurate data.
• **Deletion:** Request deletion of your personal data.
• **Portability:** Request a machine-readable copy of your data.
• **Objection:** Object to certain types of processing.
• **Withdrawal of consent:** Withdraw previously given consent at any time.

To exercise any of these rights, contact us at privacy@earnstack.in.`,
  },
  {
    title: "8. Children's Privacy",
    content: `EarnStack is not directed to children under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately so we can delete it.`,
  },
  {
    title: "9. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of any significant changes by email or by posting a notice on our platform. Your continued use of EarnStack after the effective date constitutes acceptance of the updated policy.`,
  },
  {
    title: "10. Contact Us",
    content: `If you have questions or concerns about this Privacy Policy, please contact us at:

**EarnStack Technologies Pvt. Ltd.**
Email: privacy@earnstack.in
Address: 91springboard, Koramangala, Bengaluru 560034, India`,
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white font-body">
      <Navbar />

      <section className="pt-20 pb-10 px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-400 text-xs font-semibold uppercase tracking-widest mb-6">Legal</span>
          <h1 className="text-5xl font-display font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: June 28, 2026</p>
          <div className="mt-6 p-4 rounded-xl bg-[#22c55e]/10 border border-[#22c55e]/20 text-sm text-[#22c55e]">
            Your privacy matters to us. We've written this policy in plain language so you understand exactly how your data is used.
          </div>
        </motion.div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          {sections.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="border-b border-white/5 pb-10 last:border-0">
              <h2 className="text-xl font-display font-bold mb-4 text-white">{s.title}</h2>
              <div className="text-gray-400 text-sm leading-loose space-y-2 whitespace-pre-line">
                {s.content.split("\n").map((line, li) => (
                  <p key={li} className={line.startsWith("**") ? "font-semibold text-gray-300" : ""}>
                    {line.replace(/\*\*/g, "")}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
