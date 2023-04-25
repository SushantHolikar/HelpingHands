import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { FaUserAlt } from 'react-icons/fa'
import { GrOrganization } from 'react-icons/gr'
import Avatar from '@mui/material/Avatar';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';


function UserAvatarContent({ user }) {
  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.clear()
    window.location.reload()
  }
  const handleCreate = () => {
    navigate("/createdonation")
  }

  return (
    <div className='UserAvatarContent'>
      {localStorage.getItem("loggedInUser") && <div className='UserAvatarHeading'>
        <div className='image'> <Avatar alt="NO IMG" src={user?.profileImage} /></div>

        <div className='name' style={{ fontSize: '25px' }}>
          <MDBTypography tag="h4">{user?.name} </MDBTypography>
          <MDBCardText className="text-muted mb-4" style={{ fontSize: '17px' }} >
            <span className="mx-2">|</span>  User <span className="mx-2">|</span>
          </MDBCardText>
        </div>
        <div className="px-3">
          <MDBCardText className="mb-1 h5">₹{user?.amount}</MDBCardText>
          <MDBCardText className="small text-muted mb-0">Total Donated</MDBCardText>
        </div>

      </div>}

      {localStorage.getItem("loggedInNgo") && <div className='UserAvatarHeading'>

        <div className='image'> <Avatar alt="NO IMG" src={user?.profileImage} /></div>

        <div className='name' style={{ fontSize: '25px' }}>
          <MDBTypography tag="h4">{user?.name} </MDBTypography>
          <MDBCardText className="text-muted mb-4" style={{ fontSize: '17px' }} >
            NGO <span className="mx-2">|</span> <a>{user?.NgoID}</a>
          </MDBCardText>
        </div>



        {/* <div className="mb-4 pb-2">
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="facebook" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating className="mx-1">
                    <MDBIcon fab icon="twitter" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="skype" size="lg" />
                  </MDBBtn>
                </div> */}

        <div className="d-flex justify-content-between text-center mb-2">
          <div>
            <MDBCardText className="mb-1 h5">8471</MDBCardText>
            <MDBCardText className="medium text-muted mb-0" style={{fontWeight:'bolder'}}>Current Fund</MDBCardText>
          </div>
          <div className="px-3">
            <MDBCardText className="mb-1 h5">8512</MDBCardText>
            <MDBCardText className="medium text-muted mb-0" style={{fontWeight:'bolder'}}>Goal Fund</MDBCardText>
          </div>
        </div>


        <div className='createButton' onClick={handleCreate} style={{ fontSize: '15px' }}>Create</div>

      </div>}
      <div className='LogOutButton' onClick={handleLogOut} style={{ fontSize: '15px' }}>Log Out</div>
    </div>
  )
}

export default UserAvatarContent