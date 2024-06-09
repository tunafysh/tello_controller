"use client";


import { Button } from "@/components/ui/button";
import { invoke } from "@tauri-apps/api/tauri";
import { useCallback, useEffect, useRef, useState } from "react";
import { XTerm } from "xterm-for-react";

export default function Home() {
  const [ terminal, setTerminal ] = useState(false);
  const terminalRef = useRef<XTerm>(null);

  useEffect(() => {
    if(terminalRef.current){
      terminalRef.current.terminal.writeln("hello world")
      }
  }, []);

  const handleKeyPress = useCallback((event: { key: any, ctrlKey: any }) => {
    if (event.ctrlKey == true && event.key == "i") {
      console.log("before: ",terminal)
      setTerminal(!terminal)
      console.log("after: ",terminal)
    }
  }, [terminal]);

  useEffect(() => {
    document.addEventListener('keydown',(e) => handleKeyPress({key: e.key, ctrlKey: e.ctrlKey}));
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);
  
  return (
    <main className="w-screen h-screen">
      <div className={`flex justify-around items-center ${terminal ? "h-3/6" : "h-full"}`}>
        <p>idk</p>
        <div className="flex flex-col">
          <p>idk man</p>
          <Button onClick={() => invoke("greet", { name: "Hanan" }).then((res) => console.log(res))}>Click here!</Button>
        </div>
      </div>
      {terminal? <hr/>:<></>}
      <div className={`p-4 ${terminal ? "h-3/6" : "hidden"}`}>
      <XTerm ref={terminalRef} />
      </div>
    </main>
  );
}
