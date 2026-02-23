export default function AddBtn(props) {
    return (
        <>
            <button type="button"
                className={`bg-cyan-500 text-white p-3 ml-3 ${props.disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 text-white"}`}
                onClick={props.onClick}
                disabled={props.disabled}
            >{props.text}</button>
        </>
    )
}