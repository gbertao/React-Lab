import './Login.css'

const Login = ({ setToken }) => {
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  )
}

export default Login