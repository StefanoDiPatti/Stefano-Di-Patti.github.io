import {
    android,
    AI,
    threeD,
    web,
    blender,
    bootstrap,
    C,
    java,
    keras,
    maya,
    openCV,
    python,
    sql,
    unity3D,
    zbrush,
    reactjs,
    nodejs,
    threed_reconstruction,
    aquasurvey,
    artstation_bg,
    biometrics,
    ccalib,
    morphological,
    unict,
    nautilus,
    nigithor,
    unimi,
    ibm,
    artstation,
    github,
    playstore
  } from "../assets";


import { Models } from "../components/canvas/entities";
  
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
      title: "Data Science",
      icon: AI,
    },
    {
      title: "3D Generalist",
      icon: threeD,
    },
    {
      title: "Android Developer",
      icon: android,
    },
    {
      title: "Full Stack Developer",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "OpenCV",
      icon: openCV,
    },
    {
      name: "Keras",
      icon: keras,
    },
    {
      name: "Maya",
      icon: maya,
    },
    {
      name: "Blender",
      icon: blender,
    },
    {
      name: "Zbrush",
      icon: zbrush,
    },
    {
      name: "Unity 3D",
      icon: unity3D,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C",
      icon: C,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "React JS/TS",
      icon: reactjs,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
  ];
  
  const experiences = [
    {
      title: "Data Science Student",
      company_name: "University of Catania",
      icon: unict,
      iconBg: "#ffff",
      date: "September 2016 - April 2021",
      points: [
        "Accomplished Computer Science graduate with a focus on Data Science coursework",
        "Led thesis project development abroad during the Erasmus+ program at the University of Vigo, Spain",
        "Proficient in OOP programming and possess a solid foundation in relational databases and design patterns",
        "Passionate about multimedia manipulation, demonstrated by actively participating in subjects that utilize Python with OpenCV",
      ],
    },
    {
      title: "Android Developer",
      company_name: "Nigithor Consulting",
      icon: nigithor,
      iconBg: "#383E56",
      date: "December 2016 - June 2017",
      points: [
        "Designed and deployed visually appealing graphic content aligned with Material Design principles for the application",
        "Developed and implemented custom features using the Google Maps API in native Java, enhancing functionality for the application",
        "Championed regression compatibility, ensuring new features didn't break existing functionalities",
        "Effectively managed customer relationships through smart working practices, promoting efficiency and positive interactions",
      ],
    },
    {
      title: "3D Generalist",
      company_name: "Nautilus Academy",
      icon: nautilus,
      iconBg: "#ffff",
      date: "September 2017 - June 2019",
      points: [
        "Skilled in 3D Modeling, animation, texture baking, lighting, and rendering using Maya and Arnold",
        "Expertise in storytelling through camera angles and movements to create engaging visuals",
        "Awarded a merit-based scholarship for academic excellenc",
        "Completed a ZBrush Sculpting Course taught by industry professional Danko Angelozzi, demonstrating dedication to continuous learning",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "IBM Consulting",
      icon: ibm,
      iconBg: "#0C0C0C",
      date: "June 2021 - Present",
      points: [
        "Provided front-end support for Trenitalia's website development and TVM (Ticketing Vending Machine) systems using the Aurelia framework",
        "Developed an analytics tool using Adobe to improve data insights",
        "Built and tested web applications using React.ts and related technologies for Hera in an Azure Cloud environment",
        "Implemented responsive design principles to ensure websites and applications adapt seamlessly across different devices. Guaranteed cross-browser compatibility for a wider user base.",
      ],
    },
    {
      title: "Data Science Student",
      company_name: "University of Milan",
      icon: unimi,
      iconBg: "#E6DEDD",
      date: "September 2022 - Present",
      points: [
        "Pursued a personalized curriculum in Artificial Intelligence, Computer Vision, and the underlying mathematics, demonstrating a proactive approach to learning",
        "Developed projects specifically for the entertainment industry, applying AI and Computer Vision concepts to real-world applications",
        "Achieved deep proficiency in Python and C++ for building real-time applications, highlighting your ability to handle performance-critical tasks",
        "Possess a comprehensive understanding of multimedia processing techniques, demonstrating a strong foundation for working with various media formats",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Aquasurvey",
      description:
        "Code upgrade and use of Material Design methodologies for the implementation of new features based on the Google Maps API",
      tags: [
        {
          name: "android",
          color: "blue-text-gradient",
        },
        {
          name: "java",
          color: "green-text-gradient",
        },
        {
          name: "material-design",
          color: "pink-text-gradient",
        },
      ],
      image: aquasurvey,
      icon: playstore,
      source_code_link: "https://play.google.com/store/apps/details?id=com.aqua.mobile&hl=it",
    },
    {
      name: "3D Assignments",
      description:
        "From sketches through rendering, my collection of Computer Graphic works through Academy and University",
      tags: [
        {
          name: "3D-generalist",
          color: "blue-text-gradient",
        },
        {
          name: "maya",
          color: "green-text-gradient",
        },
        {
          name: "blender",
          color: "pink-text-gradient",
        },
      ],
      image: artstation_bg,
      icon: artstation,
      source_code_link: "https://www.artstation.com/stefanodipatti",
    },
    {
      name: "Custom Calib Pattern.py",
      description:
        "Python implementation of ccalib.cpp from OpenCV",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "opencv",
          color: "green-text-gradient",
        },
        {
          name: "camera-calib",
          color: "pink-text-gradient",
        },
      ],
      image: ccalib,
      icon: github,
      source_code_link: "https://github.com/StefanoDiPatti/Custom-Calibration-Pattern-for-3D-reconstruction-with-Python",
    },
    {
      name: "3D Reconstruction without Camera Calibration",
      description:
        "my Degree final project: a prototyping tool that creates a 3D model out of several different images taken with a consumer camera retrieving a specific object",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "opencv",
          color: "green-text-gradient",
        },
        {
          name: "3D-reconstruction",
          color: "pink-text-gradient",
        },
      ],
      image: threed_reconstruction,
      icon: github,
      source_code_link: "https://github.com/StefanoDiPatti/3D-Reconstruction-from-Multiple-2D-Images--without-Camera-Calibration",
    },
    {
      name: "Soft Biometric Recognition",
      description:
        "Analysis of human traits such as race, sex, age, weight, height etc... using multimedia data manipulation technologies and machine learning",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "opencv",
          color: "green-text-gradient",
        },
        {
          name: "computer-vision",
          color: "pink-text-gradient",
        },
      ],
      image: biometrics,
      icon: github,
      source_code_link: "https://github.com/StefanoDiPatti/Soft-Biometric-Recognition",
    },
    {
      name: "Morphological Operators.py",
      description:
        "Morphology mathematics visualization and description using Python and OpenCV",
      tags: [
        {
          name: "image-processing",
          color: "blue-text-gradient",
        },
        {
          name: "mathematics",
          color: "green-text-gradient",
        },
        {
          name: "jupyter-notebook",
          color: "pink-text-gradient",
        },
      ],
      image: morphological,
      icon: github,
      source_code_link: "https://github.com/StefanoDiPatti/Morphological-Operators-and-their-simple-use-in-Python",
    },
  ];

const Models3D = [
  { id: 1, name: Models.Computer, title: "Studying Computer Vision & Multimedia" },
  { id: 2, name: Models.Brain, title: "Studying AI and Machine Learning" },
  { id: 3, name: Models.Cube, title: "Specialist in 3D Generalist" },
  { id: 4, name: Models.Web, title: "Professional in Web applications" }
];
  
  export { services, technologies, experiences, projects, Models3D };