/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { triviaCategories, levels } from "./data";
import useFetch from "./useFetch";
import useAppContext from "./AppContext";

export default function Form() {
  const {
    submittedData,
    setSubmittedData,
    setResponse,
  } = useAppContext();

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [amount, setAmount] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fetchedData = useFetch(
    submittedData.amount,
    submittedData.category,
    submittedData.difficulty
  );

  const { error, response, isLoading } = fetchedData;

  useEffect(() => {
    setResponse(response);
  }, [response, setResponse]);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
    if (amount && category && difficulty)
      setSubmittedData({ amount, category, difficulty });
  }

  return (
    <div className="flex items-center justify-center py-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-8 bg-zinc-100 rounded-3xl shadow-2xl backdrop:blur-lg">
        <label htmlFor="category" className="label-style">
          Choose Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border-zinc-800 border-2 rounded-lg p-2 w-full"
        >
          <option value="">Select Category</option>
          {triviaCategories.map((category, id) => (
            <option value={id + 9} key={id}>
              {category}
            </option>
          ))}
        </select>
        {isSubmitted && !category && <Error value="category" />}
        <label htmlFor="level" className="label-style">
          Difficulty Level
        </label>
        <div className="flex justify-evenly w-full" id="level">
          {levels.map((level, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setDifficulty(level);
              }}
              className={`rounded-3xl  border-2 border-purple-800 hover:border-purple-700  py-2 px-5 font-semibold capitalize  ${difficulty === level && "text-zinc-100 bg-purple-800"
                }   `}
            >
              {level}
            </button>
          ))}
        </div>
        {isSubmitted && !difficulty && <Error value="difficulty level" />}
        <label htmlFor="amount" className="label-style">
          Set the Total Questions to Answer between 1-30
        </label>
        <input
          type="number"
          id="amount"
          min="1"
          max="30"
          value={amount}
          required
          onChange={(e) => setAmount(e.target.value)}
          className="rounded-md w-full border-2 border-black p-2 "
        />
        <input
          type="submit"
          className="w-full uppercase font-semibold text-white rounded-full px-3 py-2 bg-purple-700 active:bg-purple-600 disabled:bg-purple-400 "
          disabled={isLoading}
          value={isLoading && !error ? "Loading..." : "Submit"}
        />

        {error && <Error value={error} />}
      </form>
    </div>
  );
}

function Error({ value }) {
  return (
    <p className="text-red-600 font-semibold">Please choose the {value}</p>
  );
}
