import { createContext } from "react";

////Empty Context
export const ThemeContext = createContext();   // ❌ not needed now
export const UserContext = createContext();    // ❌ not needed now

//Default Context
export const LangContext = createContext("en"); // ❌ not needed now

// ✅ NEW: Global Context (main one)
export const GlobalStateContext = createContext();


// 💡 Helpful Note:
// - ThemeContext → ❌ previously for theme (now redundant)
// - UserContext → ❌ previously for user
// - LangContext → ❌ previously for language
// - GlobalStateContext → ✅ now handles theme + user + lang (single store)