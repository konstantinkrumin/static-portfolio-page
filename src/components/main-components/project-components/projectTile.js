import React from "react";

export default function ProjectTile(props) {
  return (
    <div className="project-tile" id={props.id}>
      <a href={`${props.link_id}`} target="_blank">
        <img
          className="project_screenshot"
          src={props.img_src}
          alt={props.img_alt}
        />
        <p className="project_name">
          <span className="brackets">&lt;</span> {props.title}{" "}
          <span className="brackets">/&gt;</span>
        </p>
      </a>
    </div>
  );
}
