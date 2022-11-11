export interface Skill {
  name: string;
  level: number;
  color?: string;
}

const skills: Skill[] = [
  {
    name: "TypeScript",
    level: 95,
  },
  {
    name: "React",
    level: 95,
  },
  {
    name: "Vue",
    level: 80,
  },
  {
    name: "Svelte",
    level: 70,
  },
  {
    name: "Frontend",
    level: 90,
    color: "#5f7dde",
  },
  {
    name: "Backend",
    level: 60,
    color: "#de5f78",
  },
];

export default skills;
