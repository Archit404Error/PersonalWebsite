import { ExperienceCardProps } from "./ExperienceCard";

export const experienceData: ExperienceCardProps[] = [
  {
    title: "Software Engineer Intern",
    organization: "Apple",
    description: [
      "Implemented custom C++ library to detect topological and geometric changes in HD Maps for autonomous systems, reducing data transition time by 70%",
      "Constructed custom UI geometry classes, modals, and event handlers in Objective C to visualize library analysis in custom MacOS application",
      "Architected Protobuf schemas for library analysis serialization, visualization, and deployment",
    ],
    image: "/orgs/apple.jpg",
    startDate: "May 2023",
    endDate: "Aug 2023",
  },
  {
    title: "President",
    organization: "Cornell AppDev",
    description: [
      "Leading all Software Development (iOS, Android, Backend) for a team of 50 students building apps with 10,000+ active users",
      "Constructing team vision, overseeing logistics, and communicating with stakeholders in Cornell administration",
      "Previously served as Product Lead, Technical Product Manager, and Backend Developer",
    ],
    image: "/orgs/appdev.png",
    startDate: "Feb 2022",
    endDate: "Present",
  },
  {
    title: "Computer Vision Researcher",
    organization: "Cornell University",
    description: [
      "Working with Prof. Noah Snavely to improve the accuracy of video entity motion detection pipeline",
      "Implementing CoTracker optical flow pipeline for data preprocessing and optimizing neural network efficiency",
      "Investigating applications of pipeline’s bijective mappings to 3D canonical space in generative AI video editing",
    ],
    image: "/orgs/cornell.png",
    startDate: "Aug 2023",
    endDate: "Present",
  },
  {
    title: "Software Engineer Intern",
    organization: "Johnson & Johnson Robotics",
    description: [
      "Worked on robotic surgery cloud platform enabling real-time data analytics & communication between IoT robot devices",
      "Automated deployment of 5,000+ cloud resources (Azure IoT Hub, Blob Storage, etc) by creating Terraform modules integrated into Enterprise Jenkins Instance",
      "Conceived & implemented Azure IoT Edge authentication module used across 8 device teams to interface with cloud",
    ],
    image: "/orgs/jnj.png",
    startDate: "May 2022",
    endDate: "Aug 2022",
  },
];
