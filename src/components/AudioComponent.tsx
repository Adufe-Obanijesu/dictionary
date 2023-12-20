import { useState } from "react"
import { ClipLoader } from "react-spinners"
import { FaPlay } from "react-icons/fa";

const AudioComponent = ({ word }: { word: string }) => {

    const [ audioLoading, setAudioLoading ] = useState(false);
    const [ blob, setBlob ] = useState("");
    const [ prev, setPrev ] = useState("");

    const play = () => {
        setAudioLoading(true);

        if (prev === word) {
            const audio = new Audio(blob);
            audio.play();
            setAudioLoading(false);

            return
        }

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
            setBlob(blobUrl);
            const audio = new Audio(blobUrl);
            audio.play();
            setAudioLoading(false);
            setPrev(word);
        })
        .catch(err => {
            console.error(err);
            setAudioLoading(false);
        });
    }

    return (
        <div className="relative">
                    
            <div className="bg-purple-500 h-10 w-10 mx-2 my-2 rounded-full absolute animate-ping z-0"></div>
            <button className="focus:outline-0 active:outline-0  relative bg-purple-200 rounded-full w-14 h-14 flex justify-center items-center" onClick={play} disabled={audioLoading || false}>
                {
                    audioLoading ? <ClipLoader color="#9f7aea" size={20} /> : <FaPlay className="text-purple-500 text-lg" />
                }
                
            </button>
        </div>
    )
}

export default AudioComponent;