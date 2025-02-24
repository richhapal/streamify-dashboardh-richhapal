export const formatNumberIntoSuffix = (number) => {
  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(2) + "B"; // Convert to billion
  } else if (number >= 1000000) {
    return (number / 1000000).toFixed(2) + "M"; // Convert to million
  } else {
    return number.toLocaleString(); // Keep the exact number format
  }
};

export const formatNumber = (num) => {
  return num.toLocaleString("en-US");
};

export const currencyIconMap = {
  USD: "$",
  INR: "₹",
  EUR: "€",
};
