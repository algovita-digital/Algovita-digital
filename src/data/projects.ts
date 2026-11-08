import type { Accent } from "@/lib/accents";

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  href: string; // use "#" until the project is live
  accent: Accent; // card preview colour
  mark: string; // big letter shown on the preview panel
  image?: string;
};

/**
 * Placeholder projects. Replace these with real work (e.g. ZingHub) or add more
 * objects — the Portfolio section renders whatever is in this array.
 */
export const projects: Project[] = [
  {
    id: "algovita-learn",
    title: "Algovita Learn",
    category: "EdTech & Full-Stack Web App",
    description:
      "A full-stack learning platform built with Next.js, Tailwind CSS, MongoDB, and Razorpay.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "Razorpay"],
    href: "https://algovita-learn.vercel.app/",
    accent: "blue",
    mark: "L",
    image: "/algovita-learn.svg",
  },
  {
    id: "ZingHub-kerala",
    title: "ZingHub-Kerala",
    category: "E-commerce & Startup Directory",
    description:
      "ZingHub is a full-stack e-commerce and dropshipping platform featuring automated Cloudinary AI image background removal and secure Razorpay payment integration.",
    tags: ["React", "Tailwind CSS", "TypeScript","MongoDB","Razorpay", "Responsive UI"],
    href: "https://zinghub-kerala.vercel.app/",
    accent: "lavender",
    mark: "C",
    image: "/zinghub-hero-rounded-v2.svg",
  },
  {
    id: "ttp-crm",
    title: "TTP CRM (AI-Powered CRM)",
    category: "AI-Powered CRM",
    description:
      "A smart, full-stack CRM platform built for modern digital agencies and freelancers, integrated with Google Gemini AI.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Tailwind CSS",
      "Google Gemini API",
    ],
    href: "https://ttp-crm-three.vercel.app/",
    accent: "mint",
    mark: "T",
    image: "/ttp-crm-login-rounded.svg",
  }
];
