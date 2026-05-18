import React from 'react'
import useUserStore from '../../store/user.store'
const Home = () => {
    const { name, logout } = useUserStore();
  return (
    <div>
        {name}
        <div className="">
            <button onClick={logout}>Logout</button>
        </div>
    </div>
  )
}

export default Home