import { useContext } from "react"
import { Context } from "../App"
import Examples from "./Examples";
import Synonyms from "./Synonyms";

const Main = ({ definition }: {definition: any}) => {

    const { mode } = useContext(Context);
    
    return (
        <div className="py-4">
                <div className="flex items-center">
                    <span className={`dark:text-slate-200 ${mode ? "text-slate-200" : "text-slate-600"} font-bold pr-4`}>
                        {definition.partOfSpeech}
                    </span>
                    <div className="h-[.5px] grow bg-slate-200"></div>
                </div>

                <div className="py-4">
                    <h5 className={`dark:text-slate-300 ${mode ? "text-slate-300" : "text-slate-500"} py-2`}>Meaning</h5>
                    <p className={`dark:text-slate-400 ${mode ? "text-slate-400" : "text-slate-700"}`}>
                        {definition.definition}
                    </p>
                </div>

                {
                    definition.examples && <Examples examples={definition.examples} />
                }

                {
                    definition.synonyms && <Synonyms synonyms={definition.synonyms} />
                }
                
                
            </div>
    )
}

export default Main;