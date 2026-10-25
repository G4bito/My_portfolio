import { MockupScreen, type MockupProps } from "./mockup-screen";
import styles from "./device-mockups.module.css";

export function PhoneMockup(props: MockupProps) {
  return (
    <div
      className={styles.phone}
      data-device="phone"
      aria-hidden={props.decorative || undefined}
    >
      <span className={styles.phoneSpeaker} aria-hidden="true" />
      <span className={styles.phoneButtons} aria-hidden="true" />
      <div className={styles.phoneScreen}>
        <MockupScreen {...props} sizes="(min-width: 640px) 225px, 65vw" />
      </div>
      <span className={styles.phoneHome} aria-hidden="true" />
    </div>
  );
}
