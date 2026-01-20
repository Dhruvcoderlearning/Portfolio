// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/wcoglobal_logo.png";

// Project Section Logo's
import todoimage from "./assets/work_logo/todo_image.jpeg";
import ecommerceLogo from "./assets/work_logo/ecommerce.jpeg";
import leaveMangement from "./assets/work_logo/leaveMangement.jpeg";
import a2mTransport from "./assets/work_logo/a2m_transport.jpeg";
import imagesearchLogo from "./assets/work_logo/image_search.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Frontend Developer",
    company: "WCO global",
    date: "june 2025 - Dec 2025",
    desc: "Developed dynamic and scalable web applications using the frontend. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS", "Redux"],
  },
];

export const education = [
  {
    id: 0,
    school: "DAVIM Institute of Management",
    date: "july 2022 - june 2025",
    desc: "I completed my Bachelor's degree in Bachelor of Computer Application (BCA) from DAVIM College, Faridabad. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Computer Application - BCA (Computer Application)",
  },
  {
    id: 1,

    school: "Mewat Model School F.p jhirka",
    date: "Apr 2021 - Apr 2022",
    desc: "I completed my class 12 education from Mewat Model School, Ferozepur jhirka, under the CBSE board.",
    degree: "CBSE(XII) - Commerce",
  },
  {
    id: 2,

    school: "Mewat Model School F.p jhirka",
    date: "Apr 2019 - Apr 2020",
    desc: "I completed my class 10 education from Mewat Model School, Ferozepur jhirka, under the CBSE board.",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Todo-List",
    description:
      "A responsive Todo List application built using React.js that allows users to efficiently manage daily tasks. Users can add, edit, delete, and mark tasks as completed with real-time UI updates. The application uses React Hooks (useState, useEffect) for state management and follows a component-based architecture for clean and reusable code.",
    image: todoimage,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github:
      "https://github.com/Dhruvcoderlearning/Todo-List/tree/main/To-do-list-main",
    webapp: "https://to-do-list-un8f.onrender.com",
  },
  {
    id: 2,
    title: "Ecommerce",
    description:
      "Hekto is a modern and visually appealing eCommerce website designed to provide an effortless and engaging online shopping experience.",
    image: ecommerceLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Dhruvcoderlearning/Ecommerce",
    webapp: "https://ecommerce-3vmj.onrender.com/",
  },
  {
    id: 3,
    title: "Leave Management System(Full Stack)",
    description:
      "A Leave Management System that streamlines employee leave requests, approvals, and tracking.",
    image: leaveMangement,
    tags: ["React JS", "Node.js", "NPM", "Validation","Mongodb"],
    github: "https://github.com/Dhruvcoderlearning/Leave-Management_Full-Stack",
    webapp: "https://leave-management-full-stack.onrender.com/",
  },
  {
    id: 4,
    title: "A2M Transport",
    description:
      "A2M Transport offers professional moving and packing services in Gurgaon, Delhi NCR, and across India. They provide reliable house shifting and corporate moving solutions. Contact them for a free quote or to learn more about their services.",
    image: a2mTransport,
    tags: ["React JS","HTML", "CSS", "JavaScript","Search Feature"],
    github: "https://github.com/Dhruvcoderlearning/A2M_Transport",
    webapp: "https://a2m-transport-1.onrender.com/",
  },
 
  {
    id: 5,
    title: "Image Search App",
    description:
      "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    image: imagesearchLogo,
    tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    github: "https://github.com/Dhruvcoderlearning/Image-Searching/tree/main/Image-Searching-main",
    webapp: "https://seracher-frontend.onrender.com",
  },
  
];
