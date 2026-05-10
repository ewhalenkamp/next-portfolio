import { ReactElement, useCallback, useContext, useEffect } from "react";
import Image from 'next/image';
import SectionContext, { SectionContextType } from "./sectionContext";
import { SECTION_ORDER } from "../constants";

interface NavigationSectionProps {
    name: string,
    children?: ReactElement
}

export default function NavigationSection({ name, children }: NavigationSectionProps) {
    // read in context from parent component
    const { currentSection, setCurrentSection }: SectionContextType = useContext(SectionContext);

    // find section position
    const position = SECTION_ORDER.indexOf(name);

    // reusable variables for arrow images--they appear a lot
    const arrowAltText: string = "An arrow pointing";
    const arrowSize: number = 30;
    const upArrow: ReactElement = <Image src="/img/double-arrow.png" alt={`${arrowAltText} up`} width={arrowSize} height={arrowSize} />;
    const downArrow: ReactElement = <Image src="/img/double-arrow.png" alt={`${arrowAltText} down`} className="down-arrow" width={arrowSize} height={arrowSize} />

    // only allow tabbing to elements if they are in the currentSection
    const tabIndex: number = currentSection === position ? 0 : -1;

    return <section id={name}>
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