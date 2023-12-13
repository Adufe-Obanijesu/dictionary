import { useCallback, useContext, useState } from "react";
import debounce from "lodash.debounce";

import { Context } from "../App";

// icons
import { BsSearch } from "react-icons/bs";

const Search = () => {

    const { mode } = useContext(Context);

    const [ search, setSearch ] = useState("");

    const searchResult = debounce((value) => {
        const config = {
            headers: {
                "X-RapidAPI-Key": import.meta.env.VITE_DICT_KEY,
                "Content-Type": "application/json",
            }
        }

        fetch(`https://wordsapiv1.p.rapidapi.com/words/?letterPattern=^${value}\\w*&limit=10`, config)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.log(err));
    }, 1000);

    const mSearchResult = useCallback((value) => searchResult(value), []);

    const searchWord = (value: string) => {
        setSearch(value);
        mSearchResult(value);
    }

    return (
        <form className={`mt-4 transitionItem py-2 px-4 rounded-lg dark:bg-slate-700 ${mode ? "bg-slate-700" : "bg-slate-100"}`}>
            <div className="flex gap-4 items-center">
                <input type="text" className="grow bg-transparent focus:outline-none" placeholder="Enter your word" value={search} onChange={e => searchWord(e.target.value)} />
                <button type="submit" className="">
                    <BsSearch className={`inline text-lg dark:text-slate-300 ${mode ? "text-slate-300" : "text-slate-700"}`} />
                </button>
            </div>
        </form>
    )
}

export default Search;