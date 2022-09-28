import useToggle from "../hooks/useToggle"

export default function ToggleComponent () {
    const [value, toggleValue] = useToggle(false)

    return(
        <div>
            <div>{value}</div>
            <button>Toggle</button>
            <button>Make True</button>
            <button>Make False</button>
        </div>
    )
}