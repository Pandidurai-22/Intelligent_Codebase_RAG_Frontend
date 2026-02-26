export default function ChatPanel() {
  return (
    <aside className=" p-4 flex flex-col">
      <div className="w-full text-sm font-semibold mb-4">
        AI Code Assistant
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 text-sm">
        <div className="bg-[#161B22] p-3 rounded-md">
          Where is JWT implemented?
        </div>

        <div className="bg-blue-600 p-3 rounded-md">
          JWT is implemented in <b>auth.ts</b> inside the
          generateToken function (lines 1–4).
          <div className="text-xs mt-2 text-blue-200">
            Confidence: 92% • Latency: 420ms
          </div>
        </div>
      </div>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Ask about this repository..."
          className="w-full bg-[#161B22] p-2 rounded-md outline-none text-sm"
        />
      </div>
    </aside>
  );
}