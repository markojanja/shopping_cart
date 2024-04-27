import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Banner from "./Banner";
import { BrowserRouter } from "react-router-dom";
import { expect, test } from "vitest";

test("renders correct heading", async () => {
  render(<Banner />, { wrapper: BrowserRouter });

  expect(screen.getByText(/revolutionize your routine/i)).toBeInTheDocument();
});

test("renders correct paragraph", async () => {
  render(<Banner />, { wrapper: BrowserRouter });

  expect(screen.getByText(/Unravel Endless Choices on Our E-Commerce Platform!/i)).toBeInTheDocument();
});

test("renders correct image", async () => {
  render(<Banner />, { wrapper: BrowserRouter });

  expect(screen.getByRole("img")).toBeInTheDocument();
});

test("renders button link", async () => {
  render(<Banner />, { wrapper: BrowserRouter });

  expect(screen.getByRole("link", { name: /shop now/i })).toBeInTheDocument();
});
