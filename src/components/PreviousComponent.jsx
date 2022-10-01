import { useState } from "react";
import usePrevious from "../hooks/usePrevious";

export default function PreviousComponent() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Marvin')
    const previousCount = usePrevious(count)

    return (
        <div>
            <div>
                {count} - {previousCount}
            </div>
            <div>{name}</div>
            <button onClick={() => setCount(prev => prev + 1)}>
                Increment
            </button>
            <button onClick={() => setName('New Marvin')}>Name</button>
        </div>
    )
}