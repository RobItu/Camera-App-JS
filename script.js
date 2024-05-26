import React from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  facingMode: { exact: "environment" }, // for rear camera, use "user" for front camera
};

const MyComponent = () => {
  return (
    <Webcam
      audio={false}
      height={720}
      screenshotFormat="image/jpeg"
      width={1280}
      videoConstraints={videoConstraints}
    />
  );
};

export default MyComponent;
