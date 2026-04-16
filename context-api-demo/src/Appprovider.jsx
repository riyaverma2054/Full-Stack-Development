import { useReducer } from "react";
import { ThemeContext, UserContext, LangContext, GlobalStateContext } from "./context"; // ✅ added Global

const AppProvider = ({ children }) => {

    // const toggleTheme = () => {
    //     dispatch({ type: "TOGGLE_THEME" });
    // };

    // const [lang, setLang] = useState("en");

    // const toggleTheme = () => {
    //     setTheme((prev) => (prev === "light" ? "dark" : "light"));
    // };

    // 1. create common state
    const initialState = {
        theme: "light",
        user: { name: "Naitik Gupta", age: 20 },
        lang: "en",
    };

    // 2. reducer
    function reducer(state, action) {
        switch (action.type) {
            case "TOGGLE_THEME":
                return {
                    ...state,
                    theme: state.theme === "light" ? "dark" : "light"
                };
            case "SET_USER":
                return {
                    ...state,
                    user: action.payload
                };
            case "SET_LANG":
                return {
                    ...state,
                    lang: action.payload
                };
            default:
                return state;
        }
    }

    // 3. useReducer
    const [state, dispatch] = useReducer(reducer, initialState);

    const { theme, user, lang } = state; // optional

    return (

        // ✅ NEW: Global Provider (main one you will use)
        <GlobalStateContext.Provider value={{ state, dispatch }}>

            {/* ❌ OLD (now redundant, but kept as you requested) */}
            {/* <ThemeContext.Provider value={{ state, dispatch }}>
                <UserContext.Provider value={{ state, dispatch }}>
                    <LangContext.Provider value={{ state, dispatch }}>
                        {children}
                    </LangContext.Provider>
                </UserContext.Provider>
            </ThemeContext.Provider> */}

            {children}

        </GlobalStateContext.Provider>
    );
};

export default AppProvider;