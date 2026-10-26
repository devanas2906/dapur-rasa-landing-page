import ArrowIcon from "./ArrowIcon.jsx";
import WhatsAppLink from "./WhatsAppLink.jsx";

export default function ContactSection() {
  return (
    <section className="contact-section" id="kontak">
      <div className="contact-inner section-wrap">
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" />Ada acara dalam waktu dekat?</div>
          <h2>Mari siapkan<br /><em>hidangan terbaik.</em></h2>
          <p>Obrolkan rencana Anda bersama kami. Kami senang membantu.</p>
        </div>
        <WhatsAppLink
          className="button button-light"
          message="Halo Dapur Rasa, saya ingin bertanya tentang layanan katering."
        >
          Hubungi Dapur Rasa <ArrowIcon />
        </WhatsAppLink>
        <span className="contact-decoration" aria-hidden="true">✳</span>
      </div>
    </section>
  );
}
