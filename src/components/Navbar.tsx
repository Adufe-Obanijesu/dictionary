import React, { ChangeEvent, useContext } from "react";

import { Context } from "../contexts/Mode";

// Icons
import { RiBook2Line } from "react-icons/ri";
import { FiMoon, FiSun } from "react-icons/fi";

type props = {
    setMode: React.Dispatch<React.SetStateAction<boolean>>
    font: string
    setFont: React.Dispatch<React.SetStateAction<string>>
}

const Navbar = ({ setMode, font, setFont }: props) => {

    const { mode } = useContext(Context)

    const changeMode = () => {
        localStorage.setItem("mode", `${!mode}`);
        setMode(!mode);
    }

    const changeFont = (e: ChangeEvent<HTMLSelectElement>) => {
        localStorage.setItem("font", `${e.target.value}`);
        setFont(e.target.value);
    }

    return (
        <nav className="z-10 relative">
            <div className="flex justify-between items-center py-2">
                <div>
                    <RiBook2Line className="text-gray-400 text-4xl" />
                </div>
                <div className="flex items-center gap-4">
                    <select className="focus:outline-none cursor-pointer bg-transparent" onChange={e => changeFont(e)} value={font}>
                        <option className={`dark:bg-slate-800 ${mode && "bg-slate-800"} dark:bg-slate-800`} value="quicksand">Quicksand</option>
                        <option className={`dark:bg-slate-800 ${mode && "bg-slate-800"} dark:bg-slate-800`} value="serif">Serif</option>
                        <option className={`dark:bg-slate-800 ${mode && "bg-slate-800"} dark:bg-slate-800`} value="sans">Sans</option>
                        <option className={`dark:bg-slate-800 ${mode && "bg-slate-800"} dark:bg-slate-800`} value="mono">Mono</option>
                        <option className={`dark:bg-slate-800 ${mode && "bg-slate-800"} dark:bg-slate-800`} value="playfair">Playfair</option>
                    </select>

                    <div className="flex gap-2 items-center">
                        <button className="bg-gray-700 p-1 rounded-full w-10 h-6 flex items-center cursor-pointer dark:hidden" onClick={changeMode}>
                            <div className={`h-4 w-4 bg-slate-50 rounded-full transition ease-in duration-100 ${mode && "translate-x-4"} dark:translate-x-4`}></div>
                        </button>
                        <FiMoon className="text-slate-300 cursor-pointer text-xl hidden dark:block" />

                        <div className="hidden dark:block">
                            Device in dark mode
                        </div>

                        {
                            !mode ? <FiSun className="text-slate-600 cursor-pointer text-xl dark:hidden" onClick={changeMode} /> : <FiMoon className="text-slate-300 cursor-pointer text-xl dark:hidden" onClick={changeMode} />
                        }
                    </div>

                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar;