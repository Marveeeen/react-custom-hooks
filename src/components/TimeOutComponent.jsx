import { useState } from "react";
import useTimeOut from "../hooks/useTimeOut";

export default function TimeOutComponent() {
    const [count, setCount] = useState(10)
    const { clear, reset } = useTimeOut(() => setCount(0), 1000)

    return(
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            <button onClick={clear}>Clear Timeout</button>
            <button onClick={reset}>Reset Timeout</button>
        </div>
    )
}