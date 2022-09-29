import { useState } from "react";

export default function TimeOutComponent() {
    const [count, setCount] = useState(10)

    return(
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            <button>Increment</button>
            <button>Increment</button>
        </div>
    )
}