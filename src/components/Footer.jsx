import { addressData } from "../data/address.js";
import Brand from "./Brand.jsx";
import WhatsAppLink from "./WhatsAppLink.jsx";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-wrap">
        <div className="footer-main">
          <div className="footer-brand-block">
            <Brand light />
            <p>Sajian rumahan yang dibuat sepenuh hati, untuk momen yang berarti.</p>
          </div>
          <div className="footer-column">
            <h3>Jelajahi</h3>
            <a href="#menu">Menu katering</a>
            <a href="#tentang">Tentang kami</a>
            <a href="#cara-pesan">Cara pesan</a>
          </div>
          <div className="footer-column">
            <h3>Hubungi</h3>
            <WhatsAppLink message="Halo Dapur Rasa, saya ingin bertanya tentang katering.">
              WhatsApp: +62 812-3456-7890
            </WhatsAppLink>
            <span>{addressData.city}, {addressData.province}</span>
            <span>Melayani area {addressData.city} dan sekitarnya</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Dapur Rasa. Dibuat dengan sepenuh hati.</p>
        </div>
      </div>
    </footer>
  );
}
