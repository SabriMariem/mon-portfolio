import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
  ServiceType
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Mariem Sabri",
  title: "Hi all, I'm Mariem",
  description:
    "I am passionate Full-Stack Web Developer with strong experience in UI/UX optimization, digital solutions, and creative design. Beyond tech, I am deeply engaged in community work, training, and youth empowerment. My portfolio reflects both my technical expertise and my vibrant personality.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "1hanzla100",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:sabrimariem1025@gmail.com",
  linkedin: "https://www.linkedin.com/in/sabri-mariem",
  github: "https://github.com/SabriMariem",
  // instagram: "https://www.instagram.com/__hanzla100",
  facebook: 'https://www.facebook.com/mariem.sabri.61707',
  twitter: 'https://twitter.com/sabrimariem1025',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
    
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
  
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
      
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", 
    progressPercentage: "90",
  },
  {
    Stack: "Backend",
    progressPercentage: "85",
  },
  {
    Stack: "Programming",
    progressPercentage: "70",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Higher Institute of Computer Science of Médenine",
    subHeader: "Master’s Degree in Software Engineering and Knowledge",
    duration: "September 2021 - June 2023",
    desc: "",
    grade: "",
    descBullets: [],
  },
];

export const experience: ExperienceType[] = [

  {
    role: "Full-Stack Web Developer",
    company: "Devaxon",
    companyLogo: "/img/icons/common/devaxon.jpg",
    date: "February 2024 – Present",
    desc: "Developing and maintaining full-stack web applications with dynamic interfaces connected to SQL databases, optimizing UX/UI, and debugging or refactoring existing code for better performance.",

  },
  {
    role: "Digital Marketing",
    company: "Aquatun",
    companyLogo: "/img/icons/common/aqua.jpg",
    date: "December 2023 - 17 February 2024",
    desc:"Optimized the company website, created engaging digital and editorial content, and tracked social media trends to boost overall online presence and audience engagement.",
  }
];

export const projects: ProjectType[] = [
  {
    name: "Carpooling App",
    desc:  "Explore our mobile carpooling app, designed to make your trips easier, safer, and more connected. With our app, passengers can easily find and contact drivers heading in their direction, while drivers have the freedom to choose their preferred route directly on the integrated map. Users can share their trip status, update destinations, and communicate details through a well-structured form, ensuring transparency and better coordination. Whether you’re looking to save time, reduce travel costs, or meet fellow travelers, our app makes every journey convenient, safe, and social.",
  },
  {
    name: "HR Management App",
    desc: "Streamline your recruitment workflow from job requests to new hire onboarding with full traceability at every step. The app also digitizes probation evaluations, contract management, and employee documentation for efficient HR operations. Managers and HR teams can track progress, communicate updates, and ensure compliance, while employees receive timely notifications and clear guidance. This centralized solution improves transparency, reduces administrative workload, and enhances overall workforce management, making HR processes smoother, faster."
  }
];
export const services: ServiceType[] = [
  {
    name: "💻 Web development",
    desc:  "Full-stack development (React.js, Node.js, SQL).UI/UX optimization (ergonomie, design, expérience utilisateur).Maintenance & debugging (correction de bugs, amélioration de code).",
    // github: "https://github.com/1hanzla100/developer-portfolio",
    // link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "🎨 Creativity & Design",
    desc:"Logo design & visual identity.Content creation (marketing digital, réseaux sociaux).Modern web design with a user-friendly touch.",
    // link: "https://gibeo.io/",
  },
    {
    name: "👩‍🏫 Training & Soft Skills",
    desc:  "Training & coaching (soft skills, digital literacy).Communication & teamwork workshops.Project coordination in collaborative environments.",
    // github: "https://github.com/1hanzla100/developer-portfolio",
    // link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "🌍 Associative engagement",
    desc:"Event organization & team collaboration.Youth empowerment & community projects.Active participation in trainings and collective initiatives.",
    // link: "https://gibeo.io/",
  }
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Sabri Mariem",
  description: greetings.description,
  author: "Sabri Mariem",
    image: "/img/icons/common/mariem.jpg",

  // 
  keywords: [
    "Mariem",
    "Sabri Mariem",
    "Portfolio",
    "Mariem Portfolio ",
    "Sabri Mariem Portfolio",
  ],
};
