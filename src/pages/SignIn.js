import React from "react";
import SignInForm from '../Components/SignIn/SignInForm'
import  styles from  '../Components/SignIn/SignInStyle.module.css'
import AuthController from "../API/Accounts/AuthController";
function SignIn() {
    AuthController.removeToken()  ;
    return (
        <>
            <div className={`${styles["body_Singin"]}`} style={{display:"flex"}}>
                <div className={styles["text"]}>
                    <div className={styles["text-1"]}>Every new friend is a <br/> new adventure</div>
                    <div className={styles["text-2"]}>Let's get connected</div>
                </div>
                <div >
                    <SignInForm />
                </div>
            </div>

        </>
    )

}


export default SignIn;