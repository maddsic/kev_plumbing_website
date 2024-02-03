"use client";

import React, { useEffect } from "react";
import Map from "../map";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
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
            <section className="container relative z-10 -mt-56">
               <div
                  className="form w-2/4 mx-auto bg-white"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
               >
                  {/* FORM */}
                  <form className="border py-14 shadow-2xl p-10">
                     <div className="text-center">
                        <p className="text-red-500 font-bold mb-5">
                           Get in Touch
                        </p>
                        <h2 className="font-extrabold font-sans text-5xl mb-5 tracking-widest">
                           Now we're talking
                        </h2>
                        <span className="text-sm">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit.
                        </span>
                     </div>
                     <div className="grid md:grid-cols-2 md:gap-6 mt-10">
                        <div className="relative z-0 mb-10 w-full group">
                           <input
                              type="text"
                              name="name"
                              id="floating_first_name"
                              className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              placeholder=" "
                              required
                           />
                           <label
                              htmlFor="name"
                              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                           >
                              Name
                           </label>
                        </div>
                        <div className="relative z-0 mb-10 w-full group">
                           <input
                              type="text"
                              name="company__name"
                              id="floating_last_name"
                              className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              placeholder=" "
                              required
                           />
                           <label
                              htmlFor="floating_last_name"
                              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                           >
                              Company
                           </label>
                        </div>
                     </div>
                     <div className="relative z-0 mb-6 w-full group">
                        <input
                           type="email"
                           name="email"
                           id="floating_email"
                           className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                        />
                        <label
                           htmlFor="floating_email"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                           Email address
                        </label>
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
                     ></textarea>

                     <button
                        type="submit"
                        className="mt-10 p-10 flex items-center justify-center text-white bg-black hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
