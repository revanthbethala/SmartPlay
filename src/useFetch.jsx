import { useEffect, useState } from "react";

export default function useFetch(amount, category, difficulty) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (!amount || !category || !difficulty) return;
    async function fetching() {
      try {
        setError("");
        setIsLoading(true);

        const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
        const request = await fetch(url);
        const data = await request.json();

        if (!request.ok) throw new Error("Unknown error occurred!");
        if (data?.response_code === 1)
          throw new Error(
            "Database doesn't have enough questions! Please try with less questions"
          );
        if (data?.response_code === 5)
          throw new Error("Too many requests!Please try after 10sec");

        setResponse(data);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetching();
  }, [category, amount, difficulty]);
  return { response, isLoading, error };
}
