import { createContext, ReactNode } from "react";

type ContextType = {
    name: string,
    age: number;
};

const initialState = {
    name: 'João',
    age: 19
};

export const Context = createContext<ContextType>(initialState);

type Props = {
    children: ReactNode
}

export const ContextProvider = ({ children }: Props) => {
    return (
        <Context.Provider value={initialState}>
            {children}
        </Context.Provider>
    );
}