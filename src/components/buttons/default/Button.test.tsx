import React from "react";
import { render, screen } from "@testing-library/react";

import {Button} from "./Button";

describe("<Button />", () => {
  test("should display a button with the text 'Hi'", async () => {
    render(<Button>Hi</Button>);
    expect(screen.getByRole("button",{name:"Hi"})).toBeDefined();
  });
});