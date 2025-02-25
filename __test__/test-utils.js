import React from "react";
import { CurrencyContext } from "../src/context";
import { render } from "@testing-library/react";
// Adjust the import path as needed

const mockCurrencyContextValue = {
  currency: "USD",
  changeCurrency: jest.fn(),
};

const renderWithContext = (ui, { providerProps, ...renderOptions } = {}) => {
  return render(
    <CurrencyContext.Provider value={providerProps || mockCurrencyContextValue}>
      {ui}
    </CurrencyContext.Provider>,
    renderOptions
  );
};

export * from "@testing-library/react";
export { renderWithContext };
