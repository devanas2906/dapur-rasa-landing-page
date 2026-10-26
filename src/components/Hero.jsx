import { addressData } from "../data/address.js";
import ArrowIcon from "./ArrowIcon.jsx";
import WhatsAppLink from "./WhatsAppLink.jsx";

export default function Hero() {
  return (
    <section className="hero section-wrap" id="beranda">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          Katering rumahan · {addressData.city}
        </div>
        <h1>
          Sajian hangat,
          <br />
          <em>momen berkesan.</em>
        </h1>
        <p className="hero-description">
          Dari dapur kami ke meja Anda. Hidangan rumahan yang dibuat sepenuh
          hati untuk menemani setiap cerita dan perayaan.
        </p>
        <div className="hero-actions">
          <WhatsAppLink
            className="button button-primary"
            message="Halo Dapur Rasa, saya ingin pesan katering. Bisa dibantu?"
          >
            Pesan via WhatsApp <ArrowIcon />
          </WhatsAppLink>
          <a className="text-link" href="#menu">
            Lihat menu <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-note">
          <span className="note-dot" />
          Dibuat segar setiap hari, dengan rasa yang akrab di hati.
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-image-frame">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=90"
            alt="Sajian makan rumahan berwarna-warni yang siap dinikmati"
            fetchPriority="high"
          />
        </div>
        <div className="hero-image-caption">
          <span className="caption-icon">✳</span>
          <span>
            <strong>Dimasak dengan hati</strong>
            <small>Hangatnya terasa di setiap suapan</small>
          </span>
        </div>
        <div className="hero-side-label">RASA YANG SELALU DIRINDUKAN</div>
      </div>
    </section>
  );
}
