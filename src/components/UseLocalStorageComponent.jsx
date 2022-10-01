import useLocalStorage from "../hooks/useLocalStorage"
import useUpdateLogger from "../hooks/useUpdateLogger"

export default function UseLocalStorage() {
    const [name, setName] = useLocalStorage('name', '')
    useUpdateLogger(name)

    return(
        <form>
            <label htmlFor="name">Name</label>
            <input 
                type="text" 
                name="name" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </form>
    )
}