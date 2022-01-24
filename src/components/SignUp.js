import React from 'react'
import './Signup.css'

function SignUp({closeModal}) {
    return (
        <div className = "popup" id='popup'>
            <div className = "popup-design">
                <div className='inner-popup'>
                    <div className = 'close-btn' id = "close">
                        <button onClick={closeModal}> X </button>
                    </div>
                    <div className='sign-in-type'>
                        <div className='login'>
                            <div className = "popup-input " id = "sign-up">
                                <h1>Sign Up</h1>
                                <p>Already a member? <b className = "log-in">Log in</b></p>
                                <input placeholder = "Email" />
                                <input placeholder = "Password" />
                                <button >Sign in</button>
                            </div>
                        </div>
                        <div className='login-or-signup' id = "sign-up-choice">
                            <p> or sign up with</p>
                        </div>
                        <div className = "sign-up">
                            <div className = "social-signup-fb" id = "modal">
                                <i class='fab fa-facebook-f'/>
                                <p>Sign in with <b>Facebook</b></p>
                            </div>
                            <div className = "social-signup-twitter" id = "modal">
                                <i class='fab fa-twitter' />
                                <p>Sign in with <b>Twitter</b></p>
                            </div>
                            <div className = "social-signup-google" id = "modal">
                                <i class="fab fa-google"></i>
                                <p>Sign in with <b>Google</b></p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp
