"use client";

interface HeaderProps {
  showChat: boolean;
  setShowChat: (value: boolean) => void;
}

export default function Header({ showChat, setShowChat }: HeaderProps) {
  return (
    <header className="h-14 border-b border-gray-800 flex items-center px-6 justify-between">
      <div className="text-lg font-semibold">CodeInsight AI</div>

      <div className="flex items-center gap-6 text-sm text-gray-400">
        <span>Indexed: 142 Files</span>
        <span>Embeddings: 3,842</span>
        <span className="text-green-400">● Indexed</span>

        <button
          onClick={() => setShowChat(!showChat)}
          className="bg-[#161B22] px-3 py-1 rounded-md hover:bg-gray-700 transition"
        >
          {showChat ? "Hide ChatPanel" : "Show ChatPanel"}
        </button>
      </div>
    </header>
  );
}