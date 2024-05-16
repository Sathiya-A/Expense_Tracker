import React, { useState } from 'react'
import Landing_page from './Landing_page'
export default function Login() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [loggedin, setloggedin] = useState();

  const handlechange = (e, upass) => {
    if (upass == 'username') {
      setusername(e.target.value)
    }
    if (upass == 'password') {
      setpassword(e.target.value);
    }
  }

  const handlesubmit = () => {
    if ((username == 'demo@gmail.com') && (password == 'demo')) {
      setloggedin(true);
    }
    else {
      setloggedin(false)
    }
  }

  return (
    <div>
    {loggedin?<div><Landing_page></Landing_page></div>:
    <div className='container login'>
    
      <div className='row '>
        <div className='col-md-6 col-sm-12 col-xs-12 center'>
          <h1 className='expense'>Expense Tracker</h1>
          <small className='small'>*Use demo@gmail.com as username and demo as password to login</small>
        </div>
        <br />
        <div className='col-md-6 col-sm-12 col-xs-12'>
          <div className="auth-wrapper">
            <div className="auth-inner">
             
                <h3>Sign In</h3>

                <div className="mb-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    required
                    onChange={(e) => {
                      handlechange(e, 'username')
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    required
                    onChange={(e) => {
                      handlechange(e, 'password')
                    }}
                  />
                </div>


                <div className="d-grid">
                  <button type="submit" className="btn btn-primary" onClick={() => {
                    handlesubmit()
                  }}>
                    Submit
                  </button>
                </div>

             <div>{loggedin==false?<span style={{color:'red'}}>Username or password incorrect</span>:<div ></div>}</div>
            </div>
          </div>
        </div>
      </div>

     
    </div>}
</div>

  )
}
