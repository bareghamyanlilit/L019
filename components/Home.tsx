"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MusicPlayer } from "./music";
import {
  anim,
  day,
  names,
  txt1,
  txt1Title,
  txt3,
  vazox1,
} from "@/data/data";
import { motion } from "framer-motion";
import { Footer } from "./footer";
import { TimeBox } from "./TimeBox";
import Timeline from "./TimeLine";
import AttendanceGuests from "./RSVP";
import { Calendar } from "./Calendar";

export function Home() {
  const [openEnvelope, setOpenEnvelope] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (openEnvelope) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [openEnvelope]);

  return (
    <div
      className={`${openEnvelope ? "" : "relative h-screen overflow-hidden"}  mx-auto max-w-md FontArTarumianBarakU tracking-[20%] text-center overflow-x-hidden text-vrayi `}
    >
      <div
        onClick={() => setOpenEnvelope(true)}
        className={`${openEnvelope ? "animate-bounceYB" : ""} bg-center bg-cover z-51 w-[160vw] h-[160vw] rounded-4xl absolute left-1/2 top-[0%]  -translate-x-1/2 -translate-y-1/2 rotate-45  shadow-2xl `}
        style={{ backgroundImage: `url("/envelope.png")` }}
      ></div>
      <div
        onClick={() => setOpenEnvelope(true)}
        className={`${openEnvelope ? "animate-bounceYT" : ""} rotate-225 bg-center bg-cover z-50 w-[160vw] h-[160vw] rounded-4xl absolute left-1/2 -bottom-[50%] -translate-x-1/2 -translate-y-1/2   `}
        style={{ backgroundImage: `url("/envelope.png")` }}
      ></div>
      <img
        src="/forenvelope.png"
        alt="envelop"
        onClick={() => setOpenEnvelope(true)}
        className={`${openEnvelope ? "opacity-0" : ""}  transition-all duration-100  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  cursor-pointer  md:w-50 md:h-50 z-60 w-30 h-30 `}
      />

      <p
        onClick={() => setOpenEnvelope(true)}
        className={`${openEnvelope ? "opacity-0" : ""} w-full text-center z-70 absolute left-1/2 top-1/5 -translate-x-1/2 -translate-y-1/2 text-[#f4dfb0] text-3xl tracking-widest `}
      >Դուք ստացել եք <br /> հրավիրատոմս</p>
      <p
        onClick={() => setOpenEnvelope(true)}
        className={`${openEnvelope ? "opacity-0" : ""} z-70 absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 text-[#f4dfb0] text-3xl tracking-widest `}
      >Բացել</p>

      {/* music button */}
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed z-50 p-1  rounded-[20px] right-7 top-7 w-15  h-15 flex justify-center items-center"
        >
          <Image
            src="/icon2.png"
            alt="icon1"
            width={500}
            height={500}
            className=" w-full p-2 object-contain "
          />
        </button>

        <MusicPlayer isPlaying={isPlaying} />
      </div>

      <div className="pt-40  bg-cover bg-center m-auto max-w-md w-full h-max" style={{ backgroundImage: `url("/bg.png")` }}>

        <Image
          src="/ok.png"
          alt="image"
          width={300}
          height={300}
          className="rotate-infinite w-60 h-60  relative "
        />

        <Image
          src="/img1.png"
          alt="icon1"
          width={500}
          height={500}
          className=" absolute w-59.5 h-59.5 ml-30 top-40 object-cover     "
        />

        <motion.h2 {...anim} className="mt-20 mb-25 my-10 text-4xl font-bold ">
          {names}
        </motion.h2>

        <div className=" relative w-full font-bold  text-2xl text-vrayi ">
          <div className="  bg-guyn text-guyn rotate-4 ">

            <div className=" FontArmDecorative whitespace-nowrap animate-marquee-2   -translate-x-full">
              {vazox1}
            </div>
          </div>
          <div className="relative my-15">
            <motion.h2 {...anim} className=" mt-10 text-5xl font-bold ">
              {day}
            </motion.h2>
          </div>
          <div className=" bg-guyn text-guyn rotate-4 ">

            <div className=" FontArmDecorative whitespace-nowrap animate-marquee-2   -translate-x-full">
              {vazox1}
            </div>

          </div>
        </div>

        <div className=" mt-20 py-35 text-guyn grid gap-8 w-full bg-cover bg-no-repeat  bg-center" style={{ backgroundImage: `url("/bg-1.png")` }} >
          <motion.h2 {...anim} className="FontArmHmk text-2xl font-bold">
            {txt1Title}
          </motion.h2>
          <motion.p {...anim} className="  text-2xl ">
            {txt1}
          </motion.p>
        </div>
        <Timeline />


        <TimeBox />
        
        <div className=" mt-25  w-full font-bold  text-2xl text-vrayi ">

          <Image
            src="/img2.png"
            alt="icon1"
            width={500}
            height={500}
            className=" w-60 -rotate-5 ml-10 object-cover  mb-20    "
          />

          <Image
            src="/img3.png"
            alt="icon1"
            width={500}
            height={500}
            className=" w-60  rotate-5  mr-10 object-cover mb-10  ml-30"
          />
        </div> 
        

        <Footer />
      </div>
    </div>
  );
}
