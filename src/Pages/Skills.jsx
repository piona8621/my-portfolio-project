// import React from "react";
// import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from "react-icons/fa";
// import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

// const Skills = () => {
//   return (
//     <section id="skills" className="py-20 pt-44">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-primary mb-8">My Skills</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//           {/* Frontend Skills */}
//           <div className="space-y-6">
//             <h3 className="text-xl font-semibold text-primary">Frontend Development</h3>
//             <ul className="space-y-4">
//               <li className="flex items-center gap-4">
//                 <FaHtml5 className="text-4xl text-orange-500" />
//                 <span>HTML5</span>
//               </li>
//               <li className="flex items-center gap-4">
//                 <FaCss3Alt className="text-4xl text-blue-500" />
//                 <span>CSS3</span>
//               </li>
//               <li className="flex items-center gap-4">
//                 <SiJavascript className="text-4xl text-yellow-500" />
//                 <span>JavaScript</span>
//               </li>
//               <li className="flex items-center gap-4">
//                 <FaReact className="text-4xl text-blue-400" />
//                 <span>React</span>
//               </li>
//               <li className="flex items-center gap-4">
//                 <SiTailwindcss className="text-4xl text-cyan-500" />
//                 <span>Tailwind CSS</span>
//               </li>
//             </ul>
//           </div>

//           {/* Backend Skills */}
//           <div className="space-y-6">
//             <h3 className="text-xl font-semibold text-primary">Backend Development</h3>
//             <ul className="space-y-4">
//               <li className="flex items-center gap-4">
//                 <FaNodeJs className="text-4xl text-green-500" />
//                 <span>Node.js</span>
//               </li>
//               <li className="flex items-center gap-4">
//                 <SiMongodb className="text-4xl text-green-600" />
//                 <span>MongoDB</span>
//               </li>
//               <li className="flex items-center gap-4">
//                 <SiExpress className="text-4xl text-gray-500" />
//                 <span>Express.js</span>
//               </li>
//             </ul>
//           </div>

//           {/* Tools & Others */}
//           <div className="space-y-6">
//             <h3 className="text-xl font-semibold text-primary">Tools & Others</h3>
//             <ul className="space-y-4">
//               <li className="flex items-center gap-4">
//                 <FaGitAlt className="text-4xl text-orange-600" />
//                 <span>Git</span>
//               </li>
//               <li className="flex items-center gap-4">
//                 <span className="text-4xl text-gray-800">Figma</span>
//                 <span>Figma</span>
//               </li>
//               <li className="flex items-center gap-4">
//                 <span className="text-4xl text-yellow-600">VS Code</span>
//                 <span>VS Code</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;



































// Skills.jsx
// import React from "react";

// const Skills = () => {
//   const frontendSkills = [
//     { name: "HTML", level: 90 },
//     { name: "CSS", level: 85 },
//     { name: "JavaScript", level: 80 },
//     { name: "React.js", level: 75 },
//     { name: "Tailwind CSS", level: 90 },
//   ];

//   const backendSkills = [
//     { name: "Node.js", level: 70 },
//     { name: "Express.js", level: 65 },
//     { name: "MongoDB", level: 60 },
//     { name: "REST API", level: 75 },
//   ];

//   const toolsSkills = [
//     { name: "Git", level: 80 },
//     { name: "VS Code", level: 85 },
//     { name: "Postman", level: 75 },
//     { name: "Figma", level: 70 },
//   ];

//   const renderSkill = (skill) => (
//     <div key={skill.name} className="mb-4">
//       <div className="flex justify-between items-center">
//         <span className="font-medium text-gray-700">{skill.name}</span>
//         <span className="text-sm text-gray-500">{skill.level}%</span>
//       </div>
//       <progress
//         className="progress progress-primary w-full"
//         value={skill.level}
//         max="100"
//       ></progress>
//     </div>
//   );

//   return (
//     <section className="min-h-screen bg-base-100 py-12">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-8">
//           <h2 className="text-4xl font-bold text-primary">Skills</h2>
//           <p className="text-gray-600 mt-2">
//             Here's a showcase of my technical skills categorized by domain.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Frontend Skills */}
//           <div>
//             <h3 className="text-xl font-semibold text-gray-700 mb-4">
//               Frontend
//             </h3>
//             {frontendSkills.map(renderSkill)}
//           </div>

//           {/* Backend Skills */}
//           <div>
//             <h3 className="text-xl font-semibold text-gray-700 mb-4">
//               Backend
//             </h3>
//             {backendSkills.map(renderSkill)}
//           </div>

