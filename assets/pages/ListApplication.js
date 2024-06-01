import React,{ useState, useEffect} from 'react';
import { Form, Link } from "react-router-dom";
import Layout from "../components/Layout"
import axios from 'axios';
function ListApplication() {
    const  [listApplication, setApplicationList] = useState([])
    useEffect(() => {
        fetchApplicationList()
    }, [])
    const fetchApplicationList = () => {
        axios.get('/api/application')
        .then(function (response) {
            setApplicationList(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    
    return (
        <Layout>
           <div className="container">
            <h2 className="text-center mt-5 mb-3"> Applications </h2>
                <div className="card">
                    <div className="card-header" >
                        <Link 
                            className="btn btn-primary float-end"
                            to="/dashboard">Dashboard
                        </Link>
                    <h6>List Application</h6>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped table-hover table-bordered border-primary">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Domain</th>
                                    <th>Experience</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listApplication.map((application, key)=>{
                                    return (
                                        <tr key={key}>
                                            <td>{application.fullname}</td>
                                            <td>{application.email}</td>
                                            <td>{application.phone}</td>
                                            <td>{application.domain}</td>
                                            <td>{application.experience}</td>
                                        
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
export default ListApplication;