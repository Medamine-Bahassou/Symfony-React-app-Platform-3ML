import React, {useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout"
import axios from 'axios';
function ViewEmployee() {
    const [id, setId] = useState(useParams().id)
    const [employee, setEmployee] = useState({fullname:"", email:"", contact:"",degree:"",designation:"",address:""})
    useEffect(() => {
        axios.get(`/api/employee/${id}`)
        .then(function (response) {
          setEmployee(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }, [])
    return (
        <Layout>
           <div className="container">
            <h2 className="text-center mt-5 mb-3">View Employee</h2>
                <div className="card">
                    <div className="card-header">
                        <Link 
                            className="btn btn-info float-left"
                            to="/listEmployee"> Back To Employee List
                        </Link>
                    </div>
                    <div className="card-body">
                        <b className="text-muted">Name:</b>
                        <p>{employee.fullname}</p>
                        <b className="text-muted">Email:</b>
                        <p>{employee.email}</p>
                        <b className="text-muted">Contact:</b>
                        <p>{employee.contact}</p>
                        <b className="text-muted">Degree:</b>
                        <p>{employee.degree}</p>
                        <b className="text-muted">Designation:</b>
                        <p>{employee.designation}</p>
                        <b className="text-muted">Address:</b>
                        <p>{employee.address}</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export default ViewEmployee;