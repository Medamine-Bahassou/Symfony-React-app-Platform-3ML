import React, { useState } from 'react';
import Layout from "../components/Layout"
import Swal from 'sweetalert2'
import axios from 'axios';

function JobApplicationForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [domain, setDomain] = useState('');
  const [experience, setExperience] = useState('');
  const [isSaving, setIsSaving] = useState(false)



  const saveApplication = () => {
    setIsSaving(true);
    let formData2 = new FormData();
    formData2.append("fullName", fullName); // Use fullName instead of fullname
    formData2.append("email", email);
    formData2.append("phone", phone);
    formData2.append("domain", domain);
    formData2.append("experience", experience);
    if (fullName === "" || email === "" || domain === "") {
        Swal.fire({
            icon: 'error',
            title: 'Name, Email, Domain are required fields.',
            showConfirmButton: true,
            showCloseButton: true,
        });
        setIsSaving(false);
    } else {
        axios.post('/api/application', formData2)
            .then(function (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Application has been added successfully!',
                    showConfirmButton: true,
                })
                setIsSaving(false);
                setFullName('')
                setPhone('')
                setEmail('')
                setDomain('')
                setExperience('')
            })
            .catch(function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops, Something went wrong!',
                    showConfirmButton: true,
                });
                setIsSaving(false);
            });
    }
};

  return (
    <Layout>
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow p-4">
            <h1 className="card-title text-center mb-4 display-6">Job Application Form</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input name="fullName" type="text" className="form-control" id="fullName" placeholder="Enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)}  />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input name="email" type="email" className="form-control" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}  />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input name="phone" type="tel" className="form-control" id="phone" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)}  />
              </div>
              <div className="mb-3">
                  <label htmlFor="domain" className="form-label">Domain</label>
                  <select name="domain" className="form-select" id="domain" value={domain} onChange={(e) => setDomain(e.target.value)}>
                    <option value="">Select Domain</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Content Writing">Content Writing</option>
                    <option value="Data Entry">Data Entry</option>
                    {/* Add necessary domains for freelancers */}
                    <option value="Consulting">Consulting</option>
                    <option value="Photography">Photography</option>
                    <option value="Video Editing">Video Editing</option>
                    {/* Add more as needed */}
                  </select>
               </div>
                <div className="mb-3">
                    <label htmlFor="experience" className="form-label">Experience</label>
                    <select 
                        name="experience" 
                        className="form-select" 
                        id="experience" 
                        value={experience} 
                        onChange={(e) => setExperience(e.target.value)}
                    >
                        <option value="">No Experience</option>
                        <option value="1 ans">1 ans</option>
                        <option value="2 ans">2 ans</option>
                        <option value="3 ans">3 ans</option>
                        <option value="5 ans">5 ans</option>
                        <option value="6 ans">6 ans</option>
                        <option value="7 ans et plus">7 ans et plus</option>
                    </select>
                </div>
              
              
              <div className="text-center">
                <button 
                    disabled={isSaving}
                    onClick={saveApplication} 
                    type="button"
                    className="btn btn-primary btn-block">
                    Save
                </button>
              </div>  

            </form>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default JobApplicationForm;
