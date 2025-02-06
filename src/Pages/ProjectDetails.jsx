// import React, { useEffect, useState } from "react";
// import { FaGithub } from "react-icons/fa";
// import { useParams } from "react-router-dom";

// const ProjectDetails = () => {
//   const { id } = useParams(); // Get the project ID from the URL.
//   const [project, setProject] = useState(null);

//   useEffect(() => {
//     fetch("/project.json")
//       .then((res) => res.json())
//       .then((data) => {
//         const selectedProject = data.find((proj) => proj.id === parseInt(id));
//         setProject(selectedProject);
//       })
//       .catch((err) => console.error("Error fetching project details:", err));
//   }, [id]);

//   if (!project) return <div>Loading...</div>;

//   return (
//     <section className="py-20 pt-10 ">
//       <div className="max-w-4xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-yellow-500  mb-4">{project.name}</h2>
//         <img
//           src={project.image}
//           alt={project.name}
//           className="w-full h-auto rounded-md mb-6"
//         />
        
//         <p className="text-lg mb-4 text-gray-400"> <span className="text-yellow-500 text-xl font-serif font-bold"> Description</span> :  {project.briefDescription}</p>
//         <ul className="mb-4">
//           <li className="text-gray-400">
//             <strong className="text-yellow-500 text-2xl font-serif ">Main Technology Stack:</strong>{" "}
//             {project.mainTechnologyStack.join(", ")}
//           </li>
//           <li>
//             <strong className="text-yellow-500 text-2xl font-serif"> Live Link:</strong>{" "}
//             <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-300">
//               {project.liveLink}
//             </a>
//           </li>
//           <li>
//             <strong className="text-yellow-500  text-2xl font-serif"> <FaGithub className="inline"></FaGithub>  GitHub Link:</strong>{" "}
//             <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-300">
//               {project.githubLink}
//             </a>
//           </li>
//           <li>
//             <strong className="text-yellow-500  text-2xl font-serif"> <FaGithub className="inline"></FaGithub>  GitHub server Link:</strong>{" "}
//             <a href={project.githubLinkServer} target="_blank" rel="noopener noreferrer" className="text-gray-300">
//               {project.githubLink}
//             </a>
//           </li>
//         </ul>
//         <h3 className="text-2xl font-semibold mb-2 text-yellow-400 font-serif">Challenges Faced</h3>
//         <ul className="list-disc pl-6 mb-4 text-gray-400">
//           {project.challengesFaced.map((challenge, index) => (
//             <li key={index}>{challenge}</li>
//           ))}
//         </ul>
//         <h3 className="text-2xl font-semibold mb-2 text-yellow-400 font-serif">Areas for Improvement</h3>
//         <ul className="list-disc pl-6 text-gray-400">
//           {project.areasForImprovement.map((area, index) => (
//             <li key={index}>{area}</li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default ProjectDetails;




























































































































// import React, { useEffect, useState } from "react";
// import { FaGithub } from "react-icons/fa";
// import { useParams } from "react-router-dom";

// const ProjectDetails = () => {
//   const { id } = useParams(); // Get the project ID from the URL.
//   const [project, setProject] = useState(null);

//   useEffect(() => {
//     fetch("/project.json")
//       .then((res) => res.json())
//       .then((data) => {
//         const selectedProject = data.find((proj) => proj.id === parseInt(id));
//         setProject(selectedProject);
//       })
//       .catch((err) => console.error("Error fetching project details:", err));
//   }, [id]);

//   if (!project) return <div>Loading...</div>;

//   return (
//     <section className="py-20 pt-10">
//       <div className="max-w-4xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-yellow-500 mb-4">{project.name}</h2>
//         <img
//           src={project.image}
//           alt={project.name}
//           className="w-full h-auto rounded-md mb-6"
//         />

