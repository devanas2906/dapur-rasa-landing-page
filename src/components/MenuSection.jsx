import { packages } from "../data/landingContent.js";
import ArrowIcon from "./ArrowIcon.jsx";
import WhatsAppLink from "./WhatsAppLink.jsx";

export default function MenuSection() {
  return (
    <section className="menu-section section-pad" id="menu">
      <div className="section-wrap">
        <div className="section-heading menu-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" />Pilihan dari dapur kami</div>
            <h2>Menu untuk <em>setiap cerita.</em></h2>
          </div>
          <p>
            Sajian rumahan yang bisa disesuaikan dengan kebutuhan acara dan
            selera Anda.
          </p>
        </div>
        <div className="menu-grid">
          {packages.map((item, index) => (
            <article className="menu-card" key={item.name}>
              <div className="menu-image">
                <img src={item.image} alt={item.alt} loading="lazy" />
                {item.tag && <span className="menu-tag">{item.tag}</span>}
                <span className="menu-index">0{index + 1}</span>
              </div>
              <div className="menu-card-body">
                <p className="menu-subtitle">{item.subtitle}</p>
                <div className="menu-title-row">
                  <h3>{item.name}</h3>
                  <span className="menu-price">
                    <strong>{item.price}</strong>
                    <small>{item.unit}</small>
                  </span>
                </div>
                <p className="menu-description">{item.description}</p>
                <ul className="menu-items">
                  {item.items.map((menuItem) => <li key={menuItem}>{menuItem}</li>)}
                </ul>
                <WhatsAppLink
                  className="menu-order"
                  message={`Halo Dapur Rasa, saya tertarik dengan ${item.name}. Boleh minta info lebih lanjut?`}
                >
                  Tanya paket ini <ArrowIcon />
                </WhatsAppLink>
              </div>
            </article>
          ))}
        </div>
        <p className="menu-disclaimer">
          Harga dapat berubah sesuai pilihan menu, jumlah porsi, dan lokasi pengantaran.
        </p>
      </div>
    </section>
  );
}
