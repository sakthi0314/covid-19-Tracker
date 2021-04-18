import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

function ForgetPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for futhere infomation");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
    emailRef.current.value = "";
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
              required
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
          <p className='signUp__message'>{message}</p>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
