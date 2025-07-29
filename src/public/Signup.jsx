import React from 'react'

export default function Signup() {
  return (
    <div className='container mt-3 mb-3 card'>
      <form className='card-body'>
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
          <input className='form-control' type="tel" id="phone" required />
        </div>
        <div className='mb-3'>
          {/* Address */}
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            rows={3}
            cols={40}
            required
            className='form-control' />
        </div>
         <div className='mb-3'>
          <label htmlFor="uname">User_Name:</label>
          <input className='form-control' type="text" id="fname" required />
        </div>
         <div className='mb-3'>
          <label htmlFor="password">Enter password:</label>
          <input className='form-control' type="text" id="fname" required />
        </div>
         <div className='mb-3'>
          <label htmlFor="password">Comfirm password:</label>
          <input className='form-control' type="text" id="fname" required />
        </div>
        <button type="button" className="btn btn-success">Submit</button>
      </form>
    </div>
  )
}
