import { motion } from "framer-motion";
import {
  SiStripe, SiPaypal, SiZoom, SiYoutube, SiZapier,
  SiGoogleanalytics, SiGoogledrive, SiGooglecalendar,
  SiMailchimp, SiShopify, SiWebflow, SiNotion,
  SiAirtable, SiSlack, SiDiscord, SiTelegram,
  SiTypeform, SiCalendly
} from "react-icons/si";

type IconItem = { Icon: (props: { size?: number; style?: { color: string } }) => JSX.Element; color: string; bg: string; label: string };

const row1: IconItem[] = [
  { Icon: SiStripe, color: "#635BFF", bg: "#1a1a3e", label: "Stripe" },
  { Icon: SiPaypal, color: "#009cde", bg: "#1a1a3e", label: "PayPal" },
  { Icon: SiZoom, color: "#2D8CFF", bg: "#1a1a3e", label: "Zoom" },
  { Icon: SiYoutube, color: "#FF0000", bg: "#1a1a3e", label: "YouTube" },
  { Icon: SiZapier, color: "#FF4A00", bg: "#1a1a3e", label: "Zapier" },
  { Icon: SiSlack, color: "#4A154B", bg: "#1a1a3e", label: "Slack" },
  { Icon: SiDiscord, color: "#5865F2", bg: "#1a1a3e", label: "Discord" },
];

const row2: IconItem[] = [
  { Icon: SiGoogleanalytics, color: "#F9AB00", bg: "#1a1a3e", label: "Google Analytics" },
  { Icon: SiGoogledrive, color: "#4285F4", bg: "#1a1a3e", label: "Google Drive" },
  { Icon: SiGooglecalendar, color: "#34A853", bg: "#1a1a3e", label: "Google Calendar" },
  { Icon: SiMailchimp, color: "#FFE01B", bg: "#1a1a2a", label: "Mailchimp" },
  { Icon: SiShopify, color: "#96BF48", bg: "#1a1a3e", label: "Shopify" },
  { Icon: SiWebflow, color: "#4353FF", bg: "#1a1a3e", label: "Webflow" },
];

const row3: IconItem[] = [
  { Icon: SiNotion, color: "#ffffff", bg: "#1a1a3e", label: "Notion" },
  { Icon: SiAirtable, color: "#18BFFF", bg: "#1a1a3e", label: "Airtable" },
  { Icon: SiTelegram, color: "#26A5E4", bg: "#1a1a3e", label: "Telegram" },
  { Icon: SiTypeform, color: "#262627", bg: "#2a2a2a", label: "Typeform" },
];

function IconRow({ icons, offset = false }: { icons: IconItem[]; offset?: boolean }) {
  return (
    <div className={`flex gap-4 justify-center ${offset ? "ml-16 md:ml-24" : ""}`}>
      {icons.map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.1, y: -4 }}
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <div
            className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center"
            style={{ background: item.bg, border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <item.Icon
              size={32}
              style={{ color: item.color }}
            />
          </div>
          <span className="text-xs text-white/40 font-medium">{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function SocialChannels() {
  return (
    <section className="py-24 px-6 w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-3 leading-tight">
          Connects with every tool<br />in your creator stack
        </h2>
        <svg viewBox="0 0 200 12" fill="none" className="w-48 mx-auto mb-6">
          <path d="M0,8 C50,0 150,12 200,4" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
          EarnStack plugs into your favourite payment processors, email tools, CRMs, webinar platforms, and productivity apps — no code required.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col gap-6 items-center max-w-4xl mx-auto mt-12"
      >
        <IconRow icons={row1} offset={true} />
        <IconRow icons={row2} />
        <IconRow icons={row3} offset={true} />
      </motion.div>
    </section>
  );
}
