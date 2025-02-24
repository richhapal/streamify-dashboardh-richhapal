import { createContext, useState } from "react";

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [currencyValue, setCurrencyValue] = useState(1);

  const updateCurrencyValue = (newCurrency) => {
    if (newCurrency === "INR") {
      setCurrencyValue(74);
    } else if (newCurrency === "EUR") {
      setCurrencyValue(0.85);
    } else {
      setCurrencyValue(1);
    }
  };

  const changeCurrency = (newCurrency) => {
    setCurrency(newCurrency);
    updateCurrencyValue(newCurrency);
  };

  return (
    <CurrencyContext.Provider
      value={{ currency, changeCurrency, currencyValue }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
