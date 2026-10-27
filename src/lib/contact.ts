// Link-Ziele für Telefon, WhatsApp und E-Mail aus den Anzeige-Nummern bauen
export const phoneHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;

export const whatsappHref = (number: string) =>
  `https://wa.me/${number.replace(/\D/g, "")}`;

export const mailHref = (email: string) => `mailto:${email}`;
