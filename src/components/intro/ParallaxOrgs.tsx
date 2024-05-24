import { ParallaxBubble, ParallaxBubbleProps } from "../animation/Parallax";

const parallaxData: ParallaxBubbleProps[] = [
  {
    imagePath: "/orgs/stripe.svg",
    parallaxAmount: 50,
    radius: 120,
    leftOffset: 250,
    topOffset: 200,
    description: "I am an incoming Software Engineer at Stripe!",
  },
  {
    imagePath: "/orgs/apple.jpg",
    parallaxAmount: 100,
    radius: 75,
    leftOffset: 20,
    topOffset: 50,
    description: `I've interned at Apple, where I constructed a 10,000+ line C++ library 
    from scratch to aid navigation of autonomous vehicles.`,
  },
  {
    imagePath: "/orgs/cornell.png",
    parallaxAmount: 150,
    radius: 125,
    leftOffset: 50,
    topOffset: 200,
    description:
      "I study CS & Math at Cornell, where I also conduct Computer Vision research.",
  },
  {
    imagePath: "/orgs/appdev.jpg",
    parallaxAmount: 100,
    radius: 90,
    leftOffset: 200,
    topOffset: 20,
    description: `I'm president of Cornell AppDev, a team of 50+ student software engineers 
      building products with 15,000+ users.`,
  },
];

export const ParallaxOrgs = () => (
  <>
    {parallaxData.map((dataObj) => (
      <ParallaxBubble key={dataObj.imagePath} {...dataObj} />
    ))}
  </>
);
