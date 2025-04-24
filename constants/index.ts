import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/kumar_sonu56850",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "E-Commerce Platform (MERN Stack)",
    description:
      'Developed and deployed a full-stack e-commerce web application capable of handling 100+ products with a responsive UI and seamless user experience. Improved backend performance by optimizing database queries and API responses, reducing server response time from 5 minutes to 10 seconds. Successfully launched with 99.9% uptime across Netlify (Frontend) and Render (Backend).',
    image: "/projects/project-1.png",
    link: "https://github.com/sonukumarbksce1204/ECOMMERCE",
  },
  {
    title: "TabuQuest",
    description:
      'Designed and built an AI-powered tool that extracts relevant tabular data from complex datasets using natural language queries. Implemented custom data filtration algorithms and advanced prompt engineering techniques to increase accuracy and reduce irrelevant retrieval by 50–60%. Enhanced the precision of data analysis and usability in real-world scenarios.',
    image: "/projects/project-2.png",
    link: "https://github.com/sonukumarbksce1204/TabuQuest",
  },
  {
    title: "Coffee Chain Data Analysis",
    description:
      'Created an interactive Tableau dashboard analyzing a dataset of over 30,000 records for a coffee chain. Explored key insights like regional sales, product performance, and customer segmentation. Provided clear visualizations and actionable recommendations, leading to an 80% improvement in decision-making accuracy for marketing and sales strategies.',
    image: "/projects/project-3.png",
    link: "https://github.com/sonukumarbksce1204/DataVisualizationUsingTableau",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Certification",
    data: [
      {
        name: "Cloud Computing",
        icon: FaYoutube,
        link: "https://drive.google.com/file/d/1Wr0P_Y9RVyO_ZI07nU9NVoTewpyfc8q0/view?usp=drive_link",
      },
      {
        name: "Data Analysis with Tableau",
        icon: RxGithubLogo,
        link: "https://drive.google.com/file/d/1TfbFQwcW5sdpmMYseoB3ujWz3oPwnKum/view?usp=drive_link",
      },
      {
        name: "Excel Skills for Business Essentials",
        icon: RxDiscordLogo,
        link: "https://drive.google.com/file/d/1DBwn0LnXe-sdQOR_T5rvQkl3ew1UV_In/view?usp=drive_link",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/kumar_sonu56850",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/sonu-kumar-53046a252/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Video CV",
        icon: null,
        link: "https://www.youtube.com/shorts/FPCFAIhWnok",
      },
      {
        name: "Explore My projects",
        icon: null,
        link: "https://github.com/sonukumarbksce1204",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "https://mail.google.com/mail/?view=cm&fs=1&to=sonukumarbksce1204@gmail.com&su=Hello%20There&body=I%20hope%20you%20are%20doing%20well.",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://drive.google.com/file/d/1DzZFDHKOWbmkas1EMWT9Gp6hHf941aSX/view?usp=drive_link",
};

export const CERTIFICATE = [
  {
    title: "Data Analysis with Tableau",
    description:
      'Learned to build interactive dashboards and perform data visualizations. Applied Tableau tools to analyze datasets and derive actionable insights.',
    image: "/projects/project-1.png",
    link: "https://github.com/sonukumarbksce1204/ECOMMERCE",
  },
  {
    title: "Excel Skills for Business Essentials",
    description:
      'Mastered spreadsheet functions, data cleaning, and basic analysis tools.Built professional-level workbooks for business reporting and productivity.',
    image: "/projects/project-2.png",
    link: "https://github.com/sonukumarbksce1204/TabuQuest",
  },
  {
    title: "Cloud Computing NPTEL",
    description:
      'Gained foundational knowledge of cloud architecture, virtualization, and deployment models. lored key services such as IaaS, PaaS, and SaaS with practical applications.',
    image: "/projects/project-3.png",
    link: "https://github.com/sonukumarbksce1204/DataVisualizationUsingTableau",
  },
] as const;