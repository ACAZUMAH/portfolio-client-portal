import { ArrowRight } from "lucide-react";
import React from "react";
import type { FeaturedProjectCard } from "../interfaces";
import classes from "../styles.module.css";
import { Conditional } from "@/components/conditional";

interface ProjectCarouselCardProps {
  project: FeaturedProjectCard;
  priority?: boolean;
  onClick?: (project: FeaturedProjectCard) => void;
}

export const ProjectCarouselCard: React.FC<ProjectCarouselCardProps> = ({
  project,
  priority = false,
  onClick,
}) => {
  return (
    <a
      href={project.href}
      className={classes["project-hover-link"]}
      aria-label={`View ${project.title}`}
      onClick={() => onClick?.(project)}
    >
      <article className={classes["project-hover-card"]}>
        <div className={classes["project-hover-image-panel"]}>
          <img
            width={500}
            height={420}
            src={project.image}
            alt={project.imageAlt}
            className={classes["project-hover-image"]}
            loading={priority ? "eager" : "lazy"}
          />
          <div className={classes["project-hover-fade"]} />
          <div className={classes["project-hover-top-badge"]}>
            {project.status}
          </div>
        </div>

        <div className={classes["project-hover-content"]}>
          <div className={classes["project-hover-meta-row"]}>
            <Conditional condition={project.meta}>
              <span className={classes["project-hover-meta"]}>
                {project.meta}
              </span>
            </Conditional>
            <span className={classes["project-hover-index-dot"]} />
          </div>

          <h3 className={classes["project-hover-title"]}>{project.title}</h3>
          <p className={classes["project-hover-summary"]}>{project.summary}</p>

          <div className={classes["project-hover-footer"]}>
            {project.stack.length ? (
              <div className={classes["project-hover-stack"]}>
                {project.stack.slice(0, 3).map((stack) => (
                  <span
                    className={classes["project-hover-stack-chip"]}
                    key={stack}
                  >
                    {stack}
                  </span>
                ))}
              </div>
            ) : null}

            <span className={classes["project-hover-action"]}>
              <span className={classes["project-hover-action-label"]}>
                View
              </span>
              <ArrowRight className={classes["project-hover-action-icon"]} />
            </span>
          </div>
        </div>
      </article>
    </a>
  );
};
