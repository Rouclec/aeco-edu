import { useEffect } from "react";

const FormPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://aeco.ams4you.net/webinqcode-13059-1100.html";
    script.async = true;
    document.body.appendChild(script);
    
    console.log("body: ", document.body);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="form-container">
    <script src="https://aeco.ams4you.net/webinqcode-13059-1100.html" async/>
  </div>;
};

export default FormPage;
