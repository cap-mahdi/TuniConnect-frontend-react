import React from 'react';
import SignUpForm from '../Components/SignUp/SignUpForm';
import Navigation from '../Components/Navigation';
import styles from './Main.module.css';
function SignUpPage() {
  return (
    <>
      <div className={`${styles['signUp-wrapper']}`}>
        <div className={`${styles['signUp-container']}`}>
          <SignUpForm></SignUpForm>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
