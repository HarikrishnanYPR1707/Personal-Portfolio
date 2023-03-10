import React from 'react';
import myImage from '../../assets/myImage.png';
import linkedin from '../../assets/social-icon/linkedin.svg';
import instagram from '../../assets/social-icon/instagram.svg';
import youtube from '../../assets/social-icon/youtube.svg';
import github from '../../assets/social-icon/github.svg';

const HeroSection = () => {
	return (
		<section className="p-6 m-5 bg-[#282828] rounded-lg flex flex-col justify-center items-center md:w-5/6 md:mx-auto lg:w-5/6 lg:mx-auto lg:p-10 lg:flex-row lg:justify-evenly lg:items-center ">
			<div className="w-80 h-80">
				<img src={myImage} alt="My image" className="rounded-full drop-shadow-2xl" />
				{/* <div className="absolute w-80 h-80 rounded-full bg-teal-600 bg-opacity-50 -translate-y-full"></div> */}
			</div>
			<div className="mt-4 flex flex-col justify-center items-center lg:mt-0 lg:w-3/6">
				<h2 className="text-5xl text-white font-swad lg:text-6xl">
					Harikrishnan
				</h2>
				<h2 className="text-5xl text-white font-swad lg:text-6xl">
					Prasannakumar
				</h2>
				<p className="text-center text-white text-sm font-robotoMono md:text-base lg:text-lg">
					React Developer | Frontend Developer | UI Designer | Content Creator | Student | Engineer
				</p>
				<div className="mt-4">
					<button className="mx-2 px-5 py-1 bg-[#a6f8db] rounded-lg lg:hover:scale-110 lg:ease-in-out lg:duration-300">
						<a href="https://www.linkedin.com/in/harikrishnan-prasannakumar-b235a0236/" target="_blank">
							<img src={linkedin} alt="Linkedin" className="h-9" />
						</a>
					</button>
					<button className="mx-2 px-5 py-1 bg-[#a6f8db] rounded-lg lg:hover:scale-110 lg:ease-in-out lg:duration-300">
						<a href="https://www.instagram.com/_coding_adda/" target="_blank">
							<img src={instagram} alt="Instagram" className="h-9" />
						</a>
					</button>
					<button className="mx-2 px-5 py-1 bg-[#a6f8db] rounded-lg lg:hover:scale-110 lg:ease-in-out lg:duration-300">
						<a href="https://www.youtube.com/@coding_adda" target="_blank">
							<img src={youtube} alt="youtube" className="h-9" />
						</a>
					</button>
					<button className="mx-2 px-5 py-1 bg-[#a6f8db] rounded-lg lg:hover:scale-110 lg:ease-in-out lg:duration-300">
						<a href="https://github.com/HarikrishnanYPR1707" target="_blank">
							<img src={github} alt="Github" className="h-9" />
						</a>
					</button>
				</div>
			</div>

		</section>
	)
}

export default HeroSection