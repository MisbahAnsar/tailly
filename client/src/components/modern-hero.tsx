import { ArrowRight } from "lucide-react";

import { Button } from "./ui/button";
import pinkmark from "../assets/pinkmark.png";
import facesMobile from "../assets/faces-mobile.png";

interface Hero7Props {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  reviews?: {
    count: number;
    avatars: {
      src: string;
      alt: string;
    }[];
  };
}

const Hero7 = ({
  heading = "The simplest way to create forms",
  description = "Say goodbye to boring forms. Meet Tally — the free, intuitive form builder you’ve been looking for.",
  button = {
    text: "Create a free form",
    url: "/",
  },
}: Hero7Props) => {
  return (
    <section className="py-32 relative">
      <div className="container text-center mx-auto relative">
        {/* Mobile faces image - shown only on smaller screens */}
        <div className="xl:hidden mb-20">
          <img 
            src={facesMobile} 
            alt="faces mobile" 
            className="mx-auto w-full max-w-2xl"
          />
        </div>
        <div className="mx-auto flex max-w-screen-xl flex-col gap-6">
          <div className="relative inline-block">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl xl:text-7xl tracking-tighter">{heading}</h1>
            <img 
              src={pinkmark} 
              alt="underline" 
              className="absolute left-1/3 transform -translate-x-1/2 mt-2 w-32 lg:w-48"
              style={{ top: '90%' }}
            />
          </div>
          <p className="font-semibold lg:text-xl lg:max-w-2xl mx-auto px-2 sm:px-0">
            {description}
          </p>
        </div>
        <Button asChild size="lg" className="mt-14 bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-lg inline-flex items-center">
          <a href={button.url}>
            {button.text}
            <ArrowRight className="ml-2 h-4 w-4 relative top-0.5" />
          </a>
        </Button>
        <p className="mt-2 text-sm text-gray-800">No signup required</p>

      </div>
    </section>
  );
};

export { Hero7 };
