"use client";

import { anim, days, program } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Timeline() {
  const [progress, setProgress] = useState(0);
  const [height, setHeight] = useState(2000);

  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (timelineRef.current) {
        setHeight(timelineRef.current.scrollHeight);
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = timelineRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();

      const sectionTop = window.scrollY + rect.top;
      const sectionHeight = section.offsetHeight;

      const start = sectionTop - window.innerHeight / 2;
      const end = sectionTop + sectionHeight - window.innerHeight / 2;

      const progress = Math.min(
        Math.max((window.scrollY - start) / (end - start), 0),
        1
      );
      setProgress(progress);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
      const SVG_TOP_OFFSET = 200;

  return (
    <section className="relative -mt-15 overflow-hidden py-5">

      {/* SVG PATH */}

<svg
  className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-0"
  style={{ top: SVG_TOP_OFFSET }}
  width="250"
  height={height}
  viewBox={`0 0 250 ${height}`}
>
  <path
    id="timeline-path"
    d={`
      M125 0
      C220 ${height * 0.08}
        30 ${height * 0.16}
        125 ${height * 0.24}

      C220 ${height * 0.32}
        30 ${height * 0.40}
        125 ${height * 0.48}

      C220 ${height * 0.56}
        30 ${height * 0.64}
        125 ${height * 0.72}

      C220 ${height * 0.80}
        30 ${height * 0.88}
        125 ${height}
    `}
    fill="none"
    stroke="#999"
    strokeWidth="2"
    strokeDasharray="8 8"
  />
</svg>

      {/* HEART */}
      <Heart
        progress={progress}
      />

      {/* CONTENT */}
      <div
        ref={timelineRef}
        className="relative z-9  py-5 tracking-[25%]"
      >

        <div className=" relative z-9 mx-auto w-max text-center text-4xl mb-20">

          <h1 className=" text-3xl mt-15 mb-9">{days[0]}</h1>
          <div className="flex gap-4">
            <span className="mr-10">{days[1]}</span>
            <span></span>
            <span className="ml-10">{days[3]}</span>
          </div>
        </div>

        <div className="flex flex-col gap-24">
          {program.map((el: any, i: number) => (
            <div
              key={i}
              className={`flex items-center justify-end ${i % 2 === 0 ? "justify-start" : ""
                }`}
            >
              <Link
                href={
                  el.address}
                className={`px-3 ${i % 2 === 0
                  ? "text-start"
                  : "text-end"
                  }`}
              >
                <motion.h2
                  {...anim}
                  className="text-4xl"
                >
                  {el.time}
                </motion.h2>

                <motion.p
                  {...anim}
                  className="text-2xl  my-2"
                >
                  {el.title}
                </motion.p>

                <motion.h3
                  {...anim}
                  className={`flex gap-2 items-center text-lg ${i % 2 !== 0
                    ? "flex-row-reverse"
                    : ""
                    }`}
                >
                  <span>Հասցե</span>

                  <Image
                    src="/icon3.png"
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </motion.h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Heart({ progress }: { progress: number }) {
  const [position, setPosition] = useState({
    x: 125,
    y: 0,
  });

  const SVG_TOP_OFFSET = 200;

  useEffect(() => {
    const path = document.getElementById(
      "timeline-path"
    ) as SVGPathElement | null;

    if (!path) return;

    const length = path.getTotalLength();

    const point = path.getPointAtLength(
      length * Math.min(progress, 1)
    );

    setPosition({
      x: point.x,
      y: point.y,
    });
  }, [progress]);

  return (
    <div
      className="absolute z-50"
      style={{
        left: `calc(50% + ${position.x - 125}px)`,
        top: position.y + SVG_TOP_OFFSET,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="relative w-14 h-14">
        <Image
          src="/icon2.png"
          alt="heart"
          fill
        />

        <span className="absolute inset-0 flex items-center justify-center text-[#580000] font-bold text-sm">
          {days[2]}
        </span>
      </div>
    </div>
  );
}