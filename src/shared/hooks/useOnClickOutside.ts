import { MutableRefObject, useEffect } from "react";

export const useOnClickOutside = (
  ref: MutableRefObject<HTMLElement>,
  handler: () => void
) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref && ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
