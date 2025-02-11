// import React from "react";

// const HeroSection = () => {
//   return (
//     <section id="hero" className="bg-primary mt-10 text-white py-20">
//       <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
//         {/* Hero Text */}
//         <div className="text-center md:text-left">
//           <h1 className="text-4xl font-bold mb-4">Hello, I'm [Your Name]</h1>
//           <p className="text-lg mb-6">
//             I’m a passionate <span className="text-white">Frontend Developer</span> focused on creating modern, responsive web applications that provide an exceptional user experience.
//           </p>

//           {/* Resume Download Button */}
//           <a
//             href="path-to-your-resume.pdf" // Replace with the actual path to your resume
//             download="Your_Name_Resume.pdf" // The file name users will see when downloading
//             className="px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors"
//           >
//             Download Resume
//           </a>
//         </div>

//         {/* Hero Image (Optional) */}
//         <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
//           <img
//             src="your-photo-url.jpg" // Replace with your photo URL
//             alt="Your Name"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


































// 2nd time


// import React from "react";
// import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

// const HeroSection = () => {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center px-6">
//       <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm [Your Name]</h1>
//       <p className="text-lg md:text-xl mb-6">
//         A passionate Full Stack Developer creating modern web solutions.
//       </p>

//       <div className="flex space-x-4 mb-6">
//         {/* GitHub */}
//         <a
//           href="https://github.com/your-username"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-2xl bg-white text-gray-800 p-3 rounded-full hover:bg-gray-200 transition duration-300"
//         >
//           <FaGithub />
//         </a>

//         {/* LinkedIn */}
//         <a
//           href="https://linkedin.com/in/your-username"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-2xl bg-white text-blue-700 p-3 rounded-full hover:bg-blue-100 transition duration-300"
//         >
//           <FaLinkedin />
//         </a>

//         {/* Twitter */}
//         <a
//           href="https://twitter.com/your-username"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-2xl bg-white text-blue-500 p-3 rounded-full hover:bg-blue-200 transition duration-300"
//         >
//           <FaTwitter />
//         </a>

//         {/* Facebook */}
//         <a
//           href="https://facebook.com/your-username"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-2xl bg-white text-blue-600 p-3 rounded-full hover:bg-blue-300 transition duration-300"
//         >
//           <FaFacebook />
//         </a>
//       </div>

//       <div>
//         <a
//           href="/resume.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="btn btn-primary px-6 py-3 rounded-lg text-lg font-semibold bg-white text-indigo-600 hover:bg-indigo-100 shadow-lg transition-all duration-300"
//         >
//           View Resume
//         </a>
//         <a
//           href="/resume.pdf"
//           download
//           className="btn btn-secondary px-6 py-3 ml-4 rounded-lg text-lg font-semibold bg-indigo-600 hover:bg-indigo-700 shadow-lg transition-all duration-300"
//         >
//           Download Resume
//         </a>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;














































// HeroSection.jsx
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="hero -mt-10 -mb-10 -ml-52 text-white py-12 text-center
    
    ">
      <div className="container mx-auto">
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/piona8621"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/effatara/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-300 transition"
          >
            <FaLinkedin />
          </a>
          
          <a
            href="https://www.facebook.com/profile.php?id=100082840891253"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-300 transition"
          >
            <FaFacebook />
          </a>
        </div>

        
      </div>
    </section>
  );
};

export default HeroSection;


