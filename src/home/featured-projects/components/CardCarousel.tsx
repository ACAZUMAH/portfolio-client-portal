import { useMemo } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import type { CardCarouselProps } from "../interfaces";
import classes from "../styles.module.css";
import { ProjectCarouselCard } from "./ProjectCarouselCard";

const MIN_LOOP_SLIDES = 6;

export const CardCarousel = ({
  projects,
  autoplayDelay = 3200,
  showPagination = true,
  onProjectClick,
}: CardCarouselProps) => {
  const slides = useMemo(() => {
    if (projects.length >= MIN_LOOP_SLIDES) return projects;
    return [...projects, ...projects];
  }, [projects]);

  const canLoop = slides.length > 3;

  return (
    <div className={classes["carousel-region"]}>
      <Swiper
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.05,
            spaceBetween: 14,
          },
          640: {
            slidesPerView: 1.65,
            spaceBetween: 18,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 22,
          },
        }}
        grabCursor
        loop={canLoop}
        loopAdditionalSlides={projects.length}
        modules={[Autoplay, Pagination]}
        pagination={showPagination ? { clickable: true } : false}
        speed={900}
      >
        {slides.map((project, index) => (
          <SwiperSlide key={`${project.id}-${index}`}>
            <ProjectCarouselCard
              project={project}
              priority={index === 0}
              onClick={onProjectClick}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
