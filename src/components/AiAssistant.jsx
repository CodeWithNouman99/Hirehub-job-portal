import { useState, useRef, useEffect } from "react";

const BOT_NAME = "AI Assistant";

const qa = [
  {
    keywords: ["hello", "hi", "hey", "start"],
    answer:
      "Hi! 👋 Welcome to HireHub. I can help you find jobs, suggest career paths, improve your resume, and prepare for interviews.",
  },
  {
    keywords: ["frontend", "react", "html", "css", "javascript", "tailwind"],
    answer:
      "For frontend roles, focus on HTML, CSS, JavaScript, React.js, Tailwind CSS, API integration, and responsive design. You can search for Frontend Developer or React Developer jobs on HireHub.",
  },
  {
    keywords: ["backend", "node", "express", "api", "server"],
    answer:
      "For backend roles, learn Node.js, Express.js, MongoDB, REST APIs, authentication, and database handling. You can apply for Backend Developer or Node.js Developer jobs.",
  },
  {
    keywords: ["full stack", "mern", "mongodb"],
    answer:
      "For MERN stack jobs, you need MongoDB, Express.js, React.js, and Node.js. Also prepare CRUD operations, authentication, API integration, and deployment.",
  },
  {
    keywords: ["internship", "intern", "fresh", "beginner", "student"],
    answer:
      "If you are a beginner, start with internships or junior roles. Build 2 to 3 projects, create a strong resume, add GitHub links, and apply daily on HireHub.",
  },
  {
    keywords: ["resume", "cv"],
    answer:
      "Your resume should include your skills, education, projects, GitHub, portfolio link, and contact details. Keep it short, clean, and job-focused.",
  },
  {
    keywords: ["interview", "questions", "prepare"],
    answer:
      "For interviews, prepare HTML, CSS, JavaScript basics, React hooks, API calls, Git, and project explanation. Also practice introducing yourself clearly.",
  },
  {
    keywords: ["remote", "work from home", "online"],
    answer:
      "Remote jobs usually require good communication, portfolio projects, GitHub profile, and experience with online collaboration tools like Slack, Trello, or GitHub.",
  },
  {
    keywords: ["job", "find", "search", "apply"],
    answer:
      "To find jobs on HireHub, select your category, check the job details, match your skills with the requirements, and apply with an updated resume.",
  },
  {
    keywords: ["salary", "pay", "income"],
    answer:
      "Salary depends on your skill level, experience, city, and company. Beginners should focus more on learning, internships, and real project experience first.",
  },
];

const fallback =
  "I don't have an exact answer for that yet, but you can ask me about jobs, internships, resume tips, frontend, backend, MERN stack, or interviews.";

const suggestions = [
  "How can I find jobs?",
  "Suggest jobs for React skills",
  "How to improve my resume?",
  "How to prepare for interview?",
];

function getAnswer(input) {
  const lower = input.toLowerCase();

  for (const { keywords, answer } of qa) {
    if (keywords.some((keyword) => lower.includes(keyword))) {
      return answer;
    }
  }

  return fallback;
}

const AiAssistant = () => {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi! 👋 I'm HireHub AI Assistant. Ask me about jobs, internships, resume tips, or interview preparation.",
    },
  ]);

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (text) => {
    const userText = text || input.trim();

    if (!userText) return;

    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: getAnswer(userText) },
      ]);
    }, 700);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section className="w-full bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            AI Career Assistant
          </h2>
          <p className="text-gray-600 mt-2">
            Get job suggestions, resume tips, and interview guidance.
          </p>
        </div>

        {/* Chat Box */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden flex flex-col h-[520px]">
          {/* Header */}
          <div className="px-5 py-4 border-b border-gray-800 flex items-center gap-3 bg-gray-950">
            <div className="relative">
              <div className="w-11 h-11 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
                AI
              </div>

              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-950"></span>
            </div>

            <div>
              <p className="font-semibold text-white">{BOT_NAME}</p>
              <p className="text-xs text-green-400">● Online</p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4 bg-gray-950">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs md:max-w-md text-sm rounded-2xl px-4 py-3 leading-relaxed ${
                    msg.role === "user"
                      ? "bg-teal-500 text-white rounded-br-sm"
                      : "bg-gray-800 text-gray-100 border border-gray-700 rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-gray-800 border border-gray-700 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
                </div>
              </div>
            )}

            <div ref={bottomRef}></div>
          </div>

          {/* Suggestions */}
{messages.length <= 2 && (
  <div className="px-4 py-3 flex gap-2 overflow-x-auto bg-gray-900 border-t border-gray-800">
    {suggestions.map((suggestion) => (
      <button
        key={suggestion}
        onClick={() => sendMessage(suggestion)}
        className="shrink-0 text-xs px-4 py-2 rounded-full border border-teal-500/30 text-teal-300 bg-teal-500/10 hover:bg-teal-500/20 transition whitespace-nowrap"
      >
        {suggestion}
      </button>
    ))}
  </div>
)}

          {/* Input */}
          <div className="px-4 py-4 border-t border-gray-800 flex gap-2 bg-gray-950">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about jobs, resume, or interview..."
              className="flex-1 bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />

            <button
              onClick={() => sendMessage()}
              disabled={!input.trim() || typing}
              className="w-12 h-12 flex items-center justify-center bg-teal-500 text-white rounded-xl hover:bg-teal-600 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <svg
                className="w-5 h-5 rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAssistant;