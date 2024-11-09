"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

export default function Home() {
  // State to manage menu toggle
  const [isNavActive, setIsNavActive] = useState(false);
  
  // Ref for the toggle button
  const menuToggleRef = useRef<HTMLButtonElement | null>(null);
  
  // Toggle function for navLinks active state
  const handleMenuToggle = () => {
    setIsNavActive(!isNavActive);
  };
  
  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsNavActive(false);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <h1>Ahmed Yaqoob Dhedhi</h1>
          </div>
          <ul className={`nav-links ${isNavActive ? 'active' : ''}`}>
            <li><Link href="#education" onClick={handleLinkClick}>Education</Link></li>
            <li><Link href="#skills" onClick={handleLinkClick}>Skills</Link></li>
            <li><Link href="#work-experience" onClick={handleLinkClick}>Experience</Link></li>
          </ul>
          <button
            className="menu-toggle"
            id="menu-toggle"
            onClick={handleMenuToggle}
          >
            ☰
          </button>
        </nav>
      </header>

      <main>
        <section id="image">
          <Image src="/profile.jpg" alt="profile-picture" width={500} height={500} />
        </section>

        <section id="education">
          <h2>Education</h2>
          <p>Foundation in Business Management 2024-Now (Greenwich University)</p>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>NextJS</li>
          </ul>
        </section>

        <section id="work-experience">
          <h2>Work Experience</h2>
          <p>Front End Intern at Code Alpha (July 2024 - August 2024)</p>
        </section>

        <button id="toggle">Toggle Sections</button>
      </main>
    </>
  );
}
