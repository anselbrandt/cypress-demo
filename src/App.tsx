import "./App.css";
import logo from "./logo.png";
import { useQuery } from "@tanstack/react-query";

function App() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["facts"],
    queryFn: () =>
      fetch("https://api.chucknorris.io/jokes/random").then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <>"Loading..."</>;

  if (error) return <>{"An error has occurred: " + (error as any).message}</>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://api.chucknorris.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chuck Norris Facts
        </a>
        <p>{data.value}</p>
        <div>{isFetching ? "Updating..." : ""}</div>
      </header>
    </div>
  );
}

export default App;
