import { RefObject, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useStackedProjectsAnimation = (
  sectionRef: RefObject<HTMLDivElement | null>,
  cardRefs: RefObject<HTMLDivElement[]>,
  itemCount: number,
) => {
  useLayoutEffect(() => {
    if (!sectionRef.current || !itemCount) return undefined;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            y: 96,
            opacity: 0,
            scale: 0.96,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1 - index * 0.025,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              end: "top 28%",
              scrub: 0.7,
            },
          },
        );
      });
    }, sectionRef);

    return () => context.revert();
  }, [cardRefs, itemCount, sectionRef]);
};
