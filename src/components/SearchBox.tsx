import React from "react";
import { ClipLoader } from "react-spinners"

type props = {
    response: any
    setWord: React.Dispatch<React.SetStateAction<string>>
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

const SearchBox = ({ response, setWord, setSearch }: props) => {

    const updateSearch = (word: string) => {
        setWord(word);
        setSearch("");
    }

    if (response === null) return (
        <div className="bg-white w-full rounded-md absolute top-12 z-20 left-0 flex justify-center py-4">
            <ClipLoader color="#9f7aea" size={50} />
        </div>
    )

    return (
        <div className="bg-white w-full rounded-md absolute top-12 z-20 left-0 overflow-hidden">

            {
                response && response.results.data.map((word: string) => (
                    <p key={word} className="text-slate-600 border-b py-4 px-4 cursor-pointer transitionItem hover:bg-slate-200" onClick={() => updateSearch(word)}>
                        {word}
                    </p>
                ))
            }

        </div>
    )
}

export default SearchBox;