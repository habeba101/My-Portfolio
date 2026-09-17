export default function Navbar() {
  return (
    <>
      <div className="max-lg:collapse bg-main  shadow-sm w-full text-body-md text-white scroll-smooth">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label
          htmlFor="navbar-1-toggle"
          className="fixed inset-0 hidden max-lg:peer-checked:block"
        ></label>
        <div className="collapse-title navbar px-2 sm:px-4">
          <div className="navbar-start gap-1">
            <label
              htmlFor="navbar-1-toggle"
              className="btn btn-ghost btn-sm sm:btn-md lg:hidden px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2 text-neutral-content"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
            </label>
            <h1 className="text-base sm:text-lg md:text-xl font-black px-1 sm:px-2 whitespace-nowrap">
              {" "}
              Habeba Ahmed
            </h1>{" "}
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className=" hover:underline hover:underline-offset-4 hover:decoration-3 hover:decoration-Primary-2 hover:text-Primary-2">
                <a href="#home"> Home</a>{" "}
              </li>
              <li className=" hover:underline hover:underline-offset-4 hover:decoration-3 hover:decoration-Primary-2 hover:text-Primary-2">
                <a href="#about"> About</a>{" "}
              </li>
              <li className=" hover:underline hover:underline-offset-4 hover:decoration-3 hover:decoration-Primary-2 hover:text-Primary-2">
                <a href="#skills"> Skills</a>
              </li>{" "}
              <li className=" hover:underline hover:underline-offset-4 hover:decoration-3 hover:decoration-Primary-2 hover:text-Primary-2">
                <a href="#experience"> Experience</a>
              </li>{" "}
              <li className=" hover:underline hover:underline-offset-4 hover:decoration-3 hover:decoration-Primary-2 hover:text-Primary-2">
                <a href="#projects"> Projects</a>
              </li>{" "}
              <li className=" hover:underline hover:underline-offset-4 hover:decoration-3 hover:decoration-Primary-2 hover:text-Primary-2">
                <a href="#education"> Education</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a
              href="#contact"
              className="btn btn-sm sm:btn-md mx-1 sm:mx-2 rounded-4xl text-Primary-1 bg-Primary-2 border-none whitespace-nowrap"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="collapse-content lg:hidden z-1">
          <ul className="menu ">
            <li className=" hover:underline hover:underline-offset-4 hover:decoration-3 hover:decoration-Primary-2 hover:text-Primary-2">
              <a href="#home"> Home</a>{" "}
            </li>
            <li className=" hover:underline hover:underline-offset-4 hover:decoration-3 hover:decoration-Primary-2 hover:text-Primary-2">
              <a href="#about"> About</a>{" "}
            </li>
            <li className=" hover:underline hover:underline-offset-4 hover:decoration-3 hover:decoration-Primary-2 hover:text-Primary-2">
              <a href="#skills"> Skills</a>
            </li>{" "}
            <li className=" hover:underline hover:underline-offset-4 hover:decoration-3 hover:decoration-Primary-2 hover:text-Primary-2">
              <a href="#experience"> Experience</a>
            </li>{" "}
            <li className=" hover:underline hover:underline-offset-4 hover:decoration-3 hover:decoration-Primary-2 hover:text-Primary-2">
              <a href="#projects"> Projects</a>
            </li>{" "}
            <li className=" hover:underline hover:underline-offset-4 hover:decoration-3 hover:decoration-Primary-2 hover:text-Primary-2">
              <a href="#education"> Education</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
