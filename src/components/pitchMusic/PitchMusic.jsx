import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";

// Assets
import imageOne from "@/assets/imgs/image-one.png";
import imageTwo from "@/assets/imgs/image-two.png";
import imageThree from "@/assets/imgs/image-three.png";
import imageFour from "@/assets/imgs/image-four.png";
import imageFive from "@/assets/imgs/image-five.png";
import imageSix from "@/assets/imgs/image-six.png";
import pitch from "@/assets/imgs/pitch.png";
import abhi from "@/assets/imgs/abhi.png";
import baakiHai from "@/assets/imgs/baaki-hai.png";
import mereDost from "@/assets/imgs/mere-dost.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const PitchMusic = ({ homeRef }) => {
  const pitchRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: pitchRef.current,
            start: "top top",
            end: "+=100%",
            pin: true,
            anticipatePin: 1,
          },
        })
        .from(".pitch-text", {
          scale: 0,
          ease: "bounce.inOut",
        })
        .from(
          ".pitch-left",
          {
            xPercent: -200,
            ease: "power3.inOut",
          },
          "-=0.5"
        )
        .from(
          ".pitch-right",
          {
            xPercent: 200,
            ease: "power3.inOut",
          },
          "<"
        )
        .from(".abhi-text", {
          scale: 0,
          ease: "bounce.inOut",
        })
        .from(
          ".abhi-left",
          {
            xPercent: -200,
            ease: "power3.inOut",
          },
          "-=0.5"
        )
        .from(
          ".abhi-right",
          {
            xPercent: 200,
            ease: "power3.inOut",
          },
          "<"
        )
        .from(".baaki-text", {
          scale: 0,
          ease: "bounce.inOut",
        })
        .from(
          ".baaki-left",
          {
            xPercent: -200,
            ease: "power3.inOut",
          },
          "-=0.5"
        )
        .from(
          ".baaki-right",
          {
            xPercent: 200,
            ease: "power3.inOut",
          },
          "<"
        )
        .from(".dost-text", {
          scale: 0,
          ease: "bounce.inOut",
        });
    }, pitchRef);

    return () => ctx.revert();
  }, [homeRef]);

  return (
    <section
      ref={pitchRef}
      className="relative w-full h-screen bg-black flex flex-col justify-evenly items-center overflow-hidden"
    >
      {/* First Strip */}
      <div className="w-full h-1/4 flex justify-center items-center">
        <div className="relative flex w-full h-full">
          {/* Left Image */}
          <div className="pitch-left relative w-1/2 flex justify-center items-center">
            <Image
              src={imageOne}
              alt="left-image"
              className="w-full h-full object-cover"
              layout="fill"
            />
          </div>

          {/* Center Text Image */}
          <div className="pitch-text relative w-1/3 h-full flex justify-center items-center">
            <Image
              src={pitch}
              alt="text-image"
              className="w-full h-auto object-contain text-image"
              layout="fill"
            />
          </div>

          {/* Right Image */}
          <div className="pitch-right relative w-1/2 flex justify-center items-center">
            <Image
              src={imageTwo}
              alt="right-image"
              className="w-full h-full object-cover"
              layout="fill"
            />
          </div>
        </div>
      </div>

      {/* Second Strip */}
      <div className="w-full h-1/4 flex justify-center items-center">
        <div className="relative flex w-full h-full">
          {/* Left Image */}
          <div className="abhi-left relative w-[60%] flex justify-center items-center">
            <Image
              src={imageThree}
              alt="left-image"
              className="w-full h-full object-cover"
              layout="fill"
            />
          </div>

          {/* Center Text Image */}
          <div className="abhi-text relative w-1/3 h-full flex justify-center items-center">
            <Image
              src={abhi}
              alt="text-image"
              className="w-full h-auto object-contain text-image"
              layout="fill"
            />
          </div>

          {/* Right Image */}
          <div className="abhi-right relative w-[60%] flex justify-center items-center">
            <Image
              src={imageFour}
              alt="right-image"
              className="w-full h-full object-cover"
              layout="fill"
            />
          </div>
        </div>
      </div>

      {/* Third Strip */}
      <div className="w-full h-1/4 flex justify-center items-center">
        <div className="relative flex justify-between w-full h-full">
          {/* Left Image */}
          <div className="baaki-left relative w-[30%] flex justify-center items-center">
            <Image
              src={imageFive}
              alt="left-image"
              className="w-full h-full object-cover"
              layout="fill"
            />
          </div>

          {/* Center Text Image */}
          <div className="baaki-text relative w-[45%] h-full flex justify-center items-center">
            <Image
              src={baakiHai}
              alt="text-image"
              className="w-full h-auto object-cover text-image"
              layout="fill"
            />
          </div>

          {/* Right Image */}
          <div className="baaki-right relative w-[30%] flex justify-center items-center">
            <Image
              src={imageSix}
              alt="right-image"
              className="w-full h-full object-cover"
              layout="fill"
            />
          </div>
        </div>
      </div>

      <div className="dost-text w-full h-[80px] flex justify-center items-center">
        <Image
          src={mereDost}
          alt="mere-dost-text"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default PitchMusic;
