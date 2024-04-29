import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import AboutSection from "./AboutSection";
import { BrowserRouter } from "react-router-dom";
import { expect, test } from "vitest";
import intersectionObserverMock from "../../../__mocks__/intersectionObserverMock";

test("renders heading", async () => {
  render(<AboutSection />, { wrapper: BrowserRouter });

  expect(screen.getByText(/aboutus/i)).toBeInTheDocument();
});

test("renders image", async () => {
  render(<AboutSection />, { wrapper: BrowserRouter });

  expect(screen.getByRole("img")).toBeInTheDocument();
});

test("renders link", async () => {
  render(<AboutSection />, { wrapper: BrowserRouter });

  expect(screen.getByRole("link", { name: /learn more/i })).toBeInTheDocument();
});

test("renders paragraph", async () => {
  render(<AboutSection />, { wrapper: BrowserRouter });

  expect(screen.getByRole("paragraph")).toBeInTheDocument();
});
