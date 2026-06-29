import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using EarnStack ("Platform"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Platform. These Terms apply to all users, including creators and their customers.`,
  },
  {
    title: "2. Description of Services",
    content: `EarnStack provides a creator monetization platform that includes tools for:

• Creating and selling digital products (templates, ebooks, software)
• Building and hosting online courses
• Managing membership communities
• Creating marketing funnels and landing pages
• AI-powered marketing and content generation
• Payment processing and analytics

We reserve the right to modify, suspend, or discontinue any part of the Platform at any time with reasonable notice.`,
  },
  {
    title: "3. Account Registration",
    content: `To use EarnStack, you must register for an account. You agree to:

• Provide accurate, current, and complete information during registration
• Maintain and update your account information
• Keep your password confidential and secure
• Accept responsibility for all activities under your account
• Notify us immediately of any unauthorized use of your account

You must be at least 16 years old to create an account. If you register on behalf of a business entity, you represent that you have authority to bind that entity to these Terms.`,
  },
  {
    title: "4. Creator Responsibilities",
    content: `As a creator on EarnStack, you are responsible for:

• All content you create, upload, or sell on the Platform
• Ensuring your products and services comply with applicable laws
• Accurately representing your products to your customers
• Handling customer disputes and refund requests in good faith
• Maintaining appropriate licenses for any third-party content
• Paying all applicable taxes on your earnings

EarnStack does not take a commission on your sales. You keep 100% of your revenue (subject to payment processor fees).`,
  },
  {
    title: "5. Prohibited Content",
    content: `You may not use EarnStack to create, distribute, or sell:

• Illegal goods or services
• Counterfeit or unauthorized copies of others' work (copyright infringement)
• Adult content, gambling services, or weapons
• Fraudulent, misleading, or deceptive products
• Malware, spyware, or any harmful software
• Content that harasses, threatens, or discriminates
• Multi-level marketing or pyramid schemes

Violation of these prohibitions may result in immediate account termination and legal action.`,
  },
  {
    title: "6. Payments & Refunds",
    content: `**Subscription fees:** EarnStack subscription fees are charged monthly or annually in advance and are non-refundable except in cases of platform error or as required by law.

**Creator sales:** When your customers purchase products from you, EarnStack acts as the payment facilitator. Payouts are processed according to your payment settings (typically within 2–7 business days).

**Refunds to customers:** You are responsible for your own refund policy. However, EarnStack reserves the right to issue refunds to customers in cases of fraud or serious platform errors.`,
  },
  {
    title: "7. Intellectual Property",
    content: `**Your content:** You retain full ownership of all content you create on EarnStack. By uploading content, you grant EarnStack a limited, non-exclusive license to host and display your content for the purpose of providing the services.

**EarnStack's IP:** The Platform, including its software, design, and branding, is owned by EarnStack and protected by intellectual property laws. You may not copy, modify, or reverse-engineer any part of the Platform.

**Feedback:** Any feedback, suggestions, or ideas you provide about EarnStack may be used by us without any obligation to compensate you.`,
  },
  {
    title: "8. Limitation of Liability",
    content: `To the maximum extent permitted by law, EarnStack shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business, arising out of or in connection with your use of the Platform.

Our total liability to you for any claim arising from these Terms or your use of the Platform shall not exceed the total amount you paid to EarnStack in the 12 months preceding the claim.`,
  },
  {
    title: "9. Termination",
    content: `Either party may terminate this agreement at any time. You may close your account through your account settings. EarnStack may suspend or terminate your account immediately if you violate these Terms, engage in fraudulent activity, or pose a risk to other users or the Platform.

Upon termination, your right to access the Platform ceases immediately. Sections relating to intellectual property, limitation of liability, and dispute resolution survive termination.`,
  },
  {
    title: "10. Governing Law & Disputes",
    content: `These Terms are governed by the laws of India. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka, India.

Before initiating any legal action, you agree to attempt to resolve disputes informally by contacting us at legal@earnstack.in. We will attempt to resolve disputes within 30 days.`,
  },
  {
    title: "11. Changes to Terms",
    content: `We may update these Terms from time to time. We will provide at least 30 days' notice of material changes via email or Platform notification. Continued use of EarnStack after the effective date constitutes acceptance of the updated Terms.`,
  },
  {
    title: "12. Contact",
    content: `For questions about these Terms, contact us at:

legal@earnstack.in
EarnStack Technologies Pvt. Ltd.
91springboard, Koramangala, Bengaluru 560034, India`,
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white font-body">
      <Navbar />

      <section className="pt-20 pb-10 px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-400 text-xs font-semibold uppercase tracking-widest mb-6">Legal</span>
          <h1 className="text-5xl font-display font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-400">Last updated: June 28, 2026 · Effective: June 28, 2026</p>
          <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-sm text-amber-400">
            Please read these terms carefully before using EarnStack. They form a legally binding agreement between you and EarnStack Technologies Pvt. Ltd.
          </div>
        </motion.div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          {sections.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
              className="border-b border-white/5 pb-10 last:border-0">
              <h2 className="text-xl font-display font-bold mb-4 text-white">{s.title}</h2>
              <div className="text-gray-400 text-sm leading-loose whitespace-pre-line space-y-2">
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
