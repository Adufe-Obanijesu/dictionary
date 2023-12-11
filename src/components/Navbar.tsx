import { RiBook2Line } from "react-icons/ri";
import { FiMoon, FiSun } from "react-icons/fi";

type props = {
    mode: boolean
    setMode: (arg: boolean) => void
    setFont: (arg: string) => void
}

const Navbar = ({ mode, setMode, setFont }: props) => {
    return (
        <nav>
            <div className="flex justify-between items-center py-2">
                <div>
                    <RiBook2Line className="text-gray-400 text-4xl" />
                </div>
                <div className="flex items-center gap-4">
                    <select className="focus:outline-none cursor-pointer bg-transparent" onChange={e => setFont(e.target.value)}>
                        <option className={`${mode && "bg-slate-800"}`} value="sans">Sans</option>
                        <option className={`${mode && "bg-slate-800"}`} value="serif">Serif</option>
                        <option className={`${mode && "bg-slate-800"}`} value="mono">Mono</option>
                    </select>

                    <div className="flex gap-2 items-center">
                        <div className="bg-gray-700 p-1 rounded-full w-10 h-6 flex items-center cursor-pointer" onClick={() => setMode(!mode)}>
                            <div className={`h-4 w-4 bg-slate-50 rounded-full transition ease-in duration-100 ${mode && "translate-x-4"}`}></div>
                        </div>

                        {
                            mode ? <FiSun className="text-slate-300 text-xl" /> : <FiMoon className="text-slate-600 text-xl" />
                        }
                    </div>

                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar;