import React, {
  createContext,
  useState,
  useLayoutEffect,
  useContext,
} from "react";
import { throttle } from "lodash-es";

const mobileChecker = () =>
  window.matchMedia("only screen and (max-width: 768px)").matches;

const useProvideViewPort = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [isMobile, setMobile] = useState(mobileChecker());

  const handleWindowResize = throttle(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setMobile(mobileChecker());
  }, 333);

  useLayoutEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return { width, height, isMobile };
};

interface ViewPortContext {
  width: number;
  height: number;
  isMobile: boolean;
}

const viewPortContext = createContext({} as ViewPortContext);

export const ProvideViewPort = ({ children }: any) => {
  const viewPort = useProvideViewPort();
  return (
    <viewPortContext.Provider value={viewPort}>
      {children}
    </viewPortContext.Provider>
  );
};

export const useViewPort = () => useContext(viewPortContext);
