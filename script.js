import React, { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const MyComponent = () => {
  useEffect(() => {
    const html5QrCode = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );
    html5QrCode.render(onSuccess, onError);

    function onSuccess(decodedText, decodedResult) {
      console.log(`Code matched = ${decodedText}`, decodedResult);
    }

    function onError(errorMessage) {
      console.log(`Error scanning = ${errorMessage}`);
    }

    return () => {
      html5QrCode.clear().catch((error) => {
        console.error("Failed to clear html5QrcodeScanner.", error);
      });
    };
  }, []);

  return <div id="reader"></div>;
};

export default MyComponent;
