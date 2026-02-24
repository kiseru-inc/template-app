export const APP = {
  name: "template-app",
  description: "Kiseru monthly release template",
  links: {
    hiring: process.env.NEXT_PUBLIC_HIRING_URL ?? "https://kiseru.jp",
    freelance: process.env.NEXT_PUBLIC_FREELANCE_URL ?? "https://kiseru.jp",
    contact: process.env.NEXT_PUBLIC_CONTACT_URL ?? "https://kiseru.jp",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Hire", href: "/hire" },
    { label: "Freelance", href: "/freelance" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
