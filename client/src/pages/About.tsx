import React from "react";
import nila from "../assets/nilamarita.jpeg";

const About = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mt-10 mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
              About Me and My Career
            </h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Communication is key to successfull business
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img className="w-full dark:hidden" src={nila} alt="dashboard" />
          <img
            className="w-full hidden dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard img"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Let's create effective communication business environment.
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              We are living in extraordinary times of change, and communications
              continues to play a very important role in ensuring that
              organisations can connect effectively with their audiences. I look
              forward to seeing another series of innovative campaigns that have
              demonstrated measurable and meaningful impact on both businesses
              as well as the communities that they serve.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