//         <p className="text-lg mb-4 text-gray-400">
//           <span className="text-yellow-500 text-xl font-serif font-bold">Description:</span>{" "}
//           {project.briefDescription}
//         </p>
//         <ul className="mb-4">
//           <li className="text-gray-400">
//             <strong className="text-yellow-500 text-2xl font-serif">Main Technology Stack:</strong>{" "}
//             {project.mainTechnologyStack.join(", ")}
//           </li>
//           <li>
//             <strong className="text-yellow-500 text-2xl font-serif">Live Link:</strong>{" "}
//             <a
//               href={project.liveLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-300"
//             >
//               {project.liveLink}
//             </a>
//           </li>
//           <li>
//             <strong className="text-yellow-500 text-2xl font-serif">
//               <FaGithub className="inline" /> GitHub Link:
//             </strong>{" "}
//             <a
//               href={project.githubLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-300"
//             >
//               {project.githubLink}
//             </a>
//           </li>
//           <li>
//             <strong className="text-yellow-500 text-2xl font-serif">
//               <FaGithub className="inline" /> GitHub Server Link:
//             </strong>{" "}
//             {project.githubLinkServer ? (
//               <a
//                 href={project.githubLinkServer}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300"
//               >
//                 {project.githubLinkServer}
//               </a>
//             ) : (
//               <span className="text-gray-500 italic">Not available</span>
//             )}
//           </li>
//         </ul>
//         <h3 className="text-2xl font-semibold mb-2 text-yellow-400 font-serif">Challenges Faced</h3>
//         <ul className="list-disc pl-6 mb-4 text-gray-400">
//           {project.challengesFaced.map((challenge, index) => (
//             <li key={index}>{challenge}</li>
//           ))}
//         </ul>
//         <h3 className="text-2xl font-semibold mb-2 text-yellow-400 font-serif">Areas for Improvement</h3>
//         <ul className="list-disc pl-6 text-gray-400">
//           {project.areasForImprovement.map((area, index) => (
//             <li key={index}>{area}</li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default ProjectDetails;
























































































import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { ProjectsData } from "../data";

const ProjectDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const [project, setProject] = useState(null);

  // Fetch project details from the JSON file
  useEffect(() => {
      const data = ProjectsData;
      const selectedProject = data.find((proj) => proj.id === parseInt(id));
      setProject(selectedProject);
  }, [id]);

  // Display a loading message if the project isn't loaded yet
  if (!project) return <div className="text-center text-yellow-500">Loading...</div>;

  return (
    <section className="py-20 bg-gradient-to-r mt-10 from-gray-800 via-gray-900 to-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* Project Title */}
        <h2 className="text-4xl font-bold text-yellow-500 mb-6">{project.name}</h2>

        {/* Project Image */}
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-auto rounded-lg shadow-lg mb-8"
        />

        {/* Description */}
        <p className="text-lg text-gray-300 mb-6">
          <span className="text-yellow-500 text-xl font-semibold">Description:</span>{" "}
          {project.briefDescription}
        </p>

        {/* Project Details */}
        <div className="space-y-4">
          {/* Technology Stack */}
          <div>
            <strong className="text-yellow-500 text-xl font-serif">Main Technology Stack:</strong>
            <p className="text-gray-300">{project.mainTechnologyStack.join(", ")}</p>
          </div>

          {/* Live Link */}
          <div>
            <strong className="text-yellow-500 text-xl font-serif">Live Link:</strong>{" "}
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 hover:underline"
            >
              {project.liveLink}
            </a>
          </div>

          {/* GitHub Links */}
          <div>
            <strong className="text-yellow-500 text-xl font-serif">
              <FaGithub className="inline" /> GitHub Link:
            </strong>{" "}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 hover:underline"
            >
              {project.githubLink}
            </a>
          </div>
          <div>
            <strong className="text-yellow-500 text-xl font-serif">
              <FaGithub className="inline" /> GitHub Server Link:
            </strong>{" "}
            {project.githubLinkServer ? (
              <a
                href={project.githubLinkServer}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 hover:underline"
              >
                {project.githubLinkServer}
              </a>
            ) : (
              <span className="text-gray-500 italic">Not available</span>
            )}
          </div>
        </div>

        {/* Challenges Faced */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4 font-serif">Challenges Faced</h3>
          <ul className="list-disc pl-6 text-gray-300">
            {project.challengesFaced.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>

        {/* Areas for Improvement */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4 font-serif">
            Areas for Improvement
          </h3>
          <ul className="list-disc pl-6 text-gray-300">
            {project.areasForImprovement.map((area, index) => (
              <li key={index}>{area}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
