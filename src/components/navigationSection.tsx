import { ReactElement, useCallback, useContext, useEffect } from "react";
import Image from 'next/image';
import SectionContext, { SectionContextType } from "./sectionContext";

interface NavigationSectionProps {
    position: number,
    children?: ReactElement
}

// constant; order of sections from top to bottom
const SECTION_ORDER = ["projects", "home", "history"];

export default function NavigationSection({ position, children }: NavigationSectionProps) {
    // read in context from parent component
    const { currentSection, setCurrentSection }: SectionContextType = useContext(SectionContext);

    // reusable variables for arrow images--they appear a lot
    const arrowAltText: string = "An arrow pointing";
    const arrowSize: number = 30;
    const upArrow: ReactElement = <Image src="/img/double-arrow.png" alt={`${arrowAltText} up`} width={arrowSize} height={arrowSize} />;
    const downArrow: ReactElement = <Image src="/img/double-arrow.png" alt={`${arrowAltText} down`} className="down-arrow" width={arrowSize} height={arrowSize} />

    // only allow tabbing to elements if they are in the currentSection
    const tabIndex: number = currentSection === position ? 0 : -1;

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

    return <section id={SECTION_ORDER[position]}>
        {/* only render top button if not first section */}
        {position > 0 && <button onClick={() => { setCurrentSection(position - 1) }} tabIndex={tabIndex}>
            {upArrow}
            <h3>{SECTION_ORDER[position - 1].charAt(0).toUpperCase() + SECTION_ORDER[position - 1].slice(1)}</h3>
            {upArrow}
        </button>}
        {children}
        {/* only render bottom button if not last section */}
        {position < SECTION_ORDER.length - 1 && <button className="lower-button" onClick={() => { setCurrentSection(position + 1) }} tabIndex={tabIndex}>
            {downArrow}
            <h3>{SECTION_ORDER[position + 1].charAt(0).toUpperCase() + SECTION_ORDER[position + 1].slice(1)}</h3>
            {downArrow}
        </button>
        }
    </section>;
};