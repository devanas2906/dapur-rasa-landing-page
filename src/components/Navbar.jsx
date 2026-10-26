import { useState } from "react";
import ArrowIcon from "./ArrowIcon.jsx";
import Brand from "./Brand.jsx";
import WhatsAppLink from "./WhatsAppLink.jsx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav
          className={`main-nav ${menuOpen ? "main-nav-open" : ""}`}
          id="primary-navigation"
          aria-label="Navigasi utama"
        >
          <a href="#beranda" onClick={closeMenu}>Beranda</a>
          <a href="#menu" onClick={closeMenu}>Menu</a>
          <a href="#tentang" onClick={closeMenu}>Tentang Kami</a>
          <a href="#cara-pesan" onClick={closeMenu}>Cara Pesan</a>
          <WhatsAppLink
            className="nav-cta"
            message="Halo Dapur Rasa, saya ingin konsultasi katering."
            onClick={closeMenu}
          >
            Hubungi Kami <ArrowIcon />
          </WhatsAppLink>
        </nav>
      </div>
    </header>
  );
}
