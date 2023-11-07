import { useState } from "react";
import { createContext } from "react";


export const CounterContext = createContext(null)


export const CounterProvider = ({children}) => {

    //GLOBAL STATE
    const [counter, setcounter] = useState(0)


    return <CounterContext.Provider value={{counter, setcounter}}>{children}</CounterContext.Provider>

}