import React, { useEffect, useState } from 'react'
import './ResetEmail.css'
import Input from '../../components/input/Input'
import useUserStore from '../../store/user.store'
import { Link } from 'react-router-dom'


const ResetEmail = () => {

    const { forgotPassword } = useUserStore();
    const [formIncomplete, setFormIncomplete] = useState(true);
    const [email, setEmail] = useState('')

    const handleInputChange = (_,value) => {
        setEmail(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // forgotPassword(email);
        console.log(email);
    }

    useEffect(() => {
        if (email === '') {
            setFormIncomplete(true);
        } else {
            setFormIncomplete(false);
        }
    }, [email])

    return (
        <div className='main-wrapper'>
            <div className="reset-email-container">

                {/* Headers */}
                <div className="reset-email-headers">
                    <h1>Clario</h1>
                    <h2>Reset your password.</h2>
                    <p>Enter the email address linked to your account and we'll send you a reset link.</p>
                </div>

                {/* Form */}
                <div className="form-holder">
                    <form action="" onSubmit={handleSubmit}>

                        <Input
                            target="email"
                            label="Email"
                            type="email"
                            placeholder="Eg: john.doe@example.com"
                            value={email}
                            onChange={handleInputChange}
                            isRequired={true}
                        />

                        <button disabled={formIncomplete}>Send Reset Link</button>

                        <p className="redirect-text">
                            Remembered your password?
                            <Link to="/login"> Login</Link>
                        </p>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default ResetEmail