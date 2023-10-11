import { logo, hamburger, close, patterns } from "../constants/assets";
import { navLinks } from "../constants";
import { useState } from "react";
import Button from "../components/Button";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex justify-between items-center container mx-auto py-6 sm:py-5 px-6 sm:px-2 xl:px-0">
      <div>{logo}</div>

      <nav className="hidden sm:block">
        <ul className="flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                className=" text-neutral-grayish-violet-dark uppercase hover:text-primary-violet-dark transition-colors ease-in-out delay-75"
                href="#"
              >
                {link.title}
              </a>
            </li>
          ))}

          <Button text="View Plans" />
        </ul>
      </nav>

      {/* hamburger & mobile menu */}
      <div className="sm:hidden">
        <button onClick={() => setToggleMenu((prev) => !prev)} type="button">
          <span className={`${toggleMenu && "hidden"}`}>{hamburger}</span>
          <span className={`${!toggleMenu && "hidden"}`}>{close}</span>
        </button>

        <div
          className={`${
            toggleMenu ? "block" : "hidden"
          } absolute z-10 top-20 inset-x-0 bottom-0 pt-12 px-6 bg-neutral-violet-very-dark`}
        >
          <ul className="flex flex-col items-center relative z-10">
            {navLinks.map((link, index) => (
              <li
                className={index === navLinks.length - 1 ? "mb-9" : "mb-12"}
                key={link.id}
              >
                <a
                  className="font-bold text-lg text-neutral-gray-very-light tracking-wide uppercase "
                  href="#"
                >
                  {link.title}
                </a>
              </li>
            ))}

            <button
              className="font-bold text-lg text-neutral-gray-very-light tracking-wide uppercase w-full py-5 border-2"
              type="button"
            >
              View Plans
            </button>
          </ul>
          <div className="absolute bottom-0 right-0">{patterns.mobileNav}</div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
