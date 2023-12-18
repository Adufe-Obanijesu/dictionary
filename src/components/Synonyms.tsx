import { useContext } from "react";
import { Context } from "../contexts/Mode";

const Synonyms = ({ synonyms }: { synonyms: any }) => {

    const { mode } = useContext(Context);

    return (
        <div className="py-2">
            <div className="">
                <span className={`dark:text-slate-300 ${mode ? "text-slate-300" : "text-slate-500"} mr-4 py-2`}>Synonyms:</span>
                <span className="">
                    <span className={`font-semibold dark:text-purple-400 ${mode ? "text-purple-400" : "text-purple-600"}`}>
                    {
                        synonyms.length > 0 && synonyms.join(", ")
                    }
                    </span>
                    
                </span>
            </div>
        </div>
    )
}

export default Synonyms;