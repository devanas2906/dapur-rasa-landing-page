export default function Brand({ light = false }) {
  return (
    <a
      className={`brand ${light ? "brand-light" : ""}`}
      href="#beranda"
      aria-label="Dapur Rasa, ke beranda"
    >
      <span className="brand-mark" aria-hidden="true">
        <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 13.5c0-4.1 3.1-7.2 7-9 3.9 1.8 7 4.9 7 9a7 7 0 0 1-14 0Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M12 20c0-4.2.9-7.1 4-10"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="brand-copy">
        <strong>Dapur Rasa</strong>
        <small>Rasa rumahan, sepenuh hati</small>
      </span>
    </a>
  );
}
