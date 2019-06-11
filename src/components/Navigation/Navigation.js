import React from "react";

export default function Navigation({ onRouteChange, isSignedIn }) {
  if (isSignedIn) {
    return (
      <div>
        <button
          onClick={() => onRouteChange("signout")}
          className="App-btn-signout"
        >
          Sign Out
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button
          onClick={() => onRouteChange("signin")}
          className="App-btn-signout mr-3"
        >
          SignIn
        </button>
        <button
          onClick={() => onRouteChange("register")}
          className="App-btn-signout"
        >
          Register
        </button>
      </div>
    );
  }
}
