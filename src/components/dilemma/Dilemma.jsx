import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";

// Assets
import pageBg from "@/assets/imgs/page-bg.png";
import crown from "@/assets/imgs/crown.png";
import raju from "@/assets/imgs/raju-bg.png";
import stickerOne from "@/assets/imgs/sticker-one.png";
import stickerTwo from "@/assets/imgs/sticker-two.png";
import stickerThree from "@/assets/imgs/sticker-three.png";
import stickerFour from "@/assets/imgs/sticker-four.png";
import frameOne from "@/assets/imgs/frame-one.png";
import frameTwo from "@/assets/imgs/frame-two.png";
import frameThree from "@/assets/imgs/frame-three.png";
import scooty from "@/assets/imgs/scooty.png";
import rancho from "@/assets/imgs/rancho.png";
import glasses from "@/assets/imgs/glasses.png";
import leftHand from "@/assets/imgs/left-hand.png";
import rightHand from "@/assets/imgs/right-hand.png";
import gradientTwo from "@/assets/imgs/gradient-two.png";
import allIzzWell from "@/assets/imgs/all-izz-well.png";

const Dilemma = ({ homeRef }) => {
  const pageRef = useRef(null);
  const dilemmaRef = useRef(null);
  const ordinaryRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: dilemmaRef.current,
            start: "top top",
            end: "bottom bottom",
            markers: true,
          },
        })
        // .from(".main-heading, .main-subheading", {
        //   yPercent: 150,
        //   ease: "none",
        //   duration: 0.25,
        // })
        // .from(
        //   ".crown",
        //   {
        //     yPercent: -150,
        //     ease: "none",
        //     duration: 0.25,
        //   },
        //   "<"
        // )
        .from(
          ".raju-bg",
          {
            yPercent: 150,
            ease: "none",
            duration: 0.5,
          },
          "<"
        )
        .from(
          ".sticker-one, .sticker-two",
          {
            xPercent: -150,
            ease: "none",
            duration: 0.5,
          },
          "<"
        )
        .from(
          ".sticker-three, .sticker-four",
          {
            xPercent: 150,
            ease: "none",
            duration: 0.5,
          },
          "<"
        );
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ordinaryRef.current,
            start: "top top",
            end: "+=100%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        })
        .to(".scooty", {
          xPercent: 150,
          ease: "none",
          duration: 0.5,
        })
        .to(
          ".frame-two",
          {
            xPercent: -100,
            ease: "none",
            duration: 0.2,
          },
          "-=0.5"
        )
        .to(
          ".frame-three",
          {
            xPercent: -100,
            ease: "none",
            duration: 0.2,
          },
          "-=0.25"
        );
    }, pageRef);

    return () => ctx.revert();
  }, [homeRef]);

  return (
    <section
      ref={pageRef}
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      <section
        ref={dilemmaRef}
        className="dilemma-section relative w-full h-screen flex flex-col justify-center items-center pt-10 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={pageBg}
            alt="page-bg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overlay absolute top-0 left-0 bg-black w-full h-full opacity-80" />
        <div className="dilemma-heading-container relative w-fit h-fit p-10 flex flex-col justify-center items-center overflow-hidden leading-tight">
          <div className="crown absolute top-0 left-0 w-[100px] h-[100px]">
            <Image
              src={crown}
              alt="crown"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="main-heading gothic text-[clamp(3.5rem,7vw,7rem)] font-bold text-white tracking-wide uppercase">
            Raju&apos;s <span className="text-[#FF0087]">Birthday</span> Dilemma
          </h1>
          <p className="main-subheading text-[clamp(0.25rem,1.25vw,1.25rem)] font-light leading-snug text-white text-center">
            Raju&apos;s birthday was around the corner. And his friends - Farhan
            and <br /> Rancho wanted to do something special to lift up his
            spirits.
          </p>
        </div>
        <div className="dilemma-image-container relative w-full h-[70%] flex justify-center items-center">
          <div className="raju-bg absolute bottom-0 right-0 w-full h-full mix-blend-hard-light">
            <Image
              src={raju}
              alt="raju"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute top-[20%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] overflow-hidden">
            <Image
              src={stickerOne}
              alt="sticker-one"
              className="sticker-one w-full h-full object-contain"
            />
          </div>
          <div className="absolute top-[20%] right-[20%] -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] overflow-hidden">
            <Image
              src={stickerThree}
              alt="sticker-three"
              className="sticker-three w-full h-full object-contain"
            />
          </div>
          <div className="absolute bottom-[-10%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-[250px] h-[200px] overflow-hidden">
            <Image
              src={stickerTwo}
              alt="sticker-two"
              className="sticker-two w-full h-full object-contain"
            />
          </div>
          <div className="absolute bottom-[0%] right-[10%] -translate-x-1/2 -translate-y-1/2 w-[250px] h-[200px] overflow-hidden">
            <Image
              src={stickerFour}
              alt="sticker-four"
              className="sticker-four w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
      <section
        ref={ordinaryRef}
        className="relative w-full h-screen flex flex-col justify-center items-center py-10 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={pageBg}
            alt="page-bg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overlay absolute top-0 left-0 bg-black w-full h-full opacity-40" />
        <div className="ordinary-heading-container relative w-fit h-fit p-10 flex flex-col justify-center items-center overflow-hidden leading-tight">
          <h1 className="ord-heading gothic text-[clamp(3.5rem,7vw,7rem)] font-bold text-white tracking-wide uppercase">
            Beyond the ordinary
          </h1>
          <p className="ord-subheading text-[clamp(0.25rem,1.25vw,1.25rem)] font-light leading-snug text-white text-center">
            Parties, trips, gifts—everything felt too conventional. They needed
            an <br /> idea that would truly make Raju smile and feel special.
          </p>
        </div>
        <div className="ordinary-image-container relative w-[70%] h-[70%] flex justify-center items-center rounded-2xl overflow-hidden">
          <div className="frame-one absolute top-0 left-0 w-full h-full">
            <Image
              src={frameOne}
              alt="frame-one"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="frame-two absolute top-0 left-full w-full h-full z-[2]">
            <Image
              src={frameTwo}
              alt="frame-two"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="frame-three absolute top-0 left-[100%] w-full h-full z-[3]">
            <Image
              src={frameThree}
              alt="frame-three"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="scooty absolute bottom-0 left-0 w-[400px] h-[300px] z-[3]">
            <Image
              src={scooty}
              alt="scooty"
              layout="fill"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
      <section className="relative w-full h-screen flex flex-col justify-center items-center py-10 overflow-hidden"></section>
      <section className="relative w-full h-screen flex items-center py-10 overflow-hidden bg-black">
        <div className="absolute bottom-0 left-0 w-[300px] h-[380px]">
          <Image
            src={rancho}
            alt="rancho"
            layout="fill"
            className="w-full h-full"
          />
          {/* <Image src={glasses} alt="glasses" layout="fill" className="w-full h-full" /> */}
        </div>
        <div className="h-full w-1/3 flex flex-col justify-between gap-4">
          <div className="w-[430px] h-[110px] flex px-2 items-center bg-[#EA0079]">
            <h1 className="gothic text-[clamp(2rem,6vw,6rem)] font-bold text-white uppercase">
              Starclinch
            </h1>
          </div>
          <div className="w-[420px] h-[110px] flex px-2 items-center bg-[#E21511]">
            <h1 className="gothic text-[clamp(2rem,6vw,6rem)] font-bold text-white uppercase">
              Starclinch
            </h1>
          </div>
          <div className="w-[410px] h-[110px] flex px-2 items-center bg-[#EA0079]">
            <h1 className="gothic text-[clamp(2rem,6vw,6rem)] font-bold text-white uppercase">
              Starclinch
            </h1>
          </div>
          <div className="w-[400px] h-[110px] flex px-2 items-center bg-[#E21511]">
            <h1 className="gothic text-[clamp(2rem,6vw,6rem)] font-bold text-white uppercase">
              Starclinch
            </h1>
          </div>
          <div className="w-[400px] h-[110px] flex px-2 items-center bg-[#EA0079]">
            <h1 className="gothic text-[clamp(2rem,6vw,6rem)] font-bold text-white uppercase">
              Starclinch
            </h1>
          </div>
          <div className="w-[400px] h-[110px] flex px-2 items-center bg-[#E21511]">
            <h1 className="gothic text-[clamp(2rem,6vw,6rem)] font-bold text-white uppercase">
              Starclinch
            </h1>
          </div>
        </div>
        <div className="h-full w-2/3 flex flex-col items-center justify-between gap-4">
          <div className="flex flex-col justify-center w-fit h-fit">
            <h1 className="gothic text-[clamp(3.5rem,8vw,8rem)] text-white uppercase leading-[1]">
              Rancho&apos;s <br />{" "}
              <span className="text-[#E21511]">'Genius'</span> Plan
            </h1>
            <p className="text-[clamp(0.25rem,1.25vw,1.25rem)] font-light text-white tracking-wide">
              Rancho had a lightbulb moment, 'Why not <br /> use StarClinch?'
              StarClinch lets you book <br /> celebrities effortlessly, turning
              any event <br /> into a standout experience.
            </p>
          </div>
          <div className="relative w-[350px] h-[400px]">
            <Image
              src={leftHand}
              alt="left-hand"
              className="w-full h-full object-cover"
            />
            <Image
              src={rightHand}
              alt="right-hand"
              className="absolute bottom-[-10%] right-[-10%] w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="relative w-full h-screen flex justify-between items-center py-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-[0]">
          <Image
            src={pageBg}
            alt="page-bg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 w-fit h-fit z-[1]">
          <Image
            src={gradientTwo}
            alt="page-gradient"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="overlay absolute top-0 left-0 bg-black w-full h-full opacity-70 z-[0]" />
        <div className="w-1/2 h-full px-10 flex flex-col justify-center gap-4 z-[2]">
          <div className="flex flex-col justify-center w-fit h-fit">
            <h1 className="gothic text-[clamp(4.5rem,9vw,9rem)] text-white uppercase leading-[0.8]">
              All Izz Well
            </h1>
            <h3 className="gothic text-[clamp(1.25rem,3.25vw,3.25rem)] text-white uppercase">
              with starclinch
            </h3>
          </div>
          <p className="text-[clamp(0.55rem,1.5vw,1.5rem)] font-light text-white tracking-wide leading-tight">
            Through StarClinch, they quickly booked a <br /> top singer, making
            Raju&apos;s birthday a <br />{" "}
            <span className="font-semibold">'chamatkar'</span> event. His smile
            returned, and <br /> the day was a resounding success.
          </p>
        </div>
        <div className="w-1/2 h-full px-10 flex flex-col justify-center gap-4 z-[2]">
          <Image
            src={allIzzWell}
            alt="all-izz-well"
            className="w-full h-full object-contain"
          />
        </div>
      </section>
    </section>
  );
};

export default Dilemma;
