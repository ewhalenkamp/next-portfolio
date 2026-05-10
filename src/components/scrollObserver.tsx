import SectionContext, { SectionContextType } from "@/components/sectionContext";
import { SECTION_ORDER } from "constants";
import useScrollIntent from "hooks/useScrollIntent";
import { useContext, useEffect, useRef } from "react";

type Direction = "up" | "down";

export default function scrollObserver({ children }) {
    const { currentSection, setCurrentSection }: SectionContextType = useContext(SectionContext);

    const intentLockRef = useRef(true);

    const setIntent = (intentValue: Direction) => {
        const sectionMax = 2;

        if (intentValue && intentLockRef.current) {
            // wait for scroll animation to complete before allowing updates
            intentLockRef.current = false;

            setCurrentSection((current): number => {
                if (intentValue === "up" && current > 0) {
                    return current - 1;
                }
                if (intentValue === "down" && current < sectionMax) {
                    return current + 1;
                }
                return current;
            })

            // unlock
            setTimeout(() => {
                intentLockRef.current = true;
            }, 250);
        }
    };

    // call hook to set observers that will call setIntent
    useScrollIntent(setIntent);

    const scrollTo = (section: number): void => {
        // destination section * view width gives pixel value of top of each section
        const scrollDestination = window.innerHeight * section;
        window.scrollTo({ top: scrollDestination, behavior: "smooth" });

        if (section === SECTION_ORDER.indexOf("history")) {
            // if scrolling to history section, add class to allow scroll on body
            document.body.style.setProperty("overflow-y", "visible");
        } else {
            document.body.style.setProperty("overflow-y", "hidden");
        }
    };

    useEffect(() => {
        // scroll to currentSection each time its value changes
        scrollTo(currentSection);
        // need to reset resize handler each time the value of currentSection changes
        window.onresize = () => {
            scrollTo(currentSection);
        };
    }, [currentSection]);

    return <>{children}</>
}