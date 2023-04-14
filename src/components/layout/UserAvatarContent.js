import React,{useState,useEffect} from 'react'
import {FaUserAlt } from 'react-icons/fa'
import {GrOrganization } from 'react-icons/gr'
import { Navigate } from 'react-router-dom'
function UserAvatarContent({user}) {
    const handleLogOut=()=>{
        localStorage.clear()
        window.location.reload()
        }
       
       
    
  return (
    <div className='UserAvatarContent'>
        {localStorage.getItem("loggedInUser")&&<div className='UserAvatarHeading'>
           <div classname='UserAvatarlogo'>
            <FaUserAlt/>
            </div> 
            <div className='name'>
             {user?.name}
            </div>
            <div className='image'>{user?.profileImage}</div>

        </div>}
        {localStorage.getItem("loggedInNgo")&& <div className='UserAvatarHeading'>
        <div>
         <GrOrganization/>
         </div> 
         <div>
          {user?.name}
         </div>
     </div>}
        <div >{user?.email}</div>
        
        <div className='LogOutButton' onClick={handleLogOut}>Log Out</div>
    </div>
  )
}

export default UserAvatarContent