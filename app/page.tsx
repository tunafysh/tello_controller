"use client";


import { Button } from "@/components/ui/button";
import { invoke } from "@tauri-apps/api/tauri";
import { FitAddon } from "xterm-addon-fit"
import Main from "@/components/cpanel";
import { useCallback, useEffect, useRef, useState } from "react";
import { XTerm } from "xterm-for-react";

export default function Home() {
  const [ terminal, setTerminal ] = useState(false);

  const handleKeyPress = useCallback((event: { key: any, ctrlKey: any }) => {
    if (event.ctrlKey == true && event.key == "i") {
      setTerminal(!terminal)
    }
    console.log(event.key)
  }, [terminal]);

  useEffect(() => {
    document.addEventListener('keydown',(e) => handleKeyPress({key: e.key, ctrlKey: e.ctrlKey}));
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <main className="w-screen h-screen">
     <Main terminal={terminal}/>
     {terminal? <hr/> : <></>}
     <div className={`p-4 flex justify-center items-center ${terminal ? "h-3/6" : "hidden"}`}>
      <h1 className="text-3xl font-bold">Under Construction</h1>
     </div>
    </main>
  );
}
