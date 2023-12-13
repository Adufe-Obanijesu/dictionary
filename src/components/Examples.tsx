import { useContext } from "react";
import { Context } from "../contexts/Mode";

const Examples = ({ examples }: { examples: string[] }) => {

    const { mode } = useContext(Context);

    return (
        <div className="py-2">
            <h5 className={`dark:text-slate-300 ${mode ? "text-slate-300" : "text-slate-500"} py-2`}>Examples</h5>
            <ul className="mt-1 list-disc pl-4">
                {
                    examples.map((ex: string, index: number) => (
                        <li key={index} className={`dark:text-slate-400 ${mode ? "text-slate-400" : "text-slate-700"} mb-2`}>
                           {ex}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Examples