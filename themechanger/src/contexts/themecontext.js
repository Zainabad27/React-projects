import { createContext, useContext } from "react";

export const themecontext = createContext(
    {
        theme: "light",
        darktheme: () => { },
        lighttheme: () => { },
    }
);

export const Themeprovider = themecontext.Provider;

export default function usetheme() {

    return useContext(themecontext);
}