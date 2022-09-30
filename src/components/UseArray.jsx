import useArray from "../hooks/useArray";

export default function ArrayComponent() {
    const { array, set, push, remove, update, filter, clear } = useArray([1,2,3,4,5])

    return(
        <div>
            <div>{array.join(', ')}</div>
            <button onClick={() => push(7)}>Add 7</button>
            <button onClick={() => update(1, 9)}>Change Second Element to 9</button>
            <button onClick={() => remove(1)}>Remove Second Element</button>
            <button onClick={() => filter(n => n < 3)}>Keep Number Less Than 4</button>
            <button onClick={() => set([1, 2])}>Set new Array</button>
            <button onClick={clear}>Clear</button>
        </div>
    )
}