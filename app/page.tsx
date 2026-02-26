"use client"


import Header from '../components/Header'
import Sidebar from "../components/Sidebar"
import CodeViewer from "../components/CodeViewer"
import ChatPanel from "../components/ChatPanel"
import { useState } from 'react'



export default function Home() {
  const [showChat, setShowChat] =  useState(true);
  return (
    <div className="h-screen flex flex-col">
      <Header showChat={showChat} setShowChat={setShowChat} />

      {/* Main 3 Panel Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar
        <aside className="w-64 border-r border-gray-800 p-4">
          <h2 className="text-sm font-semibold mb-4">Repository</h2>

          <input
            type="text"
            placeholder="Search files..."
            className="w-full bg-[#161B22] p-2 rounded-md text-sm outline-none mb-4"
          />

          <div className="text-sm text-gray-400 space-y-2">
            <div>📁 src</div>
            <div className="ml-4">📄 auth.ts</div>
            <div className="ml-4">📄 user.ts</div>
            <div>📄 package.json</div>
          </div>

          <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 transition p-2 rounded-md text-sm">
            View Dependency Graph
          </button>
        </aside> */}
        <Sidebar/>

        {/* Code Viewer */}
        {/* <main className="flex-1 border-r border-gray-800 p-6">
          <div className="text-sm text-gray-400 mb-2">
            src/auth/auth.ts
          </div>

          <div className="bg-[#161B22] rounded-xl p-4 h-full overflow-auto font-mono text-sm">
            <pre>
{`function generateToken(user) {
  const payload = { id: user.id };
  return jwt.sign(payload, process.env.JWT_SECRET);
}`}
            </pre>
          </div>
        </main> */}

        {/* <CodeViewer/> */}

        {/* AI Assistant Panel
        <aside className="w-96 p-4 flex flex-col">
          <div className="text-sm font-semibold mb-4">
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
        </aside> */}

    {/* {showChat && (
      <div className="w-96 border-l border-gray-800">
        <ChatPanel />
      </div>
    )} */}

     <div className="flex flex-1 overflow-hidden">
    {/* Code Viewer */}
    <div className="flex-1 min-w-0">
      <CodeViewer />
    </div>

    {/* Chat Panel */}
    {showChat && (
      <div className="w-96 border-l border-gray-800 flex-shrink-0">
        <ChatPanel />
      </div>
    )}
  </div>
      </div>
      {/* <div className= "">
        
      </div> */}
    </div>
  );
}