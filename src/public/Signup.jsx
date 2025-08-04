import React, { useEffect, useState } from 'react'

export default function Signup() {

  const [password, setpassword] = useState("")
  const [Cpassword, setCpassword] = useState("")

  const handleSubmit = (e) => {
   e.preventDefault();
   if (password !== Cpassword){
    alert("Password not match")
   }
   else{
    alert("Password match")
   }
  }
  

  return (
    <div className='container mt-3 mb-3 card'>
      <form className='card-body' onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor="fname">First Name:</label>
          <input className='form-control' type="text" id="fname" required />
        </div>
        <div className='mb-3'>
          <label htmlFor="lname">Last Name:</label>
          <input className='form-control' type="text" id="lname" required />
        </div>
        <div className='mb-3'>
          <label htmlFor="dob">Date of Birth:</label>
          <input className='form-control' type="date" id="dob" required />
        </div>
        <div className='mb-3'>
          <label htmlFor="gender">Gender:</label>
          <select id="gender" required className='form-select'>
            <option value="">--Select--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className='mb-3'>
          <label htmlFor="email">Email:</label>
          <input className='form-control' type="email" id="email" required />
        </div>
        <div className='mb-3'>
          <label htmlFor="phone">Phone Number:</label>
          <input className='form-control' maxLength={10} pattern='[6-9]{1}[0-9]{9}' type="tel" id="phone" required />
        </div>
        <div className='mb-3'>
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            rows={3}
            cols={40}
            required
            className='form-control'/>
        </div>
         <div className='mb-3'>
          <label htmlFor="uname">User_Name:</label>
          <input className='form-control' type="text" id="uname"  pattern='@[a-z]{1}[A-Za-z]{5,}.*\d' required />
        </div>
         <div className='mb-3'>
          <label htmlFor="password">Enter password:</label>
          <input className='form-control' type="password" id="password" onKeyUp={(e) => setpassword(e.target.value)} pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' required />
        </div>
         <div className='mb-3'>
          <label htmlFor="cpassword">Comfirm password:</label>
          <input className='form-control' type="password" id="cpassword" onKeyUp={(e) => setCpassword(e.target.value)} pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' required />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  )
}
