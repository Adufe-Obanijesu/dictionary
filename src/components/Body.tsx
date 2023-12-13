import { useContext, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners"
import { FaPlay } from "react-icons/fa";


import Main from "./Main";

import { Context } from "../App";


const Body = ({ word }: {word: string}) => {

    const { mode } = useContext(Context);

    const [ response, setResponse ] = useState({} as any);
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const [ audioLoading, setAudioLoading ] = useState(false);

    useEffect(() => {
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
                setLoading(false);
                if (response.message && response.message === "word not found") {
                    setError(true);
                    return;
                }
                setError(false);
            })
            .catch(() => {
                setLoading(false);
                setError(true);
            })
        }

        return () => {
            unsub();
        }
    }, [word]);


    const play = () => {
        setAudioLoading(true);

        const data = {
            "model": "tts-1-hd",
            "input": word,
            "voice": "alloy"
        }

        const config = {
            method: "POST",
            headers : {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${import.meta.env.VITE_OPENAI}`,
            },
            body: JSON.stringify(data),
        }

        fetch("https://api.openai.com/v1/audio/speech", config)
        .then(async response => {
            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);

            const audio = new Audio(blobUrl);
            audio.play();
            setAudioLoading(false);
        })
        .catch(err => {
            console.error(err);
            setAudioLoading(false);
        });
    }

    return (
        <section>
            <div className="flex justify-between items-center my-6">
                <div>
                    <h2 className="font-bold text-5xl">
                        {word.toLowerCase()}
                    </h2>


                    <span className="text-purple-400 mt-2">
                        {
                            (response.pronunciation) && `/${response.pronunciation.all}/`
                        }
                    </span>
                </div>

                <div className="relative">
                    
                    <div className="bg-purple-500 h-10 w-10 mx-2 my-2 rounded-full absolute animate-ping z-0"></div>
                    <button className="z-10 relative bg-purple-200 rounded-full w-14 h-14 flex justify-center items-center" onClick={play} disabled={audioLoading || false}>
                        {
                            audioLoading ? <ClipLoader color="#9f7aea" size={20} /> : <FaPlay className="text-purple-500 text-lg" />
                        }
                        
                    </button>
                </div>
            </div>

            {
                (response.message && response.message === "word not found") && <h2 className={`font-bold text-3xl ${!mode && "text-slate-600"}`}>Word not found</h2>
            }

            {
                response.results && response.results.map((res: any) => <Main key={res.definition} definition={res} />)
            }
            

        </section>
    )
}

export default Body;