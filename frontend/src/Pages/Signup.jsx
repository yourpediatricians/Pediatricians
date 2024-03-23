import React from 'react'

function Signup() {
  return (
    <form className="flex flex-col gap-2">
	<div className="w-full">
		<h3 className="font-normal mb-1 text-[#1a1a1a]" htmlFor="name">Name</h3>
		<div className="flex gap-1">
			<input className="w-full border border-[#a9a9a9] p-1 outline-none" type="text" id="firstName" placeholder="First Name" name="firstName" />
			<input className="w-full border border-[#a9a9a9] p-1 outline-none" type="text" id="lastName" placeholder="Last Name" name="lastName" />
		</div>
	</div>
	<div>
		<h3 className="font-normal mb-1" htmlFor="email">Email</h3>
		<input className="w-full border border-[#a9a9a9] p-1 outline-none" type="email" id="email" placeholder="Email Address" name="email" />
	</div>
	<div>
		<h3 className="font-normal mb-1" htmlFor="phone">Phone</h3>
		<input className="w-full  border border-[#a9a9a9] p-1 outline-none" type="tel" id="phone" placeholder="Phone Number" name="phone" />
	</div>
	<div>
		<h3 className="font-normal mb-1" htmlFor="pass1">Password</h3>
		<textarea className="w-full  border border-[#a9a9a9] p-1 outline-none" id="pass1" placeholder="Enter Password" name="password1"></textarea>
	</div>
	<div>
		<h3 className="font-normal mb-1" htmlFor="pass2"> Confirm Password</h3>
		<textarea className="w-full  border border-[#a9a9a9] p-1 outline-none" id="paas2" placeholder="ReEnter your Password" name="password2"></textarea>
	</div>

	<div>
		<button className="w-full bg-[#1b243d] text-[#fff] p-2 rounded-lg" type="submit">Submit</button>
	</div>
</form>
  )
}

export default Signup