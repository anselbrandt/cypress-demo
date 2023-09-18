import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders chuck norris link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Chuck Norris Facts/i);
  expect(linkElement).toBeInTheDocument();
});
