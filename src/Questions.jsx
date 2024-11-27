/* eslint-disable react/prop-types */

import { useCallback, useEffect, useState } from "react";
import useAppContext from "./AppContext";
import Timer from "./Timer";

export default function Questions({ size, results }) {
  const {
    setCount,
    count,
    setIsFinished,
    setChosenOptions,
    time,
    setTime,
    timeLimit,
  } = useAppContext();

  const [selectedOption, setSelectedOption] = useState("");

  const handleClick = useCallback(() => {

    setChosenOptions((pre) => [...pre, selectedOption]);
    setSelectedOption("");
    if (count < size) setCount(count + 1);
    if (count === size) setIsFinished(true);
    setTime(timeLimit);

  }, [
    selectedOption,
    count,
    size,
    setChosenOptions,
    setCount,
    setIsFinished,
    setTime,
    timeLimit,
  ]);
  useEffect(() => {
    if (time === 0) handleClick();
  }, [time, handleClick]);

  function handleOptionClick(e) {
    setSelectedOption(e.target.value);
  }

  return (
    <div className="flex flex-col gap-3 rounded-3xl shadow-2xl p-4">
      <div className="flex justify-center">
        <Timer />
      </div>
      <p className="font-semibold text-2xl">
        Question {count + 1}
      </p>
      <p className="font-semibold text-lg">
        {results.question}
      </p>

      <div className="m-3">
        {results.options.map((option, index) => (
          <button
            key={index}
            className={`rounded-xl m-2 p-3 font-semibold w-full text-start ${option === selectedOption
              ? "bg-purple-600 text-white shadow-2xl -translate-y-1"
              : "bg-zinc-100 text-black"
              }
            pointer
            `}
            value={option}
            disabled={selectedOption}
            onClick={handleOptionClick}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={handleClick}
          className="bg-purple-600 px-5 py-2 rounded-3xl text-lg text-white hover:bg-purple-800"        >
          {count === size ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}