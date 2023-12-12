import { useContext } from "react";
import { Context } from "../App";

const Synonyms = ({ synonyms }: { synonyms: any }) => {

    const { mode } = useContext(Context);

    return (
        <div className="py-2">
            <div className="flex gap-4 items-center">
                <span className={`${mode ? "text-slate-300" : "text-slate-500"} py-2`}>Synonyms</span>
                <div className="flex gap-2">
                    <span className={`font-semibold dark:text-purple-400 ${mode ? "text-purple-400" : "text-purple-600"}`}>
                    {
                        synonyms.length > 0 && synonyms.join(", ")
                    }
                    </span>
                    
                </div>
            </div>
        </div>
    )
}

export default Synonyms;