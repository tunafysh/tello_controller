import { Button } from "./ui/button";
import Image from "next/image"

export default function Main({ terminal }: { terminal: boolean }) {
    return (
        <div className={`flex justify-around items-center ${terminal ? "h-3/6" : "h-full"}`}>
        <div >
          {/* <Image src={"tello.jfif"} width={600} height={600}/> */}
        </div>
        <div className="flex flex-col">
          <p>drone info n stuff</p>
          {/* <Button onClick={() => invoke("greet", { name: "Hanan", comment: "This was called from js/ts" }).then((res) => console.log(res))}>Click here!</Button> */}
        </div>
      </div>
    )
}