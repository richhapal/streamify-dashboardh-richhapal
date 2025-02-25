import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import KeyMatricsCard from "../src/components/keyMatric/matricsCard";
import { renderWithContext } from "./test-utils";

const mockData = {
  title: "Total Users",
  value: 12345,
  icon: "UserIcon",
};

const mockDataArtist = {
  title: "Top Artist",
};

describe("KeyMatricsCard", () => {
  test("renders KeyMatricsCard with correct data", async () => {
    await act(async () => {
      renderWithContext(<KeyMatricsCard {...mockData} />);
    });

    expect(screen.getByText("Total Users")).toBeInTheDocument();
  });

  test("renders KeyMatricsCard with Top Artist", async () => {
    await act(async () => {
      renderWithContext(<KeyMatricsCard {...mockDataArtist} />);
    });

    expect(screen.getByText("Harry Styles")).toBeInTheDocument();
  });
});
