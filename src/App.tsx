import { useState, useEffect, createContext } from "react";

import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Body from "./components/Body";

type context = {
  mode: boolean
  setMode: (arg: boolean) => void
}

export const Context = createContext({} as context);

const App = () => {

  // Mode true is dark mode while false is light mode
  const [ mode, setMode ] = useState(false);
  const [ font, setFont ] = useState("sans");

  // Word state
  const [ word, setWord ] = useState("dictionary");

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
      <main className={`flex justify-center py-4 min-h-screen transitionItem dark:bg-slate-900 dark:text-slate-300 ${mode && "bg-slate-900 text-slate-300"} ${font === "sans" && "font-sans"} ${font === "serif" && "font-serif"} ${font === "mono" && "font-mono"}`}>
        <div className="w-1/2">
          <Navbar setMode={setMode} font={font} setFont={setFont} />
          
          <Search />

          <Body word={word} />
        </div>
      </main>
    </Context.Provider>
  );
};

export default App;
