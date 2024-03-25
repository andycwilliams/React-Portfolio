// Material UI Icons Imports
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const contactData = [
  { label: "Name", value: "Andy Williams" },
  { label: "Title", value: "Full-stack Developer" },
  // { label: "Email", value: "" },
  // { label: "Phone", value: "" },
];

const primarySkillsData = [
  { name: "JavaScript", level: 90 },
  { name: "CSS", level: 90 },
  { name: "HTML", level: 90 },
  { name: "React", level: 80 },
  { name: "Java", level: 80 },
  { name: "MongoDB", level: 80 },
  { name: "Express", level: 90 },
  { name: "Node.js", level: 90 },
];

const socialMediaLinks = [
  {
    href: "https://github.com/andycwilliams",
    icon: <GitHubIcon sx={{ fontSize: 35 }} />,
    ariaLabel: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/andrewcharleswilliams/",
    icon: <LinkedInIcon sx={{ fontSize: 35 }} />,
    ariaLabel: "LinkedIn",
  },
];

export { contactData, primarySkillsData, socialMediaLinks };
