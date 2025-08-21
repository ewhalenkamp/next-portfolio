import { ReactElement, useEffect } from "react";
import Image from 'next/image';

interface NavigationSectionProps {
    position: number,
    children?: ReactElement
}

const SECTION_ORDER = ["projects", "home", "history"];

export default function NavigationSection({ position, children }: NavigationSectionProps) {
    const arrowAltText = "An arrow pointing";
    const arrowSize = 30;
    const upArrow = <Image src="/img/double-arrow.png" alt={`${arrowAltText} up`} width={arrowSize} height={arrowSize} />;
    const downArrow = <Image src="/img/double-arrow.png" alt={`${arrowAltText} down`} className="down-arrow" width={arrowSize} height={arrowSize} />

    const scrollTo = (section: number): void => {
        // destination section * view width gives pixel value of top of each section
        const scrollDestination = window.innerHeight * section;
        window.scrollTo({ top: scrollDestination, behavior: "smooth" });

        if (section === SECTION_ORDER.indexOf("history")) {
            // if scrolling to history section, add scroll class to body
            document.body.className = "allow-scroll";
        } else {
            document.body.className = "";
        }
    };

    useEffect(() => {
        // on load, scroll to hero section
        scrollTo(1);
    }, []);

    return <section id={SECTION_ORDER[position]}>
        {/* only render top button if not first section */}
        {position > 0 && <button onClick={() => { scrollTo(position - 1) }}>
            {upArrow}
            <h3>{SECTION_ORDER[position - 1].charAt(0).toUpperCase() + SECTION_ORDER[position - 1].slice(1)}</h3>
            {upArrow}
        </button>}
        {children}
        {/* only render bottom button if not last section */}
        {position < SECTION_ORDER.length - 1 && <button className="lower-button" onClick={() => { scrollTo(position + 1) }}>
            {downArrow}
            <h3>{SECTION_ORDER[position + 1].charAt(0).toUpperCase() + SECTION_ORDER[position + 1].slice(1)}</h3>
            {downArrow}
        </button>
        }
    </section>;
};