"use client";

import { SectionHeader } from "../text/SectionHeader";
import { Project, ProjectData } from "./Project";

const projectData: ProjectData[] = [
  {
    title: "Cornell Course Engine",
    description:
      "This course search engine utilizes Machine Learning and Natural Language Processing to aid students in discovering interesting courses based on a user's natural language queries.",
    image: "/projects/semantic_search_mac.png",
    url: "https://www.youtube.com/watch?v=oEjnem97er4",
    github: "https://github.com/Archit404Error/SemanticClassSearch",
    tech: "React, Flask, HF Transformers, Pinecone DB, EC2",
  },
  {
    title: "Yolo: Social Events",
    description:
      "Yolo is the first social media app built around your calendar. It's designed to help you find fun events on campus and make friends with similar interests, and launched at Cornell in Fall 2022!",
    image: "/projects/yolo_phone.png",
    appStore: "https://apps.apple.com/us/app/yolo-cornell-events/id1618863681",
    github: "https://github.com/Archit404Error/YoloMobile",
    impact: "300+ Daily Active Users, 1000+ Users",
    tech: "React Native, MongoDB, Express.js & Node.js, Socket.io, AWS CloudFront, AWS S3, AWS EC2",
  },
  {
    title: "Newsflash: AI News",
    description:
      "NewsFlash is a website and mobile app that utilizes Machine Learning to identify news bias. It displays top headlines (and their bias), and is capable of analyzing the sentiments and bias of any article on the web.",
    image: "/projects/newsflash_mac.png",
    url: "http://3.84.0.201:8000/",
    appStore:
      "https://apps.apple.com/us/app/newsflash-unbiased-news/id1578807973",
    impact: "1,000+ Users; 50,000+ Articles Analyzed",
    tech: "TensorFlow, NLTK, React Native, Flask, SQL",
  },
  {
    title: "Volume: Cornell Publications",
    description:
      "Volume is a mobile app which aggregates all student publications, magazines, and flyers on Cornell campus. I led a team of 10 developers, designers, and marketers to build the app and grow it to over 400 users.",
    image: "/projects/volume_phone.png",
    github: "https://github.com/cuappdev/volume-backend",
    impact: "400+ users; 20+ publications; 5,000+ articles",
    tech: "GraphQL, MongoDB, Express & Node.js, TypeScript, RSS Parsing",
  },
  {
    title: "PriceMerge",
    description:
      "PriceMerge empowers users to combat price hiking by allowing users to compare and track product prices across thousands of websites, automatically notifying them when prices drop. PriceMerge aided tens of thousands of users in acquiring PPE during the COVID-19 pandemic and has been featured on the national news.",
    image: "/projects/pricemerge_mac.png",
    github: "https://github.com/Archit404Error/PriceMerge",
    impact: "25,000+ Users; 200,000+ Searches; Featured on national news",
  },
  {
    title: "Eatery: Cornell Dining",
    description:
      "Eatery is an app built by Cornell AppDev to display Cornell dining hall menus to 10,000+ users daily. I worked as a backend developer on a team of 10 to architect a new backend from scratch to enable account personalization, food recommendations, and item favoriting.",
    image: "/projects/eatery_phone.png",
    github: "https://github.com/cuappdev/eatery-blue-backend",
    impact: "10,000 Monthly Users; 30,000+ downloads",
    tech: "Django, PostGreSQL, SQLAlchemy",
  },
];

export const Projects = () => {
  return (
    <div id="projects" className="mt-0 md:mt-10 bg-black">
      <div className="grid grid-cols-9">
        <div className="col-start-2 col-span-7 lg:col-start-2 lg:col-span-5 mt-20 mb-10">
          <SectionHeader
            subtitle="Engineering the Future."
            title="Coding Projects"
          />
        </div>
      </div>
      {projectData.map((projectData) => (
        <div
          key={projectData.title}
          className="bg-black mb-20 flex items-center justify-center"
        >
          <Project {...projectData} />
        </div>
      ))}
    </div>
  );
};
