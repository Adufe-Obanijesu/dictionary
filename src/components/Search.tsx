import React, { useCallback, useContext, useState } from "react";
import debounce from "lodash.debounce";
import 'formdata-polyfill';

import SearchBox from "./SearchBox";

import { Context } from "../contexts/Mode";

// icons
import { BsSearch } from "react-icons/bs";

const Search = ({ setWord }: { setWord: React.Dispatch<React.SetStateAction<string>> }) => {

    const { mode } = useContext(Context);

    const [ search, setSearch ] = useState("");
    const [ response, setResponse ] = useState(null);

    const searchResult = debounce((value) => {
       

        const config = {
            headers: {
                "X-RapidAPI-Key": import.meta.env.VITE_DICT_KEY,
                "Content-Type": "application/json",
            }
        }
        const url = `https://wordsapiv1.p.rapidapi.com/words/?letterPattern=^${value.toLowerCase()}&limit=7`;
        fetch(url, config)
        .then(response => response.json())
        .then(response => {
            setResponse(response);
        })
        .catch(() => {
        });
    }, 500, { trailing: true, leading: true });

    const mSearchResult = useCallback((value: string) => searchResult(value), []);

    const searchWord = (value: string) => {
        setSearch(value);
        mSearchResult(value);
    }

    const updateSearch = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setWord(search);
        setSearch("");
    }

    return (
        <div className="relative">
            <form onSubmit={updateSearch} className={`mt-4 transitionItem py-2 px-4 rounded-lg dark:bg-slate-700 ${mode ? "bg-slate-700" : "bg-slate-100"}`}>
                <div className="flex gap-4 items-center">
                    <input type="text" className="grow bg-transparent focus:outline-none" placeholder="Enter your word" value={search} onChange={e => searchWord(e.target.value)} />
                    <button type="submit" className="focus:outline-none active:outline-none">
                        <BsSearch className={`inline text-lg dark:text-slate-300 ${mode ? "text-slate-300" : "text-slate-700"}`} />
                    </button>
                </div>
            </form>

            {
                search !== "" && <SearchBox response={response} setWord={setWord} setSearch={setSearch} />
            }

        </div>
    )
}

export default Search;