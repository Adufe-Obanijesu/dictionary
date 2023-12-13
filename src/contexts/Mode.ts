import { createContext } from "react";

type context = {
    mode: boolean
    setMode: (arg: boolean) => void
}

export const Context = createContext({} as context);