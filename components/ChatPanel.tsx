import { useState } from "react";

export default function ChatPanel() {

  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {

    if (!question.trim()) return;

    const userMessage = {
      role: "user",
      text: question
    };

    setMessages(prev => [...prev, userMessage]);
    setQuestion("");

    setLoading(true);

    const response = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        question: question,
        repo_name: "flask"
      })
    });

    const data = await response.json();

    const aiMessage = {
      role: "ai",
      text: data.answer
    };

    setMessages(prev => [...prev, aiMessage]);

    setLoading(false);
  }

  return (
    <aside className="p-4 flex flex-col h-full">

      <div className="w-full text-sm font-semibold mb-4">
        AI Code Assistant
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 text-sm">

        {messages.map((msg, index) => (

          msg.role === "user" ? (

            <div key={index} className="bg-[#161B22] p-3 rounded-md">
              {msg.text}
            </div>

          ) : (

            <div key={index} className="bg-blue-600 p-3 rounded-md">
              {msg.text}
            </div>

          )

        ))}

        {loading && (
          <div className="p-3 rounded-md animate-pulse">
            Thinking ...
          </div>
        )}

      </div>

      <div className="mt-4">

        <input
          type="text"
          value={question}
          placeholder="Ask about this repository..."
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          className="w-full bg-[#161B22] p-2 rounded-md outline-none text-sm"
        />

      </div>

    </aside>
  );
}






// export default function ChatPanel() {
//   return (
//     <aside className=" p-4 flex flex-col">
//       <div className="w-full text-sm font-semibold mb-4">
//         AI Code Assistant
//       </div>

//       <div className="flex-1 overflow-y-auto space-y-4 text-sm">
//         <div className="bg-[#161B22] p-3 rounded-md">
//           Where is JWT implemented?
//         </div>

//         <div className="bg-blue-600 p-3 rounded-md">
//           JWT is implemented in <b>auth.ts</b> inside the
//           generateToken function (lines 1–4).
//           <div className="text-xs mt-2 text-blue-200">
//             Confidence: 92% • Latency: 420ms
//           </div>
//         </div>
//       </div>

//       <div className="mt-4">
//         <input
//           type="text"
//           placeholder="Ask about this repository..."
//           className="w-full bg-[#161B22] p-2 rounded-md outline-none text-sm"
//         />
//       </div>
//     </aside>
//   );
// }