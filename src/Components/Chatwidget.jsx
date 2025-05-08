import { useState } from "react";
// import { RiChatAiLine } from "react-icons/ri";
import { AiOutlineWechat } from "react-icons/ai";

export default function Chatwidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm SoftSell's assistant. Ask me anything!" }
  ]);

  const predefinedAnswers = {
    "how do i sell my license?": "Just upload your license, get a valuation, and get paid.",
    "what is softsell?": "SoftSell is a platform to resell unused software licenses.",
    "how long does payment take?": "Usually within 24–48 hours.",
    "is the process secure?": "Yes, your data and transactions are fully encrypted."
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const question = input.toLowerCase();
    const response =
      predefinedAnswers[question] || "Hmm... I'm not sure. Please contact support.";

    setMessages([
      ...messages,
      { from: "user", text: input },   //send for input data in massage
      { from: "bot", text: response }  //response for massage 
    ]); 
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-00 text-white px-4 py-2 rounded-md shadow"
      >
        {isOpen ? "Close Chat" : <AiOutlineWechat size={55} color="black"/>}
      </button>

      {isOpen && (
        <div className="mt-2 w-80 max-h-[400px] flex flex-col justify-between bg-white dark:bg-gray-800 p-4 rounded shadow-lg text-sm">
          <div className="overflow-y-auto space-y-2 mb-2 h-60">
            {messages.map((msg, idx) => (
              <div key={idx} className={`text-${msg.from === "bot" ? "left" : "right"}`}>
                <span
                  className={`inline-block px-3 py-1 rounded ${
                    msg.from === "bot"
                      ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 border rounded"
              placeholder="Ask a question..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white px-3 rounded"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
