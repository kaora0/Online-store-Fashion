import styles from "./Promo.module.scss";
import { Button } from "../Button/Button.jsx";

export function Promo() {
  return (
    <section className={styles.promo}>
      <div className={styles.promo_content}>
        <div className={styles.promo_text}>
          <div className={styles.promo_title}>
            <span className={styles.white_light}>LET’S</span> EXPLORE{" "}
            <span className={styles.yellow_light}>UNIQUE</span> CLOTHES.
          </div>
          <div className={styles.promo_desc}>
            Live for Influential and Innovative fashion!
          </div>
          <div className={styles.promo_btn}>
            <Button textButton={"Shop Now"}></Button>
          </div>
        </div>
        <div className={styles.promo_img}>
          <img
            src="../public/images/header-img.jpg"
            alt="#"
            style={{ verticalAlign: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
