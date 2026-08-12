"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";

const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
const isScriptConfigured = Boolean(
  scriptUrl && !scriptUrl.includes("YOUR_SCRIPT_ID")
);

export default function Form() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  // Option 2: Pre-warm Google Apps Script on page load
  useEffect(() => {
    if (scriptUrl) {
      fetch(scriptUrl, { method: "GET", mode: "no-cors" }).catch(() => {});
    }
  }, []);

  const onSubmit = async (data) => {
    if (!isScriptConfigured) {
      const subject = encodeURIComponent(`Contact from ${data.name}`);
      const body = encodeURIComponent(
        `From: ${data.name} (${data.email})\n\n${data.message}`
      );
      window.location.href = `mailto:subhanjanbaral49@gmail.com?subject=${subject}&body=${body}`;
      return;
    }

    // Option 1: Instant feedback — don't wait for Google
    reset();
    toast.success("Message sent successfully! I'll get back to you soon.");

    // Send in background
    fetch(scriptUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.message,
      }),
    }).catch(() => {
      toast.error(
        "Your message may not have been delivered. Please try again."
      );
    });
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
                message: "Name must be at least 2 characters long!",
              },
              maxLength: {
                value: 50,
                message: "Name cannot exceed 50 characters!",
              },
            })}
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
                message: "Please enter a valid email address",
              },
            })}
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
                message: "Message cannot exceed 1000 characters!",
              },
              minLength: {
                value: 20,
                message: "Message must be at least 20 characters long!",
              },
            })}
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
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm hover:border-accent/50 backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          {isScriptConfigured ? "Send Message" : "Open Email Client"}
        </button>

        {!isScriptConfigured && (
          <p className="text-sm text-muted text-center mt-2 px-4">
            Form service not configured. The form will use your default email client.
          </p>
        )}
      </form>
    </>
  );
}