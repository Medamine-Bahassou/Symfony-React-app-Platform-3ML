import React, {useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout"
import axios from 'axios';
function HomePage() {
    return (
        <Layout>
            <div className="container pt-5">
            <div className='row align-items-center'>
                <div className='col-md-6 text-center mb-4 mb-md-0'>
                    <img src="/images/illustration.png" alt="Illustration" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <div className='col-md-6'>
                    <h1 className="display-4">Welcome to 3ML</h1>
                    <p className="lead">Freelance Connect is a comprehensive platform that connects freelancers with clients globally.
                        Whether you're looking for freelance work or seeking talented freelancers, 
                        our app provides the tools and features to help you succeed in the freelance market.</p>
                </div>
            </div>
            
            <hr className="my-4" /> 

            <div  id='inscription' className='row align-items-center'>
                
                <div className='col-md-6'>
                    <div className="inscription-container d-flex justify-content-center align-items-center text-center">
                        <div>
                            <h1 className="inscription-title display-5">Application</h1>
                            <p className="inscription-description lead">
                            Your inscription description goes here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac sapien eget justo ultricies faucibus. Nulla facilisi. Donec consequat ullamcorper nunc, et fermentum leo varius at.
                            </p>
                            <Link 
                            className="btn btn-primary inscription-button w-75 h-25 rounded-pill"
                            to="/apply">
                                Apply
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 text-center mb-4 mb-md-0'>
                    <img src="/images/inscription.png" alt="Illustration" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            </div>

            <hr className="my-4" /> 

            <div className='row mt-5 mb-5'>
                <div className='col-md-6 mb-4 mb-md-0'>
                    <div className="card h-100 border-primary">
                        <div className="card-body">
                            <h2 className="card-title">Contact</h2>
                            <p className="card-text">If you have any questions or need further assistance, please don't hesitate to reach out to us.</p>
                            <ul className="list-unstyled">
                                <li><strong>Email:</strong> support@3ml.com</li>
                                <li><strong>Phone:</strong> +1 (123) 456-7890</li>
                                <li><strong>Address:</strong> 123 Freelancer Ave, Work City, WC 12345</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="card h-100 border-secondary">
                        <div className="card-body">
                            <h2 className="card-title">About</h2>
                            <p className="card-text">3ML was established to meet the needs of freelancers and integrate them into the organization to find work for them.</p>
                            <p className="card-text">Our mission is to bridge the gap between freelancers and clients, providing a seamless platform that caters to the needs of both parties.</p>
                            <p className="card-text">Our dedicated team offers the best tools and features to ensure a productive and successful freelance experience.</p>
                            <p className="card-text">Join our community today and elevate your freelancing career to new heights!</p>
                            <p className="card-text">Experience the difference with 3ML, where your success is our priority.</p>
                            <p className="card-text">Together, let's shape the future of freelancing and create opportunities that inspire growth and innovation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
    );
}
export default HomePage;