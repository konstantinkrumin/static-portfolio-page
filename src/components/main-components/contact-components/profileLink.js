import React from "react";

export default function ProfileLink(props) {
  return (
    <div className="profile_links">
      <a href={props.href} target="_blank" id={props.id}>
        <img src={props.img_src} id={props.img_text} alt={props.img_text} />
      </a>
    </div>
  );
}
