import { NavLink, AccordioTypes, ComingSoonTypes } from "@/types";

export const NavLinks: NavLink[] = [
  { label: "Creon Pass", link: "#" },
  { label: "Token", link: "#", badge: "SOON" },
  { label: "AI Income", link: "#", badge: "SOON" },
  { label: "AI Launchpad", link: "#", badge: "SOON" },
];

export const AccordionItems: AccordioTypes[] = [
  {
    icon: "./images/icon_1.svg",
    title: "Profitability and Growth",
    arrow: "up",
    content: `At Creon, we handpick cutting-edge AI projects and offer our
      community and token holders early access and investment
      opportunities. Our community actively contributes to the growth
      and profitability of these projects, creating a dynamic ecosystem
      of innovation and shared success.`,
  },
  {
    icon: "./images/icon_2.svg",
    title: "Transparent & Fair Decentralized Earnings",
    arrow: "down",
    content: ``,
  },
  {
    icon: "./images/icon_3.svg",
    title: "Launching the future",
    arrow: "down",
    content: ``,
  },
  {
    icon: "./images/icon_4.svg",
    title: "Limitless Possibilities of AI & Crypto",
    arrow: "down",
    content: ``,
  },
];

export const ComingSoonItems: ComingSoonTypes[] = [
  {
    title: "token",
    subtitle: "The Gateway token to the world of AI",
    image: "./images/token.png",
    description: `Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.`,
  },
  {
    title: "revenue",
    subtitle: "TDriving income and growth through decentralization",
    image: "./images/revenue.png",
    description: `CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.`,
  },
  {
    title: "launchpad",
    subtitle: "Driving the future of AI Innovation",
    image: "./images/launchpad.png",
    description: `The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.`,
  },
];
