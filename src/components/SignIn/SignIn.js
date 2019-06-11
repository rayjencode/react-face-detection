import React from "react";

export default function SignIn({ onRouteChange }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-5 col-sm-10 mx-auto">
          <div className="App-login text-center">
            <div className="form-group">
              <h4 className="text-center mb-4">Sign-In</h4>

              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-group form-check" />
            <button
              onClick={() => onRouteChange("home")}
              type="submit"
              className="btn btn-danger mr-4"
            >
              Sign In
            </button>
            <button className="btn" onClick={() => onRouteChange("register")}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
