export default function InputField(props) {
    return (
        <>
            <div className="w-xs">

                <input type="text"
                    place-holder="Add a new task"
                    className="border-2 w-full border-solid border-black h-[3rem]"
                    value={props.value}
                    onChange={props.onChange}
                />
            </div>
        </>
    )
}