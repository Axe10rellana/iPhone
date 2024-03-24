//gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

//utils
import { rightImg, watchImg } from "../utils";

//components
import { VideoCarousel } from ".";

const Highlights = () => {
  //gsap
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);

  return (
    <section
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
      id="highlights"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1 className="section-heading" id="title">
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img
                className="pointer-events-none select-none ml-2"
                src={watchImg}
                alt="Watch"
              />
            </p>
            <p className="link">
              Watch the event
              <img
                className="pointer-events-none select-none ml-2"
                src={rightImg}
                alt="Right"
              />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
