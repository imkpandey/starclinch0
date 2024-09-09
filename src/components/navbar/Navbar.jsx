import { useState } from "react";
import Image from "next/image";

const AccordionItem = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="relative w-fit">
      <div
        onClick={onToggle}
        className="flex items-center gap-8 cursor-pointer text-6xl text-pink-600 font-semibold uppercase tracking-tight hover:bg-gradient-to-r hover:from-yellow-400 hover:to-pink-500 hover:text-transparent bg-clip-text transition-colors duration-300"
      >
        {title}
        <div
          className={`w-12 h-12 p-2 flex items-center justify-center border border-gray-400 rounded-full transition-transform duration-300 ${
            isOpen ? "rotate-0" : "-rotate-45"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 6L18 18"
              stroke="#6b7280"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 6L6 18"
              stroke="#6b7280"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div
        className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="space-y-2 pt-4">{children}</ul>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setOpenIndex(null);
    }
  };

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div>
      {/* Fixed Navbar */}
      <div className="fixed top-0 right-0 w-full h-24 z-30 flex justify-between items-center px-6">
        {/* Logo */}
        <div className="logo w-fit h-fit">
          <Image src="/logo.webp" alt="logo" width={200} height={200} />
        </div>

        {/* Hamburger Icon / Cross Icon */}
        <div
          onClick={toggleNavbar}
          className="cursor-pointer flex flex-col items-center justify-center w-8 h-8 relative"
        >
          <svg
            className="w-12 h-12 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 18H20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Sliding Navbar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg navbar flex flex-col justify-between z-40 rounded-tl-3xl rounded-bl-3xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "50%" }}
      >
        {/* Navbar Content */}
        <div className="close-btn p-8 absolute top-0 right-0 w-fit h-fit cursor-pointer">
          <svg
            onClick={toggleNavbar}
            className="w-12 h-12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="black"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="black"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="py-8 px-14 flex flex-col gap-8">
          <AccordionItem
            title="THE STORY"
            isOpen={openIndex === 0}
            onToggle={() => toggleAccordion(0)}
          >
            <li>
              <a
                href="#"
                className="text-xl text-black hover:underline transition duration-300"
              >
                Sublink 1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xl text-black hover:underline transition duration-300"
              >
                Sublink 2
              </a>
            </li>
          </AccordionItem>
          <AccordionItem
            title="SOLUTION"
            isOpen={openIndex === 1}
            onToggle={() => toggleAccordion(1)}
          >
            <li>
              <a
                href="#"
                className="text-xl text-black hover:underline transition duration-300"
              >
                Sublink 1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xl text-black hover:underline transition duration-300"
              >
                Sublink 2
              </a>
            </li>
          </AccordionItem>
          <AccordionItem
            title="SCOPE"
            isOpen={openIndex === 2}
            onToggle={() => toggleAccordion(2)}
          >
            <li>
              <a
                href="#"
                className="text-xl text-black hover:underline transition duration-300"
              >
                Sublink 1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xl text-black hover:underline transition duration-300"
              >
                Sublink 2
              </a>
            </li>
          </AccordionItem>
          <AccordionItem
            title="WHO ARE WE"
            isOpen={openIndex === 3}
            onToggle={() => toggleAccordion(3)}
          >
            <li>
              <a
                href="#"
                className="text-xl text-black hover:underline transition duration-300"
              >
                Sublink 1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xl text-black hover:underline transition duration-300"
              >
                Sublink 2
              </a>
            </li>
          </AccordionItem>
          <AccordionItem
            title="BUSINESS MODEL"
            isOpen={openIndex === 4}
            onToggle={() => toggleAccordion(4)}
          >
            <li>
              <a
                href="#"
                className="text-xl text-black hover:underline transition duration-300"
              >
                Sublink 1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xl text-black hover:underline transition duration-300"
              >
                Sublink 2
              </a>
            </li>
          </AccordionItem>
        </div>
        <div className="py-8 px-14">
          <a className="text-2xl text-black hover:font-medium italic transition duration-300 cursor-pointer">
            contact@starclinch.com
          </a>
        </div>
      </div>

      {/* Mobile view adjustment */}
      <style jsx>{`
        @media (max-width: 640px) {
          .navbar {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
