import { NuxtOptionsHead } from "@nuxt/types/config/head"

/* Define constants */
const image = "/assets/icons/icon.png"
const description =
  "Young web application developer from Turkey, interested in programming, trying to improve his JavaScript skills!"

const Head: NuxtOptionsHead = {
  title: "uygarugurlu.com.tr",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: description,
    },
    /* Twitter */
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary",
    },
    {
      hid: "twitter:site",
      name: "twitter:site",
      content: "@uuygarugurlu",
    },
    {
      hid: "twitter:creator",
      name: "twitter:creator",
      content: "@uuygarugurlu",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "uygarugurlu.com.tr",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: description,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: image,
    },
    /* Open-Graph */
    {
      hid: "og:type",
      name: "og:type",
      content: "website",
    },
    {
      hid: "og:site_name",
      name: "og:site_name",
      content: "uygarugurlu.com.tr",
    },
    {
      hid: "og:description",
      name: "og:description",
      content: description,
    },
    {
      hid: "og:image",
      name: "og:image",
      content: image,
    },
    /* Others */
    {
      hid: "theme-color",
      name: "theme-color",
      content: "#171717",
    },
  ].map((i) => {
    // @ts-ignore-next-line
    if (i.name && !i.property) i.property = i.name
    return i
  }),
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/assets/icons/favicon.png",
    },
    {
      rel: "search",
      type: "application/opensearchdescription+xml",
      title: "Uygar UGURLU's Web Site",
      href: "https://uygarugurlu.com.tr/opensearch.xml",
    },
  ],
}

export default Head
