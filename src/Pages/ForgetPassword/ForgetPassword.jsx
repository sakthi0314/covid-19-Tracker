import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

function ForgetPassword() {
  const emailRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      //   await login(emailRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to Log in");
    }
    setLoading(false);
  }

  return (
    <div className='signUp'>
      <div className='signUp__container'>
        <form className='signUp__form' onSubmit={handleSubmit}>
          <h5 className='signUp__title'>Rest Password</h5>
          <div className='signUp__group'>
            <label className='signUp__label'>Email</label>
            <input
              type='email'
              className='signUp__input'
              placeholder='enter your email '
              ref={emailRef}
            />
          </div>

          <button type='submit' className='signUp__btn' disabled={loading}>
            Reset Password
          </button>
          <div className='signUp__forget'>
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

export default ForgetPassword;
