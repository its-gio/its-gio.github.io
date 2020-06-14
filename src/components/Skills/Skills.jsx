import React from "react";
import {
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiSass,
  DiNodejsSmall,
  DiPostgresql,
} from "react-icons/di";
import Skill from "./Skill";

export default function Skills() {
  const skillsArray = [
    {
      title: "HTML/CSS",
      desc: "The building blocks of every site on the web",
      icon: DiHtml5,
    },
    {
      title: "JavaScript",
      desc: "Give sites functionality and dynamic abilities",
      icon: DiJavascript1,
    },
    {
      title: "React/Redux",
      desc:
        "A javascript based library made to simply build SAPs and a simple way to add global state to react apps",
      icon: DiReact,
    },
    {
      title: "SCSS/SASS",
      desc:
        "Syntactic sugar for CSS, prefect for BEN naming convention and creating mixins for reusable code",
      icon: DiSass,
    },
    {
      title: "Node/Express",
      desc:
        "A javascript runtime environment that can be used to create API endpoints and serve web applications",
      icon: DiNodejsSmall,
    },
    {
      title: "Postgress",
      desc:
        "Query language that makes request to changes or get information from database",
      icon: DiPostgresql,
    },
  ];
  const MappedSkills = skillsArray.map((skill, i) => (
    <Skill key={i} title={skill.title} desc={skill.desc} icon={skill.icon} />
  ));
  return (
    <div className="skills">
      <div className="skills-inner">
        <div className="skills-inner--content">
          <h2 className="skills-inner--content__title">Skills</h2>
          <p className="skills-inner--content__tagline">
            This is the knowledge I picked up over the years in projects. Mainly
            a front-end developer, I am very interested in testing and growing
            my skills as a backend developer.
          </p>
        </div>
        <div className="skills-inner--list">{MappedSkills}</div>
      </div>
    </div>
  );
}
