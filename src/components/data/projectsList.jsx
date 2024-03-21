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
    image: "/assets/images/logos/pass_logo.png",
    links: [
      {
        href: "https://github.com/codeforpdx/PASS",
        icon: <GitHubIcon sx={{ fontSize: 40 }} />,
      },
      {
        href: "https://passsmartwallet-967e217a2652.herokuapp.com/",
        icon: <PublicIcon sx={{ fontSize: 40 }} />,
      },
    ],
    techStack: ["SOLID", "React", "Vite", "JSDocs", "MUI", "NPM", "ES Lint"],
  },
  {
    title: "CODE PDX Website",
    projectSize: "Group",
    role: "Front-end Developer",
    description: "Website for CODE PDX built from the ground up.",
    image: "/assets/images/logos/codepdx_logo.png",
    links: [
      {
        href: "https://github.com/codeforpdx/codepdx_website",
        icon: <GitHubIcon sx={{ fontSize: 40 }} />,
      },
      {
        href: "https://www.codepdx.org/",
        icon: <PublicIcon sx={{ fontSize: 40 }} />,
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
    image: "/assets/images/placeholder.webp",
    links: [
      {
        href: "https://github.com/andycwilliams/The-Fearless-Eater",
        icon: <GitHubIcon sx={{ fontSize: 40 }} />,
      },
      {
        href: "https://andycwilliams.github.io/The-Fearless-Eater/",
        icon: <PublicIcon sx={{ fontSize: 40 }} />,
      },
    ],
    techStack: ["React", "Bootstrap 5", "EmailJS"],
  },
  {
    title: "Your Horoscope",
    projectSize: "Solo",
    role: "Front-end Developer",
    description:
      "Your daily horoscope. Or for whenever you want. The stars provide! Infallible and always true and 100% accurate. Made with vanilla HTML, CSS, and JavaScript, which are also infallible.",
    image: "/assets/images/placeholder.webp",
    date: "2022",
    links: [
      {
        href: "https://github.com/andycwilliams/Your-Horoscope/",
        icon: <GitHubIcon sx={{ fontSize: 40 }} />,
      },
      {
        href: "https://andycwilliams.github.io/Your-Horoscope/",
        icon: <PublicIcon sx={{ fontSize: 40 }} />,
      },
    ],
    techStack: ["HTML", "CSS", "JavaScript", "W3"],
  },

  {
    title: "To-Do App",
    projectSize: "Solo",
    role: "Full-Stack Developer",
    description:
      "The requisite to-do app. No portfolio is presentable without one.",
    image: "/assets/images/placeholder.webp",
    links: [
      {
        href: "https://github.com/andycwilliams/To-Do-App/",
        icon: <GitHubIcon sx={{ fontSize: 40 }} />,
      },
      {
        href: "https://andycwilliams.github.io/To-Do-App/",
        icon: <PublicIcon sx={{ fontSize: 40 }} />,
      },
    ],
    techStack: ["HTML", "SASS", "JavaScript", "Express", "Node"],
  },
];

export default projects;
