// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBCheckbox,
//   MDBIcon
// }
// from 'mdb-react-ui-kit';

// function App() {


//   return (
//     <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden ' style={{"backgroundImage":"url(https://th.bing.com/th/id/OIP.W8apTKARTqVhmLzMCisNmAHaEs?pid=ImgDet&rs=1)","backgroundRepeat":"no-repeat","backgroundSize": "cover","backgroundPosition":"center"}}>

//       <MDBRow>

//         <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

//           <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
//             The best offer <br />
//             <span style={{color: 'hsl(218, 81%, 75%)'}}>for your business</span>
//           </h1>

//           <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Eveniet, itaque accusantium odio, soluta, corrupti aliquam
//             quibusdam tempora at cupiditate quis eum maiores libero
//             veritatis? Dicta facilis sint aliquid ipsum atque?
//           </p>

//         </MDBCol>

//         <MDBCol md='6' className='position-relative' style={{"maxWidth":"40rem"}}>

//           <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
//           <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

//           <MDBCard className='my-5 bg-glass'>
//             <MDBCardBody className='p-5'>

//                 <MDBCol col='6'>
//                 </MDBCol>



//               <p className='ms-5'>Don't have an account? <a href="#!" class="link-info"> <Link to="/loginUser">Register</Link></a></p>
//               <MDBBtn className='w-100 mb-4' size='md' onClick={handleSubmit}>sign up</MDBBtn>



//             </MDBCardBody>
//           </MDBCard>

//         </MDBCol>

//       </MDBRow>

//     </MDBContainer>
//   );
// }

// export default App;



import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshakeAlt } from "@fortawesome/free-solid-svg-icons";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
  from 'mdb-react-ui-kit';

import { Scale } from "@mui/icons-material";
import shadows from "@mui/material/styles/shadows";
import { fontGrid } from "@mui/material/styles/cssUtils";

function App() {



  const handleback = () => {
    navigate("/")
  };

  const [profileImage, setProfileImage] = useState("");



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleProfileImageChange = (e) => {
    setProfileImage(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };



  const handleSubmit = () => {
    // Here you can add your register logic

    axios.post("https://helpinghands-backend.onrender.com/donor/signup", {
      email: email,
      password: password,
      name: name
    })
      .then((response) => {
        console.log(response)
        alert(response.data.message)

        if (response.data.message === "Verification email sent")
          navigate("/loginUser")
      })
      .catch((error) => {
        console.log(error);
      });
    setEmail("");
    setPassword("");
    setName("");
    setProfileImage("");
  };

  return (
    <div >



      <div className='d-flex flex-row ps-5 pt-5' >
        <div style={{ fontSize: "35px", paddingRight: "10px" }}>
          <FontAwesomeIcon icon={faHandshakeAlt} className="navbar-brand-2" style={{ color: '#FF8000' }} > </FontAwesomeIcon>
        </div>
        {/* <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/> */}
        <span className="h1 fw-bold mb-0">Helping Hands</span>
      </div>




      <MDBContainer lg  >
        <div className="container2">
          <MDBRow>

            <MDBCol sm='6'>
              <MDBIcon onClick={handleback} icon='arrow-circle-left' style={{ fontSize: "35px", marginLeft: "2rem", marginTop: "5.2rem", display: "block", position: "absolute" }} />

              {/* <button class="back-button" onclick={handleback}>Back</button> */}

              <div style={{ paddingTop: '35px', paddingLeft: '50px', fontSize: '18px' }}>


                <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4' >
                  <div className="form-column">
                    <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px', fontSize: '35px' }} >Register User</h3>

                    <MDBInput wrapperClass='mb-4' label='Name' value={name} onChange={handleNameChange} id='form1' type='text' required />

                    <MDBInput wrapperClass='mb-4' value={profileImage} onChange={handleProfileImageChange} label='Profile Image Link' id='form3' type='text' />
                    <MDBInput wrapperClass='mb-4' value={email} onChange={handleEmailChange} label='Email' id='form3' type='email' required />
                    <MDBInput wrapperClass='mb-4' value={password} onChange={handlePasswordChange} label='Password' id='form4' type='password' required />
                    <MDBBtn className='w-100 mb-4' color='info' size='md' onClick={handleSubmit}>sign up</MDBBtn>

                    <p className='ms-5'>Already have an account? <a href="#!" class="link-info"><Link to="/loginUser">Login</Link></a></p>

                  </div>
                </div>
              </div>
            </MDBCol>

            <div className="image-column">
              <MDBCol sm='6' className='d-none d-sm-block px-0'>
                <img src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?size=626&ext=jpg&ga=GA1.1.1697258466.1677494383&semt=sph" alt="Register image" className="w-125"
                  style={{ alignContent: 'flex-end', height: '31rem', width: '30rem' }} />
              </MDBCol>
            </div>
          </MDBRow>
        </div>
      </MDBContainer>
    </div>

  );
}

export default App;