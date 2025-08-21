"use client"
import Header from "@/components/header";
import NavigationSection from "@/components/navigationSection";
import Image from 'next/image';

export default function Page() {
    return <>
        <NavigationSection position={0}></NavigationSection>
        <NavigationSection position={1}>
            <div id="hero-content">
                <h1>Erik Halenkamp</h1>
                <h2>Full Stack Software Engineer</h2>
                <div id="hero-imgs">
                    <a href="https://stackoverflow.com/users/22618191/ewhalenkamp"><Image src="/img/stack-overflow-icon.png" alt="Stack Overflow Profile" width={50} height={50} /></a>
                    <a href="https://github.com/ewhalenkamp"><Image src="/img/github-icon.png" alt="Github Profile" width={50} height={50} /></a>
                    <a href="https://www.linkedin.com/in/erik-h-4b49451a6"><Image src="/img/linkedin-icon.png" alt="LinkedIn Profile" width={50} height={50} /></a>
                </div>
            </div>
        </NavigationSection>
        <NavigationSection position={2}>
        </NavigationSection>
    </>
}