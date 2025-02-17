
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
        label: "Fächer",
        href: "",
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
    href: "",
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
