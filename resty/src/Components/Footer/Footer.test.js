import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import Footer from "./index";


describe("App component", () => {
  test("renders footer with correct text", () => {
    const { getByText } = render(<Footer />);

    const footerElement = getByText(/\u00A9 2018/i);
    expect(footerElement).toBeTruthy();
  });
});