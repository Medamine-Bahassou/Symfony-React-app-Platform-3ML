import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission

    console.log("Form Data Submitted:", formData); // Debugging log

    axios.post('/api/login', formData)
      .then(function (response) {
        console.log("API Response:", response.data); // Debugging log
        if (response.data.success === true) {
          navigate('/dashboard');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops, Something went wrong!',
            text: response.data.message, // Show the error message
            showConfirmButton: true,
          });
        }
      })
      .catch(function (error) {
        console.error("API Error:", error); // Debugging log
        let errorMessage = "An error occurred while communicating with the server.";
        if (error.response && error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        }
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: errorMessage,
          showConfirmButton: true,
        });
      });
  };

  return (
    <div className="d-flex justify-content-center flex-column align-items-center vh-100 bg-light">
      <div className="card rounded shadow-lg" style={{ width: '60%', maxWidth: '900px' }}>
        <div className="row g-0">
          <div className="col-md-6">
            <img src="images/Login.png" className="img-fluid rounded-start h-100" alt="Illustration" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center bg-info">
            <div className="card-body text-center d-flex flex-column justify-content-center align-items-center">
              <h1 className="display-6">Login</h1> {/* Updated title to "Login" */}
              <p className="lead-6">Welcome to our platform! Please fill out the form below to login.</p> {/* Updated description */}
              <form onSubmit={handleLogin}> {/* Updated onSubmit handler */}
                <div className="form-group my-2">
                  <input 
                    type="text" 
                    className="form-control form-control-lg rounded-pill" 
                    placeholder="ID" 
                    name='username' 
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <input 
                    type="password" 
                    className="form-control form-control-lg rounded-pill" 
                    placeholder="Password" 
                    name='password' 
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg rounded-pill"
                >
                  Login {/* Updated button label */}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
