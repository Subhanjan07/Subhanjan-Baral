"use client";
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { Toaster } from 'sonner';

export default function Form() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEmailJSConfigured, setIsEmailJSConfigured] = useState(false);

  useEffect(() => {
    // Check if EmailJS environment variables are configured
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      // Initialize EmailJS
      emailjs.init(publicKey);
      setIsEmailJSConfigured(true);
    } else {
      console.warn('EmailJS environment variables are not configured. Please set NEXT_PUBLIC_SERVICE_ID, NEXT_PUBLIC_TEMPLATE_ID, and NEXT_PUBLIC_PUBLIC_KEY in your .env.local file.');
    }
  }, []);

  const sendEmail = async (params) => {
    if (!isEmailJSConfigured) {
      toast.error("Email service is not configured. Please contact me directly via email.");
      return;
    }

    const toastId = toast.loading("Sending your message...");
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 10000,
          }
        }
      );
      
      toast.success("Message sent successfully! I'll get back to you soon.", {id: toastId});
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error(
        error.text || "Failed to send message. Please try again or contact me directly.",
        {id: toastId}
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmit = (data) => {
    if (!isEmailJSConfigured) {
      // Fallback: Use mailto if EmailJS is not configured
      const subject = encodeURIComponent(`Contact from ${data.name}`);
      const body = encodeURIComponent(`From: ${data.name} (${data.email})\n\n${data.message}`);
      window.location.href = `mailto:subhanjanbaral49@gmail.com?subject=${subject}&body=${body}`;
      return;
    }

    const templateParams = {
      to_name: 'Subhanjan Baral',
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };
    sendEmail(templateParams);
  };
  
  return (
    <>
      <Toaster richColors={true} position="top-center" />
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <div className="w-full">
          <input 
            type="text" 
            placeholder="Your Name" 
            {...register("name", {
              required: "This field is required", 
              minLength: {
                value: 2, 
                message: "Name must be at least 2 characters long!"
              },
              maxLength: {
                value: 50,
                message: "Name cannot exceed 50 characters!"
              }
            })} 
            disabled={isSubmitting}
            className="w-full p-3 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          />
          {errors.name && (
            <span className="inline-block self-start text-accent text-sm mt-1 ml-1">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="w-full">
          <input 
            type="email" 
            placeholder="Your Email" 
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address"
              }
            })} 
            disabled={isSubmitting}
            className="w-full p-3 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          />
          {errors.email && (
            <span className="inline-block self-start text-accent text-sm mt-1 ml-1">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="w-full">
          <textarea 
            placeholder="Your Message (min. 20 characters)"
            rows={6}
            {...register("message", {
              required: "This field is required", 
              maxLength: {
                value: 1000,
                message: "Message cannot exceed 1000 characters!"
              }, 
              minLength: {
                value: 20,
                message: "Message must be at least 20 characters long!"
              }
            })} 
            disabled={isSubmitting}
            className="w-full p-3 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg resize-none disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          />
          {errors.message && (
            <span className="inline-block self-start text-accent text-sm mt-1 ml-1">
              {errors.message.message}
            </span>
          )}
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm hover:border-accent/50 backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          {isSubmitting ? "Sending..." : isEmailJSConfigured ? "Send Message" : "Open Email Client"}
        </button>

        {!isEmailJSConfigured && (
          <p className="text-sm text-muted text-center mt-2 px-4">
            Email service not configured. The form will use your default email client.
          </p>
        )}
      </form>
    </>
  );
}