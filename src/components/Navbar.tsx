import { RiBook2Line } from "react-icons/ri";
import { FiMoon } from "react-icons/fi";

const Navbar = () => {
    return (
        <nav>
            <div className="flex justify-between items-center py-2">
                <div>
                    <RiBook2Line className="text-gray-400 text-4xl" />
                </div>
                <div className="flex items-center gap-4">
                    <select>
                        <option value="Serif">Serif</option>
                        <option value="Jost">Jost</option>
                        <option value="Poppins">Poppins</option>
                    </select>

                    <div className="bg-gray-700 p-1 rounded-full w-10 h-6 flex items-center cursor-pointer">
                        <div className="h-4 w-4 bg-white rounded-full"></div>
                    </div>

                    <FiMoon className="text-gray-700 text-xl" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;