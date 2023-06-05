import { useEffect } from "react";

export function SlideTopOfPage({ children }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return children;
}
