import Image from "next/image";
import bg from "../../../../public/background/about-background.png";

import RenderModel from "../../../components/RenderModel";
import Hat from "../../../components/models/Hat";
import AboutDetails from "../../../components/About";

export default function About() {
  return (
    <>
      <Image 
        src={bg} 
        alt="background-image" 
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25" 
        priority
      /> 
    
      <div className="w-full h-screen absolute top-1/2 -translate-y-1/2 left-0 hidden md:block">
        <RenderModel>
          <Hat />
        </RenderModel>
      </div>

      <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center text-center mt-20 md:mt-0 md:absolute md:top-[60%] md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2">
          <h1 className="font-bold text-5xl md:text-7xl lg:text-9xl text-accent">Subhanjan Baral</h1>
          <p className="font-light text-foreground text-xl md:text-2xl lg:text-3xl py-4">Personal Portfolio</p>
        </div>
      </div>

      <AboutDetails />  
    </>
  );
}
