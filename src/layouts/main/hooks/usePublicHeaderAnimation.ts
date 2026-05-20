import { RefObject, useEffect } from "react";

export const usePublicHeaderAnimation = (
  headerRef: RefObject<HTMLElement | null>,
) => {
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return undefined;

    let ticking = false;

    const syncHeaderState = () => {
      header.classList.toggle("is-availability", window.scrollY > 48);
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(syncHeaderState);
    };

    syncHeaderState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerRef]);
};
