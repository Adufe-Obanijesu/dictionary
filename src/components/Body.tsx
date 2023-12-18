import { useContext, useEffect, useState } from "react";

import Main from "./Main";

import { Context } from "../contexts/Mode";
import AudioComponent from "./AudioComponent";
import Skeleton from "./Skeleton";


const Body = ({ word }: {word: string}) => {

    const { mode } = useContext(Context);

    const [ response, setResponse ] = useState([] as any);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true);

        const config = {
            headers: {
                "X-RapidAPI-Key": import.meta.env.VITE_DICT_KEY,
                "Content-Type": "application/json",
            }
        }
        const unsub = async () => {
            fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}`, config)
            .then(response => response.json())
            .then(response => {
                setResponse(response);
                if (response.message && response.message === "word not found") {
                    return;
                }

                if (!localStorage.getItem("lastWord")) {
                    localStorage.setItem("lastWord", word);
                } else {
                    localStorage.setItem("lastWord", word);
                }
            })
            .catch(() => {
            })
            .finally(() => {
                setLoading(false);
            })
        }

        unsub();
    }, [word]);


    return (
        <section>
            
            <div className="flex justify-between items-center my-6">
                <div>
                    <h2 className="font-bold lg:text-5xl md:text-4xl text-2xl">
                        {word.toLowerCase()}
                    </h2>


                    <span className="text-purple-400 mt-2">
                        /{
                            response.message === "word not found" || response.length === 0 ? "" : response.pronunciation.all || response.pronunciation
                        }/
                    </span>
                </div>

                <AudioComponent word={word} />

            </div>
            
            {
                loading ? <Skeleton /> : (
                    <>
                        {
                            (response.message && response.message === "word not found") && <h2 className={`font-bold text-3xl ${!mode && "text-slate-600"}`}>Word not found</h2>
                        }

                        {
                            response.results && response.results.map((res: any) => <Main key={res.definition} definition={res} />)
                        }
                    </>
                )
            }

            
            

        </section>
    )
}

export default Body;