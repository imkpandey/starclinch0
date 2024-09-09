"use client";
import dynamic from "next/dynamic";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Canvas } from "@react-three/fiber";
import { Center, Float, Scroll, ScrollControls } from "@react-three/drei";
import SplitType from "split-type";
import Stars from "@/components/canvas/stars";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Arjun from "@/assets/imgs/arjun.png";
import Karan from "@/assets/imgs/karan.png";
import NestedScroll from "@/components/nestedScroll/NestedScroll";
import PitchMusic from "@/components/pitchMusic/PitchMusic";
import Dilemma from "@/components/dilemma/Dilemma";
import imageGrid from "@/assets/imgs/image-grid.png";

const Logo = dynamic(() => import("@/components/canvas/logo"), {
  ssr: false,
});

const Common = dynamic(() => import("@/components/canvas/common"), {
  ssr: false,
});

const View = dynamic(
  () => import("@react-three/drei").then((mod) => mod.View),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-96 w-full flex-col items-center justify-center">
        <svg
          style={{ width: 40, height: 40 }}
          className="-ml-1 mr-3 h-5 w-5 animate-spin text-black"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    ),
  }
);

export default function Home() {
  const homeRef = useRef();
  const modelRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const heading = new SplitType(".heading");
      const headingChars = heading.chars;

      gsap.set(".back-image", {
        opacity: 0.2,
      });

      gsap.from(headingChars, {
        yPercent: -200,
        stagger: 0.01,
        duration: 2,
        delay: 1,
        ease: "power4.inOut",
      });

      gsap.from(".subheading", {
        yPercent: -200,
        duration: 1.5,
        delay: 2.5,
        ease: "power4.inOut",
      });

      const tl = gsap.timeline();

      tl.to(".back-image", {
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
        opacity: 0,
        duration: 1,
        ease: "power4.inOut",
      });

      // tl.to(".bg", {
      //   scrollTrigger: {
      //     trigger: ".hero-section",
      //     start: "top center",
      //     end: "bottom center",
      //     scrub: true,
      //     // markers: true,
      //   },
      //   opacity: 0,
      //   duration: 1,
      //   ease: "power4.inOut",
      // });
    }, homeRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={homeRef}
      className="text-white w-full min-h-screen flex flex-col items-center gap-14"
    >
      <Navbar />
      <section className="hero-section w-full h-screen flex justify-center items-center">
        <div className="relative top-[-3rem] w-fit h-fit flex flex-col items-center justify-center">
          <div className="w-fit h-fit absolute top-[-4rem] text-white overflow-hidden">
            <h1 className="subheading text-[clamp(1rem,1.75vw,1.75rem)] font-light tracking-tighter text-center">
              India's Foremost Talent Hub <br />
              <span className="gradient-bg">
                <span className="text-white font-thin italic">From</span>{" "}
                <span className="font-medium">Discovery to Performance</span>
              </span>
            </h1>
          </div>
          <h1 className="heading text-[clamp(4rem,15vw,15rem)] font-bold tracking-tighter text-center opacity-90">
            StarClinch
          </h1>
        </div>
        <div className="fixed top-0 left-0 w-full h-screen">
          <Image
            src="/bg.jpg"
            alt="bg"
            width={1024}
            height={1024}
            className="back-image w-full h-full object-cover"
          />
        </div>
        <div className="fixed top-0 left-0 w-full h-screen">
          <Canvas position={[0, 0, -1]}>
            <Stars />
          </Canvas>
          <div className="fixed top-0 left-0 w-full h-full z-[2]">
            <View orbit className="w-full h-full overflow-hidden">
              <Common controls />
              <Float floatIntensity={1.5} floatingRange={[-0.25, 0.25]}>
                <Center>
                  <Logo scale={3.5} homeRef={homeRef} />
                </Center>
              </Float>
            </View>
          </div>
        </div>
      </section>
      <section className="content-section bg-black text-white w-full h-screen flex flex-col justify-center items-center gap-14">
        <div className="problem-heading w-fit h-fit flex flex-col justify-center items-center">
          <h1 className="p-heading text-[clamp(1.5rem,5vw,5rem)] font-semibold tracking-tighter text-center">
            PROBLEM FACED
          </h1>
          <p className="sub-heading w-[70%] text-[clamp(0.7rem,1.25vw,1.25rem)] font-light text-center text-gray-400">
            A rising social media influencer, lands a promising deal. But his
            dreams are shattered when the company vanishes without paying him,
            leaving him scammed and disheartened.
          </p>
        </div>
        <div className="cards-container w-full h-full flex justify-center items-center gap-16">
          <div className="problem-card_one relative w-[30%] h-full bg-[#EF5919] rounded-xl flex flex-col justify-between p-6 overflow-hidden">
            <div className="absolute bottom-[-10%] right-[-20%] w-full h-[70%]">
              <Image
                src={Arjun}
                alt="Arjun"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-[clamp(1.5rem,4vw,4rem)] drop-shadow-[6px_6px_var(--tw-shadow-color)] shadow-[#970F0F] leading-[4rem] font-semibold tracking-tighter uppercase">
              Social <br /> Media <br /> Influencer
            </h1>
            <p className="text-[clamp(0.7rem,1.1vw,1.1rem)] leading-tight font-light text-gray-200 w-[55%]">
              <span className="text-white text-[clamp(1.25rem,2vw,2rem)] font-semibold">
                Arjun
              </span>
              , a rising social media influencer, lands a promising deal. But
              his dreams are shattered when the company{" "}
              <span className="text-white font-medium">
                {" "}
                vanishes without paying him, leaving him scammed and
                disheartened.
              </span>
            </p>
          </div>
          <div className="problem-card_two relative w-[30%] h-full bg-[#FD2D7D] rounded-xl flex flex-col gap-2 p-6 overflow-hidden">
            <div className="absolute bottom-[-10%] right-[-20%] w-full h-[70%]">
              <Image
                src={Karan}
                alt="Arjun"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-[clamp(1.5rem,4vw,4rem)] drop-shadow-[6px_6px_var(--tw-shadow-color)] shadow-[#970F0F] leading-[4rem] font-semibold tracking-tighter uppercase">
              Talent <br /> Acquirer
            </h1>
            <p className="text-[clamp(0.7rem,1.1vw,1.1rem)] leading-tight font-light text-gray-200 w-[55%]">
              <span className="text-white text-[clamp(1.25rem,2vw,2rem)] font-semibold">
                Karan
              </span>
              , a seasoned talent acquirer, faces a nightmare.
              <span className="text-white font-medium">
                {" "}
                Celebrities cancel at the last minute
              </span>
              , turning his meticulously planned events into chaotic disasters
              and threatening his reputation.
            </p>
          </div>
        </div>
      </section>
      {/* <Comp1 /> */}
      <NestedScroll homeRef={homeRef} />
      {/* <section className="relative bg-black w-full h-[120vh] flex items-center overflow-hidden"></section> */}
      <section className="bg-black w-full h-[300vh]"></section>
      <PitchMusic homeRef={homeRef} />
      <section className="bg-black w-full h-screen"></section>
      {/* <section className="bg-black w-full h-screen"></section> */}
      <Dilemma homeRef={homeRef} />
      <section className="relative bg-black w-full h-screen flex flex-col px-10 leading-tight">
        <div className="w-full h-fit flex items-center gap-6">
          <h1 className="gothic text-[clamp(8.25rem,14.25vw,14.25rem)] text-white uppercase">
            STAR&nbsp;CLINCH
          </h1>
          <h5 className="text-[clamp(1rem,2vw,2rem)] font-light tracking-wide leading-tight">
            Changing the Way
            <br />
            India Celebrates
          </h5>
        </div>
        <h3 className="text-[clamp(1rem,1.75vw,1.75rem)] font-light tracking-wide leading-tight">
          <span className="italic">f</span>rom{" "}
          <span className="italic">"cliche"</span> to{" "}
          <span className="font-semibold">"wow"</span> -
          <span className="font-semibold"> StarClinch</span>
          <br /> makes every celebration shine.
        </h3>
        <div className="w-full h-fit flex items-center">
          <Image
            src={imageGrid}
            alt="image-grid"
            className="w-full h-full object-contain"
          />
        </div>
      </section>
    </main>
  );
}
