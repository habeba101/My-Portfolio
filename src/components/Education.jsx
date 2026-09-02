function Education() {
  return (
    <div
      className="py-8 sm:py-10 px-4 sm:px-6 md:px-10 text-white "
      id="education"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-extrabold text-center">
          Education <span className="text-Primary">& Training</span>
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl py-3 max-w-2xl text-center">
          A foundation in Computer Engineering, bridged into modern web
          development through rigorous, intensive software training
          programs.{" "}
        </p>
      </div>
      <ul className="timeline timeline-vertical max-md:timeline-compact py-12 sm:py-20">
        <li>
          <hr className="w-0.5 bg-gray-500" />
          <div className="timeline-middle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-circle text-Primary my-1 border-2 rounded-full border-Primary-1"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z" />
            </svg>
          </div>
          <div className="timeline-start">
            <h1 className="text-xl sm:text-2xl text-Primary my-1">ITI</h1>
            <h3 className="text-tertiary text-sm sm:text-base ">
              Full-Stack Web & Generative Development AI using MEARN Track{" "}
            </h3>
          </div>
          <div className="timeline-end timeline-box bg-transparent rounded-2xl my-2 p-3 sm:p-4 max-w-full sm:max-w-md md:max-w-lg border-gray-500">
            <p className="text-sm sm:text-base">
              An immersive, highly intensive training program focused on
              full-stack web development using MongoDB, Express.js, React, and
              Node.js. Developed several robust applications demonstrating
              proficiency in modern web architecture.
            </p>
            <div className="flex  flex-wrap gap-2 mt-4">
              <div className="badge  text-gray-300 border-0 bg-gray-1000 rounded-none ">
                Mongo DB
              </div>
              <div className="badge  text-gray-300 border-0 bg-gray-1000 rounded-none">
                Express
              </div>
              <div className="badge  text-gray-300 border-0 bg-gray-1000 rounded-none">
                React
              </div>
              <div className="badge  text-gray-300 border-0 bg-gray-1000 rounded-none">
                Node.js
              </div>
              <div className="badge  text-gray-300 border-0 bg-gray-1000 rounded-none">
                Angular
              </div>
              <div className="badge  text-gray-300 border-0 bg-gray-1000 rounded-none">
                {" "}
                Next JS
              </div>
            </div>
          </div>
          <hr className="w-0.5 bg-gray-500" />
        </li>

        <li>
          <hr className="w-0.5 bg-gray-500" />
          <div className="timeline-middle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-circle text-Secondary my-1 border-2 rounded-full border-Secondary-1"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z" />
            </svg>
          </div>
          <div className="timeline-start ">
            <h1 className="text-xl sm:text-2xl text-Secondary my-1">NTI</h1>
            <h3 className="text-tertiary text-sm sm:text-base">
              C Programming & Embedded C{" "}
            </h3>
          </div>
          <div className="timeline-end timeline-box bg-transparent rounded-2xl my-2 p-3 sm:p-4 max-w-full sm:max-w-md md:max-w-lg border-gray-500">
            <p className="text-sm sm:text-base">
              Specialized training bridging hardware and software. Focused on
              low-level programming, memory management, and embedded systems
              architecture using C and Embedded C.
            </p>
            <div className="flex  flex-wrap gap-2 mt-4">
              <div className="badge  text-gray-300 border-0 bg-gray-1000 rounded-none ">
                C Programming
              </div>
              <div className="badge  text-gray-300 border-0 bg-gray-1000 rounded-none">
                Embedded C
              </div>
              <div className="badge  text-gray-300 border-0 bg-gray-1000 rounded-none">
                Algorithm
              </div>
              <div className="badge  text-gray-300 border-0 bg-gray-1000 rounded-none">
                Data Structure
              </div>
            </div>
          </div>

          <hr className="w-0.5 bg-gray-500" />
        </li>
        <li>
          <hr className="w-0.5 bg-gray-500" />
          <div className="timeline-middle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-circle text-Primary my-1 border-2 rounded-full border-Primary-1"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z" />
            </svg>
          </div>
          <div className="timeline-start">
            <h1 className="text-xl sm:text-2xl text-Primary my-1">
              University
            </h1>
            <h3 className="text-tertiary text-sm sm:text-base">
              B.Sc. Computer Engineering{" "}
            </h3>
          </div>
          <div className="timeline-end timeline-box bg-transparent rounded-2xl my-2 p-3 sm:p-4 max-w-full sm:max-w-md md:max-w-lg border-gray-500">
            <p className="text-sm sm:text-base">
              Comprehensive foundational degree covering computer architecture,
              algorithms, data structures, and software engineering principles.
              The core academic background driving a structured approach to
              problem-solving.
            </p>
            <div className="flex  flex-wrap gap-2 mt-4">
              <div className="badge  text-gray-300 border-0 bg-gray-1000 rounded-none ">
                Dell Envision the Future Competition
              </div>
              <div className="badge  text-gray-300 border-0 bg-gray-1000 rounded-none">
                Embedded Systems
              </div>
              <div className="badge  text-gray-300 border-0 bg-gray-1000 rounded-none">
                Artificial Intelligence
              </div>
            </div>
          </div>
          <hr className="w-0.5 bg-gray-500" />
        </li>
      </ul>
    </div>
  );
}

export default Education;
