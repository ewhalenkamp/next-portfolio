"use client"
import NavigationSection from "@/components/navigationSection";
import Image from 'next/image';
import { useState } from "react";
import SectionContext from "@/components/sectionContext";

export default function Page() {
    const [currentSection, setCurrentSection] = useState<number>(1);

    return <>
        <SectionContext value={{ currentSection, setCurrentSection }}>
            <NavigationSection position={0}></NavigationSection>
            <NavigationSection position={1}>
                <div id="hero-content">
                    <h1>Erik Halenkamp</h1>
                    <h2>Full Stack Software Engineer</h2>
                    <div id="hero-imgs">
                        <a href="https://stackoverflow.com/users/22618191/ewhalenkamp" target="_blank" rel="noopener noreferrer" tabIndex={currentSection === 1 ? 0 : -1}><Image src="/img/stack-overflow-icon.png" alt="Stack Overflow Profile" width={50} height={50} /></a>
                        <a href="https://github.com/ewhalenkamp" target="_blank" rel="noopener noreferrer" tabIndex={currentSection === 1 ? 0 : -1}><Image src="/img/github-icon.png" alt="Github Profile" width={50} height={50} /></a>
                        <a href="https://www.linkedin.com/in/erik-h-4b49451a6" target="_blank" rel="noopener noreferrer" tabIndex={currentSection === 1 ? 0 : -1}><Image src="/img/linkedin-icon.png" alt="LinkedIn Profile" width={50} height={50} /></a>
                    </div>
                </div>
            </NavigationSection>
            <NavigationSection position={2}>
                <div id="timeline">
                    <Image src="/img/timeline.png" alt={`A visual timeline of Erik's career as a Software Engineer. A single, vertical white line shows his progress as it passes through various icons until it reaches a branching path, followed by a text box containing the phrase, "What's Next?"`} width={539} height={1242} />
                </div>
            </NavigationSection>
        </SectionContext>
    </>
}