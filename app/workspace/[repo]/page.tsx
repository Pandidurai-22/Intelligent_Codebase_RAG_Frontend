
"use client";

import { useState, useEffect } from "react";
import {useParams} from "next/navigation"
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import CodeViewer from "@/components/CodeViewer";
import ChatPanel from "@/components/ChatPanel";

export default function Workspace() {
  const {repo} = useParams();
  const [showChat, setShowChat] = useState(true);
  const [repoTree, setRepoTree] = useState<any[]>([]);
  const[loading, setLoading] = useState(true);
  const[selectedFile, setSelectedFile] = useState<string | null>(null);
  const[fileContent, setFileContent] = useState<string>("");


  useEffect(()=>{
    if (!selectedFile || !repo) return;
    
    const fetchFile = async() => {
      try{
        const res = await fetch(
          `http://localhost:8000/file-content?repo_name=${repo}&file_path=${selectedFile}`
        );

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setFileContent(data.content);
      } catch (err){
        console.error(err)
      }
    };

    fetchFile();
  }, [selectedFile, repo]);


  useEffect(()=>{
    const fetchStructure = async () => {
      try{
        const res = await fetch(
          `http://localhost:8000/repo-structure?repo_name=${repo}`
        );

        const data = await res.json();
        setRepoTree(data);
      } catch (err){
        console.error("Failed to fetch repo structure")
      }finally{
        setLoading(false);
      }};
      if (repo) fetchStructure();
  }, [repo]);



  return (
    <div className="h-screen flex flex-col">
      <Header showChat={showChat} setShowChat={setShowChat} />


      <div className="flex flex-1 overflow-hidden">
        <Sidebar repoTree={repoTree} loading={loading} onFileClick={setSelectedFile} />

          <div className="flex flex-1  overflow-hidden">
          <div className="flex-1 min-w-0 h-full">
            <CodeViewer content={fileContent} />
          </div>

          <div
            className={`transition-all duration-300 border-4 ${
              showChat ? "w-96" : "w-0"
            } border-l border-gray-800 overflow-hidden flex-shrink-0 h-full`}
          >
            <ChatPanel />
          </div>
        </div>
      </div>
    </div>
  );
}