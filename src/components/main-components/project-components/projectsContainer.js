import React from "react";

import ProjectTile from "./projectTile";

export default function ProjectsContainer() {
  const PROJECTS_INFO = [
    {
      id: "tribute_page",
      link_id: "https://codepen.io/konstantinkrumin/full/PooYQbG",
      img_src: "https://i.imgur.com/ynRuzOQ.png",
      img_alt: "tribute_page_screenshot",
      title: "Tribute Page"
    },
    {
      id: "survey_form",
      link_id: "https://codepen.io/konstantinkrumin/full/abOomrL",
      img_src: "https://i.imgur.com/p1xTEV9.png",
      img_alt: "survey_form_screenshot",
      title: "Survey Form"
    },
    {
      id: "product_landing_page",
      link_id: "https://codepen.io/konstantinkrumin/full/WNNNZjp",
      img_src: "https://i.imgur.com/kX9bSaZ.png",
      img_alt: "product_landing_screenshot",
      title: "Product Landing Page"
    },
    {
      id: "technical_documentation_page",
      link_id: "https://codepen.io/konstantinkrumin/full/eYNYbgw",
      img_src: "https://i.imgur.com/vggb6Z6.png",
      img_alt: "technical_documentation_screenshot",
      title: "Technical Documentation Page"
    }
  ];

  return (
    <div id="projects_container">
      {PROJECTS_INFO.map(({ id, link_id, img_src, img_alt, title }, key) => (
        <ProjectTile
          key={key}
          id={id}
          link_id={link_id}
          img_src={img_src}
          img_alt={img_alt}
          title={title}
        />
      ))}
    </div>
  );
}
