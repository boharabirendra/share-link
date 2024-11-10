import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trusted technology partner | Leapfrog Technology",
  description:
    "Unlocking Innovation and Technology: 450+ experts crafting your ideas into user-friendly products. Drive your growth with us.",
  openGraph: {
    // title: "Trusted technology partner | Leapfrog Technology",
    // description:
    //   "Unlocking Innovation and Technology: 450+ experts crafting your ideas into user-friendly products. Drive your growth with us.",
    images: [
      {
        url: "/share_image.jpg",
        alt: "Alternate text",
      },
    ],
  },
};

const About = () => {
  return (
    <div className="text-center p-4 rounded shadow-sm bg-slate-900">
      <h1>About page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
        quaerat quasi aut beatae nobis nulla, repellat amet dolore, asperiores
        perferendis corporis. Nisi, esse alias. Nam inventore ullam quasi
        quisquam maxime?
      </p>
    </div>
  );
};

export default About;
