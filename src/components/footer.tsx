import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src={"/assets/dogs-footer.svg"}
        alt="Dogs"
        width={28}
        height={22}
        priority
      />
      <p>Dogs. Alguns direitos reservados</p>
    </footer>
  );
}
