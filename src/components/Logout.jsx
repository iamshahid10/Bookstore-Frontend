import React from 'react'
import { useAuth } from '../Context/AuthProvider';
import toast from 'react-hot-toast'

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogOut = (e)=>{
        e.stopPropagation()
        localStorage.removeItem("Users")
        setAuthUser(null)
        toast.success("logout successfully")
    }

    // const handleLogOut = ()=>{
    //     try {
    //      setAuthUser({
    //          ...authUser,
    //          user:null
    //      })
    //      console.log(authUser);
    //      localStorage.removeItem("Users")
    //      toast.success("logout successfully")
    //      window.location.reload();
    //     } catch (error) {
    //      toast.error("Error: " + error.message)
    //     }
         
    //  }
  return (
    <div>
        <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogOut}>
            Logout
        </button>
    </div>
  )
}

export default Logout