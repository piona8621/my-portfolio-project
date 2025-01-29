
import React from "react";
import ProfileWithSkills from "../Pages/ProfileWithSkills";

const AboutUs = () => {
  return (
    <section id="about-me" className="py-12">
      <div className="container mx-auto px-6 -mt-36">
        <h2 className="text-5xl font-serif font-thin
         text-center mb-8 text-white
          animate__animated animate__zoomIn animate__infinite animate__slow
         ">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="lg:w-2/3 text-lg text-gray-400">
            <p className="mb-6">
              Hello! 👋 I’m <strong className="text-yellow-500">Effat Ara</strong>, a passionate <strong>Frontend Developer</strong> with a love for crafting intuitive and engaging web applications. My journey into programming began with a simple “Hello, World!” program that sparked a lifelong fascination with technology.
            </p>
            <p className="mb-6">
              Over the years, I’ve honed my skills by working on diverse projects, from sleek e-commerce platforms to dynamic dashboards, always striving to combine creativity and functionality.
            </p>
            <p className="mb-6">
              Beyond programming, I enjoy exploring my creative side through <strong className="text-yellow-500">drawing, photography, and singing</strong>. I believe in continuous learning and thrive in collaborative environments where I can share knowledge and grow alongside like-minded professionals.
            </p>
            <p>
              Curious, proactive, and a team player, I see every challenge as an opportunity to innovate and make a difference. Let’s connect and create something amazing together!
            </p>
          </div>
          {/* Profile With Skills */}


          <div>
            <ProfileWithSkills></ProfileWithSkills>
          </div>


        </div>
      </div>
    </section>
  );
};

export default AboutUs;














