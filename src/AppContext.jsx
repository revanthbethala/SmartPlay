/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AppContext = createContext();
const timeLimit = 180;

function useAppContext() {
  return useContext(AppContext);
}

function AppProvider({ children }) {
  const [submittedData, setSubmittedData] = useState({});
  const [response, setResponse] = useState(null);
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [chosenOptions, setChosenOptions] = useState([]);
  const [time, setTime] = useState(timeLimit);
  const [isProceed, setIsProceed] = useState(false);


  return (
    <AppContext.Provider
      value={{
        response,
        setResponse,
        submittedData,
        setSubmittedData,
        time,
        setTime,
        count,
        setCount,
        isFinished,
        setIsFinished,
        chosenOptions,
        setChosenOptions,
        isProceed,
        setIsProceed,
        timeLimit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider };
// eslint-disable-next-line react-refresh/only-export-components
export default useAppContext;
