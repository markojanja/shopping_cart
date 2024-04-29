import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import PromoSection from "./PromoSection";
import { BrowserRouter } from "react-router-dom";
import { expect, test } from "vitest";
import intersectionObserverMock from "../../../__mocks__/intersectionObserverMock";

test("renders image", async () => {
  render(<PromoSection />, { wrapper: BrowserRouter });

  const img = screen.getByAltText("girl shopping");
  expect(img).toBeInTheDocument();
});

test("renders title", async () => {
  render(<PromoSection />, { wrapper: BrowserRouter });
  const title = screen.getByText(/get best deals/i);

  expect(title).toBeInTheDocument();
});

test("renders paragraph", async () => {
  render(<PromoSection />, { wrapper: BrowserRouter });
  const text = screen.getByTestId("text");

  expect(text).toBeInTheDocument();
});

test("renders link", async () => {
  render(<PromoSection />, { wrapper: BrowserRouter });

  expect(screen.getByRole("link")).toBeInTheDocument();
});
