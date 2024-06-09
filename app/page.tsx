"use client";

import { useCallback, useEffect } from "react";

export default function Home() {
  const handleKeyPress = useCallback((event: { key: any; }) => {
    console.log(`Key pressed: ${event.key}`);
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);
  
  return (
    <main className="flex items-center w-screen h-screen">
      <p>idk</p>
      
    </main>
  );
}
