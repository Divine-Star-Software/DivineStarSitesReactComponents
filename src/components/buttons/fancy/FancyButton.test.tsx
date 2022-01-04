import React from "react";
import { render, screen } from "@testing-library/react";

import {FancyButton} from "./FancyButton";

describe("<FancyButton />", () => {
  test("should display a fancy button with the text 'Hi'", async () => {
    render(<FancyButton>Hi</FancyButton>);
    expect(screen.getByRole("button",{name:"Hi"})).toBeDefined();
  });
});