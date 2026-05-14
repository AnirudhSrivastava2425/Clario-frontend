import React, { useEffect, useState } from 'react'
import './Login.css'
import Input from '../../components/input/Input'
import useUserStore from '../../store/user.store'


const Login = () => {

    const { getUser } = useUserStore();
    const [formIncomplete, setFormIncomplete] = useState(true);
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    })

    const handleInputChange = (target, value) => {
        setCredentials((prev) => ({
            ...prev,
            [target]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getUser(credentials);
    }

    useEffect(() => {
        if (credentials.email === '' || credentials.password === '') {
            setFormIncomplete(true);
        } else {
            setFormIncomplete(false);
        }
    }, [credentials.email, credentials.password])

    return (
        <div className='main-wrapper'>
            <div className="login-container">

                {/* Headers for login page */}
                <div className="login-headers">
                    <h1>Clario</h1>
                    <h2>Welcome back.</h2>
                </div>

                {/* Form for login page */}
                <div className="form-holder">
                    <form action="" onSubmit={handleSubmit}>

                        <Input
                            target="email"
                            label="Email"
                            type="email"
                            placeholder="Eg: john.doe@example.com"
                            value={credentials.email}
                            onChange={handleInputChange}
                            isRequired={true}
                        />

                        <Input
                            target="password"
                            label="Password"
                            type="password"
                            placeholder="Eg: Ekd79,0ok****"
                            value={credentials.password}
                            onChange={handleInputChange}
                            isRequired={true}
                        />

                        <button disabled={formIncomplete}>Login</button>

                        <p className="redirect-text">
                            Don't have an account? <a href="/create-account">Sign Up</a>
                        </p>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login
