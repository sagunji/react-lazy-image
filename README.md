## Description

Imagine you have to load hundreds of images (and high-definition ones) in a single page. Imagine the load on network and memory consumption for downloading all those images at once.

A simple solution is that load only what you see on your screen.
This library helps you to load images only when they are on user's screen which reduces load on network call and memory consumption at the same time

## Implementation

1. Add the package on your dependency
   `npm i react-load-image-lazily`

2. Import and implement: ([Example Link](https://github.com/sagunji/lazy-image))

```
...
import { LazyImage } from "react-load-image-lazily";
...

function App() {
  return (
    <div className="app">
      <div className="container">
        {IMAGES.map((img: string) => (
          <LazyImage source={img} className={"img__wrapper"} />
        ))}
      </div>
    </div>
  );
}
```
