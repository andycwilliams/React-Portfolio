import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";

const projects = [
  {
    title: "PASS",
    projectSize: "Group",
    role: "UI Developer",
    description:
      "PASS is an open source digital wallet for providing home insecure individuals a safe place to store documents within their control. PASS additionally assists caseworkers with processing and providing documents needed to complete the housing assistance application process.",
    logo: "/assets/PassLogo.png",
    date: "In development/January 2023 to current",
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
    techStack: "SOLID, React, Vite, JSDocs, Material UI, NPM, ES Lint",
  },
  {
    title: "other",
    projectSize: "Solo",
    role: "Full-stack Developer",
    description: ".",
    logo: "",
    date: "",
    links: [
      {
        href: "https://github.com/codeforpdx/PASS",
        // icon: <GitHubIcon />,
      },
      {
        href: "https://passsmartwallet-967e217a2652.herokuapp.com/",
        // icon: <PublicIcon />,
      },
    ],
    techStack: "",
  },
];

export default projects;
