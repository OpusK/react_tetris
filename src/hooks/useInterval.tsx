import { useEffect, useRef } from "react";

type Props = {
  callback: () => void;
  delay: number | null;
}

export const useInterval = ({ callback, delay }: Props) => {
  const savedCallback = useRef<() => void>();

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    function tick() {
      if (savedCallback != null && savedCallback.current != null) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
};
