import { useState } from "react";

import Navbar from "./components/Navbar";

const App = () => {

  // Mode true is dark mode while false is light mode
  const [ mode, setMode ] = useState(false);
  const [ font, setFont ] = useState("sans");

  return (
    <main className={`flex justify-center py-4 min-h-screen ${mode && "bg-slate-900 text-slate-300"} font-${font}`}>
      <div className="w-1/2">
        <Navbar mode={mode} setMode={setMode} setFont={setFont} />
        dsd
      </div>
    </main>
  );
};

export default App;
