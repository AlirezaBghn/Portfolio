"use client";

import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center w-full max-w-5xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12">Contact Information</h2>

      <div className="flex flex-col items-center gap-10 w-full">
        {/* Email */}
        <div className="flex items-center gap-4 text-2xl">
          <FaEnvelope className="text-3xl text-primary" />
          <a
            href="mailto:Alireza.Baghbann@gmail.com"
            className="hover:text-primary transition-colors"
          >
            Alireza.Baghbann@gmail.com
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4 text-2xl">
          <FaMapMarkerAlt className="text-3xl text-primary" />
          <span>Munich, Germany</span>
        </div>

        {/* Social Links */}
        <div className="flex gap-16 mt-8">
          <a
            href="https://github.com/AlirezaBghn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-2xl hover:text-primary transition-colors"
          >
            <FaGithub className="text-3xl" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/alireza-baghbann/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-2xl hover:text-primary transition-colors"
          >
            <SiLinkedin className="text-3xl" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
