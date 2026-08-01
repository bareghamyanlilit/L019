import { anim, dateTimeBox } from "@/data/data";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const weddingDate = dateTimeBox;

export function TimeBox() {
  const [timeLeft, setTimeLeft]: any = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    finished: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now: any = new Date();
      const diff = weddingDate - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

        setTimeLeft({
          days: pad(days),
          hours: pad(hours),
          minutes: pad(minutes),
          seconds: pad(seconds),
          finished: false,
        });
      } else {
        setTimeLeft((prev: any) => ({ ...prev, finished: true }));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <motion.section
      {...anim}
      className=" mt-15 flex flex-col gap-5 text-center  text-vrayi  px-0 "
    >
      <div className="">
        {timeLeft.finished ? (
          <div className=" text-2xl font-semibold px-4  rounded-xl shadow">
            Միջոցառումն արդեն սկսվել է
          </div>
        ) : (
          <motion.div {...anim} className="flex items-center justify-center text-5xl font-extralight ">
            <TimeBoxItem label="Օր" value={timeLeft.days} /> |
            <TimeBoxItem label="Ժամ" value={timeLeft.hours} /> |
            <TimeBoxItem label="Րոպե" value={timeLeft.minutes} /> |
            <TimeBoxItem label="Վրկ." value={timeLeft.seconds} />
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

const TimeBoxItem = ({ label, value }: any) => (
  <div className="px text-center ">
    <h2 className="mt-1 text-4xl ">{value}</h2>
    <p className=" text-xl">{label}</p>
  </div>
);
