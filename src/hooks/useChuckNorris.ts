import { useQuery } from "react-query";

export const useChuckNorris = () => {
  const { isLoading, error, data, isFetching } = useQuery("facts", () =>
    fetch("https://api.chucknorris.io/jokes/random").then((res) => res.json())
  );
  return { isLoading, error, data, isFetching };
};
