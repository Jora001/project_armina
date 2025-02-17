
export const NAVIGATION = [
  {
    label: "Willkommen",
    href: "/",
  },
  {
    label: "Schule und Musik & Kunst",
    href: "/schule",
    submenu: [
      { label: "Konzept", href: "/konzept" },
      {
        label: "GESANG",
        href: "/gesang",
        submenu: [
          { label: "Stimmbildung", href: "/stimmbildung" },
          { label: "Schauspiel", href: "/schauspiel" },
          { label: "Instrumental Unterricht", href: "/instrumental" },
        ],
      },
      { label: "Schüler", href: "/schuller" },
    ],
  },
  {
    label: "Projekte",
    href: "/projecte",
  },
  {
    label: "Armina Aristak",
    href: "/armina",
    submenu: [
      { label: "Vita", href: "/vita" },
      { label: "MEINE VIDEOS", href: "/menvideos" },
      { label: "Bilder", href: "/bilder" },
    ],
  },
  {
    label: "Bewertungen",
    href: "/Bewertungen",
  },
  {
    label: "Kontakt",
    href: "/contact",
  },
];
