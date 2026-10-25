import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { ProjectScreenshot } from "@/lib/projects";
import styles from "./device-mockups.module.css";

export type MockupProps = {
  title: string;
  screenshot: ProjectScreenshot | undefined;
  decorative?: boolean;
};

export function MockupScreen({
  title,
  screenshot,
  decorative = false,
  sizes = "(min-width: 1024px) 540px, 90vw",
}: MockupProps & { sizes?: string }) {
  return screenshot ? (
    <Image
      src={screenshot.src}
      alt={decorative ? "" : screenshot.alt}
      fill
      sizes={sizes}
      className={styles.screenshot}
    />
  ) : (
    <div className={styles.emptyScreen}>
      <ImageIcon size={23} strokeWidth={1.25} aria-hidden="true" />
      <span>{title}</span>
      <strong>Screenshot needed</strong>
      <p>No project screenshot supplied.</p>
    </div>
  );
}
