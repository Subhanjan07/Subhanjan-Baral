import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "../components/RenderModel";
import Wizard from "../components/models/Wizard";
import Navigation from "../components/navigation";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Subhanjan Baral - Home</title> {}
        <meta name="description" content="Welcome to Subhanjan Baral's personal portfolio website." />
      </Head>
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="background-image" fill className="-z-50 w-full h-full object-cover object-center opacity-25" /> 
    
    <div className="w-full h-screen">
      {/* navigation and 3d model */}
      <Navigation />
      <RenderModel>
        <Wizard />
      </RenderModel>
    </div>
    
    </main>
    </>
  );
}
