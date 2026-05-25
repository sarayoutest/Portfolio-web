"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useMemo, useCallback } from "react";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ExternalLink,
  Github,
  Clock,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ProjectCard from "./project-card";

interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectDetail {
  id: string;
  title: string;
  role: string;
  client?: string;
  date: string;
  duration: string;
  description: string;
  longDescription: string;
  challenge: string;
  solution: string;
  outcome: string;
  mainImage: string;
  images: ProjectImage[];
  demoLink?: string;
  sourceLink?: string;
  technologies: string[];
  team?: string[];
  relatedProjects: RelatedProject[];
}

interface RelatedProject {
  id: string;
  title: string;
  description: string;
  image: string;
  role: string;
  technologies: string[];
  demoLink?: string;
  sourceLink?: string;
}

const projectsData: ProjectDetail[] = [
  {
    id: "1",
    title: "App-Forever(E-Commerce site)",
    role: "Frontend Developer",
    client: "Personal Project",
    date: "sep 2025",
    duration: "3 weeks",
    description:
      "E-commerce clothing store built with React.js, featuring product browsing, shopping cart functionality, and a modern responsive UI. ",
    longDescription:
      "Developed a lightweight, responsive demo web application using React and Vite to showcase an intuitive ordering flow. The project highlights clean UI design, fast loading performance, and smooth user interaction — making it suitable for product previews, portfolio presentation, and client demonstrations.",
    challenge:
      "The challenge was to build a modern, high-performance interface that loads quickly across devices while maintaining clean structure, easy scalability, and a smooth development experience..",
    solution:
      " Implemented a modular React architecture with Vite as the build tool to ensure fast HMR, optimized bundling, and excellent development speed. The UI was designed with responsive layouts, compressed assets, and a clean component structure to guarantee reliability when deployed as a static site",
    outcome:
      "The site successfully delivered a fast, responsive demo application that works flawlessly on mobile and desktop.",
    mainImage: "/project2.webp",
    images: [
      { src: "/project2.webp", alt: "Homepage" },
      { src: "/project2.webp", alt: "Course details" },
      { src: "/project2.webp", alt: "Course details" },
      { src: "/project2.webp", alt: "Course details" },
      { src: "/project2.webp", alt: "Course details" },
    ],
    demoLink: "https://sarayoutest.github.io/App-Forever/",
    sourceLink: "https://github.com/sarayoutest/App-Forever.git",
    technologies: ["React", "javaScript", "vite"],
    relatedProjects: [
      {
        id: "6",
        title: "online-shopping-book",
        description:
          "Developed a responsive online bookstore interface using HTML, CSS, and JavaScript. Implemented product listing, category filtering, and a modern shopping UI experience. ",
        image: "/project6.webp",
        role: "Frontend Developer",
        demoLink: "https://sarayoutest.github.io/online-shopping-book/",
        sourceLink: "https://github.com/sarayoutest/online-shopping-book.git",
        technologies: ["Java Script",  "Bootstrap"],
      },
      {
        id: "3",
        title: "S.Store (E-Commerce)",
        description:
          "A simple e-commerce front-end where users can browse products, add items to the cart, and simulate a shopping experience. Ideal for testing UI flows and showcasing basic store functionalities without backend integration.",
        image: "/project3.webp",
        role: "Frontend Developer",
        demoLink: "https://s-store-git-main-sara-youssefs-projects.vercel.app/",
        sourceLink: "https://github.com/sarayoutest/S.Store.git",
        technologies: ["React", "vite", "javaScript"],
      },
      {
        id: "4",
        title: "Admin-Dashboard (React)",
      description:
        "Interactive Admin Dashboard: Developed with React, Material UI, and Firebase, it displays key business metrics—such as emails sent, sales, clients, and revenue—using charts ",
      image: "/project9.webp",
      role: "Frontend Developer",
      demoLink: "https://admin-dashboard-theta-liart-74.vercel.app/",
      sourceLink: "https://github.com/sarayoutest/Admin-Dashboard.git",
      technologies: ["React js", ", Material UI", "Firebase"],
      },
    ],
  },
  {
    id: "2",
    title: "MovieZone Website",
    role: "Frontend Developer",
    client: "TechGadgets Inc.",
    date: "January 2025",
    duration: "3 months",
    description:
      "A sleek movie information platform where users can explore movie details such as title, rating, genres, release year, and audience count. It fetches real-time data via a public API and offers an interactive UI for film enthusiasts.. ",
    longDescription:
      "A sleek movie information platform where users can explore movie details such as title, rating, genres, release year, and audience count. It fetches real-time data via a public API and offers an interactive UI for film enthusiasts.",
    challenge:
      "Integration with external APIs such as TheMovieDB API to display movie data, including images, ratings, trailers, genres, and descriptions, while ensuring the interface remains clean and fast even with large and constantly changing data volumes from the API.",
    solution:
      "I used getServerSideProps or fetch from useEffect to get data instantly with lazy loading.To handle large images, I used next/image with auto-optimization and (placeholder=blur) to ensure fast loading and a smooth user experience.I built a custom MovieCard displaying important information such as star rating, calendar, and genres using Lucide and Badge from shadcn.",
    outcome:
      "After building and deploying the project, I noticed a significant improvement in my development speed and problem-solving abilities. The application became a practical proof of concept that helped me validate core concepts such as state management, performance optimization, and user experience.",
    mainImage: "/project1.webp",
    images: [
      { src: "/project1.webp", alt: "Homepage view" },
      { src: "/project1.webp", alt: "Product listing page" },
      { src: "/project1.webp", alt: "Product detail view" },
      { src: "/project1.webp", alt: "Shopping cart" },
      { src: "/project1.webp", alt: "Checkout process" },
    ],
    demoLink: "https://movie-zone-two-rho.vercel.app/",
    sourceLink: "https://github.com/sarayoutest/MovieZone.git",
    technologies: ["Next.js", "TypeScript", "React Js"],
    team: ["Frontend Developer", "UI/UX Designer", "Backend Developer"],
    relatedProjects: [
      {
        id: "1",
        title: "App-Forever(E-Commerce site)",
        description:
          "E-commerce clothing store built with React.js, featuring product browsing, shopping cart functionality, and a modren responsive UI. ",
        image: "/project2.webp",
        role: "Frontend Developer",
        demoLink: "https://sarayoutest.github.io/App-Forever/",
        sourceLink: "https://github.com/sarayoutest/App-Forever.git",
        technologies: ["React", "javaScript", "vite"],
      },
      {
        id: "3",
        title: "S.Store (E-Commerce)",
        description:
          "A simple e-commerce front-end where users can browse products, add items to the cart, and simulate a shopping experience. Ideal for testing UI flows and showcasing basic store functionalities without backend integration.  ",
        image: "/project3.webp",
        role: "Frontend Developer",
        demoLink: "https://s-store-git-main-sara-youssefs-projects.vercel.app/",
        sourceLink: "https://github.com/sarayoutest/S.Store.git",
        technologies: ["React", "vite", "javaScript"],
      },
      {
        id: "4",
        title: "Admin-Dashboard (React)",
      description:
        "Interactive Admin Dashboard: Developed with React, Material UI, and Firebase, it displays key business metrics—such as emails sent, sales, clients, and revenue—using charts ",
      image: "/project9.webp",
      role: "Frontend Developer",
      demoLink: "https://admin-dashboard-theta-liart-74.vercel.app/",
      sourceLink: "https://github.com/sarayoutest/Admin-Dashboard.git",
      technologies: ["React js", ", Material UI", "Firebase"],
      },
    ],
  },
  {
    id: "3",
    title: "S.Store (E-Commerce)",
    role: "Frontend Developer",
    client: "Personal Project",
    date: "February 2025",
    duration: "2 weeks",
    description:
      "A productivity application for managing tasks, projects, and deadlines with team collaboration features.",
    longDescription:
      "A web app for efficiently managing tasks and teams. Built with React and Tailwind CSS, this project includes features like task status tracking, deadlines, and real-time updates.",
    challenge:
      "Building a user interface that can handle complex task states and interactions while keeping everything responsive and easy to use.",
    solution:
      "Used React to build reusable components and Tailwind CSS for styling. I implemented task filtering, drag-and-drop features, and used a JSON structure for easy data handling.",
    outcome:
      "The app is now used internally by a small team for productivity, and it serves as a showcase for my ability to create interactive, dynamic UIs.",
    mainImage: "/project3.webp",
    images: [
      { src: "/project3.webp", alt: "Dashboard" },
      { src: "/project3.webp", alt: "Task details" },
      { src: "/project3.webp", alt: "Task details" },
      { src: "/project3.webp", alt: "Task details" },
      { src: "/project3.webp", alt: "Task details" },
    ],
    demoLink: "https://s-store-git-main-sara-youssefs-projects.vercel.app/",
    sourceLink: "https://github.com/sarayoutest/S.Store.git",
    technologies: ["React", "vite", "javaScript"],
    relatedProjects: [
      {
        title: "Admin-Dashboard (React)",
      id: "4",
      description:
        "Interactive Admin Dashboard: Developed with React, Material UI, and Firebase, it displays key business metrics—such as emails sent, sales, clients, and revenue—using charts ",
      image: "/project9.webp",
      role: "Frontend Developer",
      demoLink: "https://admin-dashboard-theta-liart-74.vercel.app/",
      sourceLink: "https://github.com/sarayoutest/Admin-Dashboard.git",
      technologies: ["React js", ", Material UI", "Firebase"],
      },
      {
        title: "online-shopping-book",
        id: "6",
        description:
          "Developed a responsive online bookstore interface using HTML, CSS, and JavaScript. Implemented product listing, category filtering, and a modern shopping UI experience. ",
        image: "/project6.webp",
        role: "Frontend Developer",
        demoLink: "https://sarayoutest.github.io/online-shopping-book/",
        sourceLink: "https://github.com/sarayoutest/online-shopping-book.git",
        technologies: ["Java Script",  "Bootstrap"],
      },
      {
        title: "Katra Life",
        id: "7",
        description:
          "Built a lifestyle-themed landing page with clean, user-centered design. Focused on layout structure, typography, and responsive design using modern web technologies.",
        image: "/project7.webp",
        role: "Frontend Developer",
        demoLink: "https://katra-life.netlify.app/",
        sourceLink: "https://katra-life.netlify.app/",
        technologies: ["Html", "Java Script", "Firebase"],
      },
    ],
  },
  {
    id: "4",
    title: "Admin-Dashboard (React)",
    role: "Frontend Developer",
    client: "Personal Project",
    date: "March 2023",
    duration: "2 weeks",
    description:
      "Interactive Admin Dashboard: Developed with React, Material UI, and Firebase, it displays key business metrics—such as emails sent, sales, clients, and revenue—using charts ",
    longDescription:
      "Interactive Admin Dashboard: Developed with React, Material UI, and Firebase, it displays key business metrics—such as emails sent, sales, clients, and revenue—using charts .",
    challenge:
      "Some UI components were not structured properly, leading to usability issues and unclear navigation",
    solution:
      "Implemented a fully responsive grid system and improved component structure for mobile, tablet, and desktop",
    outcome:
      "Improved UI consistency, accessibility, and loading performance.Delivered a clean, responsive, and user-friendly admin dashboard",
    mainImage: "/project9.webp",
    images: [
      { src: "/project9.webp", alt: "Homepage" },
      { src: "/project9.webp", alt: "Projects page" },
      { src: "/project9.webp", alt: "About me section" },
      { src: "/project9.webp", alt: "Contact form" },
    ],
    demoLink: "https://admin-dashboard-theta-liart-74.vercel.app/",
    sourceLink: "https://github.com/sarayoutest/Admin-Dashboard.git",
    technologies: ["React js", ", Material UI", "Firebase"],
    relatedProjects: [
      {
        id: "3",
        title: "S.Store (E-Commerce)",
        description:
          "A simple e-commerce front-end where users can browse products, add items to the cart, and simulate a shopping experience. Ideal for testing UI flows and showcasing basic store functionalities without backend integration.",
        image: "/project3.webp",
        role: "Frontend Developer",
        demoLink: "https://s-store-git-main-sara-youssefs-projects.vercel.app/",
        sourceLink: "https://github.com/sarayoutest/S.Store.git",
        technologies: ["React", "vite", "javaScript"],
      },
      {
        id: "5",
        title: "Food Website",
        description:
          "Developed a responsive Food-Delivery web application featuring a clean UI, allowing users to browse meals and add items to their cart seamlessly. Built using HTML, CSS, and JavaScript with a focus on smooth user interaction and modern design. ",
        image: "/project5.webp",
        role: "Frontend Developer",
        demoLink: "https://sarayoutest.github.io/food-delivery/",
        sourceLink: "https://github.com/sarayoutest/food-delivery.git",
        technologies: ["Java Script", "React.js", "vite"],
      },
      {
        id: "6",
        title: "online-shopping-book",
        description:
          "Developed a responsive online bookstore interface using HTML, CSS, and JavaScript. Implemented product listing, category filtering, and a modern shopping UI experience. ",
        image: "/project6.webp",
        role: "Frontend Developer",
        demoLink: "https://sarayoutest.github.io/online-shopping-book/",
        sourceLink: "https://github.com/sarayoutest/online-shopping-book.git",
        technologies: ["Java Script",  "Bootstrap"],
      },
    ],
  },

  {
    id: "5",
    title: "Food Website",
    role: "Frontend Developer",
    client: "Personal Project",
    date: "March 2023",
    duration: "2 weeks",
    description:
      "Developed a responsive Food-Delivery web application featuring a clean UI, allowing users to browse meals and add items to their cart seamlessly. Built using HTML, CSS, and JavaScript with a focus on smooth user interaction and modern design. ",
    longDescription:
      "A sleek and modern site for air travel services, featuring booking options, travel destination highlights, and flight schedules. Built with Next.js for performance and SEO.",
    challenge:
      "The website layout needed improvements in responsiveness across different screen sizes",
    solution:
      "Improved responsive design using flexible grids and media queries for mobile, tablet, and desktop.",
    outcome:
      "Delivered a fully responsive and user-friendly food delivery website.",
    mainImage: "/project5.webp",
    images: [
      { src: "/project5.webp", alt: "Homepage" },
      { src: "/project5.webp", alt: "Booking interface" },
      { src: "/project5.webp", alt: "Homepage" },
      { src: "/project5.webp", alt: "Booking interface" },
      { src: "/project5.webp", alt: "Homepage" },
    ],
    demoLink: "https://sarayoutest.github.io/food-delivery/",
    sourceLink: "https://github.com/sarayoutest/food-delivery.git",
    technologies: ["Java Script", "React.js", "vite"],
    relatedProjects: [
      {
        id: "2",
        title: "MovieZone Website",
      description:
        " sleek movie information platform where users can explore movie details such as title, rating, genres, release year, and audience count. It fetches real-time data via a public API and offers an interactive UI for film enthusiasts.. ",
      image: "/project1.webp",
      role: "Frontend Developer",
      demoLink: "https://movie-zone-two-rho.vercel.app/",
      sourceLink: "https://github.com/sarayoutest/MovieZone.git",
      technologies: ["Next.js", "TypeScript", "React JS"],
      },
      {
        id: "3",
        title: "S.Store (E-Commerce)",
        description:
          "A simple e-commerce front-end where users can browse products, add items to the cart, and simulate a shopping experience. Ideal for testing UI flows and showcasing basic store functionalities without backend integration.",
        image: "/project3.webp",
        role: "Frontend Developer",
        demoLink: "https://s-store-git-main-sara-youssefs-projects.vercel.app/",
        sourceLink: "https://github.com/sarayoutest/S.Store.git",
        technologies: ["React", "vite", "javaScript"],
      },
      {
        id: "6",
        title: "online-shopping-book",
        description:
          "Developed a responsive online bookstore interface using HTML, CSS, and JavaScript. Implemented product listing, category filtering, and a modern shopping UI experience. ",
        image: "/project6.webp",
        role: "Frontend Developer",
        demoLink: "https://sarayoutest.github.io/online-shopping-book/",
        sourceLink: "https://github.com/sarayoutest/online-shopping-book.git",
        technologies: ["Java Script",  "Bootstrap"],
      },
    ],
  },

  {
    id: "6",
    title: "online-shopping-book",
    role: "Frontend Developer",
    client: "Personal Project",
    date: "April 2023",
    duration: "1.5 weeks",
    description:
      "Developed a responsive online bookstore interface using HTML, CSS, and JavaScript. Implemented product listing, category filtering, and a modern shopping UI experience",
    longDescription:
      "A health-focused web app built for online doctor consultations and appointment management. The site features an intuitive interface for users to book appointments, read doctor profiles, and manage their medical sessions. Built using Next.js and Tailwind CSS for responsiveness and performance.",
    challenge:
      "The authentication pages (Sign In / Sign Up) were not fully functional and lacked form validation.",
    solution:
      "Implemented client-side form validation and improved the structure of authentication forms",
    outcome:
      "Delivered a cleaner, more accessible, and better-optimized e-commerce frontend demo",
    mainImage: "/project6.webp",
    images: [
      { src: "/project6.webp", alt: "Homepage" },
      { src: "/project6.webp", alt: "Doctor listing" },
      { src: "/project6.webp", alt: "Appointment booking" },
    ],
    demoLink: "https://sarayoutest.github.io/online-shopping-book/",
    sourceLink: "https://github.com/sarayoutest/online-shopping-book.git",
    technologies: ["Java Script",  "Bootstrap"],
    relatedProjects: [
      {
        id: "3",
        title: "S.Store (E-Commerce)",
        description:
          "A simple e-commerce front-end where users can browse products, add items to the cart, and simulate a shopping experience. Ideal for testing UI flows and showcasing basic store functionalities without backend integration.",
        image: "/project3.webp",
        role: "Frontend Developer",
        demoLink: "https://s-store-git-main-sara-youssefs-projects.vercel.app/",
        sourceLink: "https://github.com/sarayoutest/S.Store.git",
        technologies: ["React", "vite", "javaScript"],
      },
      {
        id: "5",
        title: "Food Website",
        description:
          "Developed a responsive Food-Delivery web application featuring a clean UI, allowing users to browse meals and add items to their cart seamlessly. Built using HTML, CSS, and JavaScript with a focus on smooth user interaction and modern design. ",
        image: "/project5.webp",
        role: "Frontend Developer",
        demoLink: "https://sarayoutest.github.io/food-delivery/",
        sourceLink: "https://github.com/sarayoutest/food-delivery.git",
        technologies: ["Java Script", "React.js", "vite"],
      },
      {
        id: "7",
        title: "Katra Life",
        description:
          "Built a lifestyle-themed landing page with clean, user-centered design. Focused on layout structure, typography, and responsive design using modern web technologies.",
        image: "/project7.webp",
        role: "Frontend Developer",
        demoLink: "https://katra-life.netlify.app/",
        sourceLink: "https://katra-life.netlify.app/",
        technologies: ["Html", "Java Script", "Firebase"],
      },
    ],
  },

  {
    id: "7",
    title: "Katra Life ",
    role: "Frontend Developer",
    client: "ProductiveCo",
    date: "June 2023",
    duration: "1 week",
    description:
      "Built a lifestyle-themed landing page with clean, user-centered design. Focused on layout structure, typography, and responsive design using modern web technologies.",
    longDescription:
      "Built a lifestyle-themed landing page with clean, user-centered design. Focused on layout structure, typography, and responsive design using modern web technologies.",
    challenge:
      "The client needed a custom task management solution that would integrate with their existing workflow and tools. They required features not available in off-the-shelf solutions, including custom reporting, specific permission levels, and integration with their proprietary systems.",
    solution:
      "I developed a full-stack application using React for the frontend and Node.js with MongoDB for the backend. The application implements a real-time notification system using WebSockets, a drag-and-drop interface for task management, and a comprehensive API for integration with other tools. The design focuses on usability with an intuitive interface that requires minimal training for new users.",
    outcome:
      "After implementation, the client reported a 30% increase in team productivity and a significant reduction in missed deadlines. The application is now used daily by over 50 team members and has become an essential part of their workflow. The client has requested additional features and modules to expand the system's capabilities.",
    mainImage: "/project7.webp",
    images: [
      { src: "/project7.webp", alt: "Dashboard view" },
      { src: "/project7.webp", alt: "Task board" },
      { src: "/project7.webp", alt: "Task detail modal" },
      { src: "/project7.webp", alt: "Calendar view" },
      { src: "/project7.webp", alt: "Reports and analytics" },
    ],
    demoLink: "https://katra-life.netlify.app/",
    sourceLink: "https://katra-life.netlify.app/",
    technologies: ["Html", "Java Script", "Firebase"],
    team: [
      "Frontend Developer",
      "UI/UX Designer",
      "Project Manager",
      "Backend Developer",
    ],
    relatedProjects: [
      {
        id: "2",
        title: "MovieZone Website",
      description:
        " sleek movie information platform where users can explore movie details such as title, rating, genres, release year, and audience count. It fetches real-time data via a public API and offers an interactive UI for film enthusiasts.. ",
      image: "/project1.webp",
      role: "Frontend Developer",
      demoLink: "https://movie-zone-two-rho.vercel.app/",
      sourceLink: "https://github.com/sarayoutest/MovieZone.git",
      technologies: ["Next.js", "TypeScript", "React JS"],
      },
      {
        id: "3",
        title: "S.Store (E-Commerce)",
        description:
          "A simple e-commerce front-end where users can browse products, add items to the cart, and simulate a shopping experience. Ideal for testing UI flows and showcasing basic store functionalities without backend integration.",
        image: "/project3.webp",
        role: "Frontend Developer",
        demoLink: "https://s-store-git-main-sara-youssefs-projects.vercel.app/",
        sourceLink: "https://github.com/sarayoutest/S.Store.git",
        technologies: ["React", "Tailwind CSS", "javaScript"],
      },
      {
        id: "6",
        title: "online-shopping-book",
        description:
          "Developed a responsive online bookstore interface using HTML, CSS, and JavaScript. Implemented product listing, category filtering, and a modern shopping UI experience. ",
        image: "/project6.webp",
        role: "Frontend Developer",
        demoLink: "https://sarayoutest.github.io/online-shopping-book/",
        sourceLink: "https://github.com/sarayoutest/online-shopping-book.git",
        technologies: ["Java Script",  "Bootstrap"],
      },
    ],
  },


  {
    id: "9",
    title: "sky-master",
    role: "Frontend Developer",
    client: "ProductiveCo",
    date: "June 2026",
    duration: "1 month",
    description:
      "Built a lifestyle-themed landing page with clean, user-centered design. Focused on layout structure, typography, and responsive design using modern web technologies.",
    longDescription:
      "Built a responsive, lifestyle-themed landing page focusing on structural layouts and typography. Features robust real-world API integration for live content management, backed by efficient data fetching and error handling using modern web practices.",
    challenge:
      "The client needed a custom task management solution that would integrate with their existing workflow and tools. They required features not available in off-the-shelf solutions, including custom reporting, specific permission levels, and integration with their proprietary systems.",
    solution:
      "I developed a full-stack application using React for the frontend and Node.js with MongoDB for the backend. The application implements a real-time notification system using WebSockets, a drag-and-drop interface for task management, and a comprehensive API for integration with other tools. The design focuses on usability with an intuitive interface that requires minimal training for new users.",
    outcome:
      "After implementation, the client reported a 30% increase in team productivity and a significant reduction in missed deadlines. The application is now used daily by over 50 team members and has become an essential part of their workflow. The client has requested additional features and modules to expand the system's capabilities.",
    mainImage: "/project9.webp",
    images: [
      { src: "/project9.webp", alt: "Dashboard view" },
      { src: "/project9.webp", alt: "Task board" },
      { src: "/project9.webp", alt: "Task detail modal" },
      { src: "/project9.webp", alt: "Calendar view" },
      { src: "/project9.webp", alt: "Reports and analytics" },
    ],
    demoLink: "https://sky-master-ten.vercel.app/",
    sourceLink: "https://dreamhrms.com/sky-master/",
    technologies: ["React JS", "Java Script", "Tailwind CSS"],
    team: [
      "Frontend Developer",
      "UI/UX Designer",
      "Project Manager",
      "Backend Developer",
    ],
    relatedProjects: [
      {
        id: "2",
        title: "MovieZone Website",
      description:
        " sleek movie information platform where users can explore movie details such as title, rating, genres, release year, and audience count. It fetches real-time data via a public API and offers an interactive UI for film enthusiasts.. ",
      image: "/project1.webp",
      role: "Frontend Developer",
      demoLink: "https://movie-zone-two-rho.vercel.app/",
      sourceLink: "https://github.com/sarayoutest/MovieZone.git",
      technologies: ["Next.js", "TypeScript", "React JS"],
      },
      {
        id: "3",
        title: "S.Store (E-Commerce)",
        description:
          "A simple e-commerce front-end where users can browse products, add items to the cart, and simulate a shopping experience. Ideal for testing UI flows and showcasing basic store functionalities without backend integration.",
        image: "/project3.webp",
        role: "Frontend Developer",
        demoLink: "https://s-store-git-main-sara-youssefs-projects.vercel.app/",
        sourceLink: "https://github.com/sarayoutest/S.Store.git",
        technologies: ["React", "Tailwind CSS", "javaScript"],
      },
      {
        id: "6",
        title: "online-shopping-book",
        description:
          "Developed a responsive online bookstore interface using HTML, CSS, and JavaScript. Implemented product listing, category filtering, and a modern shopping UI experience. ",
        image: "/project6.webp",
        role: "Frontend Developer",
        demoLink: "https://sarayoutest.github.io/online-shopping-book/",
        sourceLink: "https://github.com/sarayoutest/online-shopping-book.git",
        technologies: ["Java Script",  "Bootstrap"],
      },
    ],
  },

    {
    id: "8",
    title: "E-Trolley",
    role: "Frontend Developer",
    client: "Personal Project",
    date: " 2026",
    duration: "2 weeks",
    description:
      "Developed a responsive online bookstore interface using HTML, CSS, and JavaScript. Implemented product listing, category filtering, and a modern shopping UI experience",
    longDescription:
      "A health-focused web app built for online doctor consultations and appointment management. The site features an intuitive interface for users to book appointments, read doctor profiles, and manage their medical sessions. eTrolley is a platform officially validated by the Qatari Ministry of Communications.",
    challenge:
      "The authentication pages  were not fully functional and lacked form validation.",
    solution:
      "Implemented client-side form validation and improved the structure of authentication forms",
    outcome:
      "Delivered a cleaner, more accessible, and better-optimized e-commerce frontend demo",
    mainImage: "/project8.webp",
    images: [
      { src: "/project8.webp", alt: "Homepage" },
      { src: "/project8.webp", alt: "Doctor listing" },
      { src: "/project8.webp", alt: "Appointment booking" },
    ],
    demoLink: "https://sarayoutest.github.io/E-Trolley/index.html#",
    sourceLink: "https://github.com/sarayoutest/E-Trolley.git",
    technologies: ["Java Script", "Bootstrap", "Html"],
    relatedProjects: [
      {
        id: "3",
        title: "S.Store (E-Commerce)",
        description:
          "A simple e-commerce front-end where users can browse products, add items to the cart, and simulate a shopping experience. Ideal for testing UI flows and showcasing basic store functionalities without backend integration.",
        image: "/project3.webp",
        role: "Frontend Developer",
        demoLink: "https://s-store-git-main-sara-youssefs-projects.vercel.app/",
        sourceLink: "https://github.com/sarayoutest/S.Store.git",
        technologies: ["React", "vite", "javaScript"],
      },
      {
        id: "5",
        title: "Food Website",
        description:
          "Developed a responsive Food-Delivery web application featuring a clean UI, allowing users to browse meals and add items to their cart seamlessly. Built using HTML, CSS, and JavaScript with a focus on smooth user interaction and modern design. ",
        image: "/project5.webp",
        role: "Frontend Developer",
        demoLink: "https://sarayoutest.github.io/food-delivery/",
        sourceLink: "https://github.com/sarayoutest/food-delivery.git",
        technologies: ["Java Script", "React.js", "vite"],
      },
      {
        id: "7",
        title: "Katra Life",
        description:
          "Built a lifestyle-themed landing page with clean, user-centered design. Focused on layout structure, typography, and responsive design using modern web technologies.",
        image: "/project7.webp",
        role: "Frontend Developer",
        demoLink: "https://katra-life.netlify.app/",
        sourceLink: "https://katra-life.netlify.app/",
        technologies: ["Html", "Java Script", "Firebase"],
      },
    ],
  },
  
];

