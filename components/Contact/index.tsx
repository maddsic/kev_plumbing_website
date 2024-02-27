"use client";

import React, { FormEvent, useEffect, useState } from "react";
import Map from "../map";
import AOS from "aos";
import "aos/dist/aos.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "@/validations/schema";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Contact Dunedin Plumbing and Heating - Get in Touch Today",
   description:
      "Contact Dunedin Plumbing and Heating for all your plumbing needs in Edinburgh and Fife. Call us at 07400847374 or email enquires@dunedinplumbing.co.uk to schedule service.",
};

type formValues = z.infer<typeof ContactSchema>;

const ContactPage = () => {
   const [formData, setFormData] = useState<formValues>();
   const [messageSent, setMessageSent] = useState(false);

   const {
      register,
      handleSubmit,
      watch,
      reset,
      formState: { errors, isSubmitting },
   } = useForm<formValues>({
      resolver: zodResolver(ContactSchema),
   });

   useEffect(() => {
      // Perform localStorage action
      if (typeof window !== "undefined") {
         localStorage.setItem("key", "vale");
      }
   }, []);

   const onSubmit: SubmitHandler<formValues> = async data => {
      const result = ContactSchema.safeParse(data);
      console.log(result);

      if (result.success) {
         const templateParams = {
            from_name: result?.data?.name,
            from_email: result?.data?.email,
            to_name: "Dunedine Plumbing and Heating",
            message: result?.data?.message,
         };
         emailjs
            .send(
               process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
               process.env.NEXT_PUBLIC_EMAIL_TEMPLETE_ID ?? "",
               templateParams,
               process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            .then(response => {
               console.log("Email: sent successfully", response);
               setMessageSent(true);
               reset();
               return { success: true, data: response };
            });
      } else if (result.error) {
         return { success: false, error: result.error.format() };
      }
   };

   useEffect(() => {
      AOS.init({
         offset: 120,
         delay: 0,
         duration: 400,
         easing: "ease",
         once: false,
         mirror: false,
         anchorPlacement: "top-bottom",
      });
   }, []);
   return (
      <>
         <main id="contact" className="w-100 app__wrapper">
            <section className="container relative z-10 -mt-24 lg:-mt-56">
               <div
                  className="form max-w-full h-50 lg:w-2/4 mx-auto bg-white"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
               >
                  {/* FORM */}
                  <form
                     onSubmit={handleSubmit(onSubmit)}
                     className="w-full py-7 md:py-14 px-4 md:px-5 sm:p-10 shadow-2xl"
                  >
                     {messageSent && (
                        <span className="text-green-700 font-semibold text-2xl flex justify-center mb-2 animate-bounce">
                           Thank you for getting in touch...
                        </span>
                     )}
                     <div className="text-center">
                        <p className="text-red-500 font-bold mb-5">
                           Get in Touch
                        </p>
                        <h2 className="font-extrabold font-sans text-3xl lg:text-5xl mb-5 tracking-widest">
                           Now we&#39;re talking
                        </h2>
                        <span className="text-sm">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit.
                        </span>
                     </div>
                     <div className="grid md:grid-cols-2 md:gap-6 mt-5 md:mt-10">
                        <div className="relative z-0 mb-5 md:mb-10 w-full group">
                           <input
                              type="text"
                              id="floating_first_name"
                              className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              placeholder=" "
                              {...register("name", {
                                 required: "name is required",
                              })}
                           />
                           <label
                              htmlFor="name"
                              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                           >
                              Name
                           </label>
                           {errors.name?.message && (
                              <p className="text-sm text-red-500">
                                 {errors.name.message}
                              </p>
                           )}
                        </div>
                        <div className="relative z-0 mb-5 md:mb-10 w-full group">
                           <input
                              type="text"
                              id="floating_last_name"
                              className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              placeholder=" "
                              {...register("last_name", {
                                 required: "last name is required!",
                              })}
                           />
                           <label
                              htmlFor="floating_last_name"
                              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                           >
                              Last name
                           </label>
                           {errors.last_name?.message && (
                              <p className="text-sm text-red-500">
                                 {errors.last_name.message}
                              </p>
                           )}
                        </div>
                     </div>
                     <div className="relative z-0 mb-5 md:mb-6 w-full group">
                        <input
                           type="email"
                           id="floating_email"
                           className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                           {...register("email", {
                              required: "email is required",
                           })}
                        />
                        <label
                           htmlFor="floating_email"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                           Email address
                        </label>
                        {errors.email?.message && (
                           <p className="text-sm text-red-500">
                              {errors.email.message}
                           </p>
                        )}
                     </div>
                     <label
                        htmlFor="floating_message"
                        className="block py-3 text-sm font-medium text-gray-900 dark:text-gray-400"
                     >
                        Message
                     </label>
                     <textarea
                        id="floating_message"
                        rows={4}
                        className="block mb-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Message..."
                        {...register("message", {
                           required: "message is required",
                        })}
                     ></textarea>
                     {errors.message?.message && (
                        <p className="text-sm text-red-500">
                           {errors.message.message}
                        </p>
                     )}
                     <button
                        disabled={isSubmitting}
                        type="submit"
                        className="md:mt-10 p-10 flex items-center justify-center text-white bg-black hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                     >
                        <span>
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-slate-50 mr-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                              />
                           </svg>
                        </span>{" "}
                        {isSubmitting && (
                           <span className="spinner-border spinner-border-sm mr-1"></span>
                        )}
                        Submit
                     </button>
                  </form>
                  {/* FORM */}
               </div>
            </section>
         </main>
         <section>
            <Map />
         </section>
      </>
   );
};

export default ContactPage;
