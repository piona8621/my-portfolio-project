// import React from "react";
// import image from '../assets/image/1E4AA56D-8094-43D6-A9F6-3A3DF14E7DF1.jpg'
// const AboutMe = () => {
//   return (
//     <section id="about" className="py-20 pt-24">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-primary mb-8">About Me</h2>

//         {/* <div className="flex flex-col md:flex-row items-center gap-12">
//           {/* Image Section */}
//           {/* <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
//             <img
//               src={image} // Replace with your photo URL
//               alt="Your Name"
//               className="w-full h-full object-cover"
//             />
//           </div> */} 

//           {/* Text Section */}
//           <div className="text-lg text-base-content leading-relaxed">
//             <p className="mb-6">
//               Hello, I'm [Effat Ara], a passionate <span className="text-primary">Frontend Developer</span> based in [Your Location]. 
//               My journey in programming began when I was a child, always curious about how websites and apps work behind the scenes. I started learning HTML and CSS at an early age, and the more I learned, the more I became fascinated by the world of web development.
//             </p>
//             <p className="mb-6">
//               Over the years, I've honed my skills in <span className="text-primary">JavaScript</span>, <span className="text-primary">React</span>, and <span className="text-primary">Tailwind CSS</span>, and I enjoy creating responsive, user-friendly web applications. My favorite aspect of development is solving complex problems and optimizing user experience. I love turning an idea into a fully functional product that people can use and enjoy.
//             </p>
//             <p className="mb-6">
//               When I'm not coding, you'll likely find me [Your Hobby], whether it's playing sports, painting, or just spending time with friends. I believe in maintaining a balance between my professional and personal life, as it allows me to stay creative and focused. I love learning new things outside of programming, which helps me stay inspired and bring fresh perspectives to my work.
//             </p>
//             <p>
//               If you’re looking for someone who is not only skilled in technology but also passionate about creating meaningful user experiences, feel free to get in touch. I’m always excited about collaborating on new projects and learning from others!
//             </p>
//           </div>
//         </div>
//       {/* </div> */}
//     </section>
//   );
// };

// export default AboutMe;






// import React from "react";
// import ProfileWithSkills from "../Pages/ProfileWithSkills";
// // import image from '../assets/image/1E4AA56D-8094-43D6-A9F6-3A3DF14E7DF1.jpg'
// // import ProfileWithSkills from "./ProfileWithSkills";
// const AboutMe = () => {
//   return (
//     <section id="about-me" className=" py-12 ">
//       <div className="container mx-auto px-6 mt-24">
//         <h2 className="text-5xl font-serif font-bold text-center mb-8 text-white">
//           About Me
//         </h2>
//         <div className="lg:w-2/3 text-gray-400">
//   <p className="mb-6">
//     Hello! 👋 I’m <strong className="text-yellow-500">Effat Ara</strong>, a passionate <strong>Frontend Developer</strong> with a love for crafting intuitive and engaging web applications. My journey into programming began with a simple “Hello, World!” program that sparked a lifelong fascination with technology.
//   </p>
//   <p className="mb-6">
//     Over the years, I’ve honed my skills by working on diverse projects, from sleek e-commerce platforms to dynamic dashboards, always striving to combine creativity and functionality.
//   </p>
//   <p className="mb-6">
//     Beyond programming, I enjoy exploring my creative side through <strong className="text-yellow-500">drawing, photography, and singing</strong>. I believe in continuous learning and thrive in collaborative environments where I can share knowledge and grow alongside like-minded professionals.
//   </p>
//   <p>
//     Curious, proactive, and a team player, I see every challenge as an opportunity to innovate and make a difference. Let’s connect and create something amazing together!
//   </p>
// </div>

//           <ProfileWithSkills></ProfileWithSkills>
//         </div>
//     </section>
//   );
// };

// export default AboutMe;























































import React from "react";
import ProfileWithSkills from "../Pages/ProfileWithSkills";

