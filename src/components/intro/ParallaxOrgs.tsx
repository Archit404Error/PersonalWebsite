import { ParallaxBubble, ParallaxBubbleProps } from "../animation/parallax";

const parallaxData: ParallaxBubbleProps[] = [
  {
    imagePath: "/orgs/stripe.svg",
    parallaxAmount: 50,
    radius: 120,
    leftOffset: 250,
    topOffset: 200,
  },
  {
    imagePath: "/orgs/apple.jpg",
    parallaxAmount: 100,
    radius: 75,
    leftOffset: 20,
    topOffset: 50,
  },
  {
    imagePath: "/orgs/cornell.png",
    parallaxAmount: 150,
    radius: 125,
    leftOffset: 50,
    topOffset: 200,
  },
  {
    imagePath: "/orgs/appdev.jpg",
    parallaxAmount: 100,
    radius: 90,
    leftOffset: 200,
    topOffset: 10,
  },
];

export const ParallaxOrgs = () => (
  <>
    {parallaxData.map((dataObj) => (
      <ParallaxBubble key={dataObj.imagePath} {...dataObj} />
    ))}
  </>
);
