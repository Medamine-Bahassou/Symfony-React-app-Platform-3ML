import React from 'react';
import { Link } from 'react-router-dom';


function Menu() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card rounded shadow-lg" style={{ width: '60%', maxWidth: '900px' }}>
        <div className="row g-0">
          <div className="col-md-6">
            <img src="images/Menu.jpg" className="img-fluid rounded-start h-100" alt="Illustration" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <div className="card-body text-center d-flex flex-column justify-content-center align-items-center">
              <Link to="/listEmployee" className="btn btn-primary btn-lg my-2">Freelancers</Link>
              <Link to="/listApplication" className="btn btn-primary btn-lg my-2">Applications</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
