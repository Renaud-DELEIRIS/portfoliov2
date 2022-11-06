import { IconBrandJavascript, IconBrandReact, TablerIcon } from "@tabler/icons";

interface Work {
  icon: string;
  title: string;
  description: string;
  link?: string;
  date: string;
}

const iconSize = 80;

const defaultWorks: Array<Work> = [
  {
    icon: "/images/epitech.png",
    title: "epitech.title",
    description: "epitech.description",
    date: "epitech.date",
  },
  {
    icon: "/images/gencovery.png",
    title: "gencovery.title",
    description: "gencovery.description",
    date: "gencovery.date",
  },
  {
    title: "nftluck.title",
    description: "nftluck.description",
    date: "nftluck.date",
    icon: "/images/nftluck.png",
  },
  {
    title: "boheme.title",
    description: "boheme.description",
    date: "boheme.date",
    icon: "/images/boheme.png",
  },
  {
    title: "ganister.title",
    description: "ganister.description",
    date: "ganister.date",
    icon: "/images/ganister.png",
  },
];

export default defaultWorks;

export type { Work };
