import { useEffect, useRef } from "react";
import useIsFirstRender from "./useFirstRender";

export default function useUpdateEffect(callback, dependencies) {
  const firsRenderRef = useIsFirstRender();

  useEffect(() => {
    console.log(firsRenderRef)
    if (!firsRenderRef) {
      return callback();
    }
  }, dependencies);
}
