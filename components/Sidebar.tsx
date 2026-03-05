interface SidebarProps {
  repoTree: any[];
  loading: boolean;
  onFileClick: (path: string) => void;
}

// function FileTree({ nodes, onFileClick, parentPath="", }: { nodes: any[]; onFileClick:(path: string) => void; parentPath?: string }) {
//   return (
//     <ul className="space-y-1 text-sm">
//       {nodes.map((node) => (
//         <li key={node.name}>
//           {node.type === "folder" ? "📂" : "📄"} {node.name}
//           {node.children && (
//             <div className="ml-4">
//               <FileTree nodes={node.children} />
//             </div>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// }

function FileTree({
  nodes,
  onFileClick,
  parentPath = "",
}: {
  nodes: any[];
  onFileClick: (path: string) => void;
  parentPath?: string;
}) {
  return (
    <ul className="space-y-1 text-sm">
      {nodes.map((node) => {
        const fullPath = parentPath
          ? `${parentPath}/${node.name}`
          : node.name;

        return (
          <li key={fullPath}>
            {node.type === "folder" ? (
              <>
                📂 {node.name}
                {node.children && (
                  <div className="ml-4">
                    <FileTree
                      nodes={node.children}
                      onFileClick={onFileClick}
                      parentPath={fullPath}
                    />
                  </div>
                )}
              </>
            ) : (
              <div
                className="cursor-pointer hover:bg-gray-800 px-1 rounded"
                onClick={() => onFileClick(fullPath)}
              >
                📄 {node.name}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function Sidebar({ repoTree, loading, onFileClick }: SidebarProps) {
  if (loading) {
    return <div className="w-64 p-4 text-white">Loading files...</div>;
  }

  return (
    <aside className="w-64 bg-[#0D1117] border-r border-gray-800 p-4 overflow-auto text-white">
      <h2 className="text-sm font-semibold mb-4">Repository</h2>

      <input
        type="text"
        placeholder="Search files..."
        className="border border-gray-700 rounded-md p-2 w-full mb-4 bg-[#161B22]"
      />

      <FileTree nodes={repoTree} onFileClick={onFileClick} />

      <button className="p-2 w-full bg-blue-600 rounded-md mt-4">
        View Dependency Graph
      </button>
    </aside>
  );
}