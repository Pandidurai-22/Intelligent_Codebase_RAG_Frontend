export default function Sidebar() {
  return (
    <aside className = "p-4 flex flex-col gap-4">
        <h2 className = "text-sm font-semibold mb-4">Repository</h2>
        <input type="text" placeholder='Search files...' className = "border-2 rounded-md p-2"/>
        <div className="text-sm text-gray-400 space-y-2">
        <div>📁 src</div>
        <div className="ml-4">📄 auth.ts</div>
        <div className="ml-4">📄 user.ts</div>
        <div>📄 package.json</div>
      </div>

      <button className = "p-2 w-full bg-blue-600 rounded-md ">
        View Dependency Graph
      </button>

    </aside>
  );
}