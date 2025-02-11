// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About",path: '/about' },
//     { name: "Projects", path: "/projects" },
//     { name: "Skills", path: "/skills" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className="z-[1000] mx-auto sticky top-4 flex items-center justify-between py-4 px-6 w-11/12 bg-[#F2F6FA] border border-solid rounded-xl dark:bg-[#181818] shadow-sm dark:shadow-md dark:border-[#242222] dark:text-white">
//       <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
//         {/* Logo */}
//         <div className="text-2xl font-bold text-yellow-500">
//           <NavLink to="/">My Portfolio</NavLink>
//         </div>

//         {/* Navigation Links (Desktop) */}
//         <ul className="hidden md:flex gap-6 text-lg font-medium">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <NavLink
//                 to={link.path}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-yellow-500 font-bold"
//                     : "hover:text-yellow-500 transition-colors"
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* Button - Positioned to the Right (Desktop) */}
//         <div className="hidden md:flex">
//           <NavLink to={'/contact'}>
//           <button className="ml-6 px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
//             Hire Me
//           </button>
//           </NavLink>
//         </div>

//         {/* Mobile Menu */}
//         <div className="dropdown dropdown-end md:hidden">
//           <label tabIndex={0} className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </label>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-base-content"
//           >
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <NavLink
//                   to={link.path}
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-primary font-bold"
//                       : "hover:text-primary transition-colors"
//                   }
//                 >
//                   {link.name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


















































import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="z-[1000] mx-auto sticky top-4 flex items-center justify-between py-4 px-6 w-11/12 bg-[#F2F6FA] border border-solid rounded-xl dark:bg-[#181818] shadow-sm dark:shadow-md dark:border-[#242222] dark:text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        {/* Logo with Typewriter effect */}
        <div className="text-lg font-bold font-serif px-2  text-yellow-500">
          <NavLink to="/">
            <span>Web Developer</span>
          </NavLink>
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex font-serif gap-6 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-yellow-500 font-bold" : "hover:text-yellow-500 transition-colors"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Button - Positioned to the Right (Desktop) */}
        <div className="hidden md:flex">
          <NavLink to={"/contact"}>
            <button className="ml-6 px-6 py-2 font-serif text-xl bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
              Hire Me
            </button>
          </NavLink>
        </div>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-base-content"
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "text-primary font-bold" : "hover:text-primary transition-colors"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
























// import { Link, NavLink } from "react-router-dom";
// import { CiMenuFries } from "react-icons/ci";
// import { useState } from "react";
// import ThemeToggle from "./ThemeToggle";

// const Navbar = () => {
//     const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

//     return (
//         <nav className="z-[1000] mx-auto sticky top-4 flex items-center justify-between py-4 px-4 w-11/12 bg-[#F2F6FA] border border-solid rounded-xl dark:bg-[#181818] shadow-sm dark:shadow-md dark:border-[#242222] dark:text-white-deep">
//             <div>
//                 <Link to="/">
//                     <p className="text-dark-deep font-semibold text-3xl dark:text-white-deep">
//                         My Portfolio
//                     </p>
//                 </Link>
//             </div>

//             {/* Desktop Navigation */}
//             <ul className="space-x-8 hidden lg:flex">
//                 <li><NavLink to="/" className="nav">Home</NavLink></li>
//                 <li><NavLink to="/about" className="nav">About Me</NavLink></li>
//                 <li><NavLink to="/skills" className="nav">Skills</NavLink></li>
//                 <li><NavLink to="/projects" className="nav">Projects</NavLink></li>
//                 <li><NavLink to="/contact" className="nav">Contact</NavLink></li>
//             </ul>

//             <div className="flex items-center gap-4">
//                 {/* Theme Toggle Button */}
//                 <ThemeToggle />

//                 {/* Resume Button */}
//                 <div className="max-sm:hidden space-x-3">
//                     <a className="button" target="_blank" href="https://docs.google.com/document/d/1iXBQFD7g83nxgOi9N1K25q--ogDAmGn3iMikkqVwBX0/edit?usp=sharing">
//                         Resume
//                     </a>
//                 </div>

//                 {/* Mobile Menu Toggle */}
//                 <CiMenuFries className="text-[1.8rem] mr-1 cursor-pointer lg:hidden flex" onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} />
//             </div>

//             {/* Dropdown Menu */}
//             <aside
//                 className={`absolute top-[65px] right-0 w-full md:w-4/12 rounded-md transition-transform duration-300 transform bg-white dark:bg-[#121212] p-4 text-center shadow-md ${mobileSidebarOpen ? "translate-y-0 opacity-100 z-[2000]" : "translate-y-[-200px] opacity-0 z-[-1]"}`}
//             >
//                 <ul className="space-y-3">
//                     <li>
//                         <Link to="/" className="block hover:text-primary transition-colors ease-in-out duration-300" onClick={() => setMobileSidebarOpen(false)}>Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/about" className="block hover:text-primary transition-colors ease-in-out duration-300" onClick={() => setMobileSidebarOpen(false)}>About Me</Link>
//                     </li>
//                     <li>
//                         <Link to="/skills" className="block hover:text-primary transition-colors ease-in-out duration-300" onClick={() => setMobileSidebarOpen(false)}>Skills</Link>
//                     </li>
//                     <li>
//                         <Link to="/works" className="block hover:text-primary transition-colors ease-in-out duration-300" onClick={() => setMobileSidebarOpen(false)}>Works</Link>
//                     </li>
//                     <li>
//                         <Link to="/contact-me" className="block hover:text-primary transition-colors ease-in-out duration-300" onClick={() => setMobileSidebarOpen(false)}>Contact Me</Link>
//                     </li>
//                 </ul>
//             </aside>
//         </nav>
//     );
// };

// export default Navbar;































