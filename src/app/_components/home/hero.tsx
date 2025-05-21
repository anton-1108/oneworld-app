import { Button } from "@/components/ui/button";
import { url } from "inspector";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const sliderImages = [
    {
      url: "/public/slide-1.jpg",
      alt: "Young people exploring a city",
      caption: "Explore vibrant cities across the USA",
    },
    {
      url: "/public/slide-2.jpg",
      alt: "Person working in a cafe",
      caption: "Work in exciting environments across America",
    },
    {
      url: "/public/slide-3.png",
      alt: "Group of friends hiking in mountains",
      caption: "Make lifelong connections and memories",
    },
    {
      url: "/public/slide-4.png",
      alt: "Cultural experience in a new city",
      caption: "Immerse yourself in diverse American cultures",
    },
  ];

  return (
    <div className="relative">
      <div className="bg-black/30 absolute  flex items-center ">
        <div className="container px-4 md:px-6">
          <div className="max-w-lg space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Explore America with One World Work & Travel Program
            </h1>
            <p className="text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experience diverse cultures, make lifelong firends, and build your
              career with our work & travel opportunities across the United
              States.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/sign-up">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="/programs"
                className="w-full min-[400px]:w-auto bg-white/80 hover:bg-white"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full min-[400px]:w-auto bg-white/80 hover:bg-white"
                >
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
