import React,{ useState, useEffect} from 'react';
import { Form, Link } from "react-router-dom";
import Layout from "../components/Layout"
import Swal from 'sweetalert2'
import axios from 'axios';
function ListEmployee() {
    const  [listEmployee, setEmployeeList] = useState([])
    useEffect(() => {
        fetchEmployeeList()
    }, [])
    const fetchEmployeeList = () => {
        axios.get('/api/employee')
        .then(function (response) {
          setEmployeeList(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    const deleteRecord = (id) => {
        Swal.fire({
            title: 'Are you sure you want to delete this employee?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/api/employee/${id}`)
                .then(function (response) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Employee has been deleted successfully!',
                        showConfirmButton: false,
                        timer: 1000
                    })
                    fetchEmployeeList()
                })
                .catch(function (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops, Something went wrong!',
                        showConfirmButton: false,
                        timer: 1000
                    })
                });
            }
          })
    }
    return (
        <Layout>
           <div className="container">
            <h2 className="text-center mt-5 mb-3">Employees</h2>
                <div className="card">
                    <div className="card-header">
                        <Link 
                            className="btn btn-primary"
                            to="/addEmployee">Add Employee
                        </Link>
                        <Link 
                            className="ms-4 btn btn-primary float-end"
                            to="/dashboard">Dashboard
                        </Link>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped table-hover table-bordered border-primary">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Degree</th>
                                    <th>Designation</th>
                                    <th>Contact</th>
                                    <th>Address</th>
                                    <th width="300px">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listEmployee.map((employee, key)=>{
                                    return (
                                        <tr key={key}>
                                            <td>{employee.fullname}</td>
                                            <td>{employee.email}</td>
                                            <td>{employee.degree}</td>
                                            <td>{employee.designation}</td>
                                            <td>{employee.contact}</td>
                                            <td>{employee.address}</td>
                                            <td>
                                                <Link
                                                    to={`/showEmployee/${employee.id}`}
                                                    className="btn btn-info mx-1">
                                                    <i class="far fa-eye me-1"></i>
                                                    View
                                                </Link>
                                                <Link
                                                    className="btn btn-success mx-1"
                                                    to={`/editEmployee/${employee.id}`}>
                                                    <i class="fas fa-edit me-1"></i>
                                                    Edit
                                                </Link>
                                                <button 
                                                    onClick={()=>deleteRecord(employee.id)}
                                                    className="btn btn-danger mx-1">
                                                    <i class="fas fa-user-times me-1"></i>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export default ListEmployee;