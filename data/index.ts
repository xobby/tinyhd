export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Partners", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "ChillSpot",
    des: "Discord Community",
    img: "/p1.svg",
    link: "https://chillspot.it",
  },
  {
    id: 2,
    title: "AstralHosting",
    des: "Italian Hosting Provider",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://astralhosting.cloud",
  },
];

export const companies = [
  {
    id: 1,
    name: "Astralhosting",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "ChillSpot",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Secton",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Security Manager",
    desc: "Managed security operations in a hosting environment: configured Wazuh for SIEM monitoring, deployed Suricata for network traffic analysis and intrusion detection, and administered Virtualizor to maintain secure virtualized infrastructures.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Designer",
    desc: "Worked at ChillSpot as Designer and Developer",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
