// Material UI Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";

const projects = [
  {
    title: "PASS",
    projectSize: "Group",
    role: "UI Developer",
    description:
      "An open source digital wallet that gives users control of their own data.",
    image: "/assets/images/logos/pass_logo.png",
    links: [
      {
        href: "https://passsmartwallet-967e217a2652.herokuapp.com/",
        icon: <PublicIcon sx={{ fontSize: 40 }} />,
      },
      {
        href: "https://github.com/codeforpdx/PASS",
        icon: <GitHubIcon sx={{ fontSize: 40 }} />,
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
        href: "https://www.codepdx.org/",
        icon: <PublicIcon sx={{ fontSize: 40 }} />,
      },
      {
        href: "https://github.com/codeforpdx/codepdx_website",
        icon: <GitHubIcon sx={{ fontSize: 40 }} />,
      },
    ],
    techStack: ["React", "Material UI", "ES Lint", "EmailJS"],
  },
  {
    title: "The Fearless Eater",
    projectSize: "Solo",
    role: "Full-stack Developer",
    description:
      "Web page for a fictional restaurant. Fully responsive with functioning contact form.",
    image: "/assets/images/screenshots/TheFearlessEater.png",
    links: [
      {
        href: "https://andycwilliams.github.io/The-Fearless-Eater/",
        icon: <PublicIcon sx={{ fontSize: 40 }} />,
      },
      {
        href: "https://github.com/andycwilliams/The-Fearless-Eater",
        icon: <GitHubIcon sx={{ fontSize: 40 }} />,
      },
    ],
    techStack: ["React", "Bootstrap 5", "EmailJS"],
  },
  {
    title: "Your Horoscope",
    projectSize: "Solo",
    role: "Front-end Developer",
    description:
      "Your daily or whenever horoscope. The stars provide! Infallible and always true.",
    image: "/assets/images/screenshots/YourHoroscope.png",
    date: "2022",
    links: [
      {
        href: "https://andycwilliams.github.io/Your-Horoscope/",
        icon: <PublicIcon sx={{ fontSize: 40 }} />,
      },
      {
        href: "https://github.com/andycwilliams/Your-Horoscope/",
        icon: <GitHubIcon sx={{ fontSize: 40 }} />,
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
    image: "/assets/images/screenshots/ToDoApp.png",
    links: [
      {
        href: "https://andycwilliams.github.io/To-Do-App/",
        icon: <PublicIcon sx={{ fontSize: 40 }} />,
      },
      {
        href: "https://github.com/andycwilliams/To-Do-App/",
        icon: <GitHubIcon sx={{ fontSize: 40 }} />,
      },
    ],
    techStack: ["HTML", "SASS", "JavaScript", "Express", "Node"],
  },
];

export default projects;
