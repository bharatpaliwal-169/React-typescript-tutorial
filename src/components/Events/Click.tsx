type clickprops = {
    handleClick : () => void
}

export const Click = (props : clickprops) => {
    return (
        <div>
            <button onClick={props.handleClick}>Click</button>
        </div>
    )
}
