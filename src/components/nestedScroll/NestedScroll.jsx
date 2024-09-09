import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";

// Assets
import imgOne from "@/assets/imgs/img-one.png";
import imgTwo from "@/assets/imgs/img-two.png";
import imgThree from "@/assets/imgs/img-three.png";
import imgFour from "@/assets/imgs/img-four.png";
import imgFive from "@/assets/imgs/img-five.png";
import imgSix from "@/assets/imgs/img-six.png";
import actor from "@/assets/imgs/actor.png";
import artist from "@/assets/imgs/artist.png";
import dancer from "@/assets/imgs/dancer.png";
import spotlight from "@/assets/imgs/spotlight.png";
import starform from "@/assets/imgs/starform.png";
import karanCard from "@/assets/imgs/karanTauba.png";
import finalCard from "@/assets/imgs/final-card.png";

const NestedScroll = ({ homeRef }) => {
  const scrollRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: scrollRef.current,
            start: "center center",
            end: "+=300%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        })
        .to(".left-container", {
          xPercent: -135,
          ease: "none",
        })
        .to(
          ".right-container",
          {
            xPercent: 135,
            ease: "none",
          },
          "<"
        )
        .to(
          ".expandable",
          {
            width: "100vw",
            ease: "none",
            duration: 1,
          },
          "<"
        )
        .to(
          ".expandable",
          {
            height: "100.5vh",
            ease: "none",
          },
          "-=0.5"
        )
        .to(
          ".inner-expandable",
          {
            width: "100vw",
            height: "185vh",
            ease: "none",
            delay: 0.2,
          },
          "<"
        )
        .to(
          ".gradient-expandable",
          {
            width: "100vw",
            height: "190vh",
            ease: "none",
            duration: 1,
          },
          "-=0.5"
        )
        .to(
          ".inner-expandable",
          {
            yPercent: -155,
            ease: "none",
          },
          "-=0.5"
        )
        .to(".card-one", {
          rotateZ: 10,
          ease: "none",
        })
        .to(
          ".card-two",
          {
            rotateZ: -10,
            ease: "none",
          },
          "<"
        )
        .to(".card-one", {
          xPercent: -200,
          ease: "none",
        })
        .to(
          ".card-two",
          {
            xPercent: 200,
            ease: "none",
          },
          "<"
        )
        .to(
          ".dramatic-heading",
          {
            yPercent: -200,
            ease: "none",
          },
          "<"
        )
        .from(
          ".final-card",
          {
            yPercent: 200,
            ease: "none",
          },
          "-=0.5"
        );
    }, scrollRef);

    return () => ctx.revert();
  }, [homeRef]);

  return (
    <section
      ref={scrollRef}
      className="relative w-full h-[120vh] flex justify-evenly items-center overflow-hidden"
    >
      <div className="left-container absolute top-1/2 left-0 -translate-y-1/2 w-1/3 h-[70%] flex justify-evenly items-center">
        <div className="part-1 relative w-[45%] h-[85%] flex justify-center items-center">
          <Image
            src={imgOne}
            alt="Image 1"
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="part-2 relative w-[45%] h-full flex flex-col gap-4">
          <div className="flex-1">
            <Image
              src={imgTwo}
              alt="Image 2"
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex-1">
            <Image
              src={imgThree}
              alt="Image 3"
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="expandable absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-[60%] flex flex-col justify-center items-center bg-black border-gray-400 border rounded-xl overflow-hidden">
        <div className="inner-expandable w-full h-full flex justify-center items-center flex-col">
          <h1 className="absolute top-20 left-1/2 -translate-x-1/2 text-[clamp(1.25rem,3vw,3rem)] leading-[3rem] text-white text-center">
            India's most <br />
            <span className="uppercase font-semibold">trusted</span> <br />{" "}
            entertainment <br />
            platform
          </h1>
          <div className="gradient-expandable gradient-border absolute top-[21rem] left-1/2 -translate-x-1/2 min-h-[250vh] w-[80%] flex justify-center items-center rounded-xl">
            <div className="absolute top-[-15%] left-[-5%] w-[350px] h-[350px] rounded-full orange-circle z-[-1]" />
            <div className="absolute top-[15%] right-[-10%] w-[350px] h-[350px] rounded-full pink-circle z-[-1]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[99.5%] h-[99.5%] bg-black rounded-xl flex flex-col items-center overflow-hidden">
              <div className="spotlight absolute top-[-10%] left-1/2 -translate-x-1/2 w-fit h-fit">
                <Image
                  src={spotlight}
                  alt="Spotlight"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-[500px] flex ml-[-4rem]">
                <Image
                  src={actor}
                  alt="Actor"
                  className="w-full h-2/3 object-contain opacity-20"
                />
                <Image
                  src={dancer}
                  alt="Actor"
                  className="w-full h-full object-contain"
                />
                <Image
                  src={artist}
                  alt="Actor"
                  className="w-full h-2/3 object-contain opacity-20"
                />
              </div>
              <div className="w-full h-full my-4 flex flex-col justify-center items-center gap-10">
                <div className="dramatic-heading flex flex-col justify-center items-center gap-10">
                  <h1 className="text-[clamp(2rem,4vw,4rem)] font-medium leading-[3rem] text-white text-center uppercase">
                    THE DRAMATIC TURN
                  </h1>
                  <p className="text-[clamp(0.5rem,1.25vw,1.25rem)] text-white text-center">
                    In a twist of fate, Karan hires Arjun for a major event
                    through StarClinch. The collaboration is <br /> a huge
                    success, with Arjun's engaging presence and Karan's flawless
                    organization.
                  </p>
                </div>
                <div className="cards-container relative w-full flex justify-center items-center gap-14">
                  <div className="card-one w-[400px] h-[500px]">
                    <Image
                      src={karanCard}
                      alt="Card 1"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="card-two w-[400px] h-[500px]">
                    <Image
                      src={starform}
                      alt="Card 2"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="final-card absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[600px]">
                    <Image
                      src={finalCard}
                      alt="Card 3"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-container absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-[70%] flex justify-evenly items-center">
        <div className="part-4 relative w-[45%] h-full flex flex-col gap-4">
          <div className="flex-1">
            <Image
              src={imgFour}
              alt="Image 4"
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex-1">
            <Image
              src={imgFive}
              alt="Image 5"
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="part-5 relative w-[45%] h-[85%] flex justify-center items-center">
          <Image
            src={imgSix}
            alt="Image 6"
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default NestedScroll;
