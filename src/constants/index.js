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
    datatool,
    paperai,
    yt,
    threejs,
    opencv,
    sqlite3,
    langchain,
    tensorflow,
    fastapi,
    django
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "tech",
      title: "Tech",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Backend & APIs",
      icon: web,
    },
    {
      title: "AI & Data",
      icon: mobile,
    },
    {
      title: "Web Scraping & Automation",
      icon: backend,
    },
    {
      title: "Creative Websites",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    
   
    
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "tensorflow",
      icon: tensorflow,
    },
    {
      name: "docker",
      icon: docker,
    },
    
    {
      name: "opencv",
      icon: opencv,
    },
    {
      name: "sqlite3",
      icon: sqlite3,
    },
    {
      name: "langchain",
      icon: langchain,
    },
    {
      name: "fastapi",
      icon: fastapi,
    },
    {
      name: "django",
      icon: django,
    },//  opencv,
    // sqlite3,
    // langchain,
    // tensorflow,
    // fastapi,
    // django
  ];
  
  const experiences = [
    {
      title: "Outreach Manager Intern",
      company_name: "Flurno",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jan 2022 - Feb 2022",
      points: [
      "Helped the company in setting up a Discord community of over 1k college students",
      "Managed events and community engagement on Discord.",
      "Invited guest speakers from top tech companies.",
      "Developed targeted marketing assets for Flurno Programs.",
      ],
    },
    {
      title: "Community Head",
      company_name: "StartNow",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - Oct 2022",
      points: [
      "Founded global community for young entrepreneurs, fostering connections and knowledge-sharing.",
      "Recognized as Top 5 Startup Community on Discord within 6 months.",
      "Organized events, facilitated team connections, explored business opportunities.",
      "Hosted sessions with industry leaders, provided valuable insights to members.",
      "Implemented effective outreach strategies, ensuring vibrant community engagement.",
      ],
    },
    {
      title: "Founder & CEO",
      company_name: "Startic Field",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jul 2022 - March 2023",
      points: [
      "Created an application suite of gamified task management for startups and LP portfolio startup investment tracking.",
      "Led focussed product development, enhancing user experience and satisfaction.",
      "Directed agile product development, driving rapid innovation in startup building.",
      "Devised strategy to expand market reach by leveraging existing customer base.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "PredCo AI",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Apr 2023 - Present",
      points: [
      "Designed the framework of IOT sensor data integration to an end-to-end ML based analytics software.",
      "Created PRD and wireframes for the product, and developed the frontend using ReactJS.",
      "Developed Rest APIs, aligning with frontend flow.",
      "Integrated Elastic Search and Kibana Dashboards via dynamic APIs.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Priyansh has very visible passion for his idea and it was great to witness his clarity of thoughts. He is also a good team player, ready to mould his skills if that helps him improve. These are some qualities that can go a long way in charting out a path towards success. I wish him the very best",
      name: "Khyati Bhatt",
      designation: "CEO",
      company: "Simply Body Talk",
      image: "https://media.licdn.com/dms/image/C4D03AQEpBQFei2OEtQ/profile-displayphoto-shrink_400_400/0/1650362145770?e=1694044800&v=beta&t=DQlFIbXqEC2uj_sx91baM_7e7QMpBKli03NgxYaQqbc",
    },
    {
      testimonial:
        "I highly recommend Priyansh for any future endeavors. His dedication, hard work, and passion for his work are truly inspiring. Priyansh is a rare talent, and I am confident that he will continue to make great strides in his career and achieve even greater success in the future.",
      name: "Anup Robins",
      designation: "HR Business Partner",
      company: "Experian",
      image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    {
      testimonial:
        "This guy has what it takes for the first unicorn. Just wait and watch.",
      name: "Aman Sharma",
      designation: "CTO",
      company: "Dinnerfy",
      image: "https://media.licdn.com/dms/image/D4E03AQFrs3BhOhnt5A/profile-displayphoto-shrink_400_400/0/1683687300051?e=1693440000&v=beta&t=BKh8L96K5xzfbcOMTznFCep4PPAuwTr5iIBNtiTJBEQ",
    },
  ];
  
  const projects = [
    {
      name: "DataTool",
      description:
        "Built a secure data-profiling web app with face authentication (DeepFace + Streamlit WebRTC) and AI-powered insights (Gemini). Added modules for missing value handling, outlier treatment, encoding, scaling, and interactive visualizations with Plotly. Enabled data export in multiple formats.",
      tags: [
        
        {
          name: "Computer Vision",
          color: "blue-text-gradient",
        },
        {
          name: "web dev",
          color: "green-text-gradient",
        },
        {
          name: "Data Science",
          color: "pink-text-gradient",
        },
        {
          name: "Generative AI",
          color: "blue-text-gradient",
        },
      ],
      image: datatool,
      source_code_link: "https://github.com/maroof2424/data_tool",
    },
    {
      name: "Paper AI",
      description:
        "This project is a Document Question-Answering Web App built with Streamlit and OpenAI’s GPT models. Users can upload text or Markdown files and ask questions in natural language. The app streams AI-powered answers in real-time, enabling fast summarization and knowledge extraction from unstructured text.",
      tags: [
        {
          name: "web dev",
          color: "blue-text-gradient",
        },
        {
          name: "GenAI",
          color: "green-text-gradient",
        },
        {
          name: "software engineering",
          color: "pink-text-gradient",
        },
      ],
      image: paperai,
      source_code_link: "https://github.com/maroof2424/paperai",
    },
    {
      name: "Youtube Video Downloader",
      description:
        "This project is a Streamlit-based YouTube Downloader that demonstrates fetching available video/audio streams via pytube and allowing users to download them with real-time progress tracking. It features interactive UI elements for stream selection, file naming, and temporary storage management.",
      tags: [
        {
          name: "Youtube-API",
          color: "pink-text-gradient",
        },
        {
          name: "Media Processing",
          color: "green-text-gradient",
        },
        {
          name: "Progress Tracking",
          color: "orange-text-gradient",
        },
      ],
      image: yt,
      source_code_link: "https://github.com/maroof2424/YouTube-Video-Downloader",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };