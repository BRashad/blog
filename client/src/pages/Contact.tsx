/* eslint-disable no-unreachable */
import * as React from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const Contact = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md  flex flex-col items-center">
        <h2 className="mt-10 mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Get in touch with me
        </h2>
        <p className="mt-10 mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          For co-operation or just to grab a cup of coffee with me feel free to
          drop a message.
        </p>
        <Link href="mailto:info@rashadbayram.com?subject=Co-operation">
          <Button variant="contained">Send me a message</Button>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
