function About() {
  return (
    <div className="text-white my-6 sm:my-10 px-4 sm:px-6 md:px-10" id="about">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-Primary text-center">
        About Me
      </h1>
      <div className="flex lg:flex-row flex-col gap-5 justify-center items-center my-8 sm:my-10">
        <div className="w-40 sm:w-56 md:w-72 lg:w-80 xl:w-96 aspect-square shrink-0">
          <img
            src="/Habeba.png"
            alt="Dev-Image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="max-w-2xl text-base sm:text-lg md:text-xl">
          <p>
            {" "}
            Hi, I’m Habeba Ahmed a MERN Stack Developer who enjoys turning ideas
            into interactive, user-friendly web experiences. I work with
            technologies like React, Next.js, Node.js, Express, MongoDB, and
            REST APIs, while continuously expanding my skills across the full
            stack.
          </p>
          <p className="my-2">
            {" "}
            I enjoy working on projects where design meets functionality, taking
            a UI concept and turning it into a responsive, polished application
            that actually works. I’m also passionate about learning and sharing
            knowledge through my experience as a coding instructor.
          </p>
          <hr className="text-gray-400 my-8 sm:my-10" />
          <div className="flex flex-wrap justify-around gap-4 sm:gap-2 text-center">
            <div>
              <h1 className="font-extrabold text-2xl sm:text-3xl text-tertiary">
                700+
              </h1>
              <p className="text-sm sm:text-base">coding Sessions</p>
            </div>
            <div>
              <h1 className="font-extrabold text-2xl sm:text-3xl text-tertiary">
                75+
              </h1>
              <p className="text-sm sm:text-base">Students</p>
            </div>
            <div>
              <h1 className="font-extrabold text-2xl sm:text-3xl text-tertiary">
                94% +
              </h1>
              <p className="text-sm sm:text-base">Quality Score</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        <h1 className="text-center text-2xl sm:text-3xl font-bold my-5">
          My Journey
        </h1>
        <p className="text-center px-4 sm:px-0">
          The evolutionary path from hardware logic to full-stack architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 justify-center my-10 text-center max-w-6xl mx-auto">
        <div className="card w-full card-xl shadow-sm bg-main-1 border-0 p-6 sm:p-7">
          <div className="flex justify-center items-center my-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 text-Primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
          </div>
          <h1 className="font-bold">Computer Engineering</h1>
          <p>Foundational logic and systems architecture.</p>
        </div>

        <div className="card w-full card-xl shadow-sm bg-main-1 border-0 p-6 sm:p-7">
          <div className="flex justify-center items-center my-2 ">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={35}
              height={35}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-cpu-2 text-Primary"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 6a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1l0 -12" />
              <path d="M8 10v-2h2m6 6v2h-2m-4 0h-2v-2m8 -4v-2h-2" />
              <path d="M3 10h2" />
              <path d="M3 14h2" />
              <path d="M10 3v2" />
              <path d="M14 3v2" />
              <path d="M21 10h-2" />
              <path d="M21 14h-2" />
              <path d="M14 21v-2" />
              <path d="M10 21v-2" />
            </svg>
          </div>
          <h1 className="font-bold">Embedded Systems</h1>
          <p>Low-level optimization and hardware interaction.</p>
        </div>

        <div className="card w-full card-xl shadow-sm bg-main-1 border-0 p-6 sm:p-7">
          <div className="flex justify-center items-center my-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 text-Secondary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>
          </div>

          <h1 className="font-bold">Teaching Programming</h1>
          <p> Learn to Code. Build. Create. </p>
        </div>

        <div className="card w-full card-xl shadow-sm bg-main-1 border-0 p-6 sm:p-7">
          <div className="flex justify-center items-center my-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={35}
              height={35}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-stack text-Primary "
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 6l-8 4l8 4l8 -4l-8 -4" />
              <path d="M4 14l8 4l8 -4" />
            </svg>
          </div>
          <h1 className="font-bold">MEARN Stack</h1>
          <p>Full-stack mastery for the modern web.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
