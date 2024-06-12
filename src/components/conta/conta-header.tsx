"use client";

import React from "react";
import Feed from "@/icons/feed-icon";
import Adicionar from "@/icons/adicionar-icon";
import Estatisticas from "@/icons/estatisticas-icon";
import Sair from "@/icons/sair-icon";
import styles from "./conta-header.module.css";
import UseMedia from "@/hooks/useMedia";
import { usePathname } from "next/navigation";
import Link from "next/link";
import logout from "@/actions/logout";

function getTitle(pathname: string) {
  switch (pathname) {
    case "/conta/postar":
      return "Poste Sua Foto";
    case "/conta/estatisticas":
      return "Estatísticas";
    default:
      return "Minha Conta";
  }
}

export default function ContaHeader() {
  const mobile = UseMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const pathname = usePathname();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  async function HandleLogout() {
    await logout();
    window.location.href = "/login";
  }

  return (
    <header className={styles.header}>
      <h1 className="title">{getTitle(pathname)}</h1>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <Link href="/conta" className={pathname === "/conta" ? "active" : ""}>
          <Feed />
          {mobile && "Minhas Fotos"}
        </Link>
        <Link
          href="/conta/estatisticas"
          className={pathname === "/conta/estatisticas" ? "active" : ""}
        >
          <Estatisticas />
          {mobile && "Estatísticas"}
        </Link>
        <Link
          href="/conta/postar"
          className={pathname === "/conta/postar" ? "active" : ""}
        >
          <Adicionar />
          {mobile && "Adicionar Foto"}
        </Link>
        <button onClick={HandleLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </header>
  );
}
