import { NextLink } from "@/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

import moment from "moment-timezone";

import styles from "./layouts-root-footer-bottom-line.module.scss";

export default function LayoutsRootFooterBottomLineView() {
  const t = useTranslations("layouts.root.footer.bottom-line");

  return (
    <div className={styles.container}>
      <ul className={styles.social}>
        {items.map((item) => (
          <li className={styles.item} key={item.key}>
            <NextLink href="/privacy-notice">
              <Image src={item.icon} width={24} height={24} alt={item.key} />
            </NextLink>
          </li>
        ))}
      </ul>

      <p className={styles.copyright}>
        © {moment().format("YYYY")} {t("copyright")}
      </p>
    </div>
  );
}

const items = [
  { key: "instagram", icon: "/images/socials/instagram.svg" },
  { key: "linkedin", icon: "/images/socials/linkedin.svg" },
  { key: "facebook", icon: "/images/socials/facebook.svg" },
  { key: "twitter", icon: "/images/socials/twitter.svg" },
  { key: "youtube", icon: "/images/socials/youtube.svg" },
];
