import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900 mt-20">
      <div className="md:flex md:justify-around">
        <div className="mb-6 md:mb-0">
          <a href="https://rashadbayram.com/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Nila Marita
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Resources
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="https://rashadbayram.com/" className="hover:underline">
                  Nila Marita
                </a>
              </li>
              {/* <li>
                <a href="https://tailwindcss.com/" className="hover:underline">
                  Tailwind CSS
                </a>
              </li> */}
            </ul>
          </div>
          {/* <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Follow me
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a
                  href="https://github.com/themesberg/flowbite"
                  className="hover:underline "
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  className="hover:underline"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div> */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="test.html" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="test.html" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-around">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://nilamarita.com/" className="hover:underline">
            Nila Marita™
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a
            href="https://www.instagram.com/nilamarita/?hl=en"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <InstagramIcon />
            <span className="sr-only">Instagram page</span>
          </a>

          <a
            href="https://www.linkedin.com/in/nila-marita-b11b9b12/"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <LinkedInIcon />
            <span className="sr-only">Twitter page</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
