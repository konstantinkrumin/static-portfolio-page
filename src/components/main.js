import React from "react";

import WelcomeSection from "./main-components/welcomeSection";
import ProjectsSection from "./main-components/projectsSection";
import ContactSection from "./main-components/contactSection";

export default function Main() {
  return (
    <main>
      <WelcomeSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
