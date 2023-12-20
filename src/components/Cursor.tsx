import { useContext, useEffect, useState } from "react";
import { Context } from "../contexts/Mode";

const Cursor = () => {

  const { mode } = useContext(Context);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
  
    useEffect(() => {
      window.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []); // Empty dependency array to run the effect only once

  return (
      <div
      style={{ left: `calc(${position.x}px - 12rem)`, top: `calc(${position.y}px - 12rem)` }}
      className={`absolute hidden md:flex transitionItem z-0 blur-3xl rounded-full h-96 w-96 ${mode ? "bg-slate-600/10" : "bg-slate-300/10"}`}
      ></div>
  )
}

export default Cursor;