export default function ProjectDetailPage() {
  const params = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [project, setProject] = useState(null);

  const projectId = useMemo(() => params.id, [params.id]);

  useEffect(() => {
    if (!projectId) {
      console.error("No projectId found in URL params");
      setProject(null);
      return;
    }

    const matched = projectsData.find((p) => p.id === projectId);
    setProject(matched || null);
    setCurrentImageIndex(0);
  }, [projectId]);

  const nextImage = useCallback(() => {
    if (!project) return;
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  }, [project]);

  const prevImage = useCallback(() => {
    if (!project) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  }, [project]);

  const currentIndex = useMemo(() => {
    return project ? projectsData.findIndex((p) => p.id === project.id) : -1;
  }, [project, projectsData]);

  const prevProject = useMemo(() => {
    return currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  }, [currentIndex, projectsData]);

  const nextProject = useMemo(() => {
    return currentIndex < projectsData.length - 1
      ? projectsData[currentIndex + 1]
      : null;
  }, [currentIndex, projectsData]);

  if (!project) {
    return (
      <div className="flex h-[70vh] mx-auto items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            The project you&#39;re looking for doesn&#39;t exist or has been
            removed.
          </p>
          <Link
            href="/Project"
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Back button */}
      <div className="mb-6">
        <Link
          href="/Project"
          className="inline-flex items-center text-blue-600 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Projects
        </Link>
      </div>

      {/* Project Image */}
      <div className="mb-10">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={project.mainImage || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Project Overview</h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              {project.longDescription}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Key Features</h2>
            <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-300 space-y-1">
              <li>Responsive design for all device sizes</li>
              <li>User authentication and profile management</li>
              <li>Course creation and management dashboard</li>
              <li>Video streaming with progress tracking</li>
              <li>Interactive quizzes and assessments</li>
              <li>Payment integration with Stripe</li>
              <li>Dark/light mode support</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Challenges & Solutions
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              {project.challenge}
            </p>
            <p className="text-zinc-700 dark:text-zinc-300 mt-2">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 text-[15px]">
          {/* Project Details */}
          <div className="bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-blue-500" />
              Project Details
            </h3>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-emerald-500" />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 text-purple-500" />
                <span>{project.role}</span>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 flex items-center gap-2 mb-4">
              🚀 Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-zinc-200/60 dark:bg-zinc-700/60 text-[13px] rounded-full border border-zinc-300 dark:border-zinc-600 text-zinc-800 dark:text-zinc-100 font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          {project.demoLink && (
            <Link
              href={project.demoLink}
              target="_blank"
              className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-gradient-to-r from-black to-zinc-900 text-white rounded-xl hover:brightness-110 shadow transition font-medium">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </Link>
          )}
          {project.sourceLink && (
            <Link
              href={project.sourceLink}
              target="_blank"
              className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 shadow transition font-medium">
              <Github className="h-4 w-4 mr-2" />
              Source Code
            </Link>
          )}
        </div>

        {/* Project gallery */}
        {/* {project.images.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
            <div className="relative">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <Image
                  src={project.images[currentImageIndex].src || "/placeholder.svg"}
                  alt={project.images[currentImageIndex].alt}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Navigation buttons 
              {project.images.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90 dark:bg-black/50 dark:hover:bg-black/60"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-10 w-10" />
                    <span className="sr-only">Previous image</span>
                  </button>

                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90 dark:bg-black/50 dark:hover:bg-black/60"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-10 w-10" />
                    <span className="sr-only">Next image</span>
                  </button>

                  {/* Image counter 
                  <div className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-sm text-white backdrop-blur-sm">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnails 
            {project.images.length > 1 && (
              <div className="mt-4 grid grid-cols-5 gap-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative aspect-video overflow-hidden rounded-md ${currentImageIndex === index
                      ? "ring-2 ring-emerald-500 ring-offset-2 dark:ring-offset-zinc-900"
                      : "opacity-70 hover:opacity-100"
                      }`}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={150}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )} */}

        {/* Related projects */}
      </div>
      {project.relatedProjects.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-8">Related Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.relatedProjects.map((relatedProject) => (
              <ProjectCard
                id={""}
                key={relatedProject.id}
                title={relatedProject.title}
                description={relatedProject.description}
                image={relatedProject.image}
                role={relatedProject.role}
                technologies={relatedProject.technologies}
                demoLink={relatedProject.demoLink}
                sourceLink={relatedProject.sourceLink}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
