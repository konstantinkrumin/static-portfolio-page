import React from "react";

import ProfileLink from "./profileLink";

export default function ProfileLinksMain() {
  const LINKS_INFO = [
    {
      href: "mailto:konstantin.krumin@gmail.com",
      id: "email-link",
      img_src: "https://i.imgur.com/Re2ngEG.png",
      img_text: "email_logo"
    },
    {
      href: "https://www.linkedin.com/in/konstantinkrumin",
      id: "linkedin_link",
      img_src: "https://i.imgur.com/A3iTxeS.png",
      img_text: "linkedin_logo"
    },
    {
      href: "https://github.com/konstantinkrumin",
      id: "profile-link",
      img_src: "https://i.imgur.com/Yj8ZTvm.png",
      img_text: "github_logo_mark"
    },
    {
      href: "https://www.freecodecamp.org/konstantin.krumin",
      id: "freecodecamp-link",
      img_src: "https://i.imgur.com/6A412Ps.png",
      img_text: "freecodecamp_logo"
    },
    {
      href: "https://twitter.com/KonstantinIK1",
      id: "twitter-link",
      img_src: "https://i.imgur.com/i5QVhyF.png",
      img_text: "twitter_logo"
    }
  ];

  return (
    <div id="profile_links_flexbox">
      {LINKS_INFO.map(({ href, id, img_src, img_text }, key) => (
        <ProfileLink
          key={key}
          href={href}
          id={id}
          img_src={img_src}
          img_text={img_text}
        />
      ))}
    </div>
  );
}
