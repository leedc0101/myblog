const CONFIG = {
  // profile setting (required)
  profile: {
    name: "이동창",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "frontend developer",
    bio: "I develop everything using node.",
    email: "leedc0101@naver.com",
    linkedin: "dong-chang-lee-616910234",
    github: "leedc0101",
    instagram: "",
  },
  projects: null,
  // projects: [
  //   {
  //     name: `morethan-log`,
  //     href: "https://github.com/morethanmin/morethan-log",
  //   },
  // ],
  // blog setting (required)
  blog: {
    title: "이동창",
    description: "개발일지",
    scheme: "dark",
  },

  link: "https://dongchang.vercel.app",
  since: 2024,
  lang: "ko-KR",
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 60, // revalidate time for [slug], index
}

module.exports = { CONFIG }
