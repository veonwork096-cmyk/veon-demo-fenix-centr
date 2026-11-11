// Facts only from veon/client.json, veon/client-digest.md and veon/research/site-pages.md.
// Nothing here is invented: no prices, no reviews, no counts except «15+ років».

export const FUTURE_NOTE = "Розділ у розробці";

export const phones = {
  sales1: { label: "099 796 23 37", href: "tel:+380997962337" },
  sales2: { label: "093 064 21 53", href: "tel:+380930642153" },
  accounting: { label: "063 665 54 60", href: "tel:+380636655460" },
} as const;

export const emails = {
  sales: "fenixcentr.lviv@gmail.com",
  accounting: "kupi@fenixcentr.ua",
} as const;

const orderBody =
  "Добрий день!\n\nМатеріали й кількість:\n\nАдреса об'єкта (або самовивіз):\n\nТелефон для зв'язку:\n";

export const mailOrder = `mailto:${emails.sales}?subject=${encodeURIComponent("Прорахунок матеріалів")}&body=${encodeURIComponent(orderBody)}`;
export const mailSales = `mailto:${emails.sales}`;
export const mailAccounting = `mailto:${emails.accounting}`;

export const address = {
  short: "вул. Городоцька, 367А",
  full: "Львів, вул. Городоцька, 367А",
  map: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Львів, вулиця Городоцька, 367А")}`,
} as const;

export const instagram = "https://www.instagram.com/fenixcentr.com.ua/";
export const facebookGroup = "https://www.facebook.com/groups/348235718918789/";

/** Office hours W-F005, Europe/Kyiv. Day: 0 = Sunday. */
export const hours: Record<number, [number, number] | null> = {
  0: null,
  1: [9, 18],
  2: [9, 18],
  3: [9, 18],
  4: [9, 18],
  5: [9, 18],
  6: [9, 14],
};

export const cities = ["Львів", "Харків", "Київ", "Дніпро", "Одеса"];

export interface CatalogSection {
  /** Name with soft hyphens for narrow cells. */
  name: string;
  sub?: string;
}

// 12 sections W-F008; subsections only where site-pages.md lists them.
export const catalog: CatalogSection[] = [
  { name: "Загально\u00ADбудівельні матеріали", sub: "Цемент, цегла та газоблок, керамзит, пісок і щебінь, металопрокат" },
  { name: "Оздоблю\u00ADвальні матеріали" },
  { name: "Гіпсо\u00ADкартонні матеріали" },
  { name: "Сухі суміші", sub: "Штукатурки, шпаклівки, клей для плитки і газоблоків, суміші для підлоги" },
  { name: "Покрівля" },
  { name: "Тепло- та звуко\u00ADізоляція", sub: "Пінопласт, XPS, мінеральні утеплювачі, дюбелі" },
  { name: "Пило\u00ADматеріали", sub: "Брус, ДВП і ДСП, ОСБ" },
  { name: "Будівельна хімія" },
  { name: "Лако\u00ADфарбові матеріали" },
  { name: "Сантехніка" },
  { name: "Електро\u00ADтовари" },
  { name: "Будівельні інструменти" },
];

export const brands = ["ARMAWALL", "CERESIT", "KNAUF", "Schneider", "TYTAN", "Ореол-1", "ПОЛІМІН"];

export const nav = [
  { label: "Каталог", href: "#catalog" },
  { label: "Оптовим клієнтам", href: "#wholesale" },
  { label: "Центри KNAUF / CERESIT", href: "#brands" },
  { label: "Доставка і оплата", href: "#delivery" },
  { label: "Про компанію", href: "#about" },
  { label: "Статті", href: null },
  { label: "Контакти", href: "#contacts" },
] as const;
