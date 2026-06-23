import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "src/components/ui/button";
import { Card } from "src/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "src/components/ui/carousel";

export interface GalleryHoverCarouselItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface GalleryHoverCarouselProps {
  heading?: string;
  demoUrl?: string;
  items?: GalleryHoverCarouselItem[];
  onItemClick?: (item: GalleryHoverCarouselItem) => void;
}

const defaultItems: GalleryHoverCarouselItem[] = [
  {
    id: "item-1",
    title: "Build Modern UIs",
    summary:
      "Create stunning user interfaces with our comprehensive design system.",
    url: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "item-2",
    title: "Computer Vision Technology",
    summary:
      "Powerful image recognition and processing capabilities that allow AI systems to analyze visual information.",
    url: "#",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "item-3",
    title: "Machine Learning Automation",
    summary:
      "Self-improving algorithms that learn from data patterns to automate complex tasks.",
    url: "#",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
  },
];

export default function GalleryHoverCarousel({
  heading = "Featured Projects",
  items = defaultItems,
  onItemClick,
}: GalleryHoverCarouselProps) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;

    const update = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };

    update();
    carouselApi.on("select", update);
    carouselApi.on("reInit", update);

    return () => {
      carouselApi.off("select", update);
      carouselApi.off("reInit", update);
    };
  }, [carouselApi]);

  return (
    <div className="w-full max-w-full" aria-label={heading}>
      <div className="mb-8 flex justify-end">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => carouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="h-10 w-10 rounded-full border-[#cbd8df] bg-white/40 text-[#3b4652] hover:bg-white/80"
            aria-label="Previous featured project"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => carouselApi?.scrollNext()}
            disabled={!canScrollNext}
            className="h-10 w-10 rounded-full border-[#cbd8df] bg-white/40 text-[#3b4652] hover:bg-white/80"
            aria-label="Next featured project"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Carousel
        setApi={setCarouselApi}
        opts={{ breakpoints: { "(max-width: 768px)": { dragFree: true } } }}
        className="relative w-full max-w-full"
      >
        <CarouselContent className="hide-scrollbar w-full max-w-full md:-mr-4 md:ml-4">
          {items.map((item) => (
            <CarouselItem key={item.id} className="ml-6 md:max-w-[350px]">
              <a
                href={item.url}
                className="group relative block h-[300px] w-full md:h-[350px]"
                onClick={() => onItemClick?.(item)}
              >
                <Card className="h-full w-full overflow-hidden rounded-3xl border border-black/10 bg-white/45 shadow-[0_24px_70px_rgba(0,70,67,0.10),inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-xl transition duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_34px_90px_rgba(0,70,67,0.16),inset_0_1px_0_rgba(255,255,255,0.8)]">
                  <div className="relative h-full w-full transition-all duration-500 group-hover:h-1/2">
                    <img
                      width={400}
                      height={300}
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  <div className="absolute bottom-0 left-0 flex w-full flex-col justify-center bg-[#f8f7f1]/95 px-4 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:h-1/2 group-hover:opacity-100">
                    <h3 className="text-lg font-medium text-[#17212b] md:text-xl">
                      {item.title}
                    </h3>
                    <p className="line-clamp-2 text-sm text-[#60707f] md:text-base">
                      {item.summary}
                    </p>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute bottom-2 right-2 mt-2 flex rounded-full border border-gray-200 bg-white/80 px-0 text-primary transition-all duration-500 hover:-rotate-45 hover:text-primary/80"
                      aria-label={`Open ${item.title}`}
                    >
                      <ArrowRight className="size-4" />
                    </Button>
                  </div>
                </Card>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
