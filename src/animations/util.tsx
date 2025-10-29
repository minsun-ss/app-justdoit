import { useEffect } from "react";

export function useRouteCSS(cssFile: string) {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssFile;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [cssFile]);
}
