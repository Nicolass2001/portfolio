import RightLink from "../Links/RightLink";
import "./Project.css";

type ProjectProps = {
  name: string;
  link: string;
  description: {
    text: string;
    link: string;
  }[];
};

function Project({ name, link, description }: ProjectProps) {
  return (
    <>
      <a className="project-name" href={link} target="_blank">
        <h1>{name}</h1>
      </a>
      {description.map((item, index) => (
        <RightLink key={index} link={item.link} text={item.text} />
      ))}
    </>
  );
}

export default Project;
