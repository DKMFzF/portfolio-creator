export const siteConfig = {
  // global meta
  title: "DKMFZF",
  description: "portfolio dkmfzf",

  // faviconst in metadata object
  icons: {
    ico: {
      path: "/favicon.ico",
      sizes: "any",
    },
    svg: {
      path: "/favicon.svg",
      type: "image/svg+xml",
    },
    png: {
      path: "/favicon.png",
      type: "image/png",
    },
    png96: {
      path: "/favicon-96x96.png",
      type: "image/png",
      sizes: "96x96",
    },
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
}

/** title template constructor */
export const titleSiteTemplate = (title: string): string => {
  return `%s — ${title}`;
}