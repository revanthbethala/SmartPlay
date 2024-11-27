import Form from "./Form";
import FetchedData from "./FetchedData";
import useAppContext from "./AppContext";
import QuizRules from "./QuizRules";
function App() {
  const { response, isProceed } = useAppContext();

  return <div>
    <div className="text-center py-5 font-headland-one">
      <h1 className="my-2 font-semibold  text-3xl">Smart Play
      </h1>
      <p className="text-2xl">Quizzes for Sharp Minds</p>
    </div>
    {!response ? <Form /> : !isProceed ? <QuizRules /> : <FetchedData />}</div>;
}

export default App;
