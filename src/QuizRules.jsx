import useAppContext from "./AppContext";
import { useState } from "react";

const QuizRules = () => {
  const { setIsProceed } = useAppContext();

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Instructions
        </h2>
        <p className="text-lg text-gray-600 text-center mb-6">
          Welcome to <strong>Smart Play</strong>! Please read the rules below:
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              1. Time Limit
            </h3>
            <p className="text-gray-600">
              You have <strong>3 minutes</strong> to answer each question.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              2. Answer Submission
            </h3>
            <p className="text-gray-600">
              Click <strong>Next</strong> to submit your answer. If you don't,
              your answer won’t be counted.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              3. No Back Navigation
            </h3>
            <p className="text-gray-600">
              Once you move to the next question, you cannot go back.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              4. Option Selection
            </h3>
            <p className="text-gray-600">
              Once you select an answer, it cannot be modified.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              5. Passing Score
            </h3>
            <p className="text-gray-600">
              You need at least <strong>40%</strong> correct answers to pass.
            </p>
          </div>

          <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-md mt-6">
            <h3 className="text-lg font-semibold text-green-700">
              Good luck and enjoy the quiz!
            </h3>
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            className="bg-purple-600 px-5 py-2 rounded-3xl text-lg text-white hover:bg-purple-800"
            onClick={() => {
              setIsProceed(true);
            }}
          >
            Proceed
          </button>
        </div>
      </div>
    </>
  );
};

export default QuizRules;
