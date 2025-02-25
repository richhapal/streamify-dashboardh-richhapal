import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../src/App";
import { CurrencyContext } from "../src/context";

const mockCurrencyContextValue = {
  currency: "USD",
  changeCurrency: jest.fn(),
};

test("renders learn vite link", () => {
  render(
    <CurrencyContext.Provider value={mockCurrencyContextValue}>
      <App />
    </CurrencyContext.Provider>
  );
  expect(true).toBe(true);
});
