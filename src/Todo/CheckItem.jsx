export default function CheckItem(props) {
    return (
        <>
            <div className={`checkbox-wrapper ${props.customClass}`} onChange={props.onChange}>
                <input type="checkbox" />
            </div>

        </>
    )
}