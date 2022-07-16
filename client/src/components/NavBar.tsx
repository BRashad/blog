import { useState } from "react";
import AppRouter from "../AppRouter";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-around py-8">
      <a href="/">
        <span>Rashad Bayram</span>
      </a>

      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/home">HOME</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="http://localhost:3000/post">POST</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">ABOUT</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">CONTACT</a>
              </li>
              <AppRouter />
            </ul>
          </div>
        </section>

        <ul className="DESKhrefP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/home">HOME</a>
          </li>
          <li>
            <a href="http://localhost:3000/post">POST</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
