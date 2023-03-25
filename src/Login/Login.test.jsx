import {
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";
import Login from "./Login";

expect.extend(matchers);

describe("Login test", () => {
  afterEach(cleanup);

    it("espero que se renderize el titulo", () => {
      render(<Login />);
      screen.getByTitle("Este es el form")
    });

  it("espero qu el onchange funcione", () => {
    render(<Login />);
    let inputName = screen.getByPlaceholderText("Ingrese su nombre");
    expect(inputName).toHaveValue("");
    fireEvent.change(inputName, { target: { value: "pepito" } });
    expect(inputName).toHaveValue("pepito");
  });
});
