import { useEffect } from "react";

export function useIntersection(elem: any, callback: () => void) {
  let listenerCallbacks = new WeakMap();

  let observer: any;

  function handleIntersections(entries: Array<any>) {
    entries.forEach((entry) => {
      if (listenerCallbacks.has(entry.target)) {
        let cb = listenerCallbacks.get(entry.target);

        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          observer.unobserve(entry.target);
          listenerCallbacks.delete(entry.target);
          cb();
        }
      }
    });
  }

  function getIntersectionObserver() {
    if (observer === undefined) {
      observer = new IntersectionObserver(handleIntersections, {
        rootMargin: "100px",
        threshold: 0.15,
      });
    }
    return observer;
  }

  useEffect(() => {
    let target = elem.current;
    let observer = getIntersectionObserver();
    listenerCallbacks.set(target, callback);
    observer.observe(target);

    return () => {
      listenerCallbacks.delete(target);
      observer.unobserve(target);
    };
  }, []);
}
