// import React from "react";

// const Education = () => {
//   return (
//     <section id="education" className="py-20 mt-10 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-primary mb-8">Educational Qualification</h2>
        
//         <div className="space-y-8">
//           {/* HSC */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold text-primary">Higher Secondary Certificate (HSC)</h3>
//             <p className="text-md text-gray-600">Subject: Science</p>
//             <p className="text-md text-gray-600">Institute: XYZ College, Dhaka</p>
//             <p className="text-md text-gray-600">Year of Completion: 2017</p>
//           </div>

//           {/* Bachelor's Degree */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold text-primary">Bachelor of Science in Computer Science</h3>
//             <p className="text-md text-gray-600">Institute: ABC University, Dhaka</p>
//             <p className="text-md text-gray-600">Year of Graduation: 2021</p>
//             <p className="text-md text-gray-600">CGPA: 3.8/4.0</p>
//           </div>

//           {/* Master's Degree (if applicable) */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold text-primary">Master of Science in Computer Science</h3>
//             <p className="text-md text-gray-600">Institute: ABC University, Dhaka</p>
//             <p className="text-md text-gray-600">Year of Graduation: 2023 (Expected)</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;









// import React from "react";

// const Education = () => {
//   const education = [
//     {
//       degree: "BBS Bachelor of Business Studies",
//       institution: "Noakhali Government College",
//       year: "2023 - 2024(1st Year)",
//       achievements: [], // Added an empty achievements array for consistency
//     },
//     {
//       degree: "Higher Secondary Certificate (HSC)",
//       institution: "Noakhali Women College",
//       year: "2018 - 2020",
//       achievements: ["Achieved GPA 4.50 in Commerce"],
//     },
//   ];

//   return (
//     <div className="py-10">
//       <div className="container mx-auto -mt-20  px-6">
//         <h2 className="text-4xl font-bold text-center text-green-800 mb-6">
//           Educational <span className="text-yellow-500 ">Qualifications</span>
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {education.map((item, index) => (
//             <div
//               key={index}
//               className="bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
//             >
//               <h3 className="text-2xl font-bold  text-green-900">{item.degree}</h3>
//               <p className="text-black font-medium">{item.institution}</p>
//               <p className="text-black italic">{item.year}</p>
//               {/* Render achievements only if present */}
//               {item.achievements.length > 0 && (
//                 <ul className="mt-4 list-disc list-inside text-gray-800">
//                   {item.achievements.map((achievement, idx) => (
//                     <li key={idx}>{achievement}</li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Education;






























// import React from "react";
// import Lottie from "lottie-react";
// import lottieAnimation from "../assets/animation/education1.json";

// const educationData = [
//   {
//     degree: "BBS Bachelor of Business Studies",
//     institution: "Noakhali Government College",
//     year: "2023 - 2024(1st Year)",
//     achievements: [], // Added an empty achievements array for consistency
//   },
//   {
//     degree: "Higher Secondary Certificate (HSC)",
//     institution: "Noakhali Women College",
//     year: "2018 - 2020",
//     achievements: ["Achieved GPA 4.50 in Commerce"],
//   },
// ];

// const Education = () => {
//   return (
//     <section id="education" className="py-20">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center text-yellow-500 mb-12">
//           Educational Qualification
//         </h2>

//         {/* Grid Layout for Cards and Lottie */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//           {/* Left Side: Education Cards */}
//           <div className="w-full">
//             {educationData.map((edu, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-800 border border-yellow-500 rounded-lg p-6 shadow-md transition-transform hover:scale-105 mb-6"
//               >
//                 <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
//                   {edu.degree}
//                 </h3>
//                 <p className="text-lg text-gray-300 mb-1">
//                   <strong>Institution:</strong> {edu.institution}
//                 </p>
//                 <p className="text-lg text-gray-300 mb-1">
//                   <strong>Year:</strong> {edu.year}
//                 </p>
//                 <p className="text-gray-400 mt-2">
//                   {/* Assuming description will be added if available */}
//                   {edu.description || "No additional description"}
//                 </p>
//                 <ul className="mt-2 text-gray-400">
//                   {edu.achievements.length > 0 ? (
//                     edu.achievements.map((achievement, idx) => (
//                       <li key={idx}>- {achievement}</li>
//                     ))
//                   ) : (
//                     <li>No achievements listed</li>
//                   )}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           {/* Right Side: Lottie Animation */}
//           <div className="flex justify-center">
//             <Lottie animationData={lottieAnimation} className="w-full lg:w-3/4" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;
































































import React, { useEffect } from "react";
import Lottie from "lottie-react";
// import lottieAnimation from "../assets/animation/education1.json";
import "animate.css"; // Import Animate.css styles
import education from '../assets/image/education.svg'

const educationData = [
  {
    degree: "BBS Bachelor of Business Studies",
    institution: "Noakhali Government College",
    year: "2023 - 2024(1st Year)",
    achievements: [], // Added an empty achievements array for consistency
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Noakhali Women College",
    year: "2018 - 2020",
    achievements: ["Achieved GPA 4.50 in Commerce"],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl animate__animated animate__zoomIn animate__slow
        font-serif font-bold text-center text-yellow-500 mb-12">
          Educational Qualification
        </h2>

        {/* Grid Layout for Cards and Lottie */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center
        
        ">
          {/* Left Side: Education Cards */}
          <div className="w-full animate__animated animate__zoomIn animate__repeat-2">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-yellow-500 rounded-lg p-6 shadow-md transition-transform hover:scale-105 mb-6 animate__animated animate__fadeInUp animate__infinity" // Added Animate.css fadeInUp
              >
                <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-lg text-gray-300 mb-1">
                  <strong>Institution:</strong> {edu.institution}
                </p>
                <p className="text-lg text-gray-300 mb-1">
                  <strong>Year:</strong> {edu.year}
                </p>
                <p className="text-gray-400 mt-2">
                  {edu.description || "No additional description"}
                </p>
                <ul className="mt-2 text-gray-400">
                  {edu.achievements.length > 0 ? (
                    edu.achievements.map((achievement, idx) => (
                      <li key={idx}>- {achievement}</li>
                    ))
                  ) : (
                    <li>No achievements listed</li>
                  )}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Side: Lottie Animation */}
          <div
            className="flex justify-center animate__animated animate__fadeInLeft" // Added Animate.css fadeInLeft
          >
           <img 
                 src={education}
                 alt="Profile"
                 className="w-70 h-70  shadow-lg"
                 />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;











































