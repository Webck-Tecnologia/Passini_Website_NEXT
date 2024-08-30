import { Link } from "react-router-dom";

const socialIcons = [
  {
    iconClass: "fab fa-facebook-f",
    link: "#",
  },
  {
    iconClass: "fab fa-twitter",
    link: "#",
  },
  {
    iconClass: "fab fa-linkedin-in",
    link: "#",
  },
];

const Social = () => {
  return (
    <ul className="d-flex social-icon style-none">
      {socialIcons.map((icon, index) => (
        <li key={index}>
          <Link to={icon.link} target="_blank" rel="noopener noreferrer">
            <i className={icon.iconClass} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Social;
