"use client";

import { FaRegHeart } from "react-icons/fa";

export function Calendar({ year = 2025, month = 9, highlightDay = 8 }) {
  const monthNames = [
    "Հունվար",
    "Փետրվար",
    "Մարտ",
    "Ապրիլ",
    "Մայիս",
    "Հունիս",
    "Հուլիս",
    "Օգոստոս",
    "Սեպտեմբեր",
    "Հոկտեմբեր",
    "Նոյեմբեր",
    "Դեկտեմբեր",
  ];
  const weekDays = ["Կիր","Երկ", "Երք", "Չրք", "Հնգ", "Ուրք", "Շբթ"];

  const firstDay = new Date(year, month - 1, 1).getDay(); // 0=Կիրակի, 1=Երկ
  const daysInMonth = new Date(year, month, 0).getDate();

  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) calendarDays.push(i);

  return (
    <div className=" my-20 ">
      <div className="mt-20 py-20  text-center  bg-cover bg-no-repeat  bg-center" style={{ backgroundImage: `url("/bg-1.png")` }}>
        <h2 className="text-2xl  font-bold text-guyn tracking-[15%] mb-1">
          {monthNames[month - 1]}
        </h2>
        <p className="text-2xl  text-guyn tracking-[10%] font-bold mb-4">{year}</p>

        <div className=" p-2 grid grid-cols-7 mb-2 text-sm font-medium text-guyn">
          {weekDays.map((day) => (
            <div className=" font-bold " key={day}>
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 font-bold px-5 gap-2 text-base">
          {calendarDays.map((day, idx) =>
            day ? (
              <div
                key={idx}
                className={`  py-2 rounded-full ${
                  day === highlightDay
                    ? " text-guyn text-xl flex items-center justify-center"
                    : "text-guyn "
                }`}
              >
                {day === highlightDay ? <FaRegHeart color="white" /> : day}
              </div>
            ) : (
              <div key={idx}></div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
