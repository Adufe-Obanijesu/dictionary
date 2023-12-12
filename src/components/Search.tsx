import { useState } from "react";

// icons
import { BsSearch } from "react-icons/bs";

const Search = ({ mode }: {mode: boolean}) => {

    const [ search, setSearch ] = useState("");

    return (
        <form className={`mt-4 transitionItem py-2 px-4 rounded-lg ${mode ? "bg-slate-700" : "bg-slate-100"}`}>
            <div className="flex gap-4 items-center">
                <input type="text" className="grow bg-transparent focus:outline-none" placeholder="Enter your word" value={search} onChange={e => setSearch(e.target.value)} />
                <button type="submit" className="">
                    <BsSearch className={`inline text-lg ${mode ? "text-slate-300" : "text-slate-700"}`} />
                </button>
            </div>
        </form>
    )
}

export default Search;