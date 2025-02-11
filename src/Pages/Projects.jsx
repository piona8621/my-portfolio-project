// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

//  const Projects = () => {

//  const [projects, setProjects] = useState([]);

//  useEffect(() => {
//     fetch('/project.json')
//     .then(res => res.json())
//     .then(data => setProjects(data));

//  })

//   return (
//     <section id="projects" className="py-20 pt-16">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-yellow-500 mb-8">My Projects</h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <div key={project.name} className=" p-6 rounded-lg shadow-md">
//               <img
//                 src={project.image}
//                 alt={project.name}
//                 className="w-full h-48 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-xl font-semibold text-white">{project.name}</h3>
//               <Link
//                 to={`/project-details/${project.id}`}
//                 className="mt-4 inline-block px-6 py-4 btn-warning btn btn-outline text-white rounded-lg hover:bg-primary-dark transition-colors"
//               >
//                 View More
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProjectsData } from "../data";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(ProjectsData);
  }, []);

  return (
    <section id="projects" className="py-20 pt-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold font-serif text-center text-yellow-500 mb-8">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="p-6 rounded-lg  shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-white">
                {project.name}
              </h3>
              <Link
                to={`/project-details/${project.id}`}
                className="mt-4 mr-4  inline-block px-6 py-4 btn-warning btn btn-outline text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                View More
              </Link>
              <a
                href={project?.liveLink}
                target="_blank"
                rel="noopener noreferrer" // Optional: improve security when opening links in a new tab
                className="mt-4 mr-4 inline-block px-6 py-4 btn-warning btn btn-outline text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                Live Link
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
