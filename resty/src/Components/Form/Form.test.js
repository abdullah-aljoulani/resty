import { expect, test, describe, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Form from "./index";
import "@testing-library/jest-dom";


describe("Form component", () => {
    test("handles form submission", () => {
    const handleApiCallMock = vi.fn();
    const wrapper = render(<Form handleApiCall={handleApiCallMock} />);

    const urlInput = wrapper.getByLabelText("URL:");
    const submitButton = wrapper.getByText("GO !");

    fireEvent.change(urlInput, { target: { value: "https://example.com" } });
    fireEvent.click(submitButton);
    expect(handleApiCallMock).toHaveBeenCalledTimes(1);
    expect(handleApiCallMock).toHaveBeenCalledWith({
        method: "GET",
        url: "https://example.com",
    });
    });
});