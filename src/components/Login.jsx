// src/App.js
import React, { useState, useRef } from 'react';
import Link from '@mui/material/Link';
// import GenerateOTP from './components/GenerateOTP';
import VerifyOTP from './VerifyOTP';
import { LOGINFAILED } from '../utils/Constants';
// import axios from 'axios';
import '../assets/login-page.css' ;//  './assets/login-page.css';

function App() {
  
  const [secret, setSecret] = useState(null);
  const [qrCode, setQrCode] = useState(null);
  const [isLoginValid, setIsLoginValid] = useState(null);
  const [mobileNumber, setMobileNumber] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isEmailLoginFlow, setIsEmailLoginFlow ]= useState(false);

  const onMobileNumberInputHandler = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleGenerateOTP = async () => {
    console.log('in handleGenerateOTP');

    await fetch('http://localhost:3001/send-otp-with-twilio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers if needed
      },
      // Add the request body if needed
      // body: JSON.stringify({ key: 'value' }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); 
    })
    .then(result => {
      // Handle the data
      setSecret(result.secret);
      setQrCode(result.qrCode);
      console.log(result);
    })
    .catch(error => {
      // Handle errors
      console.error(`Error in handleGenerateOTP function: ${error}`);
      setIsLoginValid(LOGINFAILED);
    });

  };

  const showEmailFlow = () => {
    setIsEmailLoginFlow(true)
  }

  const showOTPFlow = () => {
    setIsEmailLoginFlow(false)
  }

  const onEmailChangeHandler = (event) => {
    setEmail(event?.target?.value)
  } 

  const onPasswordChangeHandler = (event) => {
    setPassword(event?.target?.value)
  }

  const verifyLoginCredentials = async () => {
  }

  return (
      <div className='page-container login-main-container'>
        {
          isEmailLoginFlow ?
          <>
            <form className='login-parent-container'>
              <h2>Login</h2>
              <div className='login-mnumber-section form-fields'  >
                <label  htmlFor="email">Email: </label>
                <input type="text" id="email" 
                      name="email" value={email}
                      onInput={(e) => onEmailChangeHandler(e)} />
              </div>

              <div className='login-mnumber-section form-fields' >
                <label  htmlFor="password">Password: </label>
                <input type="password" id="password" 
                       name="password" 
                       value={password}
                       onInput={(e) => onPasswordChangeHandler(e)}
                        />
              </div>

              <div className='otp-mobile-btn-container'>
                  <div>
                    <button type="submit" onClick={() => verifyLoginCredentials()}>Login</button>
                  </div>

                  <div className='login-using-email-btn'>
                    <Link component="button" variant="body2" 
                        onClick={() => showOTPFlow()} > continue using mobile</Link>
                  </div>
              </div>
            </form>
          </>
          :
          <>
              {
                  !secret  ?
                  <div className='login-parent-container'>
                      <div className='login-mnumber-section'>
                          <h2>Login</h2>
                          <div className='mobile-form-field'>
                            <label htmlFor="mnumber" required>Mobile number: </label>
                            <input type="text" value={mobileNumber} 
                                  required 
                                  onInput={(e) => onMobileNumberInputHandler(e)}/>
                          </div>
                      </div>
                      {
                        isLoginValid !== null && 
                            (
                              <div className='login-status-cls' >{ !isLoginValid ? 'OTP is valid' : isLoginValid }</div>
                            )
                      }
                      <div className='opt-email-btn-container'>
                          <div className='login-btn-container'>
                            <button onClick={() => handleGenerateOTP()}>Login</button>
                          </div>

                          <div className='login-using-email-btn'>
                            <Link component="button" variant="body2" 
                                onClick={() => showEmailFlow()} > continue using email</Link>
                          </div>
                      </div>
                  </div>
                  :
                  <div>
                      {
                        secret && <VerifyOTP 
                                  secret={secret} 
                                  qrCode={qrCode}
                                  setSecret={setSecret}
                                  setQrCode={setQrCode}
                                  mobileNumber={mobileNumber}
                                  handleRegenerateOTP={() => handleGenerateOTP()}
                                  />
                      }
                  </div>
              }
              {
                qrCode !== null && 
                    <div className='qrcode-section'>
                          <p className=''>If you are facing any issues with the OTP, as an alternate you can scan the below QRCode to get the OTP to login.</p>
                          
                          { <img src={qrCode} alt="QR Code" />}
                    </div>
              }
          </>
        }
  
      </div>
  );
}

export default App;
