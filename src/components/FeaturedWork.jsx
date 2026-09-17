function FeaturedWork() {
  return (
    <div>
      <div className="text-white px-4 sm:px-6 md:px-10" id="projects">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center">
          Featured Work
        </h1>
        <p className=" text-base sm:text-lg md:text-xl py-3 max-w-2xl text-center m-auto">
          A selection of full-stack projects showcasing technical depth and
          elegant user experiences. Built with modern web technologies.
        </p>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-around gap-6 px-4 sm:px-6 md:px-10">
        <div className="card w-full sm:w-96 md:w-md bg-Neutral shadow-sm mx-auto">
          <img
            src="/card1.png"
            alt="project"
            className="w-full h-auto object-cover"
          />

          <div className="card-body">
            <h2 className="card-title text-white">Ajer</h2>
            <p className="text-white">
              Rental platform that connects product owners with customers
              looking to rent items. The platform includes user authentication,
              product listing and management, product details, rental orders,
              delivery tracking, OTP verification, insurance handling, and
              secure Stripe payments.
            </p>
            <a
              href="https://ajer-indol.vercel.app/"
              className="btn  text-Primary-1 bg-Primary rounded-3xl  shadow-none border-0 hover:bg-Secondary hover:text-Secondary-1"
            >
              Live
            </a>
          </div>
        </div>
        <div className="card text-white w-full sm:w-96 md:w-md bg-Neutral shadow-sm mx-auto">
          <figure>
            <img
              src="/card2.png"
              alt="project"
              className="w-full h-auto object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">InsightPulse Blog</h2>
            <p>
              InsightPulse is a React-based blogging platform where users can
              explore, create, edit, and share posts across different topics .
              The project includes user authentication, post management, author
              profiles, image-based articles, and a clean responsive interface.
            </p>
            <a
              href="https://github.com/habeba101/InsightPulse-Blog-React"
              className="btn text-Primary-1 bg-Primary rounded-3xl  shadow-none border-0  hover:bg-Secondary hover:text-Secondary-1"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="card lg:card-side m-auto max-w-4xl bg-Neutral shadow-sm my-10 mx-4 sm:mx-6 md:mx-auto">
        <figure>
          <img
            src="/card3.png"
            alt="Project"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">AI Social Agent</h2>
          <p>
            Interactive UI with 6 tone options with Platform-specific
            optimization, Real-time content generation via n8n webhook
            integration Secure authentication and CORS-enabled API communication
          </p>
          <a
            href="https://github.com/habeba101/Social-Agent-Gen-AI"
            className="btn text-Primary-1 bg-Primary rounded-3xl  shadow-none border-0  hover:bg-Secondary hover:text-Secondary-1"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedWork;
