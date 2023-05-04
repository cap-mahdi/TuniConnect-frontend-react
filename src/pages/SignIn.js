import React from "react";
import SignInForm from '../Components/SignIn/SignInForm'
import '../Components/SignIn/SignInStyle.css'

function SignIn() {
    return (
        <>
            <div className="container">
                <div className="text">
                    <div className="text-1">Every new friend is a <br/> new adventure</div>
                    <div className="text-2">Let's get connected</div>
                </div>
                <div className="form">
                    <SignInForm />
                </div>
            </div>

        </>
    )

}


export default SignIn;