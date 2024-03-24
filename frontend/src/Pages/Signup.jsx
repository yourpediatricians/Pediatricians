import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password1: '',
    password2: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password1 !== formData.password2) {
      alert('Passwords do not match');
      return;
    }

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password1 
      })
    })
    .then(response => {
      if (response.ok) {
        alert('Signup successful'); 
      } else {
        throw new Error('Signup failed');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Signup failed'); 
    });
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <div className="w-full">
        <h3 className="font-normal mb-1 text-[#1a1a1a]" htmlFor="name">Name</h3>
        <div className="flex gap-1">
          <input className="w-full border border-[#a9a9a9] p-1 outline-none" type="text" id="firstName" placeholder="First Name" name="firstName" onChange={handleChange} value={formData.firstName} />
          <input className="w-full border border-[#a9a9a9] p-1 outline-none" type="text" id="lastName" placeholder="Last Name" name="lastName" onChange={handleChange} value={formData.lastName} />
        </div>
      </div>
      <div>
        <h3 className="font-normal mb-1" htmlFor="email">Email</h3>
        <input className="w-full border border-[#a9a9a9] p-1 outline-none" type="email" id="email" placeholder="Email Address" name="email" onChange={handleChange} value={formData.email} />
      </div>
      <div>
        <h3 className="font-normal mb-1" htmlFor="phone">Phone</h3>
        <input className="w-full  border border-[#a9a9a9] p-1 outline-none" type="tel" id="phone" placeholder="Phone Number" name="phone" onChange={handleChange} value={formData.phone} />
      </div>
      <div>
        <h3 className="font-normal mb-1" htmlFor="pass1">Password</h3>
        <input className="w-full  border border-[#a9a9a9] p-1 outline-none" type="password" id="pass1" placeholder="Enter Password" name="password1" onChange={handleChange} value={formData.password1} />
      </div>
      <div>
        <h3 className="font-normal mb-1" htmlFor="pass2">Confirm Password</h3>
        <input className="w-full  border border-[#a9a9a9] p-1 outline-none" type="password" id="pass2" placeholder="ReEnter your Password" name="password2" onChange={handleChange} value={formData.password2} />
      </div>

      <div>
        <button className="w-full bg-[#1b243d] text-[#fff] p-2 rounded-lg" type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Signup;
