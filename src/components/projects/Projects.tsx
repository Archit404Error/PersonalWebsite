"use client";

import { SectionHeader } from "../text/SectionHeader";
import { Project } from "./Project";

interface Project {
  title: string;
  description: string;
  image: string;
  url?: string;
  appStore?: string;
  github?: string;
  impact?: string;
}

const projectData: Project[] = [
  {
    title: "Cornell Courses",
    description:
      "Cornell Courses is a website that utilizes Machine Learning and Natural Language Processing to aid students in discovering interesting courses based on natural language queries. Made with React, Flask, and Gensim, hosted on Google Cloud.",
    image: "/projects/semantic_search_mac.png",
    url: "https://cornellcourses.org",
    github: "https://github.com/Archit404Error/SemanticClassSearch",
  },
  {
    title: "Yolo: Social Events",
    description:
      "Yolo is the first social media app built around your calendar. It's designed to help you find fun events on campus and make friends with similar interests, and launched at Cornell in Fall 2022!",
    image: "/projects/yolo_phone.png",
    appStore: "https://apps.apple.com/us/app/yolo-cornell-events/id1618863681",
    github: "https://github.com/Archit404Error/YoloMobile",
    impact: "300+ Daily Active Users, 1000+ Users",
  },
  {
    title: "Newsflash: Unbiased News",
    description:
      "NewsFlash is a website and mobile app that helps identify and remove news bias. It displays top headlines(and their bias) as well as  an analysis of multiple articles across the web on a given topic.",
    image: "/projects/newsflash_mac.png",
    url: "http://3.84.0.201:8000/",
    appStore:
      "https://apps.apple.com/us/app/newsflash-unbiased-news/id1578807973",
    impact: "1,000+ Users; 50,000+ Articles Analyzed",
  },
  {
    title: "PriceMerge",
    description:
      "PriceMerge empowers users to find the cheapest products and combat price hiking by comparing product prices across thousands of websites and automatically showing the cheapest price.",
    image: "/projects/pricemerge_mac.png",
    github: "https://github.com/Archit404Error/PriceMerge",
    impact: "25,000+ Users; 200,000+ Searches; Featured on national news",
  },
];

export const Projects = () => {
  return (
    <div id="projects" className="mt-10 bg-black">
      <div className="grid grid-cols-9">
        <div className="col-start-2 col-span-5 mt-20 mb-10">
          <SectionHeader
            subtitle="Engineering the Future."
            title="Coding Projects"
          />
        </div>
      </div>
      {projectData.map((projectData) => (
        <div
          key={projectData.title}
          className="bg-black mb-10 flex items-center justify-center"
        >
          <Project {...projectData} />
        </div>
      ))}
    </div>
  );
};
