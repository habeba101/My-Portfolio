export default function Footer() {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-main text-neutral-content items-center text-center sm:text-left p-4 gap-2">
        <h1 className="text-xl sm:text-2xl">Habeba Ahmed</h1>
        <p className="text-Primary text-sm sm:text-base">
          © {new Date().getFullYear()} Habeba Ahmed. Built with React
        </p>
        <nav className="flex flex-wrap justify-center gap-3 sm:grid sm:grid-flow-col sm:gap-4 md:place-self-center md:justify-self-end">
          <a
            className="link link-hover"
            href="https://www.linkedin.com/in/habeba-ahmed-elbaghdady/"
          >
            LinkedIn
          </a>
          <a
            className="link link-hover"
            href="https://github.com/habeba101?tab=overview&from=2026-02-01&to=2026-02-18"
          >
            GitHub
          </a>
          <a className="link link-hover" href="mailto:habebaahmed101@gmail.com">
            mail
          </a>
        </nav>
      </footer>
    </>
  );
}
