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
  aureliusai,
  aiimggen,
  pskinnertech,
  threejs,
  agami,
  squidzie,
  clg,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const footerLinks = [
  {
    id: 'blog',
    title: 'Blog',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'CTO & Co-Founder',
    company_name: 'AGAMI',
    icon: agami,
    iconBg: '#383E56',
    date: 'March 2022 - Current',
    points: [
      'Developed technical strategy for AGAMI and chose appropriate tech to build an end-to-end decentralized system for authenticating physical products using encrypted NFC/RFID tech.',
      'Designed technical infrastructure for AGAMI, ensuring it was scalable, efficient, and secure, with end-to-end encryption, decentralized identity management, and tamper-proof data storage.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Developed AGAMI’s core technology, Lotuslink, and built the deployment strategy to scale the product.',
    ],
  },
  {
    title: 'CTO & Co-Founder',
    company_name: 'Squidzie Printing',
    icon: squidzie,
    iconBg: '#383E56',
    date: 'April 2021 - June 2022',
    points: [
      'Developed technical strategy for Squidzie Printing and chose appropriate tech to build an online print marketing solution for small and large format printing, custom apparel, and merchandise.',
      `Managed development and maintenance of Squidzie's order management system, ensuring it was scalable, efficient, and reliable, with robust APIs to push orders to over 160 manufacturing partners worldwide.`,
      `Worked with manufacturing partners to ensure their systems integrated with Squidzie's order management system, and that orders were fulfilled quickly and accurately.`,
    ],
  },
  {
    title: 'Partner',
    company_name: 'CLG Intelligent Marketing',
    icon: clg,
    iconBg: '#383E56',
    date: 'Feb 2018 - Sept 2021',
    points: [
      'Developed tech strategy for CLG Intelligent Marketing to offer innovative marketing solutions to mid and large size companies worldwide.',
      `Managed development and maintenance of CLG's web design, printing, and internet marketing services, with a focus on creating incomparable brand awareness, conversion, and customer revisions.`,
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'AI Company Frontend',
    description:
      'Built a responsive website for a startup company that provides AI solutions for businesses.  Used React JS, Tailwind CSS, and Figma to design the website.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: aureliusai,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'AI Image Generator',
    description:
      'Web application that allows users to generate images using AI (DALL-E & MidJourney).  Used React, Express, MongoDB, Node, and Cloudinary.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'openai',
        color: 'white-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
    ],
    image: aiimggen,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Responsive 1 Pager',
    description:
      'Very simple, elegant, and responsive 1 pager website.  Used HTML, CSS, and JavaScript.  Fully responsive in all window sizes.  Utilized owl carousel for several sections.',
    tags: [
      {
        name: 'html',
        color: 'white-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
    ],
    image: pskinnertech,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
