import React, { useEffect, useState } from 'react'
import './ResetPass.css'
import Input from '../../components/input/Input'
import useUserStore from '../../store/user.store'
import { Link } from 'react-router-dom'


const ResetPass = () => {

    const { resetPassword } = useUserStore();
    const [formIncomplete, setFormIncomplete] = useState(true);
    const [passwords, setPasswords] = useState({
        password: "",
        repassword: "",
    })

    const handleInputChange = (target, value) => {
        setPasswords((prev) => ({
            ...prev,
            [target]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        resetPassword(passwords.password);
        console.log(passwords)
    }

    useEffect(() => {
        if (passwords.password === '' || passwords.password.length < 6 || passwords.password !== passwords.repassword) {
            setFormIncomplete(true);
        } else {
            setFormIncomplete(false);
        }
    }, [passwords.password, passwords.repassword])

    return (
        <div className='main-wrapper'>
            <div className="reset-pass-container">

                {/* Headers */}
                <div className="reset-pass-headers">
                    <h1>Clario</h1>
                    <h2>Set a new password.</h2>
                    <p>Your new password must be atleast 6 characters long.</p>
                </div>

                {/* Form */}
                <div className="form-holder">
                    <form action="" onSubmit={handleSubmit}>

                        <Input
                            target="password"
                            label="New Password"
                            type="password"
                            placeholder="Eg: Ekd79,0ok****"
                            value={passwords.password}
                            onChange={handleInputChange}
                            isRequired={true}
                        />

                        <Input
                            target="repassword"
                            label="Re-enter New Password"
                            type="password"
                            placeholder="Eg: Ekd79,0ok****"
                            value={passwords.repassword}
                            onChange={handleInputChange}
                            isRequired={true}
                        />

                        <button disabled={formIncomplete}>Update Password</button>

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

export default ResetPass