const AboutMe = () => {
  return (
    <section id="about-me" className="py-12">
      <div className="container mx-auto px-6 mt-16">
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

export default AboutMe;









































// {/* <div className="flex flex-col lg:flex-row items-center gap-8">
//           {/* Text Content */}
//           <div className="lg:w-2/3 text-gray-700">
//             <p className="mb-6 text-gray-400">
//               Hello! 👋 I’m <strong className="text-yellow-500">Effat Ara</strong>, a passionate and dedicated{" "}
//               <strong>Frontend Developer</strong> with a knack for creating beautiful, responsive, and user-friendly web
//               applications.
//             </p>
//             <h3 className="text-2xl font-semibold text-white mb-4">
//               My Programming Journey
//             </h3>
//             <p className="mb-6 text-gray-400">
//               I still remember the first time I wrote a simple "Hello, World!" program—it felt magical! Since then, I’ve
//               been on a continuous journey of learning and improving. Over the years, I’ve worked on various exciting
//               projects, ranging from e-commerce platforms to interactive dashboards.
//             </p>
//             <h3 className="text-2xl font-semibold text-white mb-4">
//               What I Love to Work On
//             </h3>
//             <ul className="list-disc ml-6 mb-6 text-gray-400">
//               <li>
//                 <strong className="text-yellow-500">Building Intuitive UIs:</strong> I enjoy crafting seamless user interfaces that are visually
//                 appealing and functional.
//               </li>
//               <li>
//                 <strong className="text-yellow-500">Learning New Technologies:</strong> Staying updated with the latest trends and tools in the tech
//                 world excites me.
//               </li>
//               <li>
//                 <strong className="text-yellow-500">Collaborating with Teams:</strong> I thrive in environments where I can learn from and
//                 contribute to a team of talented professionals.
//               </li>
//             </ul>
//             <h3 className="text-2xl font-semibold text-white mb-4">
//               Beyond Programming
//             </h3>
//             <p className="mb-4 text-gray-400">When I’m not coding, you’ll often find me:</p>
//             <ul className="list-disc ml-6 mb-6 text-yellow-500">
//               <li>Drawing</li>
//               <li>Exploring Photography</li>
//               <li>Singing</li>
//             </ul>
//             <h3 className="text-2xl font-semibold text-white  mb-4">
//               My Personality
//             </h3>
//             <p className="text-black">
//               I’m known for being <strong className="text-yellow-500">curious, proactive, and a team player</strong>. I love challenges and believe
//               every problem is an opportunity to grow.
//             </p> */}


























































// import React from "react";

// const AboutMe = () => {
//   return (
//     <div className="bg-gray-100 py-10">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
//           About Me
//         </h2>
//         <div className="bg-white p-8 rounded-lg shadow-lg">
//           <p className="text-gray-700 text-lg mb-4">
//             Hello! I'm <span className="font-bold text-indigo-600">[Your Name]</span>, a passionate web developer with a knack for creating intuitive and dynamic user experiences. My journey into programming started during my college years, when I discovered the endless possibilities of technology. What started as a hobby quickly turned into a full-fledged career aspiration.
//           </p>
//           <p className="text-gray-700 text-lg mb-4">
//             I specialize in front-end development, crafting responsive and visually appealing designs using React, Tailwind CSS, and modern web technologies. What I love most about programming is the opportunity to solve complex problems and bring ideas to life through code.
//           </p>
//           <p className="text-gray-700 text-lg mb-4">
//             Outside of coding, I'm a huge fan of <span className="italic">sports</span>, especially football. Playing sports has taught me teamwork, discipline, and perseverance, which I often apply to my work. When I'm not at my desk or on the field, I enjoy sketching and exploring creative outlets, which keeps my mind fresh and full of ideas.
//           </p>
//           <p className="text-gray-700 text-lg">
//             My goal is to keep learning and growing as a developer while contributing to meaningful projects that make a difference. I'm excited to connect with like-minded individuals and explore opportunities to collaborate on innovative solutions.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;










