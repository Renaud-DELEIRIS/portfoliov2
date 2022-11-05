import {
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandNuxt,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandVue,
  IconServer2,
  IconWorld,
  TablerIcon,
} from "@tabler/icons";
import { FunctionComponent } from "react";

interface Project {
  name: string;
  description: string;
  link?: string;
  image: Array<string>;
  visited: boolean;
  category: string;
  stacks: Array<{
    icon: TablerIcon;
    name: string;
  }>;
}

const defaultProjects: Array<Project> = [
  {
    name: "Boheme",
    category: "Front End",
    description:
      "Boheme is a web application that allows users to create and share their own stories. Users can create their own stories, and share them with the world. Users can also read stories created by other users. Boheme is a full-stack application built with React, Node, Express, and MongoDB.",
    image: ["boheme1.png", "boheme2.png", "boheme3.png"],
    visited: false,
    stacks: [
      {
        icon: () => IconBrandJavascript({ color: "navy" }),
        name: "Typescript",
      },
      {
        icon: () => IconBrandVue({ color: "green" }),
        name: "Vue 3",
      },
      {
        icon: () => IconBrandNuxt({ color: "lime" }),
        name: "Nuxt 3",
      },
      {
        icon: () => IconBrandTailwind({ color: "blue" }),
        name: "Tailwind CSS",
      },
    ],
  },
  {
    name: "urChunk",
    category: "Front End",
    description:
      "Boheme is a web application that allows users to create and share their own stories. Users can create their own stories, and share them with the world. Users can also read stories created by other users. Boheme is a full-stack application built with React, Node, Express, and MongoDB.",
    image: [
      "/images/urchunk/slider1.png",
      "/images/urchunk/slider2.png",
      "/images/urchunk/slider3.png",
      "/images/urchunk/slider4.png",
      "/images/urchunk/slider5.png",
    ],
    visited: false,
    stacks: [
      {
        icon: () => IconBrandJavascript({ color: "navy" }),
        name: "Typescript",
      },
      {
        icon: () => IconBrandReact({ color: "darkblue" }),
        name: "React",
      },
      {
        icon: () => IconBrandNextjs({ color: "gray" }),

        name: "Next JS",
      },
      {
        icon: () => IconBrandTailwind({ color: "blue" }),
        name: "Tailwind CSS",
      },
      {
        icon: () => IconWorld({ color: "purple" }),
        name: "I18n",
      },
    ],
    link: "https://urchunk.com",
  },
  {
    name: "NFT Luck",
    category: "Full Stack",
    description:
      "Boheme is a web application that allows users to create and share their own stories. Users can create their own stories, and share them with the world. Users can also read stories created by other users. Boheme is a full-stack application built with React, Node, Express, and MongoDB.",
    image: [
      "/images/nftluck/slider1.jpeg",
      "/images/nftluck/slider2.png",
      "/images/nftluck/slider3.png",
      "/images/nftluck/slider4.jpeg",
    ],
    visited: false,
    stacks: [
      {
        icon: () => IconBrandJavascript({ color: "yellow" }),
        name: "Javascript",
      },
      {
        icon: () => IconBrandReact({ color: "darkblue" }),
        name: "React",
      },
      {
        icon: () => IconBrandNextjs({ color: "gray" }),

        name: "Next JS",
      },
      {
        icon: () => IconBrandTailwind({ color: "blue" }),
        name: "Tailwind CSS",
      },
      {
        icon: () => IconServer2({ color: "gold" }),
        name: "Express",
      },
    ],
  },
];

export default defaultProjects;
