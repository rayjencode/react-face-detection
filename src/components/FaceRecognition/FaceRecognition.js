import React from "react";

export default function FaceRecognition({ imageUrl, box, alt }) {
  return (
    <div className="container text-center">
      <div className="face-image-wrapper">
        <img
          id="inputimage"
          className="face-image mx-auto"
          src={imageUrl}
          alt={alt}
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        />
      </div>
    </div>
  );
}
