import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';
import skillsImg1 from './assets/html-logo.svg';
import skillsImg2 from './assets/css-logo.svg';
import skillsImg3 from './assets/javascript-logo.svg';
import skillsImg4 from './assets/react-logo.svg';
import skillsImg5 from './assets/tailwind-css-logo.svg';
import skillsImg6 from './assets/figma-logo.svg';
import skillsImg7 from './assets/sketch-logo.svg';
import skillsImg8 from './assets/adobe-xd-logo.svg';
import skillsImg9 from './assets/adobe-photoshop-logo.svg';
import skillsImg10 from './assets/invision-logo.svg';
import projectImg1 from './assets/project-1.jpg';
import projectImg2 from './assets/project-2.jpg';
import projectImg3 from './assets/project-3.jpg';
import projectImg4 from './assets/project-4.jpg';
import projectImg5 from './assets/project-5.jpg';

import Theme1 from './assets/red.png';
import Theme2 from './assets/blueviolet.png';
import Theme3 from './assets/blue.png';
import Theme4 from './assets/magenta.png';
import Theme5 from './assets/yellowgreen.png';
import Theme6 from './assets/orange.png';
import Theme7 from './assets/yellow.png';



import { RiBriefcase4Fill, RiGraduationCapFill } from 'react-icons/ri';


export const links = [
  {
    name: 'Home',
    icon: <FaHome className='nav-icon' />,
    path: '/',
  },

  {
    name: 'About',
    icon: <FaUser className='nav-icon' />,
    path: '/about',
  },

  {
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav-icon' />,
    path: '/portfolio',
  },

  {
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav-icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    title: 'First Name : ',
    description: 'Mahamudul Alam',
  },

  {
    title: 'Last Name : ',
    description: 'Tamim',
  },

  {
    title: 'Age : ',
    description: '22 Years',
  },

  {
    title: 'Nationality : ',
    description: 'Bangladeshi',
  },

  {
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    title: 'Address : ',
    description: 'Dhaka',
  },

  {
    title: 'Phone : ',
    description: '+8801319475239',
  },

  {
    title: 'Email : ',
    description: 'mahamudulalamtamim10@mail.com',
  },

  {
    title: 'github : ',
    description: 'tamim-Prog',
  },

  {
    title: 'Langages : ',
    description: 'English, Hindi',
  },
];

export const stats = [
  {
    no: '2+',
    title: 'Years of<br />Experience',
  },
  {
    no: '10+',
    title: 'Personal<br />Projects',
  },
  {
    no: '7+',
    title: 'Frontend<br />Technologies',
  },
  {
    no: '100%',
    title: 'Passion for<br />Learning',
  },
  {
  no: '3+',
  title: 'Clients<br />Served',
},
{
  no: '15+',
  title: 'Repositories<br />on GitHub',
},
];

export const skill = [
  {
    id: 1,
    img: skillsImg1,
    title: 'HTML',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 2,
    img: skillsImg2,
    title: 'CSS',
    level: 'Advanced',
    category: 'developer',
  },

  {
    id: 3,
    img: skillsImg3,
    title: 'JavaScript',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 4,
    img: skillsImg4,
    title: 'React',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 5,
    img: skillsImg5,
    title: 'Tailwind',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 6,
    img: skillsImg6,
    title: 'Figma',
    level: 'Advanced',
    category: 'designer',
  },

  {
    id: 7,
    img: skillsImg7,
    title: 'Sketch',
    level: 'Basic',
    category: 'designer',
  },

  {
    id: 8,
    img: skillsImg8,
    title: 'Adobe XD',
    level: 'Intermediate',
    category: 'designer',
  },

  {
    id: 9,
    img: skillsImg9,
    title: 'Photoshop',
    level: 'Intermediate',
    category: 'designer',
  },

  {
    id: 10,
    img: skillsImg10,
    title: 'InvisionApp',
    level: 'Basic',
    category: 'designer',
  },
];



export const resume = [
  // EXPERIENCE
  {
    id: 1,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: '2024 - Present',
    title: 'Frontend Developer (Learner) <span> Self-Paced </span>',
    desc: 'Building web applications using HTML, CSS, JavaScript, and React. Focused on responsive UI, component-based design, and real project practice.',
  },
  {
    id: 2,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: '2023 - Present',
    title: 'Personal Projects <span> GitHub & Local Hosting </span>',
    desc: 'Developed several React-based websites like portfolio, e-commerce UI, and JavaScript mini projects to sharpen frontend development skills.',
  },
  {
    id: 3,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: '2025 (Planned)',
    title: 'Internship <span> (Coming Soon) </span>',
    desc: 'Seeking internship opportunities in software firms to gain real-world experience in frontend development and team collaboration.',
  },

  // EDUCATION
  {
    id: 4,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2023 - Ongoing',
    title: 'BSc in Computer Science <span> Southeast University </span>',
    desc: 'Pursuing Bachelor’s in CSE with a focus on software development, web technologies, algorithms, and programming.',
  },
  {
    id: 5,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2021',
    title: 'HSC - Science <span> Govt. Abdul Jabbar College </span>',
    desc: 'Completed Higher Secondary Certificate (HSC) in Science. Learned basic programming, logic, and problem-solving skills.',
  },
  {
    id: 6,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2019',
    title: 'SSC - Science <span> Manika Secondary School </span>',
    desc: 'Completed Secondary School Certificate (SSC) with major subjects in science and mathematics.',
  },
];


export const portfolio = [
  {
    id: 1,
    img: projectImg1,
    title: 'Coffee Website',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg4, skillsImg5],
    link: '',
  },

  {
    id: 2,
    img: projectImg2,
    title: 'Food Product Design',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg6, skillsImg7],
    link: '',
  },

  {
    id: 3,
    img: projectImg3,
    title: 'Restaurant Landing Page',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: '',
  },

  {
    id: 4,
    img: projectImg4,
    title: 'Barbershop Website',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg4, skillsImg5],
    link: '',
  },

  {
    id: 5,
    img: projectImg5,
    title: 'Construction Landing Page',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: '',
  },
];

export const themes = [
  {
    img: Theme1,
    hue: '4',
  },

  {
    img: Theme2,
    hue: '271',
  },

  {
    img: Theme3,
    hue: '225',
  },

  {
    img: Theme4,
    hue: '339',
  },

  {
    img: Theme5,
    hue: '80',
  },

  {
    img: Theme6,
    hue: '19',
  },

  {
    img: Theme7,
    hue: '42',
  },
];
