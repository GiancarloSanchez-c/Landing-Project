import React from "react";
import { Carousel } from "./Carousel";
import { images } from "./data";

export const Banner = () => {
  return (
    <div className="Banner">
        <Carousel images={images} showButtons={true} />
    </div>
  );
};
