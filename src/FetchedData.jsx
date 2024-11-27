import Result from "./Result";
import useAppContext from "./AppContext";
import Questions from "./Questions";

export default function FetchedData() {
  const { response, isFinished, count } = useAppContext();
  const data = response?.results.map((result, id) => {
    return {
      id: id,
      question: result.question,
      options: [...result.incorrect_answers, result.correct_answer].sort(),
      correctAnswer: result.correct_answer,
    };
  });
  const correctAnswers = data.map((corr) => corr.correctAnswer);

  return (
    <div className="flex items-center justify-center w-full px-7 py-3">
      {isFinished ? (
        <Result correctAnswers={correctAnswers} />
      ) : (
        <Questions results={data[count]} size={data.length - 1} />
      )}
    </div>
  );
}
