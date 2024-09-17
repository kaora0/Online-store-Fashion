import styles from "./Header.module.scss";
import { NAV } from "./NavBar.jsx";
import { Button } from "../Button/Button.jsx";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_row}>
          <div className={styles.logo}>
            <img
              src="../public/icons/logo.svg"
              alt="#"
              width={32}
              // style={{ padding: 20 }}
            />
            <span>Fahion</span>
          </div>
          <nav className={styles.nav}>
            {NAV.map((item) => (
              <a key={item.way}>{item.name}</a>
            ))}
            <Button textButton={"Sign Up"} />
          </nav>
        </div>
      </header>
    </>
  );
}
