
import { createContext, useContext, useEffect, useReducer} from "react";

//const initialState = {theme: "", data: []}

const ContextGlobal = createContext([])

const themeInitialState = {theme: "light"};
const themeReducer = (state, action)=> {
  switch (action.type) {
    case "SWITCH_LIGHT":
      return {theme: "light"};
    case "SWITCH_DARK":
      return {theme: "dark"};
    default:
      throw new Error();
  }
}

const initialState = [];
const apiReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return action.payload;
    case "FETCH_ERROR":
      return action.payload;
    default:
      return state;
  }
};

const initialFavState = [];
const favReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return [...state, action.payload];
    default:  
      throw new Error();
  }
};


export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const url = "https://jsonplaceholder.typicode.com/users";
  
  const [state, dispatch] = useReducer(apiReducer, initialState);
  const [themeState, themeDispatch] = useReducer(themeReducer, themeInitialState);
  const [favState, favDispatch] = useReducer(favReducer, initialFavState);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favState));
  }, [favState]);


  useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(data => dispatch({type: 'FETCH_SUCCESS', payload: data}))
  },[])

  return (
    <ContextGlobal.Provider value={{state, dispatch, themeState, themeDispatch, favState, favDispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider;
export const useContextGlobal = () => useContext(ContextGlobal)
 