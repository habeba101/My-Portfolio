import { Shader, Swirl } from "shaders/react";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden" id="home">
      {/* Shader as background layer */}
      <div className="absolute inset-0 z-0">
        <Shader className="min-h-screen">
          <Swirl colorA="#b695f0" colorB="#f4a6d7" />
        </Shader>
      </div>

      {/* Content on top */}
      <Content />
    </div>
  );
}

function Content() {
  return (
    <div className="relative z-10 py-10 px-5 text-white ">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full md:w-2xl text-center">
          <h1 className="text-tertiary text-2xl sm:text-3xl md:text-4xl font-bold my-5">
            Hello, I'm{" "}
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold my-1 ">
            Habeba
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold my-1">
            Ahmed
          </h1>
          <h2 className="text-lg sm:text-xl text-tertiary font-semibold">
            MERN Stack Developer
          </h2>
          <p className="my-2 text-sm sm:text-base px-2">
            Full Stack Developer, passionate about building modern, responsive,
            and user-focused web applications.
          </p>
          <div className="my-3">
            <a
              href="/HabebaAhmed.pdf"
              download="HabebaAhmed.pdf"
              className="btn rounded-3xl hover:bg-Primary-1 hover:text-white"
            >
              download CV{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </a>
          </div>
          <div className="flex gap-3 justify-center my-4">
            <a
              href="https://www.linkedin.com/in/habeba-ahmed-elbaghdady/"
              className="hover:text-Primary-1"
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin size-8 sm:size-10"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 11v5" />
                <path d="M8 8v.01" />
                <path d="M12 16v-5" />
                <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10" />
              </svg>
            </a>{" "}
            <a
              href="https://github.com/habeba101?tab=overview&from=2026-02-01&to=2026-02-18"
              className="hover:text-Primary-1"
            >
              {" "}
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github size-8 sm:size-10 "
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </a>
            <a
              href="mailto:habebaahmed101@gmail.com"
              className="hover:text-Primary-1"
            >
              {" "}
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-mail size-8 sm:size-10"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
