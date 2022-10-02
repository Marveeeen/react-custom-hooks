import { useLocalStorage, useSessionStorage } from "../hooks/useStorage"

export default function StorageComponent() {
    const [name, setName, removeName] = useLocalStorage('name', '')
    const [age, setAge, removeAge] = useSessionStorage('age', 18)
    return(
        <div>
            <div>
                {name} - {age}
            </div>
            <button onClick={() => setName('Marvin')}>Set Name</button>
            <button onClick={() => setAge(19)}>Set Age</button>
            <button onClick={removeName}>Remove Name</button>
            <button onClick={removeAge}>Remove Age</button>
        </div>
    )
}