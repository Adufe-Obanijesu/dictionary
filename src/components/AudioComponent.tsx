import { useState } from "react"
import { ClipLoader } from "react-spinners"
import { FaPlay } from "react-icons/fa";

const AudioComponent = ({ word }: { word: string }) => {

    const [ audioLoading, setAudioLoading ] = useState(false);

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
        <div className="relative">
                    
            <div className="bg-purple-500 h-10 w-10 mx-2 my-2 rounded-full absolute animate-ping z-0"></div>
            <button className="z-10 relative bg-purple-200 rounded-full w-14 h-14 flex justify-center items-center" onClick={play} disabled={audioLoading || false}>
                {
                    audioLoading ? <ClipLoader color="#9f7aea" size={20} /> : <FaPlay className="text-purple-500 text-lg" />
                }
                
            </button>
        </div>
    )
}

export default AudioComponent;