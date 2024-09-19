export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Education',
    href: '#education',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'React Movie App - Movie Hunting Made Easy',
    desc: 'Simplify your entertainment search with this responsive web app, designed to help you quickly find the perfect Movie or TV show.This app simplifies your entertainment search with global features for trailers, ratings, similar content, and OTT streaming info.',
    subdesc:
      ' Quickly find what you want, whether by actor or genre, stay updated with trending and popular shows,movies and enjoy more watching with less searching.',
    href: 'https://movie-app-chaitanya.vercel.app/',
    texture: '/textures/project/MovieDemo.mp4',
    logo: '/assets/tv.svg',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Redux',
        path: '/assets/icons8-redux.png',
      },
      {
        id: 4,
        name: 'AJAX',
        path: '/assets/ajax2.webp',
      },
    ],
  },
  {
    title: 'ProManage - Agile Kanban Board',
    desc: 'Created a dynamic Kanban Board using the MERN Stack, offering a robust task management solution.',
    subdesc:
      'Users can easily create, share, and assign tasks to others.Monitor task deadlines to ensure timely completion.Select task priority levels and add detailed checklists for organized task execution.Includes login and logout functionality for secure access. User can effectively change tasks status from [backlog, todo, done, in-progress] for realtime stats.',

    href: 'https://pro-manage-fd.vercel.app/',
    texture: '/textures/project/ProManageDemo.mp4',
    logo: '/assets/kanban-logo.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'MongoDB',
        path: '/assets/mongoDB.png',
      },
      {
        id: 3,
        name: 'Express',
        path: '/assets/icons8-express-js.svg',
      },
      {
        id: 4,
        name: 'NodeJs',
        path: '/assets/node-js.svg',
      },
    ],
  },
  {
    title: 'Obys Agency Clone (UI)',
    desc: 'Developed a faithful clone of the award-winning website Obys Agency, renowned for its innovative animations and effects. Employed advanced technologies to recreate the unique design and interactivity of the original site.',
    subdesc:
      'Locomotive Scroll for smooth, seamless scrolling. SheryJs library to replicate innovative effects and enhance interactivity.ThreeJS for stunning visual effects and GSAP for dynamic animations.',
    href: 'https://major-project-chaitanya.vercel.app/',
    texture: '/textures/project/ObysDemo.mp4',
    logo: '/assets/obyslogo.png',
    logoStyle: {
      backgroundColor: '#000000', // Solid black background
      background: 
        'linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(30, 30, 30, 0.7) 100%)', // Dark gradient
      border: '0.2px solid rgba(255, 255, 255, 0.1)', // Very subtle light gray border
      boxShadow: '0px 0px 20px 6px rgba(0, 255, 0, 0.05), 0px 0px 20px 5px rgba(255, 255, 255, 0.2)' // Softer shadow with reduced brightness
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Html',
        path: '/assets/icons8-html.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/icons8-css3.svg',
      },
      {
        id: 3,
        name: 'JS',
        path: '/assets/icons8-javascript.svg',
      },
      {
        id: 4,
        name: 'GreenSock Animation Platform',
        path: '/assets/gsap2.webp',
      },
    ],
  },
  {
    title: 'Swiptory - Your Story Sharing Hub',
    desc: 'A fun small social media app , where user can view other people stories, bookmark story, share it with others, like the story,create their own story.',
    subdesc:
      'Built using MongoDB ,React ,Express ,Node. Users can create their accounts and start posting their stories like snap chat, upload images.User can also select from categories to which the story resembles the most.',
    href: 'https://swiptory-fd.vercel.app/',
    texture: '/textures/project/SwiptoryDemo.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'MongoDB',
        path: '/assets/mongoDB.png',
      },
      {
        id: 3,
        name: 'Express',
        path: '/assets/icons8-express-js.svg',
      },
      {
        id: 4,
        name: 'NodeJs',
        path: '/assets/node-js.svg',
      },
    ],
  },
];

export const education = [
  {
    id: 1,
    name: 'Completed MERN Stack Training from Cuvette Tech Pvt Ltd',
    pos: 'MERN Stack Developer',
    duration: '2024 - Present',
    title:
      'Found my interest in Web Development. Got to know lot of things how web works, how to build beautiful websites, APIs, frontend , backend and much more!',
    icon: '/assets/mern3.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Completed Graduation from Nagpur University,Maharashtra',
    pos: 'Bachelor of Engineering (CSE)',
    duration: '2019 - 2023',
    title:
      'During my graduation, I was presidential representative of CSE department and a batch topper. Also won many inter-college chess tournaments. Learnt computer fundamentals. ',
    icon: '/assets/graduation.webp',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Completed X & XII from Maharashtra State Board',
    pos: 'Student (Science)',
    duration: '2017 - 2019',
    title:
      'I don’t remember much about my school days, but it was a time of discovery, forming friendships, and learning life’s lessons outside the classroom. From experimenting in the lab to enjoying simple lunch breaks with friends, those moments will always hold a special place😉',
    icon: '/assets/student5.png',
    animation: 'salute',
  },
  
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

