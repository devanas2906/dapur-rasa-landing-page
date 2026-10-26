import { orderingSteps } from "../data/landingContent.js";
import ArrowIcon from "./ArrowIcon.jsx";
import WhatsAppLink from "./WhatsAppLink.jsx";

export default function OrderingSection() {
  return (
    <section className="ordering-section section-pad" id="cara-pesan">
      <div className="section-wrap ordering-layout">
        <div className="ordering-copy">
          <div className="eyebrow"><span className="eyebrow-line" />Mudah, dari awal sampai siap</div>
          <h2>Pesan jadi<br /><em>lebih sederhana.</em></h2>
          <p>Ceritakan acara dan kebutuhan Anda. Kami bantu siapkan sajian yang pas.</p>
          <WhatsAppLink
            className="button button-primary"
            message="Halo Dapur Rasa, saya mau konsultasi untuk pesanan katering."
          >
            Mulai konsultasi <ArrowIcon />
          </WhatsAppLink>
        </div>
        <div className="steps-list">
          {orderingSteps.map(([number, title, text]) => (
            <article className="step-item" key={number}>
              <span className="step-number">{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <ArrowIcon className="step-arrow" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
