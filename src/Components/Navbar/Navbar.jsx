import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';

const Navbar = () => {
	return (
		<nav className="m-5 p-6 bg-[#282828] rounded-lg flex justify-between items-center md:w-5/6 md:mx-auto lg:w-10/12 lg:mx-auto ">
			<h1 className="font-swad text-xl text-white lg:pl-12">
				_hari__1707
			</h1>
			<ul className="flex items-center lg:pr-12">
				<li className="cursor-pointer text-2xl">
					{/* <BsFillMoonStarsFill className="text-white" /> */}
				</li>
				<li>
					<a className="font-swad text-xl text-black bg-[#a6f8db] px-4 py-2 ml-6 rounded-lg" href="mailto:hyprgd2002@gmail.com" target="_blank">Mail Me</a>
				</li>
				<li>
					<a className="font-swad text-xl text-black bg-[#a6f8db] px-4 py-2 ml-6 rounded-lg" href="#">Resume</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar