import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import KeyMatricsCard from "../src/components/keyMatric/matricsCard";
import { renderWithContext } from "./test-utils";
import { formatNumberIntoSuffix } from "../src/utils/utils";

// import KeyMatricsCard from "../src/components/keyMatric/matricsCard";

const mockData = {
  title: "Total Users",
  value: 12345,
  icon: "UserIcon", // Assuming you have an icon component or string
};

test("renders KeyMatricsCard with correct data", () => {
  renderWithContext(<KeyMatricsCard {...mockData} />);

  // Check if the title is rendered correctly
  expect(screen.getByText("Total Users")).toBeInTheDocument();
});
