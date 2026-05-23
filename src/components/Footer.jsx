import { Link } from "react-router-dom";

const sections = [
  {
    title: "For Job Seekers",
    links: [
      { name: "Find Jobs", path: "/find-jobs" },
      { name: "Resume Tips", path: "#" },
      { name: "Career Advice", path: "#" },
      { name: "Interview Prep", path: "#" },
    ],
  },
  {
    title: "For Employers",
    links: [
      { name: "Post a Job", path: "/post-job" },
      { name: "Find Talent", path: "#" },
      { name: "Hiring Guide", path: "#" },
      { name: "Employer Support", path: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", path: "/about" },
      { name: "Contact", path: "/contact" },
      { name: "Privacy Policy", path: "#" },
      { name: "Terms & Conditions", path: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-1 no-underline">
              <span className="text-2xl font-black bg-teal-500 text-white px-4 py-1.5 rounded-full">
                Hire
              </span>

              <span className="text-2xl font-bold text-teal-600">
                Hub
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-600">
              HireHub connects job seekers with better career opportunities and
              helps employers find skilled talent faster.
            </p>

            <form className="mt-6 flex max-w-sm gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:outline-none"
              />

              <button
                type="submit"
                className="rounded-full bg-teal-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-600"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Footer Links */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-gray-900">
                {section.title}
              </h4>

              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.path === "#" ? (
                      <a
                        href="#"
                        className="text-sm text-gray-600 transition hover:text-teal-600"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-sm text-gray-600 transition hover:text-teal-600 no-underline"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-gray-200 pt-8 sm:flex-row">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} HireHub. All rights reserved.
          </p>

          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="transition hover:text-teal-600">
              Email
            </a>
            <a href="#" className="transition hover:text-teal-600">
              Website
            </a>
            <a href="#" className="transition hover:text-teal-600">
              LinkedIn
            </a>
            <a href="#" className="transition hover:text-teal-600">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}