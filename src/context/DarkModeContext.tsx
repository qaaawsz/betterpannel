import {createContext, useReducer} from 'react'

const INITIAL_STATE = {
    darkMode: false,
    dispatch: (actionType: any) => {},
}

export const DarkModeContext = createContext(INITIAL_STATE)

export const DarkModeContextProvider: React.FC<{ children: any }> = ({children}) => {
    // @ts-ignore
    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE)

    return (
        //@ts-ignore
        <DarkModeContext.Provider value={{darkMode: state.darkMode, dispatch}}>
            {children}
        </DarkModeContext.Provider>
    )
}

const DarkModeReducer = (state: { darkMode: boolean, dispatch: any }, action: { type: string }) => {
    switch (action.type) {
        case 'LIGHT': {
            return {
                darkMode: false,
            }
        }
        case 'DARK': {
            return {
                darkMode: true,
            }
        }
        case 'TOGGLE': {
            return {
                darkMode: !state.darkMode,
            }
        }
        default:
            return state
    }
}

export default DarkModeReducer
