import React from "react";
import nilaavatar from "../assets/nila_avatar.jpeg";

const Posts = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mt-10 mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              My media and articles
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg
                    className="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  YouTube Video
                </span>
                <span className="text-sm">Mar 15, 2022</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="https://www.youtube.com/watch?v=oJTjlRbqL1M&t=31s">
                  Challenge Internal Communication in Times of Crisis
                </a>
              </h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                My presentaion on Challenge Internal Communication in Times of
                Crisis to the "The Iconomics". Here I talk about best practices,
                things to avoid and how to mamange crisis effectively.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={nilaavatar}
                    alt="Nila Marita avatar"
                  />
                  <span className="font-medium dark:text-white">
                    Nila Marita
                  </span>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=oJTjlRbqL1M&t=31s"
                  className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  View more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </article>
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                    <svg
                      className="mr-1 w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                    </svg>
                  </span>
                  YouTube Video
                </span>
                <span className="text-sm">Apr 22, 2016</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="https://www.youtube.com/watch?v=R0x_w9KeOZk">
                  The Indonesian way to fight terrorism | Nila Marita | TEDxJIS
                </a>
              </h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                Early this year in Jakarta, the capital city of Indonesia, was
                surprised by multiple blasts and gunfire wreaked havoc - branded
                as part of the coordinated Islamic State-linked terrorist
                attacks. However, it seems the terrorists may have not achieved
                their objectives this time - certainly not in Indonesia.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-7 h-7 rounded-full"
                    src={nilaavatar}
                    alt="Nila Marita avatar"
                  />
                  <span className="font-medium dark:text-white">
                    Nila Marita
                  </span>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=R0x_w9KeOZk"
                  className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </article>
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg
                    className="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  YouTube Video
                </span>
                <span className="text-sm">Aug 31, 2020</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="https://www.youtube.com/watch?v=dwzPxlmMA7s">
                  FORWAT Virtual Discussion: Indonesian Startups in the Midst of
                  a Pandemic
                </a>
              </h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                During the pandemic, many startups and even large companies were
                forced to rationalize and restructure in order to survive. In
                addition to the many companies that have been affected, there
                are also startups that are actually flying in the midst of a
                pandemic. What is Gojek's strategy to survive until now, and
                what made Halodoc's service skyrocket during the pandemic? Then,
                what are the opportunities for local startups in an uncertain
                situation from the perspective of East Venture venture capital
                companies?
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-7 h-7 rounded-full"
                    src={nilaavatar}
                    alt="Jese Leos avatar"
                  />
                  <span className="font-medium dark:text-white">Jese Leos</span>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=dwzPxlmMA7s"
                  className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  View more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Posts;
