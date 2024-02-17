"use client";

import { createContext, useState, useEffect, useContext } from "react";

const IsClientContext = createContext(false);

export const IsClientContextProvider = ({ children }) => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => setIsClient(true), []);
    return (
        <IsClientContext.Provider value={isClient}>
            {children}
        </IsClientContext.Provider>
    );
};

export function useIsClient() {
    return useContext(IsClientContext);
}
