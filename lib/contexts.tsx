"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import { TrendingElement } from "./types.common";

type ContextType = {
    trendingElements: TrendingElement[];
    setTrendingElements: (trendingElements: TrendingElement[]) => void;
};

const ContextDefaultValues: ContextType = {
    trendingElements: [],
    setTrendingElements: () => {},
};

type Props = {
    children: ReactNode;
};

const AppContext = createContext<ContextType>(ContextDefaultValues);

export function useAppContext() {
    return useContext(AppContext);
}

export function AppContextProvider({ children }: Props) {
    const [trendingElements, setTrendingElements] = useState<TrendingElement[]>([]);
    return <AppContext.Provider value={{trendingElements, setTrendingElements}}>{children}</AppContext.Provider>;
}


