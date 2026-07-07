export const siteConfig = {
  name: "Bagtrex",
  description: "Premium Bags for Every Journey",
  url: "http://localhost:3000",

  links: {
    instagram: "",
    facebook: "",
    youtube: "",
    linkedin: "",
  },

  navigation: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Shop",
      href: "/shop",
    },
    {
      title: "Categories",
      href: "/categories",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
} as const;