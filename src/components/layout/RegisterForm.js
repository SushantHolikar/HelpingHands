// import React, { useState } from "react";
// import axios from "axios";

// import { Link, useNavigate } from "react-router-dom";

// // const RegisterForm = () => {
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [name, setNgoName] = useState("");
// const [NgoID, setNgoID] = useState("");

// const handleEmailChange = (e) => {
//   setEmail(e.target.value);
// };

// const handlePasswordChange = (e) => {
//   setPassword(e.target.value);
// };

// const handleNgoNameChange = (e) => {
//   setNgoName(e.target.value);
// };

// const handleNgoIDChange = (e) => {
//   setNgoID(e.target.value);
// };

// const navigate=useNavigate()
// const handleSubmit = (e) => {
//   e.preventDefault();
//   // Here you can add your register logic

//   axios.post("https://helpinghands-backend.onrender.com/user/signup", {
//     email: email,
//     password: password,
//     name: name,
//     NgoID:NgoID
//   })
//   .then((response) => {
//       console.log(response)
//       navigate("/login")
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//   setEmail("");
//   setPassword("");
//   setNgoName("");
//   setNgoID("");
// };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <h2>Register</h2>
// //       <div>
// //         <label>Email:</label>
// //         <input type="email" value={email} onChange={handleEmailChange} required />
// //       </div>
// //       <div>
// //         <label>Password:</label>
// //         <input type="password" value={password} onChange={handlePasswordChange} required />
// //       </div>

// //       <div>
// //             <label>NGO Name:</label>
// //             <input type="text" value={name} onChange={handleNgoNameChange} required />
// //           </div>
// //       <div>
// //             <label>NGO ID:</label>
// //             <input type="text" value={NgoID} onChange={handleNgoIDChange} required />
// //           </div>

// //       <div>
// //       </div>
// //       <button type="submit">Register</button>
// //     </form>
// //   );
// // };

// // export default RegisterForm;






// // import React from 'react';
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

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setNgoName] = useState("");
//   const [NgoID, setNgoID] = useState("");
//   const navigate=useNavigate()

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleNgoNameChange = (e) => {
//     setNgoName(e.target.value);
//   };

//   const handleNgoIDChange = (e) => {
//     setNgoID(e.target.value);
//   };

// const handleProfileImageChange = (e) => {
//   setNgoProfileImage(e.target.value);
// };

//   const handleSubmit = () => {
//     // Here you can add your register logic

//     axios.post("https://helpinghands-backend.onrender.com/user/signup", {
//       email: email,
//       password: password,
//       name: name,
//       NgoID:NgoID,
//       profileImage:profileImage,
//     })
//     .then((response) => {
//         console.log(response)
//         if(response.data.message==="Verification email sent")
//         navigate("/login")
//         alert(response.data.message)
//     })
//     .catch((error) => {
//       console.log(error);
//       alert(error.data.message)
//     });
//     setEmail("");
//     setPassword("");
//     setNgoName("");
//     setNgoID("");

//   };

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

// <MDBCol md='6' className='position-relative' style={{"maxWidth":"40rem"}}>

//           <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
//           <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

//           <MDBCard className='my-5 bg-glass'>
//             <MDBCardBody className='p-5'>

//               <MDBRow>
//                 <MDBCol col='6'>
//                 </MDBCol>

//                 <MDBCol col='6'>
//                 </MDBCol>
//               </MDBRow>







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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setNgoName] = useState("");
  const [NgoID, setNgoID] = useState("");
  const [profileImage, setNgoProfileImage] = useState("");



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNgoNameChange = (e) => {
    setNgoName(e.target.value);
  };

  const handleNgoIDChange = (e) => {
    setNgoID(e.target.value);
  };
  const handleProfileImageChange = (e) => {
    setNgoProfileImage(e.target.value);
  };

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your register logic

    axios.post("https://helpinghands-backend.onrender.com/user/signup", {
      email: email,
      password: password,
      name: name,
      NgoID: NgoID,
      profileImage: profileImage
    })
    .then((response) => {
      console.log(response)
      alert(response.data.message)

      if(response.data.message==="Verification email sent")
      navigate("/login")
  })
  .catch((error) => {
    console.log(error);
  });

    setEmail("");
    setPassword("");
    setNgoName("");
    setNgoID("");
    setNgoProfileImage("");
  };
  return (
    <div >



      <div className='d-flex flex-row ps-5 pt-5' style={{ marginLeft: '10rem' }}>
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
                    <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px', fontSize: '35px' }} >NGO Register</h3>

                    <MDBInput wrapperClass='mb-4' label='Ngo name' value={name} onChange={handleNgoNameChange} id='form1' type='text' required />
                    <MDBInput wrapperClass='mb-4' value={NgoID} onChange={handleNgoIDChange} label='Ngo Id' id='form2' type='text' required />
                    <MDBInput wrapperClass='mb-4' value={profileImage} onChange={handleProfileImageChange} label='Profile Image Link' id='form3' type='text' />
                    <MDBInput wrapperClass='mb-4' value={email} onChange={handleEmailChange} label='Email' id='form4' type='email' required />
                    <MDBInput wrapperClass='mb-4' value={password} onChange={handlePasswordChange} label='Password' id='form5' type='password' required />

                    <MDBBtn className='w-100 mb-4' size='md' onClick={handleSubmit}>sign up</MDBBtn>

                    <p className='ms-5'>Already have an account? <a href="#!" class="link-info"><Link to="/login">Register</Link></a></p>

                  </div>
                </div>
              </div>
            </MDBCol>

            <div className="image-column">
              <MDBCol sm='6' className='d-none d-sm-block px-0'>
                <img src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37336.jpg?w=740&t=st=1681558380~exp=1681558980~hmac=a646258d3968d2743d6fc1dd5589033eb8350d7b3558de58cacfb74811f52eda" alt="Login image" className="w-125"
                  style={{ alignContent: 'flex-end', height: '31rem', width: '25rem' }} />
              </MDBCol>
            </div>
          </MDBRow>
        </div>
      </MDBContainer>
    </div>

  );
}

export default App;