// Material UI Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";

const projects = [
  {
    title: "PASS",
    projectSize: "Group",
    role: "UI Developer",
    description:
      "PASS is an open source digital wallet for providing home insecure individuals a safe place to store documents within their control. PASS additionally assists caseworkers with processing and providing documents needed to complete the housing assistance application process.",
    image: "/assets/logos/PASS_logo.png",
    date: "",
    links: [
      {
        href: "https://github.com/codeforpdx/PASS",
        icon: <GitHubIcon />,
      },
      {
        href: "https://passsmartwallet-967e217a2652.herokuapp.com/",
        icon: <PublicIcon />,
      },
    ],
    techStack: ["SOLID", "React", "Vite", "JSDocs", "MUI", "NPM", "ES Lint"],
  },
  {
    title: "CODE PDX Website",
    projectSize: "Group",
    role: "Front-end Developer",
    description: "Website for CODE PDX built from the ground up.",
    image: "/assets/logos/Rose_logo.png",
    date: "",
    links: [
      {
        href: "https://github.com/codeforpdx/codepdx_website",
        icon: <GitHubIcon />,
      },
      {
        href: "https://codeforpdx.github.io/codepdx_website/",
        icon: <PublicIcon />,
      },
    ],
    techStack: ["React", "Material UI", "ES Lint", "EmailJS", "etc? (Vitest?)"],
  },
  {
    title: "The Fearless Eater",
    projectSize: "Solo",
    role: "Full-stack Developer",
    description:
      "Web page for a fictional restaurant. Fully responsive with functioning contact form.",
    image: "",
    date: "",
    links: [
      {
        href: "https://github.com/andycwilliams/The-Fearless-Eater",
        icon: <GitHubIcon />,
      },
      {
        href: "/",
        icon: <PublicIcon />,
      },
    ],
    techStack: ["React", "Bootstrap 5", "EmailJS"],
  },
  {
    title: "Your Horoscope",
    projectSize: "Solo",
    role: "Full-stack Developer",
    description:
      "Your daily horoscope. Or for whenever you want. The stars provide! Infallible and always true and 100% accurate. Made with vanilla HTML, CSS, and JavaScript, which are also infallible.",
    image: "",
    date: "2022",
    links: [
      {
        href: "",
        icon: <GitHubIcon />,
      },
      {
        href: "",
        icon: <PublicIcon />,
      },
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "",
    projectSize: "",
    role: "",
    description: ".",
    image: "",
    date: "",
    links: [
      {
        href: "",
        icon: <GitHubIcon />,
      },
      {
        href: "",
        icon: <PublicIcon />,
      },
    ],
    techStack: ["", "", ""],
  },
  {
    title: "",
    projectSize: "",
    role: "",
    description: ".",
    image: "",
    date: "",
    links: [
      {
        href: "",
        icon: <GitHubIcon />,
      },
      {
        href: "",
        icon: <PublicIcon />,
      },
    ],
    techStack: ["", "", ""],
  },
  {
    title: "",
    projectSize: "",
    role: "",
    description: ".",
    image: "",
    date: "",
    links: [
      {
        href: "",
        icon: <GitHubIcon />,
      },
      {
        href: "",
        icon: <PublicIcon />,
      },
    ],
    techStack: ["", "", ""],
  },
];

export default projects;