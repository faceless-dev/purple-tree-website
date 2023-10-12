"use client";

import classNames from "classnames";
import { useEffect, useRef } from "react";
import Hero from "./Hero";

const ScrollZoomContainer = ({ children }: { children: React.ReactNode }) => {
  const zoomRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const afterZoomRef = useRef<HTMLDivElement>(null);

  const ZOOM_BREAKPOINT = 13; // When it should stop zooming in
  const ZOOM_SPEED = 100; // Lower is faster
  const ABSOLUTE = ZOOM_BREAKPOINT * ZOOM_SPEED * 0.8; // Absolute position, when the Element reached maximum size
  const HEIGHT = zoomRef.current?.clientHeight ?? 0;

  useEffect(() => {
    if (imageRef.current && zoomRef.current && afterZoomRef.current) {
      const anim = () => {
        let scroll = window.scrollY;
        let temp = scroll / ZOOM_SPEED;
        let zoom = temp > 1 ? temp : 1;

        if (imageRef.current && zoomRef.current && afterZoomRef.current) {
          if (zoom < ZOOM_BREAKPOINT) {
            imageRef.current.style.transform = `scale(${zoom})`;
            zoomRef.current.style.top = "0px";
            zoomRef.current.style.position = "fixed";
          }
        }
      };

      // Resets scroll position on every reload
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }

      document.addEventListener("scroll", () => window.requestAnimationFrame(anim));

      return document.removeEventListener("scroll", anim);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        ref={zoomRef}
        className="h-[100vh] bg-black w-full grid place-items-center fixed top-0 left-0"
      >
        <Hero imageRef={imageRef} />
      </div>

      <div
        ref={afterZoomRef}
        style={{ top: ABSOLUTE + HEIGHT + "px" }}
        className={classNames("absolute bg-black w-100 overflow-x-auto")}
      >
        {children}
      </div>
    </>
  );
};

export default ScrollZoomContainer;
