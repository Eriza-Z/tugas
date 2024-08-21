import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://erizazg.my.id/tugas", // replace this with your deployed domain
  author: "Eriza Zehezkiel Gracia",
  desc: "Web berisi tugas yang sudah diarsipkan dan diunggah ke web.",
  title: "Tugas",
  lightAndDarkMode: false,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "id", // html lang code. Set this empty and default will be "en"
  langTag: ["id-ID"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/Eriza-Z",
    linkTitle: ` ${SITE.title} on Github`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/ezgrxs",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  }
];