//           {/* Tools */}
//           <div>
//             <h3 className="text-xl font-semibold text-gray-700 mb-4">
//               Tools
//             </h3>
//             {toolsSkills.map(renderSkill)}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

























// import React from 'react';
// import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaFigma } from 'react-icons/fa';

// const Skills = () => {
//   return (
//     <div className="container mx-auto py-10 px-4">
//       <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">My Skills</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
//         {/* Frontend Skills */}
//         <div className="bg-gradient-to-tr from-indigo-600 to-indigo-300 p-6 rounded-lg shadow-lg">
//           <h3 className="text-2xl text-white font-semibold mb-4">Frontend Development</h3>
          
//           <div className="flex items-center mb-4">
//             <FaHtml5 className="text-4xl text-orange-500 mr-3" />
//             <div className="flex-grow">
//               <div className="text-white font-medium">HTML5</div>
//               <div className="w-full bg-gray-300 h-2 rounded-full">
//                 <div className="bg-orange-500 h-2 rounded-full" style={{ width: '90%' }}></div>
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center mb-4">
//             <FaCss3Alt className="text-4xl text-blue-500 mr-3" />
//             <div className="flex-grow">
//               <div className="text-white font-medium">CSS3</div>
//               <div className="w-full bg-gray-300 h-2 rounded-full">
//                 <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center mb-4">
//             <FaReact className="text-4xl text-blue-400 mr-3" />
//             <div className="flex-grow">
//               <div className="text-white font-medium">React</div>
//               <div className="w-full bg-gray-300 h-2 rounded-full">
//                 <div className="bg-blue-400 h-2 rounded-full" style={{ width: '95%' }}></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Backend Skills */}
//         <div className="bg-gradient-to-tr from-green-500 to-green-200 p-6 rounded-lg shadow-lg">
//           <h3 className="text-2xl text-white font-semibold mb-4">Backend Development</h3>

//           <div className="flex items-center mb-4">
//             <FaNodeJs className="text-4xl text-green-600 mr-3" />
//             <div className="flex-grow">
//               <div className="text-white font-medium">Node.js</div>
//               <div className="w-full bg-gray-300 h-2 rounded-full">
//                 <div className="bg-green-600 h-2 rounded-full" style={{ width: '80%' }}></div>
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* Tools Section */}
//         <div className="bg-gradient-to-tr from-purple-600 to-purple-300 p-6 rounded-lg shadow-lg">
//           <h3 className="text-2xl text-white font-semibold mb-4">Tools & Libraries</h3>

//           <div className="flex items-center mb-4">
//             <FaGithub className="text-4xl text-gray-800 mr-3" />
//             <div className="flex-grow">
//               <div className="text-white font-medium">Git & GitHub</div>
//               <div className="w-full bg-gray-300 h-2 rounded-full">
//                 <div className="bg-gray-800 h-2 rounded-full" style={{ width: '90%' }}></div>
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center mb-4">
//             <FaFigma className="text-4xl text-purple-600 mr-3" />
//             <div className="flex-grow">
//               <div className="text-white font-medium">Figma</div>
//               <div className="w-full bg-gray-300 h-2 rounded-full">
//                 <div className="bg-purple-600 h-2 rounded-full" style={{ width: '75%' }}></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;









































import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa"; // Import React Icons
import { SiTailwindcss, SiMongodb } from "react-icons/si";


const skillsData = [
  {
    category: "Frontend Skills",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 90 },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, level: 80 },
      { name: "React", icon: <FaReact className="text-blue-400" />, level: 75 },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-500" />, level: 70 },
    ],
  },
  {
    category: "Backend Skills",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 75 },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, level: 65 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" />, level: 85 },
      { name: "VS Code", icon: <FaReact className="text-blue-400" />, level: 90 }, // Example placeholder icon
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-serif font-bold text-center text-yellow-500 mb-8  animate__animated animate__zoomIn animate__slow">
          My Skills
        </h2>

        {/* Skill Categories */}
        <div className="space-y-12 mt-20">
          {skillsData.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold font-serif text-yellow-400 mb-4">
                {category.category}
              </h3>
              <div className="flex justify-center gap-10">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2 flex items-center">
                    {/* Icon */}
                    <div className="text-7xl animate__animated animate__fadeInLeft animate__slow">{skill.icon}</div>
                    {/* Skill Details */}

                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Skills;




















































































