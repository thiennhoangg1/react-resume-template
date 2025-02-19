import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Thien Hoang - Portfolio',
  description: 'Software Engineer | Machine Learning | AI | Data Science | Full Stack Development',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Thien!`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Computer Science</strong> student at <strong className="text-stone-100">Washington University in St. Louis</strong> working towards my BS/MS. I love building things—whether it’s software, AI models, or cool side projects. I'm interested in <strong className="text-stone-100">AI, full-stack development, security, and data science</strong> and I'm always looking for opportunities to learn more!
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        When I’m not coding, you’ll probably find me at the gym <strong className="text-stone-100">(probably benching)</strong>. I also play Valorant and TFT competitively and enjoy learning new songs on the piano.
      </p>
    </>
  ),  
  actions: [
    {
      href: '/images/ThienHoang_Resume.pdf',
      text: 'Download Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact Me',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a passionate software engineer, experienced in Machine Learning, AI, and Full Stack Development. I thrive on solving complex problems and building scalable solutions. Currently, I am focused on leveraging technology to improve healthcare and automation.`,
  aboutItems: [
    { label: 'Location', text: 'St. Louis, MO', Icon: MapIcon },
    { label: 'Nationality', text: 'Vietnamese-American', Icon: FlagIcon },
    { label: 'Interests', text: 'AI Research, Web Development, Tech Startups', Icon: SparklesIcon },
    { label: 'Education', text: 'Washington University in St. Louis', Icon: AcademicCapIcon },
    { label: 'Graduation', text: 'December 2025', Icon: CalendarIcon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Python', level: 9 },
      { name: 'JavaScript', level: 8 },
      { name: 'C++', level: 7 },
      { name: 'Java', level: 7 },
    ],
  },
  {
    name: 'Machine Learning & AI',
    skills: [
      { name: 'TensorFlow', level: 8 },
      { name: 'PyTorch', level: 8 },
      { name: 'Scikit-learn', level: 8 },
      { name: 'OpenCV', level: 7 },
    ],
  },
  {
    name: 'Full Stack Development',
    skills: [
      { name: 'React.js', level: 9 },
      { name: 'Next.js', level: 8 },
      { name: 'Node.js', level: 7 },
      { name: 'Firebase', level: 8 },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'AI-Powered Inventory Management',
    description: 'Machine learning model for classifying wood components in an inventory system, enhancing automation and efficiency.',
    url: 'https://github.com/thiennhoangg1/ai-inventory-management',
    image: '/images/portfolio/portfolio-1.jpg' 
  },
  {
    title: 'Secure Telemedicine Platform',
    description: 'A React-Native mobile app with real-time video conferencing for patient-doctor consultations.',
    url: 'https://github.com/thiennhoangg1/secure-telemedicine',
    image: '/images/portfolio/portfolio-1.jpg' 
  },
  {
    title: 'Patient Flow Visualization',
    description: 'An interactive dashboard analyzing treatment pathways, optimizing hospital resource allocation.',
    url: 'https://github.com/thiennhoangg1/patient-flow-visualization',
    image: '/images/portfolio/portfolio-1.jpg' 
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: '2022 - 2025',
    location: 'Washington University in St. Louis',
    title: 'B.S. in Computer Science',
    content: (
      <p>
        Relevant Courses: Data Structures & Algorithms, AI, Mobile App Development, Optimization  
        Scholarships: Danforth Scholar, Taylor Enterprise Holdings Scholar, Chancellor’s Fellow
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Dec 2024 - Present',
    location: 'Engineering Test Kitchen, WashU',
    title: 'Machine Learning Engineer',
    content: (
      <p>
        Developing ML models for wood component identification using TensorFlow, PyTorch, and OpenCV. Generating synthetic data with Blender Python API.
      </p>
    ),
  },
  {
    date: 'Aug 2024 - Present',
    location: 'Cobbs Creek Healthcare',
    title: 'Software Engineer Intern',
    content: (
      <p>
        Building a full-stack mobile application with React-Native and Firebase. Implementing real-time video conferencing with WebRTC.
      </p>
    ),
  },
];

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Let’s Connect!',
  description: 'Feel free to reach out via email or LinkedIn!',
  items: [
    {
      type: ContactType.Email,
      text: 'h.thien@wustl.edu',
      href: 'mailto:h.thien@wustl.edu',
    },
    {
      type: ContactType.Github,
      text: 'thiennhoangg1',
      href: 'https://github.com/thiennhoangg1',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Thien Hoang',
      href: 'https://www.linkedin.com/in/thien-hoang1/',
    },
  ],
};

/**
 * Social links
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/thiennhoangg1' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/thien-hoang1/' },
];
