import { reasons } from "../data/landingContent.js";
import ReasonIcon from "./ReasonIcon.jsx";

export default function AboutSection() {
  return (
    <section className="about-section section-pad" id="tentang">
      <div className="section-wrap">
        <div className="about-top">
          <div className="about-intro">
            <div className="eyebrow"><span className="eyebrow-line" />Kenapa Dapur Rasa</div>
            <h2>Rasa rumahan,<br /><em>dibuat istimewa.</em></h2>
          </div>
          <p className="about-lede">
            Kami percaya makanan yang baik bukan cuma soal rasa. Ada perhatian
            pada bahan, kesungguhan dalam proses, dan kebahagiaan saat berbagi.
          </p>
        </div>
        <div className="reasons-grid">
          {reasons.map((reason) => (
            <article className="reason-card" key={reason.number}>
              <div className="reason-card-top">
                <span className="reason-icon"><ReasonIcon kind={reason.icon} /></span>
                <span className="reason-number">{reason.number}</span>
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
