import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import CategoriesSection from "./CategoriesSection";
import { expect, test } from "vitest";

test("renders correct heading", async () => {
  render(<CategoriesSection />, { wrapper: BrowserRouter });

  const heading = screen.getByText("Collection");

  expect(heading).toBeInTheDocument();
});

test("renders all 4  categories", async () => {
  render(<CategoriesSection />, { wrapper: BrowserRouter });

  const cards = screen.getAllByTestId("card");

  expect(cards.length).toBe(4);
});
