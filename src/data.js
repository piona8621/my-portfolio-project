import project1 from "/public/project1.png";
import project2 from "/public/project2.png";
import project3 from "/public/project3.png";
import project4 from "/public/project4.png";
import project5 from "/public/project5.png";
import project6 from "/public/project6.png";

export const ProjectsData = [
  {
    id: 1,
    name: "Vocabulary Learning Project",
    image: project1,
    mainTechnologyStack: ["React.js", "Node.js", "Firebase", "React-countup"],
    briefDescription:
      "An engaging platform designed to help users expand their vocabulary with interactive features such as quizzes, progress tracking, and gamified learning experiences.",
    liveLink: "https://vocabulary-learning-project.web.app/",
    githubLink:
      "https://github.com/programming-hero-web-course1/b10-a9-authentication-piona8621?tab=readme-ov-file",
    challengesFaced: [
      "Ensuring the app is responsive across different devices.",
      "Implementing real-time progress tracking for users.",
      "Debugging issues with database synchronization.",
    ],
    areasForImprovement: [
      "Enhancing the quiz experience with adaptive difficulty levels.",
      "Adding support for offline learning modes.",
    ],
  },


   {
    id: 2,
    name: "ScholarShip Project",
    image: project6, // Ensure this is imported correctly
    mainTechnologyStack: ["React.js", "Node.js", "Firebase", "React-countup"],
    briefDescription:
      "🎓 Scholarship Management System The Scholarship Management System is a web-based platform designed to help students find and apply for scholarships from various universities worldwide. The system streamlines the scholarship application process, making it easier for students to search, apply, and track their applications in one place.",
    liveLink: "https://scholar-ship-project.web.app/",
    githubLink:
      "https://github.com/piona8621/scholarship-client-server",
      githubLinkServer:
      "https://github.com/piona8621/scholarship-server-side",
    challengesFaced: [
      "Ensuring the app is responsive across different devices.",
      "Implementing real-time progress tracking for users.",
      "Debugging issues with database synchronization.",
    ],
    areasForImprovement: [
      "Enhancing the user experience with personalized scholarship recommendations.",
      "Adding support for offline access to saved scholarships.",
    ],
  },
  



  {
    id: 3,
    name: "Visa Navigator Project",
    image: project2,
    mainTechnologyStack: [
      "React.js",
      "Tailwind CSS",
      "Vercel",
      "Firebase",
      "Daisy UI",
      "React-simple-typewriter",
      "React Awesome reveal",
      "MongoDB",
    ],
    briefDescription:
      "A personal portfolio showcasing projects, skills, and professional achievements. Includes a clean, modern design and responsive layout.",
    liveLink: "https://client-visa-project.web.app/",
    githubLink:
      "https://github.com/programming-hero-web-course2/b10-a10-client-side-piona8621",
    githubLinkServer:
      "https://github.com/piona8621/scholarship-server-side",
    challengesFaced: [
      "Designing a consistent theme across all sections.",
      "Ensuring responsiveness for different screen sizes.",
      "Optimizing performance for faster loading times.",
    ],
    areasForImprovement: [
      "Adding a blog section to share knowledge.",
      "Enhancing animations for better interactivity.",
    ],
  },
  {
    id: 4,
    name: "Hotel Booking Project",
    image: project3,
    mainTechnologyStack: [
      "React.js",
      "Redux",
      "Firebase",
      "MongoDB",
      "Daisy UI",
      "Tailwind CSS",
    ],
    briefDescription:
      "A task management application that allows users to create, update, delete, and categorize tasks. Includes real-time sync using Firebase.",
    liveLink: "https://hotel-booking-project-24394.web.app/",
    githubLink:
      "https://github.com/programming-hero-web-course2/b10a11-client-side-piona8621",
    githubLinkServer:
      "https://github.com/programming-hero-web-course2/b10a11-server-side-piona8621",
    challengesFaced: [
      "Integrating Redux for state management.",
      "Handling real-time updates using Firebase.",
      "Ensuring a smooth user experience with complex task categories.",
    ],
    areasForImprovement: [
      "Adding priority levels for tasks.",
      "Implementing push notifications for reminders.",
    ],
  },
  {
    id: 5,
    name: "Gadget Haven",
    image: project4,
    mainTechnologyStack: ["React.js", "Tailwind CSS", "Daisy UI"],
    briefDescription:
      "An e-commerce platform designed for gadget enthusiasts, showcasing the latest gadgets with features like filtering, searching, and real-time stock updates.",
    liveLink: "https://gadgethavenproject.netlify.app/",
    githubLink:
      "https://github.com/programming-hero-web-course2/b10a8-gadget-heaven-piona8621",
    challengesFaced: [
      "Implementing Redux for efficient state management of cart and product inventory.",
      "Integrating real-time database updates using Firebase.",
      "Ensuring a responsive and user-friendly design for all devices.",
    ],
    areasForImprovement: [
      "Adding user reviews and ratings for products.",
      "Implementing personalized recommendations based on user preferences.",
      "Enhancing payment gateway integration with multiple options.",
    ],
  },
  {
    id: 6,
    name: "Animal Adoption Project",
    image: project5,
    mainTechnologyStack: ["Tailwind CSS", "JavaScript", "Daisy UI"],
    briefDescription:
      "A platform to connect animals in need of homes with potential adopters. Users can browse animals, view their profiles, and start the adoption process seamlessly.",
    liveLink: "https://dynamic-es6.netlify.app/",
    githubLink:
      "https://github.com/programming-hero-web-course2/b10a6-pet-adoption-piona8621",
    challengesFaced: [
      "Implementing dynamic filtering for animal categories.",
      "Ensuring mobile responsiveness across devices.",
      "Optimizing the user interface for accessibility and ease of use.",
    ],
    areasForImprovement: [
      "Adding a notification system for adoption updates.",
      "Integrating a real-time chat feature for adopters and shelters.",
      "Enhancing search functionality with advanced filters.",
    ],
  },
];
