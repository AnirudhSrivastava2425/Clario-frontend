import React, { useEffect, useState } from 'react'
import './Signup.css'
import Input from '../../components/input/Input'
import useUserStore from '../../store/user.store'
import { Link } from 'react-router-dom'


const Signup = () => {

    const {email, isLogged, createUser,error} = useUserStore();
    const [formIncomplete, setFormIncomplete] = useState(true);
    const [newUser, setNewUser] = useState({
        fullname: "",
        email: "",
        password: "",
        repassword: "",
        designation: "",
        phone: "",
    })

    const handleInputChange = (target, value) => {
        setNewUser((prev) => ({
            ...prev,
            [target]: value,
        }));

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser(newUser);
    }

    useEffect(() => {
      if(error){
        alert(error);
      }
    

    }, [error])
    

    useEffect(()=>{
        
        if (newUser.fullname === '' || newUser.email === '' || newUser.password === '' || newUser.password !== newUser.repassword || newUser.password.length < 6) {
            setFormIncomplete(true);
        }
        else{
            setFormIncomplete(false);
        }

    },[newUser.fullname, newUser.email, newUser.password,newUser.repassword])
  
    return (
        <div className='main-wrapper'>
            <div className="signup-container">

                {/* Headers for signup page */}
                <div className="signup-headers">
                    <h1>Clario</h1>
                    <h2>Create your account.</h2>
                </div>

                {/* Form for signup page */}
                <div className="form-holder">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="input-row-2">

                            <Input
                                target="fullname"
                                label="Fullname"
                                type="text"
                                placeholder="Eg: John Doe"
                                value={newUser.fullname}
                                onChange={handleInputChange}
                                isRequired={true}
                            />

                            <Input
                                target="designation"
                                label="Designation"
                                type="text"
                                placeholder="Eg: Software Engineer"
                                value={newUser.designation}
                                onChange={handleInputChange}

                            />

                        </div>
                        <div className="input-row-2">

                            <Input
                                target="email"
                                label="Email"
                                type="email"
                                placeholder="Eg: john.doe@example.com"
                                value={newUser.email}
                                onChange={handleInputChange}
                                isRequired={true}
                            />

                            <Input
                                target="phone"
                                label="Phone"
                                type="text"
                                placeholder="Eg: 123-456-7890"
                                value={newUser.phone}
                                onChange={handleInputChange}
                            />

                        </div>
                        <div className="input-row-2">

                            <Input
                                target="password"
                                label="Password"
                                type="password"
                                placeholder="Eg: Ekd79,0ok****"
                                value={newUser.password}
                                onChange={handleInputChange}
                                isRequired={true}
                            />

                            <Input
                                target="repassword"
                                label="Re-enter Password"
                                type="password"
                                placeholder="Eg: Ekd79,0ok****"
                                value={newUser.repassword}
                                onChange={handleInputChange}
                                isRequired={true}
                            />
                        </div>
                        <p>NOTE: Your password must be of at least 6 characters. Fields with * are required.</p>
                        <button disabled={formIncomplete}>Sign Up</button>
                        <p className="redirect-text">
                            Already have an account? 
                            <Link to="/login"> Log In</Link>
                        </p>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Signup