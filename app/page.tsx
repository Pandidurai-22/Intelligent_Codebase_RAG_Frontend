"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [repoUrl, setRepoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleIndex = async () => {
    if (!repoUrl) return;

    try {
      setLoading(true);

      const response = await fetch("http://localhost:8000/index-repo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ repo_url: repoUrl }),
      });

      const data = await response.json();

      if (response.ok) {
        const repoName = repoUrl.split("/").pop()?.replace(".git", "");
        router.push(`/workspace/${repoName}`);
      } else {
        alert("Failed to index repository");
      }
    } catch (err) {
      alert("Backend not reachable");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#0D1117] text-white">
      <div className="w-full max-w-xl bg-[#161B22] p-8 rounded-2xl shadow-lg space-y-6 border-2 border-blue-700">
        <h1 className="text-2xl font-semibold text-center">
          CodeInsight AI
        </h1>

        <p className="text-sm text-gray-400 text-center">
          Connect a GitHub repository to start analyzing your codebase
        </p>

        <input
          type="text"
          placeholder="https://github.com/user/repo"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          className="w-full p-3 rounded-lg bg-[#0D1117] border border-gray-700 outline-none focus:border-blue-500 text-sm"
        />

        <button
          onClick={handleIndex}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg text-sm font-medium disabled:opacity-50"
        >
          {loading ? "Indexing..." : "Index Repository"}
        </button>
        <div className="skip flex justify-center rounded-md hover:bg-red-500 hover:border-0 hover:opacity-70">
          <button
          onClick={()=> router.push('/workspace/demo')}
           className = " p-2 ">
          Skip [testing]
        </button>
        </div>

      </div>
    </div>
  );
}