import React from 'react'
import './Input.css'
const Input = ({
    label,
    type,
    placeholder,
    target,
    value,
    onChange,
}) => {
    return (
        <div className='input-wrapper'>
            <label htmlFor={target}>{label}</label>
            <input type={type}
                id={target}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(target, e.target.value)}
            />
        </div>
    )
}

export default Input