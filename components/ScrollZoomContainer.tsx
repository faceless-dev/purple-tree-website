"use client";

import classNames from "classnames";
import { useEffect, useRef } from "react";
import Hero from "./Hero";
import Image from "next/image";

const ZOOM_BREAKPOINT = 13; // Do not touch, not yet figured out how to refactor
const ZOOM_SPEED = 100; // Do not touch, not yet figured out how to refactor

const MAX_SIZE = ZOOM_BREAKPOINT * ZOOM_SPEED; // maximum size of hero image
const HERO_OPACITY_SCALING = 300; // relative to scrollHeight, lower means hero image fades out faster
const HEADER_OPACITY_SCALING = 700; // relative to scrollHeight, lower means header fades in faster
const OFFSET_FACTOR = 0.8; // scales offset to main content
const ZOOM_SPEED_FACTOR = 1.3; // decreases time until main content comes in view

const ScrollZoomContainer = ({ children }: { children: React.ReactNode }) => {
  const zoomRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const afterZoomRef = useRef<HTMLDivElement>(null);

  const currentHeight = zoomRef.current?.clientHeight ?? 0;

  useEffect(() => {
    if (imageRef.current && zoomRef.current && afterZoomRef.current) {
      const anim = () => {
        let scroll = window.scrollY * ZOOM_SPEED_FACTOR;
        let temp = scroll / ZOOM_SPEED;
        let zoom = temp > 1 ? temp : 1;

        if (imageRef.current && zoomRef.current && afterZoomRef.current && headerRef.current && arrowRef.current) {
          if (zoom < ZOOM_BREAKPOINT) {
            const opacity = Math.max(1 - scroll / HERO_OPACITY_SCALING, 0.05);

            imageRef.current.style.transform = `scale(${zoom})`;
            zoomRef.current.style.top = "0px";
            zoomRef.current.style.position = "fixed";

            imageRef.current.style.opacity = opacity * 100 + "%";
            arrowRef.current.style.opacity = opacity * 100 + "%";
            headerRef.current.style.opacity = Math.min(scroll / HEADER_OPACITY_SCALING) * 100 + "%";
          }
        }
      };

      // Resets scroll position on every reload
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }

      document.addEventListener("scroll", () => window.requestAnimationFrame(anim));

      return () => document.removeEventListener("scroll", anim);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        className="top-4 left-5 fixed opacity-0 z-50 p-1 bg-black bg-opacity-90 rounded-xl"
      >
        <Image
          src="/assets/logo.header.svg"
          width={150}
          height={50}
          alt="Purple Tree"
        />
      </div>

      <div
        ref={zoomRef}
        className="h-[100vh] bg-black w-full flex flex-col items-center justify-center fixed top-0 left-0"
      >
        <Hero imageRef={imageRef} />
      </div>

      <div
        ref={arrowRef}
        className="bg-black w-full flex items-center justify-center bottom-[12%] fixed"
      >
        <Image
          src="/assets/arrows_down.svg"
          alt="Arrows down"
          // fill
          width={150}
          height={150}
          className="animate-bounce-slow -mb-12"
        />
      </div>

      <div
        ref={afterZoomRef}
        style={{ top: (MAX_SIZE + currentHeight) * OFFSET_FACTOR + "px" }}
        className={classNames("absolute w-100 overflow-x-auto")}
      >
        {children}
      </div>
    </>
  );
};

export default ScrollZoomContainer;
