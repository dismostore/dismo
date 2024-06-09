import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  return (
    <header className="bg-white sticky z-100 top-0 border-b border-gray-200">
      <div className="relative inset-x-0 max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto w-full">
        <div className="flex relative h-16 items-center justify-between gap-x-12">
          <a
            href="#"
            className="-ml-1 p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
          >
            <img className="h-6 w-auto" src="logo.svg" alt="dismo" />
          </a>

          <div className="flex items-center justify-end">
            <a
              href="#"
              className="p-2 stroke-gray-400 hover:stroke-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <div className="ml-4 flow-root">
              <a
                href="#"
                className="-m-2 stroke-gray-400 hover:stroke-gray-500 flex items-center p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12H21M3 6H21M3 18H21"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
