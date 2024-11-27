/* eslint-disable react/prop-types */

import useAppContext from "./AppContext";

function Result({ correctAnswers }) {
  const { chosenOptions } = useAppContext();
  let score = 0,
    wrongAnswers = 0,
    unAnswered = 0;

  for (let i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i] === chosenOptions[i]) score += 1;
    if (correctAnswers[i] !== chosenOptions[i] && chosenOptions[i] !== "")
      wrongAnswers += 1;
    if (chosenOptions[i] === "") unAnswered += 1;
  }
  const percentage = score / correctAnswers.length * 100
  return (
    <div className="flex flex-col items-center justify-center md:px-24 py-8 rounded-xl shadow-xl gap-6 font-semibold bg-gradient-to-tr from-zinc-200 to-gray-100">

      <h3 className="text-4xl text-center leading-[3rem] p-6">
        Your Results
      </h3>
      <span className={` text-4xl ${percentage < 40 ? "text-red-600 border-red-600" : "text-green-900 border-green-600"} border-[5px] rounded-full  p-16`} >{percentage}%</span>
      <div className="text-2xl text-center space-y-3">
        <h4>Correct Answers: {score}</h4>
        <h4>Wrong Answers: {wrongAnswers}</h4>
        <h4>Unanswered Questions: {unAnswered}</h4>
      </div>
      {percentage > 40 ? (
        <p className="text-green-700 text-lg font-medium text-center">
          🎉 Congratulations on passing the quiz!
        </p>
      ) : (
        <p className="text-red-600 text-lg font-medium text-center capitalize">
          Don&apos;t be discouraged! Get Back when you&apos;re ready
        </p>
      )}
    </div>
  );
}

export default Result;
