"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { Toaster } from 'sonner';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (params) => {
    
    const toastId = toast.loading("Sending your message...");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        params,
     {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate:{
            throttle: 10000,
        }
      })
      .then(
        () => {
          toast.success("Message sent successfully!", {id: toastId});
        },
        (error) => {
          toast.error("Message failed to send.", {id: toastId});
        },
      );
  };

  const onSubmit = data => {
    const templateParams = {
        to_name: 'Subhanjan Baral',
        from_name: data.name,
        reply_to: data.email,
        message: data.message,
    }
    sendEmail(templateParams);
  }
  
  return (

    <>
    <Toaster richColors={true} />
    <form onSubmit={handleSubmit(onSubmit)}
    className = "max-w-md w-full flex flex-col items-center justify-center space-y-4"
    >
      <input type="text" placeholder="name" {...register("name", {required: "This field is required", 
        minLength: {value: 3, message: "Name must be at least 3 characters long!"},
      })} 
      className = "w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />
      {
        errors.name && <span className="inline-block self-start text-accent">{errors.name.message}</span>
      }

      <input type="email" placeholder="email" {...register("email", {required: "This field is required"})} 
      className = "w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />
      {
        errors.email && <span className="inline-block self-start text-accent">{errors.email.message}</span>
      }

      <textarea placeholder='Message'{...register("message", {required: "This field is required", maxLength:{
        value: 500,
        message: "Message cannot exceed 500 characters!"
      }, minLength:{
        value: 50,
        message: "Message must be at least 50 characters long!"
      }})} 
      className = "w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />
      {
        errors.message && <span className="inline-block self-start text-accent">{errors.message.message}</span>
      }

      <input 
      value="Send Message!"
      className= "px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize" 
      type="submit" />
    </form>
    </>
  );
}