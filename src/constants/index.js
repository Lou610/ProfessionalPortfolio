import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  k2,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Senior C# Engineer / Developer",
    icon: web,
  },
  {
    title: "Technical Lead - Solutions Architect",
    icon: web,
  },
  {
    title: "Angualr and React Developer",
    icon: backend,
  },
  {
    title: "K2 Consultant",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Azure DevOps",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "k2 Workflow",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "Senior Developer and Technical lead",
    company_name: "Co-Flo enterprise",
    iconBg: "#383E56",
    date: "March 2021 - Current",
    points: [
      "Planned and implemented technical roadmap.",
      "Created and Maintaining development RACI matrix.",
      "Leading my own dev team that consists or 4 developers, 1 QA engineer and 1 DevOps engineer",
      "Architected our legacy enterprise system to be SaaS and Cloud ready.",
      "Provide support and Knowledge to developers.",
      "Provide support to our support engineers when the ticket becomes a P1 issue.",
      "Maintain clean code and industry standards inside our code base. ",
      "Providing technical workshops for the developers when needed on sectors where they are struggling.",
      "Provide support to our DevOps engineer when needed.",
      "Contribute to our rewrite of our SaaS enterprise system.",
      "Research and development of various new features for the Co-Flo ecosystem",
      "Run and maintain release notes of any 3rd party tools that we integrate with to ensure we are always aligned.",
      "Contribute to our Tech Steer Co committee.",
    ],
  },
  {
    title: "C# Senior Developer",
    company_name: "Co-Operative Computing and Co-Flo enterprise",
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Integrating with 3rd party tools like iManage.",
      "Upgrade and maintaining the current workflow engine.",
      "Maintaining code and Pull requests.",
      "Setup and maintaining Azure Kubernetes Cluster.",
      "Plan and migrate legacy systems to Kubernetes.",
      "Integrate our contract life cycle with document OCR and AI. ",
      "Maintain and update system architecture.",
      "Build and maintained azure DevOps process and pipelines.",
    ],
  },
  {
    title: "Senior Solutions Consultant",
    company_name: "K2 Workflow",
    iconBg: "#383E56",
    date: "2018 - 2020",
    points: [
      "Design, implement and support templatization of Microsoft Xbox front end portal, Backend portal and payment system through K2.",
      "Risk management and Crisis mitigation at clients if anything went wrong.",
      "Build the full integration for JSE (Johannesburg Stock Exchange) from their legacy request system in ASP Classic to K2 Workflow and Smart forms.",
      "Support and develop current and new K2 cloud integrations using Typescript and C#.",
      "Build and maintained the new SANBS (South African National Blood Service) with the help of TensorFlow for Machine learning during Covid to allow the users to use hand gestures to kick off workflows",
      "Build and maintained Continental tyres system from Germany and migrated it to their new sister company in Canada. ",
      "Rebuilt and maintained Auto-X new Request system and financial system.",
      "Build and maintained Nintex RPA system for clients who were in the hiring drive. The system crawled C. Vs to get the correct candidates and scheduled interviews with them and the company.",
    ],
  },
  {
    title: "Solution Consultant",
    company_name: "K2 Workflow",
    iconBg: "#383E56",
    date: "2016 - 2018",
    points: [
      "Design, implement and support enterprise scale solutions.",
      "Integrate with third-party providers.",
      "Build SharePoint integrations.",
      "Integrated with Soap and Rest services.",
      "Produce documentation and use any appropriate means to ensure effective communications of systems, processes, and procedures to both internal and external parties.",
      "Write custom integrations with Salesforce and SAP.",
      ,
    ],
  },
  {
    title: "C# Intermediate Developer ",
    company_name: "Imprexxion",
    iconBg: "#383E56",
    date: "2014 - 2016",
    points: [
      "Provide support to the clients, redesign Insurance broker system.",
      "Build Angular.js and then Angular 2 Ticketing system. That also incorporated Ionic native for mobile and electron for desktop. Build and maintain system.",
      "Build and maintain print and scanning software as addon or standalone solution for underwriting clients.",
      "Rebuild under writing VB system to C# with .net 4.5.",
      "Implemented underwriting and insurance broker system at clients.",
      "Rebuild and maintained company corporate website.",
      "Maintaining encryption algorithm, I wrote for Standard bank",
    ],
  },
  {
    title: "C# Junior Developer ",
    company_name: "Business Genetics",
    iconBg: "#383E56",
    date: "2012 - 2014",
    points: [
      "Build and supported legacy systems that the senior developers gave me. Handled and supported ftp services for financial clients.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
