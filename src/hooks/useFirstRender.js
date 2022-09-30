import { useRef } from "react";

function useIsFirstRender() {
  const isFirst = useRef(true);

  if (isFirst.current) {
    isFirst.current = false;
    console.log(isFirst)
    return true;
  }

  return isFirst.current;
}

export default useIsFirstRender;
