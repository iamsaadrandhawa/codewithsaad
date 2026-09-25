const PHONE = '923450450266'; // +92 345 0450266, no leading zero/plus for wa.me

export const getWhatsAppLink = (
  message = "Hi Saad, I found your portfolio and I'd like to talk about a project."
): string => `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
