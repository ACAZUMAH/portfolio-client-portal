import { useEffect, useRef } from "react";
import {
  ActionIcon,
  Badge,
  Box,
  Container,
  Group,
  Text,
} from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { ProjectCard } from "src/components/project-card/ProjectCard";
import { SectionTitle } from "./SectionTitle";
import { useGetProjectQuery } from "../hooks/useGetProjectsQuery";
import classes from "../styles/ProjectExplorerSection.module.css";

gsap.registerPlugin(ScrollTrigger, Draggable);

interface ProjectExplorerSectionProps {
  filteredProjects?: any[];
  selectedStacks?: string[];
  setSelectedStacks?: (stacks: string[]) => void;
  stackOptions?: string[];
}

export const ProjectExplorerSection = ({
  filteredProjects,
  selectedStacks = [],
  setSelectedStacks,
  stackOptions = [],
}: ProjectExplorerSectionProps) => {
  const { projects: fetchedProjects } = useGetProjectQuery({ limit: 16 });
  const projects = filteredProjects ?? fetchedProjects;
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const dragProxyRef = useRef<HTMLDivElement | null>(null);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    const gallery = galleryRef.current;
    const stage = stageRef.current;
    const dragProxy = dragProxyRef.current;
    if (!gallery || !stage || !dragProxy || projects.length === 0) {
      return undefined;
    }

    const cleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-gallery-card");
      const totalCards = cards.length;
      const lastIndex = Math.max(totalCards - 1, 0);

      gsap.set(cards, {
        xPercent: 150,
        opacity: 0,
        rotate: 4,
        scale: 0.72,
        transformOrigin: "50% 56%",
        zIndex: (index) => index + 1,
      });

      const timeline = gsap.timeline();

      cards.forEach((card, index) => {
        const position = index;

        timeline.to(
          card,
          {
            xPercent: 0,
            opacity: 1,
            rotate: 0,
            scale: 1,
            duration: 0.48,
            ease: "power2.out",
          },
          position,
        );

        if (index < lastIndex) {
          timeline.to(
            card,
            {
              xPercent: -150,
              opacity: 0,
              rotate: -5,
              scale: 0.76,
              duration: 0.48,
              ease: "power2.in",
            },
            position + 0.7,
          );
        } else {
          timeline.to(
            card,
            {
              scale: 1,
              opacity: 1,
              duration: 0.5,
              ease: "none",
            },
            position + 0.7,
          );
        }
      });

      const scrollDistance = Math.max(1400, totalCards * 780);
      const trigger = ScrollTrigger.create({
        trigger: gallery,
        start: "top top",
        end: `+=${scrollDistance}`,
        animation: timeline,
        pin: true,
        scrub: 0.65,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate(self) {
          activeIndexRef.current = Math.min(
            lastIndex,
            Math.round(self.progress * lastIndex),
          );
        },
      });

      const scrollToProgress = (progress: number) => {
        const start = trigger.start;
        const end = trigger.end;
        window.scrollTo({
          top: start + (end - start) * gsap.utils.clamp(0, 1, progress),
          behavior: "smooth",
        });
      };

      const scrollToIndex = (index: number) => {
        if (!lastIndex) return;
        scrollToProgress(index / lastIndex);
      };

      const handleNext = () => {
        scrollToIndex(Math.min(lastIndex, activeIndexRef.current + 1));
      };

      const handlePrev = () => {
        scrollToIndex(Math.max(0, activeIndexRef.current - 1));
      };

      const handleScrollEnd = () => {
        if (!trigger.isActive) return;
        scrollToIndex(activeIndexRef.current);
      };

      const nextButtons = gallery.querySelectorAll<HTMLButtonElement>(
        ".project-gallery-next",
      );
      const prevButtons = gallery.querySelectorAll<HTMLButtonElement>(
        ".project-gallery-prev",
      );

      nextButtons.forEach((button) => {
        button.addEventListener("click", handleNext);
        cleanups.push(() => button.removeEventListener("click", handleNext));
      });
      prevButtons.forEach((button) => {
        button.addEventListener("click", handlePrev);
        cleanups.push(() => button.removeEventListener("click", handlePrev));
      });
      ScrollTrigger.addEventListener("scrollEnd", handleScrollEnd);
      cleanups.push(() =>
        ScrollTrigger.removeEventListener("scrollEnd", handleScrollEnd),
      );

      const draggable = Draggable.create(dragProxy, {
        type: "x",
        trigger: stage,
        onPress(this: any) {
          this.startScroll = trigger.scroll();
        },
        onDrag(this: any) {
          trigger.scroll(this.startScroll - this.x * 3.2);
          trigger.update();
        },
        onDragEnd() {
          scrollToIndex(activeIndexRef.current);
        },
      });

      cleanups.push(() => draggable[0]?.kill());
    }, gallery);

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, [projects]);

  const handleStackToggle = (stack: string) => {
    if (!setSelectedStacks) return;
    if (selectedStacks.includes(stack)) {
      setSelectedStacks(selectedStacks.filter((item) => item !== stack));
      return;
    }
    setSelectedStacks([...selectedStacks, stack]);
  };

  return (
    <Box ref={galleryRef} className={classes.sectionBand}>
      <Box className={classes.gallery}>
        <Container size="90%" className={classes.galleryHeader}>
          <Group justify="space-between" align="flex-start" gap="xl">
            <SectionTitle
              eyebrow="Featured Projects"
              title="Scroll through the systems"
              description="These selected projects reflect my passion for blending strategy with creativity - solving real problems through thoughtful execution and impactful storytelling."
            />

            <Group className={classes.galleryHeaderActions} gap="sm">
              <Text className={classes.galleryCounter}>
                {String(projects.length).padStart(2, "0")} projects
              </Text>
              <ActionIcon
                className="project-gallery-next"
                size={52}
                radius="xl"
                variant="subtle"
                aria-label="Next project"
              >
                <IconArrowRight size={24} color="black" />
              </ActionIcon>
            </Group>
          </Group>

          {stackOptions.length ? (
            <Group className={classes.stackFilters} gap="xs">
              {stackOptions.slice(0, 10).map((stack) => (
                <Badge
                  key={stack}
                  component="button"
                  type="button"
                  className={`${classes.stackFilter} ${
                    selectedStacks.includes(stack) ? classes.activeStack : ""
                  }`}
                  onClick={() => handleStackToggle(stack)}
                >
                  {stack}
                </Badge>
              ))}
            </Group>
          ) : null}
        </Container>

        <Box ref={stageRef} className={classes.cardsStage}>
          <ul className={classes.cards}>
            {projects.map((project, index) => (
              <li
                key={project.id}
                className={`${classes.cardItem} project-gallery-card`}
              >
                <ProjectCard project={project} index={index} compact />
              </li>
            ))}
          </ul>
          <div ref={dragProxyRef} className={classes.dragProxy} />
        </Box>

        <Group className={classes.actions} gap="sm">
          <ActionIcon
            className="project-gallery-prev"
            size={52}
            radius="xl"
            variant="filled"
            aria-label="Previous project"
          >
            <IconArrowLeft size={20} />
          </ActionIcon>
          <ActionIcon
            className="project-gallery-next"
            size={52}
            radius="xl"
            variant="filled"
            aria-label="Next project"
          >
            <IconArrowRight size={20} />
          </ActionIcon>
        </Group>
      </Box>
    </Box>
  );
};
