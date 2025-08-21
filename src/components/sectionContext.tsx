// contains stateful information to be consumed by NavigationSection components
import { createContext, Dispatch, SetStateAction } from "react";

export interface SectionContextType {
    currentSection: number,
    setCurrentSection?: Dispatch<SetStateAction<number>>;
};

const SectionContext = createContext({ currentSection: 1, setCurrentSection: undefined });
export default SectionContext;