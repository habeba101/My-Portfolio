import { useState } from "react";
const initial = { name: "", email: "", message: "" };
function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (form.message.trim().length < 10)
      newErrors.message = "Message is a bit short";
    return newErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const foundErrors = validate();
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setForm(initial);
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };
  return (
    <div
      className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row gap-10 lg:gap-6 mb-10 lg:items-center lg:justify-between"
      id="contact"
    >
      {/* Left column */}
      <div className="w-full lg:flex-1">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl text-Primary font-extrabold leading-tight">
          Let's build something meaningful.
        </h1>
        <p className="w-full max-w-xl my-4 text-sm sm:text-base text-white">
          Whether you have a project in mind, need technical consultation, or
          simply want to connect, I'm always open to discussing new
          opportunities and creative ideas.
        </p>

        <div>
          <a href="mailto:habebaahmed101@gmail.com">
            <p className="flex gap-3 items-center my-2 text-white hover:text-Secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="shrink-0 bg-gray-1000 text-Primary w-11 h-11 p-2 rounded-full hover:bg-Primary hover:text-Primary-1 hover:cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <span className="text-sm sm:text-base break-all ">
                habebaahmed101@gmail.com
              </span>
            </p>
          </a>
          <a href="https://www.linkedin.com/in/habeba-ahmed-elbaghdady/">
            <p className="flex gap-3 items-center my-2 text-white hover:text-Secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-link-2 shrink-0 bg-gray-1000 text-Primary w-11 h-11 p-2 rounded-full hover:bg-Primary hover:text-Primary-1 hover:cursor-pointer"
              >
                <path d="M9 17H7A5 5 0 0 1 7 7h2" />
                <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
                <line x1="8" x2="16" y1="12" y2="12" />
              </svg>
              <span className="text-sm sm:text-base">LinkedIn Profile</span>
            </p>
          </a>

          <a href="https://github.com/habeba101?tab=overview&from=2026-02-01&to=2026-02-18">
            <p className="flex gap-3 items-center my-2 text-white hover:text-Secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="shrink-0 bg-gray-1000 text-Primary w-11 h-11 p-2 rounded-full hover:bg-Primary hover:text-Primary-1 hover:cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
              <span className="text-sm sm:text-base">GitHub Repository</span>
            </p>
          </a>
        </div>
      </div>

      {/* Right column: form */}
      <div className="w-full lg:flex-1 lg:max-w-xl">
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset bg-main-1 rounded-box w-full p-4">
            <h1 className="text-2xl font-black my-2 text-white">
              Send a Message
            </h1>

            <label className="label text-lg text-white">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="input w-full bg-white text-black"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
            <label className="label text-lg text-white">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className="input w-full bg-white text-black"
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
            <label className="label text-lg text-white">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="textarea w-full bg-white text-black"
              placeholder="How can we collaborate?"
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn bg-Primary rounded-3xl mt-4 hover:bg-Secondary w-full sm:w-auto disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="text-green-400 text-sm mt-3">
                Thanks! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm mt-3">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Contact;
