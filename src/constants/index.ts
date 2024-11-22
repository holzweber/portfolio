import {
    datascience,
    deeplearning,
    industry,
    programming,
    javascript,
    typescript,
    angular,
    python,
    pytorch,
    tensorflow,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    bmw,
    keba,
    jku,
    skf,
    raiffeisen,
    microjava,
    java,
    portraitImage,
    emotion,
    palmprint,
    fhsteyr,
    anomalib,
    bentoml
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
      id: "projects",
      title: "Projects",
    },
  ];
  
  interface Service{
    title: string;
    icon: string;
  }

  const portrait = portraitImage

  const services: Service[] = [
    {
      title: "Full Stack Development",
      icon: programming,
    },
    {
      title: "Data Science",
      icon: datascience,
    },
    {
      title: "Deep Learning",
      icon: deeplearning,
    },
    {
      title: "Industrial Digitalization",
      icon: industry,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Angular",
      icon: angular,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "PyTorch",
      icon: pytorch,
    },
    {
      name: "Tensorflow",
      icon: tensorflow,
    },
  ];
  
  interface Experience{
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
  }

  const experiences: Experience[] = [
    {
      title: "Software Engineer Intern",
      company_name: "BMW Group in Austria",
      icon: bmw,
      iconBg: "#E6DEDD",
      date: "July 2015",
      points: [
        "Developing and maintaining C# and Visual Basic Applications",
        "Providing data from PostgreSQL Servers to domain experts in assembly lines"
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "KEBA China",
      icon: keba,
      iconBg: "#E6DEDD",
      date: "July 2016 - Sept. 2016",
      points: [
        "Working on my diploma thesis",
        "Developing a new UI-system for injection molding machines in cooperation with the industry partner HAITIAN", 
        "Beside software development, also project coordination was a key task."
      ],
    },
    {
      title: "Working Student - Production",
      company_name: "SKF Austria",
      icon: skf,
      iconBg: "#E6DEDD",
      date: "Aug. 2019 - Sept. 2019",
      points: [
        "Shift worker in the assembly area"
      ],
    },
    {
      title: "Working Student - Production",
      company_name: "BMW Group in Austria",
      icon: bmw,
      iconBg: "#E6DEDD",
      date: "July 2017 - Sept. 2020",
      points: [
        "Shift worker in the assembly area",
        "Assemblation of combustion car engines"
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Raiffeisen Software GmbH",
      icon: raiffeisen,
      iconBg: "#E6DEDD",
      date: "July 2021 - Okt. 2021",
      points: [
        "Front End development of a new Angular application",
        "Java Backend development for the treasury department"
      ],
    },
    {
      title: "Tutor",
      company_name: "Johannes Kepler University Linz",
      icon: jku,
      iconBg: "#E6DEDD",
      date: "Okt. 2020 - Feb. 2022",
      points: [
        "Software Development 1",
        "Software Development 2",
        "Compiler Construction"
      ],
    },
    {
      title: "Data Scientist",
      company_name: "BMW Group in Austria",
      icon: bmw,
      iconBg: "#E6DEDD",
      date: "Feb. 2022 - Okt. 2022",
      points: [
        "Creating deep learning models for quality assurance (Classifiers, Autoencoders, Object Detection).",
        "Software development for various digital solutions in the assembly area."
      ],
    },
    {
      title: "FastLane Scholarship in Machine Learning",
      company_name: "BMW Group in Austria",
      icon: bmw,
      iconBg: "#E6DEDD",
      date: "Okt. 2022 - July 2023",
      points: [
        "Investigating the application of deep learning methodologies to improve quality assurance in engine plant assembly areas.",
        "Addressing challenges related to data scarcity through the use of Generative Adversarial Networks (GANs) to generate synthetic data.",
        "Implementing and fine-tuning deep neural networks, including convolutional neural networks (CNNs) and object detectors, for quality assurance tasks.",
        "Collaborating with cross-functional teams to gather requirements, conduct experiments, and evaluate model performance.",
        "Analyzing and interpreting data outputs to derive insights and provide recommendations for process improvements."
      ],
    },
    {
      title: "Specialist Innovation & Digitalisation",
      company_name: "BMW Group in Austria",
      icon: bmw,
      iconBg: "#E6DEDD",
      date: "July 2023 - Present",
      points: [
        "Full Stack Software Development specialist with a focus on advanced AI integration for shopfloor operations.",
        "Leads digitalization efforts plant-wide, fostering interdepartmental collaboration for innovative solutions",
        "Utilizes data assets effectively to enhance operational efficiency and quality assurance",
        "Industrializes cutting-edge tools for seamless integration into existing systems",
        "Ensures top-tier quality assurance through innovative digital solutions"
      ],
    },
    {
      title: "Part-Time Lecturer",
      company_name: "University of Applied Sciences Upper Austria - School of Business & Management",
      icon: fhsteyr,
      iconBg: "#E6DEDD",
      date: "March 2024 - Present",
      points: [
        "Part-Time Lecturer for Business Analytics 1 & 2 courses",
        "Specializing in teaching the programming language R for practical applications in Business Analytics and Data Analytics",
        "Providing guidance and support during practical exercises focusing on Business Analytics and Data Analytics concepts",
        "Delivering comprehensive instruction on R programming tailored to the needs of Business Analytics students",
        "Facilitating hands-on learning experiences to enhance understanding and application of Business Analytics principles"
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
      name: "Open-Source: BentoML",
      description:
        "Contributing to and working with BentoML, an open-source model serving library for building performant and scalable AI applications with Python",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "machine-learning",
          color: "green-text-gradient",
        },
      ],
      image: bentoml,
      source_code_link: "https://github.com/bentoml/BentoML",
    },
    {
      name: "Open-Source: Anomalib",
      description:
        "Contributing to and working with Anomalib, an open-source anomaly detection library",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "anomaly detection",
          color: "green-text-gradient",
        },
      ],
      image: anomalib,
      source_code_link: "https://github.com/openvinotoolkit/anomalib",
    },
    {
      name: "Micro Java Compiler",
      description:
        "Project of the course Compiler Construction in my Bachelor studies. The MicroJava compiler is written in Java, also including test files with Unit tests.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "bytecode",
          color: "green-text-gradient",
        },
      ],
      image: microjava,
      source_code_link: "https://github.com/holzweber/MicroJavaCompiler",
    },
    {
      name: "Emotion Recognition",
      description:
        "During my Bachelor Thesis I had my first contact with deep learning. In this project, based on facial expressions, a CNN is trained to classify among different emotions.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "deeplearning",
          color: "pink-text-gradient",
        },
      ],
      image: emotion,
      source_code_link: "https://github.com/holzweber/FacialEmotionRecognition",
    },
    {
      name: "Palmprint Recognition",
      description:
        "Palmprint Recognition with Neural Networks written in PyTorch. Handmark detection in the wild is possible with Spatial Transformer Network (STN).",
      tags: [
        {
          name: "pytorch",
          color: "blue-text-gradient",
        },
        {
          name: "deeplearning",
          color: "green-text-gradient",
        },
        {
          name: "biometrics",
          color: "pink-text-gradient",
        },
      ],
      image: palmprint,
      source_code_link: "https://github.com/holzweber/palmprint-recognition",
    },
  ];
  
export { services, technologies, experiences, testimonials, projects, portrait };
export type { Service, Experience };
  