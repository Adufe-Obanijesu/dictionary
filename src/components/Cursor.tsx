import { useEffect, useState } from "react";

const Cursor = () => {

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
        className="absolute transitionItem z-0 bg-slate-600/10 blur rounded-full h-96 w-96"
        ></div>
    )
}

export default Cursor;