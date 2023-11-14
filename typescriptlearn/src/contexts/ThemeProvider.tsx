import { createContext, useReducer } from "react"

type StateType = {
  theme : string,
  fontSize : number
}

// type ActionType = {
//   type : "CHANGE_THEME" | "CHANGE_FONTSIZE",
//   payload : number 
// }

type ColorActionType = {
  type : "CHANGE_THEME",
}
type SizeActionType = {
  type : "CHANGE_FONTSIZE",
  payload : number 
}

type ActionType = ColorActionType | SizeActionType;

// type ContextType = StateType | ActionType;
const INITIAL_STATE = {
  theme: "light",fontSize:16
}

const reducer = (state : StateType,action: ActionType) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {...state , theme: state.theme === "light" ? "dark" : "light"}
    case "CHANGE_FONTSIZE":
      return {...state , fontSize: action.payload}
    default:
      return state
  }
}

// export default reducer;

export const ThemeContext = createContext<{state:StateType; dispatch : React.Dispatch<ActionType>}>({state: INITIAL_STATE, dispatch: () => {} });

export const ThemeProvider = ({children} : {children: React.ReactNode}) =>{
  const [state,dispatch] = useReducer(reducer,INITIAL_STATE); 
  return <ThemeContext.Provider value={{state,dispatch}}>
    {children}
  </ThemeContext.Provider>
}
