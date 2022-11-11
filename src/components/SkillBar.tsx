import React, { useEffect } from "react";
import { Skill } from "src/constant/skill";

interface Props {
  skill: Skill;
}

const smileys = [
  // Verry Happy face
  "😀",
  // Happy face
  "🙂",
  // Neutral face
  "😐",
  // Sad face
  "🙁",
  // Verry Sad face
  "😞",
];

export default function SkillBar({ skill }: Props) {
  const [intersect, setIntersect] = React.useState(false);
  const divRef = React.useRef<HTMLDivElement>(null);

  const getSmiley = () => {
    const level = skill.level;
    const smileyIndex = Math.floor(
      ((100 - level) / 100) * (smileys.length - 1)
    );
    return smileys[smileyIndex];
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersect(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );
    if (divRef.current) {
      observer.observe(divRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="col w-full gap-1" ref={divRef}>
      <div className="row gap-1 items-center">
        <span className="text-color-2 font-bold capitalize">{skill.name}</span>
        <span className="text-color-2 text-lg">{getSmiley()}</span>
      </div>
      <div className="w-full h-2 bg-color-3 rounded">
        <div
          className={`h-full rounded duration-1000`}
          style={{
            width: intersect ? `${(skill.level / 100) * 100}%` : "0%",
            backgroundColor: skill.color ?? "rgb(234 179 8)",
          }}
        />
      </div>
    </div>
  );
}
