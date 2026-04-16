import { useContext } from "react";
import { ThemeContext, UserContext, LangContext } from "./context";

const App = () => {

  // ❌ pehle direct values le rahe the (theme, toggleTheme etc.)
  // ✅ ab state + dispatch lena hoga

  const { state, dispatch } = useContext(ThemeContext);
  const { user } = useContext(UserContext).state;  // extracting from state
  const { lang } = useContext(LangContext).state;

  const { theme } = state; // common state se theme nikal liya



  return (
    <div>
      <p>Theme : {theme}</p>
      <h1>Welcome, {user.name}!</h1>
      <p>Age: {user.age}</p>
      <p>Current Language: {lang}</p>

      {/* ✅ dispatch use hoga instead of toggleTheme */}
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Toggle Theme
      </button>

      {/* ✅ SET_LANG action */}
      <button
        onClick={() =>
          dispatch({
            type: "SET_LANG",
            payload: lang === "en" ? "es" : "en",
          })
        }
      >
        Toggle Language
      </button>

      {/* ✅ SET_USER action */}
      <button
        onClick={() =>
          dispatch({
            type: "SET_USER",
            payload: {
              ...user,
              name:
                user.name === "Naitik Gupta"
                  ? "Guest User"
                  : "Naitik Gupta",
            },
          })
        }
      >
        Toggle User Name
      </button>

      {/* ✅ update age */}
      <button
        onClick={() =>
          dispatch({
            type: "SET_USER",
            payload: {
              ...user,
              age: user.age + 1,
            },
          })
        }
      >
        Increase Age
      </button>
    </div>
  );
};

export default App;