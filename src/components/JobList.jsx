import { useContext } from "react";
import {
  MapPin,
  ArrowRight,
  Loader2,
  BriefcaseIcon,
  AlertCircle,
} from "lucide-react";
import { DataContext } from "../context/DataContext";

const JobList = () => {
  const { jobs, loading, error } = useContext(DataContext);

  const getInitials = (name = "") =>
    name
      .split(" ")
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();

  return (
    <section className="py-16 px-5 bg-[#f6f7fb]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between flex-wrap gap-3 mb-3">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-teal-700 mb-1">
              Live Opportunities
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 leading-none">
              Available Jobs
            </h2>
          </div>

          {Array.isArray(jobs) && jobs.length > 0 && (
            <span className="text-sm font-medium text-gray-500 bg-gray-200 rounded-full px-4 py-1.5">
              {jobs.length} results
            </span>
          )}
        </div>

        {/* Accent line */}
        <div className="h-0.75 w-full rounded-full bg-linear-to-r from-teal-400 via-teal-200 to-transparent mb-8" />

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 gap-3 text-teal-600">
            <Loader2 size={36} className="animate-spin" />
            <p className="text-sm font-medium">Fetching opportunities...</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="flex flex-col items-center justify-center py-20 gap-3 text-red-500">
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center">
              <AlertCircle size={24} />
            </div>
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && Array.isArray(jobs) && jobs.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 gap-3 text-gray-400">
            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
              <BriefcaseIcon size={24} />
            </div>
            <p className="text-sm font-medium">
              Select a category above to load jobs.
            </p>
          </div>
        )}

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.isArray(jobs) &&
            jobs.map((job) => (
              <div
                key={job.job_id}
                className="group bg-white border border-gray-200 rounded-2xl p-6 flex flex-col hover:border-gray-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {/* Top gradient bar */}
                <span className="absolute top-0 left-0 right-0 h-0.75 bg-linear-to-r from-teal-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Card top */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 font-extrabold text-[13px] text-teal-700">
                    {getInitials(job.employer_name)}
                  </div>

                  <span className="text-[10.5px] font-semibold tracking-wide uppercase text-teal-700 bg-teal-50 border border-teal-100 px-3 py-1 rounded-full">
                    {job.job_employment_type || "Full-time"}
                  </span>
                </div>

                {/* Title and company */}
                <h3 className="text-[15.5px] font-bold text-gray-900 leading-snug mb-1">
                  {job.job_title}
                </h3>

                <p className="text-[13px] text-gray-500 font-medium mb-1">
                  {job.employer_name || "Company not listed"}
                </p>

                <p className="text-[12px] text-gray-400 flex items-center gap-1 mb-5">
                  <MapPin size={11} />
                  {job.job_city || job.job_country || "Location not listed"}
                </p>

                <div className="h-px bg-gray-100 mb-5" />

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="flex items-center gap-1.5 text-[11.5px] text-gray-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                    {job.job_is_remote ? "Remote" : "On-site"}
                  </span>

                  <a
                    href={job.job_apply_link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 bg-gray-900 hover:bg-teal-700 text-white text-[12.5px] font-semibold px-4 py-2 rounded-full transition-all duration-200 group/btn"
                  >
                    Apply Now
                    <ArrowRight
                      size={12}
                      className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default JobList;