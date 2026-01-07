import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "../../../components/contacts/Form";

export default function Contact() {
  return (
    <>
      <Image 
        src={bg} 
        alt="background-image" 
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25" 
        priority
      /> 

      <article className="relative w-full min-h-screen flex flex-col items-center justify-center space-y-8 px-4 py-12 md:py-20">
        <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-3xl">
          <h1 className="text-accent font-semibold text-center text-4xl md:text-5xl lg:text-6xl capitalize">
            Contact Me
          </h1>
          <p className="text-center font-light text-base md:text-lg max-w-2xl">
            I&apos;m always excited to connect with fellow developers, collaborators, or anyone interested in my work. Whether you have a project idea, a question, or just want to say hello, feel free to reach out. I&apos;ll get back to you as soon as possible!
          </p>
        </div>
        <div className="w-full flex justify-center">
          <Form />
        </div>
      </article>
    </>
  );
}
