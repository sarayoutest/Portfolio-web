import ProjectCard from "./project-card";
import FeaturedProjectCard from "./featured-project-card";
import React from "react";

export default function ProjectsPage() {
  const featuredProject = {
        title: "App-Forever(E-Commerce site)",
        id: "1",
        description:
          "E-commerce clothing store built with React.js, featuring product browsing, shopping cart functionality, and a modren responsive UI. ",
        image: "/project2.webp",
        role: "Frontend Developer",
        demoLink: "https://sarayoutest.github.io/App-Forever/",
        sourceLink: "https://github.com/sarayoutest/App-Forever.git",
        technologies: ["React", "javaScript", "vite"],
  };

  const projects = [
    {
      title: "MovieZone Website",
      id: "2",
      description:
        " sleek movie information platform where users can explore movie details such as title, rating, genres, release year, and audience count. It fetches real-time data via a public API and offers an interactive UI for film enthusiasts.. ",
      image: "/project1.webp",
      role: "Frontend Developer",
      demoLink: "https://movie-zone-two-rho.vercel.app/",
      sourceLink: "https://github.com/sarayoutest/MovieZone.git",
      technologies: ["Next.js", "TypeScript", "React JS"],
    },
    {
      title: "S.Store (E-Commerce)",
      id: "3",
        description:
          "A simple e-commerce front-end where users can browse products, add items to the cart, and simulate a shopping experience. Ideal for testing UI flows and showcasing basic store functionalities without backend integration.",
        image: "/project3.webp",
        role: "Frontend Developer",
        demoLink: "https://s-store-git-main-sara-youssefs-projects.vercel.app/",
        sourceLink: "https://github.com/sarayoutest/S.Store.git",
        technologies: ["React", "vite", "javaScript"],
    },
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
        title: "Food Website",
        id: "5",
        description:
          "Developed a responsive Food-Delivery web application featuring a clean UI, allowing users to browse meals and add items to their cart seamlessly. Built using HTML, CSS, and JavaScript with a focus on smooth user interaction and modern design. ",
        image: "/project5.webp",
        role: "Frontend Developer",
        demoLink: "https://sarayoutest.github.io/food-delivery/",
        sourceLink: "https://github.com/sarayoutest/food-delivery.git",
        technologies: ["Java Script", "React.js", "vite"],
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
    {
      title: "E-Trolley",
        id: "8",
        description:
          "eTrolley is a platform officially validated by the Qatari Ministry of Communications.",
        image: "/project8.webp",
        role: "Frontend Developer",
        demoLink: "https://sarayoutest.github.io/E-Trolley/index.html#",
        sourceLink: "https://github.com/sarayoutest/E-Trolley.git",
        technologies: ["Html", "Java Script", "css"],
    },
     {
      title: "sky-master",
        id: "9",
        description:
          "A complete web application combining a booking system and an e-commerce marketplace for paragliding services and equipment. Built with a scalable backend API to handle reservations, product management, and secure transactions, ensuring high performance and modular architecture.",
        image: "/project10.webp",
        role: "Frontend Developer",
        demoLink: "https://dreamhrms.com/sky-master/",
        sourceLink: "https://sky-master-ten.vercel.app/",
        technologies: ["React JS", "Java Script", "Tailwindcss"],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Projects</h1>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl">
          A collection of my recent work, showcasing my skills in frontend
          development, UI/UX design, and web technologies.
        </p>
      </div>

      <div className="mb-16">
        <FeaturedProjectCard {...featuredProject} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
