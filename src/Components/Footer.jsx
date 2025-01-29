// Footer.jsx
import React from "react";
import HeroSection from "./HeroSection";

const Footer = () => {
  return (
    <footer className="footer footer-center mt-10 p-4 bg-blue-950 bg-opacity-75 text-base-content">
      <div>
        <p className="text-lg font-mono text-white">
          © {new Date().getFullYear()} <span className="font-bold text-xl font-serif text-yellow-500">Effat Ara</span>. All Rights Reserved.
        </p>
        <div className="flex justify-center mt-2 space-x-4">
          <HeroSection></HeroSection>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
