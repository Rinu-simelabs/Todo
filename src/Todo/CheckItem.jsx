export default function CheckItem(props) {
    return (
        <>
            <div className={`checkbox-wrapper ${props.customClass}`} onClick={props.onClick}>
                <input type="checkbox" />
            </div>

        </>
    )
}