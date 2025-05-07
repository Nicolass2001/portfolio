import Project from "../Project/Project";

const projects = [
  {
    name: "Project 1",
    link: "https://example.com/project1",
    description: [
      {
        text: "GitHub",
        link: "https://example.com/project1",
      },
    ],
  },
  {
    name: "Project 2",
    link: "https://example.com/project1",
    description: [
      {
        text: "GitHub",
        link: "https://example.com/project2",
      },
    ],
  },
  {
    name: "Project 3",
    link: "https://example.com/project1",
    description: [
      {
        text: "GitHub",
        link: "https://example.com/project3",
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
