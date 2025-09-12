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
    schoolName: "University of Central Punjab",
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
    desc: "Developing and maintaining full-stack web applications. Creating dynamic interfaces connected to relational databases (SQL). Optimizing UX/UI for better user experience. Debugging and refactoring existing applications.   ",

  },
  {
    role: "Digital Marketing",
    company: "Aquatun",
    companyLogo: "/img/icons/common/aqua.jpg",
    date: "December 2023 - 17 February 2024",
    desc: "Maintained and optimized the company’s website.Produced digital and editorial content. Conducted social media trend monitoring  ",
  }
];

export const projects: ProjectType[] = [
  {
    name: "Carpooling App",
    desc:  "Explore our mobile carpooling app, designed to make your trips easier, safer, and help you share rides with other users.",
    // github: "https://github.com/1hanzla100/developer-portfolio",
    // link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "HR Management App",
    desc:"Streamline your recruitment workflow from job request to new hire onboarding with full traceability at every step. Also digitizes probation and contract evaluations for efficient HR management.",
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
  // image: "https://avatars.githubusercontent.com/u/59178380?v=4",
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
