"use client";

import Editor from "@monaco-editor/react";

export default function CodeViewer() {
  return (
    <main className=" w-full h-full flex-1 border-r border-gray-800 p-4">
      <div className="text-sm text-gray-400 mb-2">
        src/auth/auth.ts
      </div>

      <div className="h-full rounded-xl overflow-hidden">
        <Editor
          height="100%"
          defaultLanguage="typescript"
          theme="vs-dark"
          value={`function generateToken(user) {
  const payload = { id: user.id };
  return jwt.sign(payload, process.env.JWT_SECRET);
}`}
          options={{
            readOnly: true,
            fontSize: 14,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
          }}
        />
      </div>
    </main>
  );
}