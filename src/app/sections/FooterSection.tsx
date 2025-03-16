import React from "react";
import Section from "@/components/global/Section";

const FooterSection: React.FC = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <Section className={"border-t border-border"}>
      <div className="text-center">
        <p>Made by Alireza Baghban @ All rights reserved | {currentYear}</p>
      </div>
    </Section>
  );
};

export default FooterSection;
