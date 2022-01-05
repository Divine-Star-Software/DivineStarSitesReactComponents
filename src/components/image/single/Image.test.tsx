import React from "react";
import { render, screen } from "@testing-library/react";

import { Image } from "./Image";

describe("<Image />", () => {
  test("should display a single image with the src of 'http://www.nasa.gov/sites/default/files/thumbnails/image/sdo_year10_poster_4k.jpg'", async () => {
    const source =
      "http://www.nasa.gov/sites/default/files/thumbnails/image/sdo_year10_poster_4k.jpg";
    const alt = "Test Image";
    render(<Image alt={alt} src={source} />);
    const image = screen.getByAltText(alt);

    expect(image).toBeDefined();

    if (image.nodeName !== "IMG") {
      throw new Error(
        `Expected a node name of 'IMG' but got ${image.nodeName}.`
      );
    }
    if ((image as HTMLImageElement).src !== source) {
      throw new Error(
        `Expected a image source of '${source}' but got ${
          (image as HTMLImageElement).src
        }.`
      );
    }
    if ((image as HTMLImageElement).alt !== alt) {
      throw new Error(
        `Expected an image alt of '${alt}' but got ${
          (image as HTMLImageElement).alt
        }.`
      );
    }
    return true;
  });
});
