import React, { useState } from "react";
import firebase from './firebase'

const OTPBot = (props) => {

  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [mobSent, setMobSent] = useState(true);

  const handleChange = (e) =>{
    const {name, value } = e.target;
    name === "mobile" ? setMobile(value) : setOtp(value);
  }
  
  const configureCaptcha = () =>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "IN"
    });
  }

  const onSignInSubmit = (e) => {
    e.preventDefault();
    configureCaptcha();
    const phoneNumber = "+91" + mobile;
    console.log(phoneNumber);
    setMobSent(false);
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent");
          setOtpSent(true);
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent");
        });
  }

  
  const onSubmitOTP = (e) =>{
    e.preventDefault();
    const code = otp;
    console.log(code);
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user; 
      //debugger;
      //console.log(JSON.stringify(user));
      alert("User is verified");
      setIsVerified(true);
      //console.log("isVerified:",isVerified);
      props.handleCallback(user.uid);
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }
  const edit = () =>{
    setMobSent(true) 
    setOtpSent(false)
  }
  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={onSignInSubmit}>
        <div id="sign-in-button"></div>
        <input type="number" name="mobile" placeholder="Mobile Number" disabled={otpSent} required onChange={handleChange}/>
        <button type="submit" disabled={otpSent}>Send OTP</button>
        { otpSent &&
          <button type="button" onClick={edit}>Edit</button>}
      </form>

      <h2>Enter OTP</h2>
      <form onSubmit={onSubmitOTP}>
        <input type="number" name="otp" placeholder="OTP Number" disabled={mobSent} required onChange={handleChange}/>
        <button type="submit" disabled={mobSent}>Verify OTP</button>
      </form>
      {isVerified && <p>Verification successful!</p>}
    </div>
  )
}

export default OTPBot;