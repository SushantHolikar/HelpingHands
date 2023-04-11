import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// const LoginForm = () => {
//   const navigate=useNavigate()
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };
//   const host="https://localhost:5000"
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if(localStorage.getItem('logggedInNgo')){
//       navigate("/")
//     }
//     axios.post("http://localhost:5000/user/signin", {
//       email: email,
//       password: password,
//     })
//     .then((response) => {
//         console.log(response)
//         localStorage.setItem('loggedInNgo',true)
//         navigate("/")
//     })
//     .catch((error) => {
//       console.log(error);
//     });


//     // Here you can add your login logic
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <div>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={handleEmailChange} required />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input type="password" value={password} onChange={handlePasswordChange} required />
//       </div>
//       <button type="submit">Login</button>
//       <div>
//         Don't have an account? <Link to="/register">Register</Link>
//       </div>
//     </form>
//   );
// };

// export default LoginForm;



import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

function App() {

    const navigate=useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
    const host="https://localhost:5000"
    const handleSubmit = () => {
  
      if(localStorage.getItem('loggedInUser')){
        navigate("/")
      }
      axios.post("http://localhost:5000/donor/signin", {
        email: email,
        password: password,
      })
      .then((response) => {
        if(response.data.status==="SUCCESS"){
          console.log(response)
          localStorage.setItem('loggedInUser',true)
          localStorage.setItem('email',email)
          navigate("/")
        }
        else{
            alert(response.data.message)
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error.data.message)
      });
  
  
    };
  
  return (
    <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
            <span className="h1 fw-bold mb-0">Logo</span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' onChange={handleEmailChange} required size="lg"/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' onChange={handlePasswordChange} required size="lg"/>

            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg' onClick={handleSubmit}>Login</MDBBtn>
            <p className='ms-5'>Don't have an account? <a href="#!" class="link-info"><Link to="/registerUser">Register</Link></a></p>

          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9uYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="Login image" className="w-100" style={{ objectPosition: 'left', height:'96vh',width:'', paddingRight:'20px'}} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;