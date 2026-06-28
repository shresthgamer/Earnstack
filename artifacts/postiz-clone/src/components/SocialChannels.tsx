import { motion } from "framer-motion";
import {
  SiDiscord, SiInstagram, SiThreads, SiFacebook, SiYoutube,
  SiTiktok, SiSlack, SiReddit, SiDribbble,
  SiPinterest, SiMastodon, SiVk, SiX, SiTelegram,
  SiWordpress, SiBluesky
} from "react-icons/si";
import { Linkedin } from "lucide-react";

const row1 = [
  { Icon: SiDiscord, color: "#5865F2", bg: "#1a1a3e" },
  { Icon: SiInstagram, color: "#E4405F", bg: "#1a1a3e" },
  { Icon: SiThreads, color: "#000000", bg: "#fff", iconStyle: { color: "#000" } },
  { Icon: SiFacebook, color: "#1877F2", bg: "#1a1a3e" },
  { Icon: SiYoutube, color: "#FF0000", bg: "#1a1a3e" },
  { Icon: SiTiktok, color: "#ffffff", bg: "#000000" },
  { Icon: SiSlack, color: "#4A154B", bg: "#1a1a3e" },
];

const row2 = [
  { Icon: SiBluesky, color: "#0085ff", bg: "#1a1a3e" },
  { Icon: Linkedin, color: "#0A66C2", bg: "#1a1a3e" },
  { Icon: SiReddit, color: "#FF4500", bg: "#1a1a3e" },
  { Icon: SiDribbble, color: "#EA4C89", bg: "#1a1a3e" },
  { Icon: SiPinterest, color: "#BD081C", bg: "#1a1a3e" },
  { Icon: SiMastodon, color: "#6364FF", bg: "#1a1a3e" },
];

const row3 = [
  { Icon: SiVk, color: "#4680C2", bg: "#1a1a3e" },
  { Icon: SiX, color: "#ffffff", bg: "#000000" },
  { Icon: SiWordpress, color: "#21759B", bg: "#1a1a3e" },
  { Icon: SiTelegram, color: "#26A5E4", bg: "#1a1a3e" },
];

type IconItem = { Icon: (props: { size?: number; style?: { color: string } }) => JSX.Element; color: string; bg: string; iconStyle?: { color: string } };

function IconRow({ icons, offset = false }: { icons: IconItem[]; offset?: boolean }) {
  return (
    <div className={`flex gap-4 justify-center ${offset ? "ml-16 md:ml-24" : ""}`}>
      {icons.map((item, i) => {
        const Icon = item.Icon;
        return (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1, y: -4 }}
            className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center cursor-pointer"
            style={{ background: item.bg, border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <Icon
              size={32}
              style={item.iconStyle ?? { color: item.color }}
            />
          </motion.div>
        );
      })}
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
          Wide list of trending social<br />media channels
        </h2>
        <svg viewBox="0 0 200 12" fill="none" className="w-48 mx-auto mb-6">
          <path d="M0,8 C50,0 150,12 200,4" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
          Harness the power of various social media channels seamlessly integrated into the platform for enhanced workflow efficiency.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col gap-4 items-center max-w-4xl mx-auto mt-12"
      >
        <IconRow icons={row1} offset={true} />
        <IconRow icons={row2} />
        <IconRow icons={row3} offset={true} />
      </motion.div>
    </section>
  );
}
