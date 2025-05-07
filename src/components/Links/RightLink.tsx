import "./RightLink.css";

type RightLinkProps = {
  link: string;
  text: string;
};

function RightLink({ link, text }: RightLinkProps) {
  return (
    <a className="right-link" href={link}>
      {text} ↗
    </a>
  );
}

export default RightLink;
