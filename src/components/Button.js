const Button = ({handleClick, label}) => {
    return (<>
        <button className="doButton" onClick={ handleClick }>{ label }</button>
    </>)
}

export default Button;