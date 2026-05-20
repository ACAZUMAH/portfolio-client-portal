import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject, useLayoutEffect } from "react";
import classes from "../styles/index.module.css";

export const useHeroScrollAnimation = (
  heroRef: RefObject<HTMLElement | null>,
) => {
  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.fromTo(
        `.${classes["hero-stage"]}`,
        { y: 26, scale: 0.985, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 0.9, ease: "power3.out" },
      );

      gsap.to(`.${classes["hero-person"]}`, {
        y: -54,
        scale: 1.035,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 0.7,
        },
      });

      gsap.fromTo(
        `.${classes["hero-copy"]}`,
        { y: 0, opacity: 1 },
        {
          y: -28,
          opacity: 0.84,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "65% top",
            scrub: 0.8,
          },
        },
      );

      gsap.to(`.${classes["floating-card-one"]}`, {
        y: -36,
        x: 16,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.to(`.${classes["floating-card-two"]}`, {
        y: -68,
        x: -14,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.to(`.${classes["floating-card-three"]}`, {
        y: -24,
        x: 22,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });
    }, hero);

    return () => context.revert();
  }, [heroRef]);
};
