import { FaPlay } from "react-icons/fa";

const Body = ({ mode }: {mode: boolean}) => {
    return (
        <section>
            <div className="flex justify-between items-center my-6">
                <div>
                    <h2 className="font-bold text-5xl">
                        keyboard
                    </h2>
                    <span className="text-purple-400 mt-2">
                        key-board
                    </span>
                </div>

                <div className="relative">
                    <div className="bg-purple-500 h-10 w-10 mx-2 my-2 rounded-full absolute animate-ping z-0"></div>
                    <div className="z-10 relative cursor-pointer bg-purple-200 rounded-full w-14 h-14 flex justify-center items-center">
                        <FaPlay className="text-purple-500 text-lg" />
                    </div>
                </div>
            </div>

            <div className="py-4">
                <div className="flex items-center">
                    <span className={`${mode ? "text-slate-200" : "text-slate-600"} font-bold pr-4`}>noun</span>
                    <div className="h-[.5px] grow bg-slate-200"></div>
                </div>

                <div className="py-4">
                    <h5 className={`${mode ? "text-slate-300" : "text-slate-500"} py-2`}>Meaning</h5>
                    <p className={`${mode ? "text-slate-400" : "text-slate-700"}`}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis velit, labore totam reprehenderit quia aut deserunt nihil officiis nostrum molestiae?
                    </p>
                </div>

                <div className="py-2">
                    <h5 className={`${mode ? "text-slate-300" : "text-slate-500"} py-2`}>Examples</h5>
                    <ul className="mt-1 list-disc pl-4">
                        <li className={`${mode ? "text-slate-400" : "text-slate-700"} mb-2`}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis velit, labore totam reprehenderit quia aut deserunt nihil officiis nostrum molestiae?
                        </li>
                        <li className={`${mode ? "text-slate-400" : "text-slate-700"} mb-2`}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis velit, labore totam reprehenderit quia aut deserunt nihil officiis nostrum molestiae?
                        </li>
                        <li className={`${mode ? "text-slate-400" : "text-slate-700"} mb-2`}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis velit, labore totam reprehenderit quia aut deserunt nihil officiis nostrum molestiae?
                        </li>
                    </ul>
                </div>

                <div className="py-2">
                    <div className="flex gap-4 items-center">
                        <span className={`${mode ? "text-slate-300" : "text-slate-500"} py-2`}>Synonyms</span>
                        <div className="flex gap-2">
                            <span className="text-purple-600 font-semibold">electronic keyboard</span>
                        </div>
                    </div>
                </div>
            </div>

            

        </section>
    )
}

export default Body;