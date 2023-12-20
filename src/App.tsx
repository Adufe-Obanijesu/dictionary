import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Body from "./components/Body";

import { Context } from "./contexts/Mode";
import Cursor from "./components/Cursor";

const App = () => {

  // Mode true is dark mode while false is light mode
  const [ mode, setMode ] = useState(true);
  const [ font, setFont ] = useState("sans");

  // Word state
  const [ word, setWord ] = useState(localStorage.getItem("lastWord") || "dictionary");

  useEffect(() => {
    if (!localStorage.getItem("mode")) {
      localStorage.setItem("mode", "false");
    }

    if (!localStorage.getItem("font")) {
      localStorage.setItem("font", "serif");
    }
    const mode = localStorage.getItem("mode");
    const font = localStorage.getItem("font");

    if (mode === "true") {
      setMode(true);
    }

    if (font) {
      setFont(font);
    }
  }, []);
  

  return (
    <Context.Provider value={{
      mode,
      setMode,
    }}>
      <main className={`overflow-hidden relative flex justify-center py-4 min-h-screen transitionItem dark:bg-slate-900 dark:text-slate-300 ${mode && "bg-slate-900 text-slate-300"} ${font === "sans" && "font-sans"} ${font === "serif" && "font-serif"} ${font === "mono" && "font-mono"} ${font === "quicksand" && "font-quicksand"} ${font === "playfair" && "font-playfair"}`}>
        
        <Cursor />
        
        <div className="lg:w-1/2 md:w-3/5 w-full px-6 md:px-0">
          <Navbar setMode={setMode} font={font} setFont={setFont} />
          
          <Search setWord={setWord} />

          <Body word={word} />
        </div>
      </main>
    </Context.Provider>
  );
};

export default App;
