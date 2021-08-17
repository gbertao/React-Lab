import React, { useState } from 'react'
import './Login.css'
import PropTypes from 'prop-types'

const loginUser = async (creds) => {
  const res = await fetch('http://192.168.0.11:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(creds)
  })

  return res.json()
}

const Login = ({ setToken }) => {
  const [userName, setUserName] = useState('')
  const [passwd, setPasswd] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    const token = await loginUser({
      userName,
      passwd
    });
    setToken(token)
  }

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" value={userName} onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" value={passwd} onChange={e => setPasswd(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login
