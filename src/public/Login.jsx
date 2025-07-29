import React from 'react'

export default function Login() {
  return (
    <div>
    <>
  <label htmlFor="username">Username:</label>
  <input type="text" id="username" name="username" required="" />
  <label htmlFor="password">Password:</label>
  <input type="password" id="password" name="password" required="" />
  <input type="submit" defaultValue="Login" />
  <p>
    Don't have an account? <a href="./Application Form.html">Sign up</a>
  </p>
</>

</div>

  )
}
