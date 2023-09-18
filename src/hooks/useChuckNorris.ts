import { useQuery } from "@tanstack/react-query";

export const useChuckNorris = () => {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["facts"],
    queryFn: () =>
      fetch("https://api.chucknorris.io/jokes/random").then((res) =>
        res.json()
      ),
  });
  return { isLoading, error, data, isFetching };
};
