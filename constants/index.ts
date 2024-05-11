import { NavLink, AccordioTypes, ComingSoonTypes, FutureItemTypes } from "@/types";

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

export const FutureItem: FutureItemTypes[] = [
  {
    image: "./images/ai_prospects.png",
    title: "AI Prospects, Market Size, and Development Pace",
    description: `The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.`,
  },
  {
    image: "./images/ai_tools.png",
    title: "AI Tools and Market",
    description: "AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.",
  },
  {
    image: "./images/ai_crypto.png",
    title: "AI, Crypto, and NFT Market",
    description: "Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.",
  },
];
