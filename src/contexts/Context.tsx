import React, { createContext, ReactNode, useReducer } from "react";
import { userInitialState, userReducer, UserType } from "../reducers/userReducer";
import { reducerActionType } from "../Types/reducerActionType";
import { ThemeInitialState, ThemeReducer, ThemeType } from "../reducers/themeReducer";

type initialStateType = {
    user: UserType;
    theme: ThemeType;
}

type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>;
}

const initialState = {
    user: userInitialState,
    theme: ThemeInitialState
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    user: userReducer(state.user, action),
    theme: ThemeReducer(state.theme, action)
});

type Props = {
    children: ReactNode;
}

export const ContextProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    );
}
