import React from "react";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="container">
      <div className="row">
        <h4 className="text-center mx-auto mt-5">
          This Magic Brain will Detect Faces in your Picture. Get it a try
        </h4>
        <div className="form-wrapper input-group my-5 mx-3">
          <input
            onChange={onInputChange}
            type="text"
            className="form-control"
            placeholder="Image URL"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div className="input-group-append">
            <button
              onClick={onButtonSubmit}
              className="btn btn-danger"
              type="button"
              id="button-addon2"
            >
              Detect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
