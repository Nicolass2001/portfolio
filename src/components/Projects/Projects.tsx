import Project from "../Project/Project";

const projects = [
  {
    name: "FinTrack",
    link: "http://fintrack.nicolaspereira.me/",
    description: [
      {
        text: "GitHub Frontend",
        link: "https://github.com/Nicolass2001/fintrack-frontend",
      },
      {
        text: "GitHub Backend",
        link: "https://github.com/Nicolass2001/fintrack-backend",
      },
    ],
  },
  {
    name: "This Portfolio",
    link: "https://nicolaspereira.me/",
    description: [
      {
        text: "GitHub",
        link: "https://github.com/Nicolass2001/portfolio",
      },
    ],
  },
  {
    name: "Terminal Portfolio",
    link: "https://terminal.nicolaspereira.me/",
    description: [
      {
        text: "GitHub",
        link: "https://github.com/Nicolass2001/terminal-portfolio",
      },
    ],
  },
];

function Projects() {
  return (
    <>
      {projects.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          link={project.link}
          description={project.description}
        />
      ))}
    </>
  );
}

export default Projects;
