import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Layout from "../components/Layout"
import Swal from 'sweetalert2'
import axios from 'axios';
function AddEmployee() {
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('')
    const [degree, setDegree] = useState('')
    const [password, setPassword] = useState('')
    const [contact, setContact] = useState('')
    const [designation, setDesignation] = useState('')
    const [address, setAddress] = useState('')
    const [isSaving, setIsSaving] = useState(false)
const saveRecord = () => {
        setIsSaving(true);
        let formData = new FormData()
        formData.append("fullname", fullname)
        formData.append("email", email)
        formData.append("password", password)
        formData.append("contact", contact)
        formData.append("degree", degree)
        formData.append("designation", designation)
        formData.append("address", address)
        if(fullname == "" || email == "" || password==""){
            Swal.fire({
                icon: 'error',
                title: 'Name, Email, Password are required fields.',
                showConfirmButton: true,
                showCloseButton: true,
            })
            setIsSaving(false)
        }else{
            axios.post('/api/employee', formData)
              .then(function (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Employee has been added successfully!',
                    showConfirmButton: true,
                })
                setIsSaving(false);
                setFullName('')
                setPassword('')
                setEmail('')
                setDegree('')
                setDesignation('')
                setContact('')
                setAddress('')
              })
              .catch(function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops, Something went wrong!',
                    showConfirmButton: true,
                     
                })
                setIsSaving(false)
              });
        }
    }
    return (
        <Layout>
            <div className="container">
                <h2 className="text-center mt-5 mb-3">Add Employee</h2>
                <div className="card">
                    <div className="card-header">
                        <Link 
                            className="btn btn-info float-left"
                            to="/listEmployee">Back To Employee List
                        </Link>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input 
                                    onChange={(event)=>{setFullName(event.target.value)}}
                                    value={fullname}
                                    type="text"
                                    className="form-control"
                                    id="fullname"
                                    name="fullname" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Email</label>
                                <input 
                                    onChange={(event)=>{setEmail(event.target.value)}}
                                    value={email}
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input 
                                    onChange={(event)=>{setPassword(event.target.value)}}
                                    value={password}
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="degree">Degree</label>
                                <input 
                                    onChange={(event)=>{setDegree(event.target.value)}}
                                    value={degree}
                                    type="text"
                                    className="form-control"
                                    id="degree"
                                    name="degree" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="designation">Designation</label>
                                <input 
                                    onChange={(event)=>{setDesignation(event.target.value)}}
                                    value={designation}
                                    type="text"
                                    className="form-control"
                                    id="designation"
                                    name="designation" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact">Contact</label>
                                <input 
                                    onChange={(event)=>{setContact(event.target.value)}}
                                    value={contact}
                                    type="text"
                                    className="form-control"
                                    id="contact"
                                    name="contact" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input 
                                    onChange={(event)=>{setAddress(event.target.value)}}
                                    value={address}
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    name="address" required/>
                            </div>
                            <button 
                                disabled={isSaving}
                                onClick={saveRecord} 
                                type="button"
                                className="btn btn-primary mt-3">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export default AddEmployee;