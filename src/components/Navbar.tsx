import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    const scrollToSection = (selector: string | null) => {
      if (!selector) return;
      const target = document.querySelector(selector);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const links = document.querySelectorAll(".header ul a");
    const listeners: Array<{ element: HTMLAnchorElement; handler: EventListener }> = [];

    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      const clickHandler: EventListener = (event) => {
        const e = event as MouseEvent;
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const elem = e.currentTarget as HTMLAnchorElement;
          const section = elem.getAttribute("data-href");
          scrollToSection(section);
        }
      };
      element.addEventListener("click", clickHandler);
      listeners.push({ element, handler: clickHandler });
    });

    const resizeHandler = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      listeners.forEach(({ element, handler }) => {
        element.removeEventListener("click", handler);
      });
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/" className="navbar-title" data-cursor="disable">
          NS
        </a>
        <a
          href="mailto:naman.deep991@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          naman.deep991@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
