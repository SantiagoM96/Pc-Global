const Button = ({ label, cName, callBack, disabled, type }) => {
    return <button type={type} disabled={disabled} onClick={callBack} className={cName}>
        {label}
    </button>
}

export default Button;