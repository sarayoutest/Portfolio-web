import ProjectCard from "./project-card";
import FeaturedProjectCard from "./featured-project-card";
import React from "react";

export default function HomeSection() {
  const featuredProject = {
    id: "1",
    title: "App-Forever(E-Commerce site)",
    description:
      "Personal portfolio website built with React.js and Tailwind CSS to showcase projects and skills.",
    image: "/project2.webp",
    role: "Frontend Developer",
    demoLink: "https://sarayoutest.github.io/App-Forever/",
    sourceLink: "",
    technologies: ["React", "javaScript", "Tailwind CSS"],
  };

  const projects = [
    {
      title: "MovieZone ",
      id: "2",
      description:
        "A sleek movie information platform where users can explore movie details such as title, rating, genres, release year, and audience count. It fetches real-time data via a public API and offers an interactive UI for film enthusiasts.",
      image: "/project1.webp",
      role: "Frontend Developer",
      demoLink: "https://movie-zone-two-rho.vercel.app/",
      sourceLink: "https://github.com/ahmed26-coder/Exclusive",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "S.Store (E-Commerce) ",
      id: "3",
      description:
        "A simple e-commerce front-end where users can browse products, add items to the cart, and simulate a shopping experience. Ideal for testing UI flows and showcasing basic store functionalities without backend integration.  ",
      image: "/project3.webp",
      role: "Frontend Developer",
      demoLink: "https://s-store-git-main-sara-youssefs-projects.vercel.app/",
      sourceLink: "",
      technologies: ["React", "Tailwind CSS", "javaScript"],
    },
    {
      id: "4",
      title: "Admin-Dashboard (React)",
      description:
        " Interactive Admin Dashboard: Developed with React, Material UI, and Firebase, it displays key business metrics—such as emails sent, sales, clients, and revenue—using charts       ",
      image: "/project9.webp",
      role: "Frontend Developer",
      demoLink: "https://admin-dashboard-theta-liart-74.vercel.app/",
      sourceLink: "",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
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
