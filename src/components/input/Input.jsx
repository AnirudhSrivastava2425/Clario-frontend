import React,{useRef, useState} from 'react'
import './Input.css'
const Input = ({
    label,
    type,
    placeholder,
    target,
    value,
    onChange,
    isRequired=false,
}) => {

    const [empty, setEmpty] = useState(false);
    const inputRef = useRef(null);

    const handleFocusOut = () => {
        if (isRequired && inputRef.current.value.trim() === '') {
            setEmpty(true);
            inputRef.current.classList.add('input-error');
        }
        else{
            setEmpty(false);
            inputRef.current.classList.remove('input-error');
        }
    }

    const handleChange = (val) => {
        if(empty){
            setEmpty(false);
            inputRef.current.classList.remove('input-error');
        }
        onChange(target, val);
    }


    return (
        <div className='input-wrapper'>
            <label htmlFor={target}>
                {label} {isRequired && <span className="required">*</span>}
            </label>
            <input type={type}
                id={target}
                placeholder={placeholder}
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                ref={inputRef}
                onBlur={handleFocusOut}
            />
            {
                empty && <span className='empty-err'>This field is required. Please provide a value.</span>
            }
            
        </div>
    )
}

export default Input