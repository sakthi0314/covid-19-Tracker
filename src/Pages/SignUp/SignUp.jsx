import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import "./SignUp.scss";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Password do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div className='signUp'>
      <div className='signUp__container'>
        <form className='signUp__form' onSubmit={handleSubmit}>
          <h5 className='signUp__title'>Creating an account</h5>
          <div className='signUp__group'>
            <label className='signUp__label'>Email</label>
            <input
              type='email'
              className='signUp__input'
              placeholder='enter your email '
              ref={emailRef}
              required
            />
          </div>

          <div className='signUp__group'>
            <label className='signUp__label'>Password</label>
            <input
              type='password'
              className='signUp__input'
              placeholder='password'
              ref={passwordRef}
              required
            />
          </div>

          <div className='signUp__group'>
            <label className='signUp__label'>Confirm password</label>
            <input
              type='password'
              className='signUp__input'
              placeholder='confirm password'
              ref={confirmPasswordRef}
              required
            />
          </div>
          <button type='submit' className='signUp__btn' disabled={loading}>
            SignUp
          </button>
          <div className='signUp__forget'>
            Already have an account?
            <Link to='/login' className='link'>
              Log in
            </Link>
          </div>
          <p className='signUp__error'>{error}</p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
