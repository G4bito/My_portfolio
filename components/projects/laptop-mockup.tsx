import { MockupScreen, type MockupProps } from "./mockup-screen";
import styles from "./device-mockups.module.css";

export function LaptopMockup(props: MockupProps) {
  return (
    <div
      className={styles.laptop}
      data-device="laptop"
      aria-hidden={props.decorative || undefined}
    >
      <div className={styles.laptopLid}>
        <span className={styles.webcam} aria-hidden="true" />
        <div className={styles.laptopScreen}>
          <MockupScreen {...props} />
        </div>
      </div>
      <div className={styles.laptopBase} aria-hidden="true">
        <span />
      </div>
      <div className={styles.laptopFoot} aria-hidden="true" />
    </div>
  );
}
