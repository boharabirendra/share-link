import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    title: "Growth mindset. Curious. Innovative. Sounds like you?",
    description:
      "Embark on a journey that goes beyond just a job. At Leapfrog, you will get an environment that fosters growth, learning, and collaboration. A place which values diverse perspectives, accountable freedom, pushes you to reach your new height, and celebrates both small and big wins.",
    images: [
      {
        url: "/careers-banner-3x.webp",
        alt: "Alternate text",
      },
    ],
  },
};

const Careers = () => {
  return (
    <>
      <div className="text-center">
        <h1>this is careers pages.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nisi?
        </p>
      </div>
    </>
  );
};

export default Careers;
