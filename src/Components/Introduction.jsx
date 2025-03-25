

// import React from "react";
// import profileImage from "../assets/image/1E4AA56D-8094-43D6-A9F6-3A3DF14E7DF1.jpg";

// import HeroSection from "./HeroSection";
// // import SocialIcons from "./SocialIcons";

// const Introduction = () => {
//   return (
//     <section className="min-h-screen flex items-center mr-20  text-white">
//       <div className="container mx-auto px-6 flex -mr-32 flex-col md:flex-row items-center">
//         {/* Left Section: Text Content */}
//         <div className="md:w-1/2 text-center md:text-left">
//           <h1 className="text-lg font-thin text-yellow-500">I'M</h1>
//           <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4 
//             "
//           >
//             Effat Ara
//           </h1>
//           <h2 className="text-2xl  md:text-3xl font-semibold text-gray-300">
//             Front-end Developer
//           </h2>

//           <p className="text-gray-400 text-lg  leading-relaxed ">
//            Hi, I’m a passionate frontend developer specializing in building
//              responsive, user-friendly web applications. With expertise in
//         React.js, Tailwind CSS, and modern JavaScript frameworks, I love          creating digital experiences that are both functional and visually
//             appealing.
//            </p>
          
//           <HeroSection></HeroSection>

//           {/* /* Resume Download Button */} 
//            <a
//          href="path-to-your-resume.pdf" // Replace with the actual path to your resume
//             download="Your_Name_Resume.pdf" // The file name users will see when downloading
//             className="px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors"
//           >
//             Download Resume
//           </a>


//           </div>
//         </div>

//         {/* Right Section: Profile Picture */}
//         <div className="md:w-1/2 flex justify-center md:justify-end mt-8 -ml-20 md:mt-0">
//           <img
//             src={profileImage}
//             alt="Effat Ara"
//             className="w-72 h-72 rounded-full border-4 border-yellow-400"
//           />
        
//         </div>
//     </section>
//   );
// };

// export default Introduction;












































import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../assets/image/1E4AA56D-8094-43D6-A9F6-3A3DF14E7DF1.jpg";
import HeroSection from "./HeroSection";

const Introduction = () => {
  return (
    <section className="min-h-screen flex items-center text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left Section: Text Content */}
        <div className="md:w-1/2 text-center md:text-left 
        ">
          <h1 className="text-lg font-thin text-yellow-500">I'M</h1>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-yellow-400 mb-4">
            Effat Ara
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
            {/* Typewriter Effect */}
            <Typewriter
              words={["Frontend Developer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Hi, I’m a passionate frontend developer specializing in building
            responsive, user-friendly web applications. With expertise in
            React.js, Tailwind CSS, and modern JavaScript frameworks, I love
            creating digital experiences that are both functional and visually
            appealing.
          </p>

          <HeroSection />

          {/* Resume Download Button */}
          <a
            href="https://drive.google.com/file/d/17SN62JLqpW-J02m83Vds0xQ_-GJeZV0R/view?usp=sharing"
            target="_blank"
            className="mt-6 px-6 py-3 font-serif text-xl bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Download Resume
          </a>
        </div>

        {/* Right Section: Profile Picture */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={profileImage}
            alt="Effat Ara"
            className="w-80 h-80 rounded-full border-4 border-yellow-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;








































