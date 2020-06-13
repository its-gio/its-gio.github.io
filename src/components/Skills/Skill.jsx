import React from "react";

export default function Skill(props) {
  return (
    <div className="skills-inner--list__skill">
      <div className="container">
        <props.icon />
        <div className="content">
          <h3 className="title">{props.title}</h3>
          <p className="desc">{props.desc}</p>
        </div>
      </div>
    </div>
  );
}
