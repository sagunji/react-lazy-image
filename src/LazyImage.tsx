import React, { useState, useRef, FC } from "react";
import { ILazyImageProps } from "./LazyImage.types";

import { useIntersection } from "./useIntersection";

const LazyImage: FC<ILazyImageProps> = ({ source, ...props }) => {
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  return <img ref={imgRef} src={isInView ? source : undefined} {...props} />;
};

export default LazyImage;
