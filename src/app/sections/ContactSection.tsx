import React from "react";
import ContactForm from "@/components/ContactForm";

const ContactSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact</h2>
        <p className="text-xl mb-4 text-center text-muted-foreground">
          Get in Touch
        </p>
        <p className="text-lg mb-12 text-center max-w-2xl">
          I&apos;m actively seeking new job opportunities in web development and
          would love to discuss how my skills can benefit your team.
        </p>
        <div className="w-full flex justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
