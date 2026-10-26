import { WHATSAPP_NUMBER } from "../constants.js";

export default function WhatsAppLink({
  children,
  className = "",
  message,
  ...props
}) {
  const text =
    message ??
    "Halo Dapur Rasa, saya tertarik dengan layanan kateringnya. Boleh minta info menu?";
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
      aria-label={`${children} — buka WhatsApp`}
      {...props}
    >
      {children}
    </a>
  );
}
