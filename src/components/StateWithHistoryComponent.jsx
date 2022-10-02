import { useState } from "react"
import useStateWithHistory from "../hooks/useStateWithHistory"

export default function StateWithHistoryComponent() {
    const [count, setCount, { history, pointer, back, forward, go }] = useStateWithHistory(1)
    const [name, setName] = useState('Marvin')

    return (
        <div>
            <div>{count}</div>
            <div>{history.join(', ')}</div>
            <div>{pointer}</div>
            <div>{name}</div>
            <button onClick={() => setCount(prevCount => prevCount * 2)}>Double</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={back}>Back</button>
            <button onClick={forward}>Forward</button>
            <button onClick={() => go(2)}>Go To Index 2</button>
            <button onClick={() => setName('John')}>Change Name</button>
        </div>
    )
}