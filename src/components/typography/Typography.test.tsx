import React from "react";
import { render, screen } from "@testing-library/react";

import { Typography } from "./Typography";

describe("<Typography />", () => {
  test("should display a h1 heading with the text 'Hi'", async () => {
    const { getByText } = render(<Typography type="h1">Hi</Typography>);
    const heading = getByText("Hi");
    const node = heading.nodeName;

    if (!node) {
      throw new Error(`Element not found.`);
    }

    if (heading.nodeName !== "H1") {
      throw new Error(`Expected an h1 but got ${heading.nodeName}`);
    }

    if (heading.innerHTML !== "Hi") {
      throw new Error(
        `Expected an innerText to be but got ${heading.innerHTML}`
      );
    }

    return true;
  });

  test("should display a h2 heading with the text 'Hi'", async () => {
    const { getByText } = render(<Typography type="h2">Hi</Typography>);
    const heading = getByText("Hi");
    const node = heading.nodeName;

    if (!node) {
      throw new Error(`Element not found.`);
    }

    if (heading.nodeName !== "H2") {
      throw new Error(`Expected an h2 but got ${heading.nodeName}`);
    }

    if (heading.innerHTML !== "Hi") {
      throw new Error(
        `Expected an innerText to be but got ${heading.innerHTML}`
      );
    }

    return true;
  });

  test("should display a h3 heading with the text 'Hi'", async () => {
    const { getByText } = render(<Typography type="h3">Hi</Typography>);
    const heading = getByText("Hi");
    const node = heading.nodeName;

    if (!node) {
      throw new Error(`Element not found.`);
    }

    if (heading.nodeName !== "H3") {
      throw new Error(`Expected an h3 but got ${heading.nodeName}`);
    }

    if (heading.innerHTML !== "Hi") {
      throw new Error(
        `Expected an innerText to be but got ${heading.innerHTML}`
      );
    }

    return true;
  });

  test("should display a h4 heading with the text 'Hi'", async () => {
    const { getByText } = render(<Typography type="h4">Hi</Typography>);
    const heading = getByText("Hi");
    const node = heading.nodeName;

    if (!node) {
      throw new Error(`Element not found.`);
    }

    if (heading.nodeName !== "H4") {
      throw new Error(`Expected an h4 but got ${heading.nodeName}`);
    }

    if (heading.innerHTML !== "Hi") {
      throw new Error(
        `Expected an innerText to be but got ${heading.innerHTML}`
      );
    }

    return true;
  });

  test("should display a h5 heading with the text 'Hi'", async () => {
    const { getByText } = render(<Typography type="h5">Hi</Typography>);
    const heading = getByText("Hi");
    const node = heading.nodeName;

    if (!node) {
      throw new Error(`Element not found.`);
    }

    if (heading.nodeName !== "H5") {
      throw new Error(`Expected an h5 but got ${heading.nodeName}`);
    }

    if (heading.innerHTML !== "Hi") {
      throw new Error(
        `Expected an innerText to be but got ${heading.innerHTML}`
      );
    }

    return true;
  });

  test("should display a h6 heading with the text 'Hi'", async () => {
    const { getByText } = render(<Typography type="h6">Hi</Typography>);
    const heading = getByText("Hi");
    const node = heading.nodeName;

    if (!node) {
      throw new Error(`Element not found.`);
    }

    if (heading.nodeName !== "H6") {
      throw new Error(`Expected an h6 but got ${heading.nodeName}`);
    }

    if (heading.innerHTML !== "Hi") {
      throw new Error(
        `Expected an innerText to be but got ${heading.innerHTML}`
      );
    }

    return true;
  });

  test("should display a paragraph heading with the text 'Hi'", async () => {
    const { getByText } = render(<Typography type="p">Hi</Typography>);
    const heading = getByText("Hi");
    const node = heading.nodeName;

    if (!node) {
      throw new Error(`Element not found.`);
    }

    if (heading.nodeName !== "P") {
      throw new Error(`Expected an p but got ${heading.nodeName}`);
    }

    if (heading.innerHTML !== "Hi") {
      throw new Error(
        `Expected an innerText to be but got ${heading.innerHTML}`
      );
    }

    return true;
  });

  test("should display a span with the text 'Hi'", async () => {
    const { getByText } = render(<Typography type="span">Hi</Typography>);
    const heading = getByText("Hi");
    const node = heading.nodeName;

    if (!node) {
      throw new Error(`Element not found.`);
    }

    if (heading.nodeName !== "SPAN") {
      throw new Error(`Expected an span but got ${heading.nodeName}`);
    }

    if (heading.innerHTML !== "Hi") {
      throw new Error(
        `Expected an innerText to be but got ${heading.innerHTML}`
      );
    }

    return true;
  });
});
