import React from 'react'

const Projects = () => {
	return (
		<section className="p-6 m-5 bg-[#282828] rounded-lg flex flex-col justify-center items-center md:w-5/6 md:mx-auto lg:w-5/6 ">
			<h1 className="text-white text-center font-swad text-5xl uppercase border-2 border-white ">
				Projects
			</h1>
			<div className="border-2 border-red-500 mt-5">
				<div className="w-96">
					{/* <div className="">
						<img src="" alt="Logo-Project-1" className="" />
					</div> */}
					<div className="">
						<h2 className="font-swad text-white text-2xl">
							Country Guide Website
						</h2>
						<p className="">
							Description
						</p>
						<button className="">
							<a href="https://github.com/HarikrishnanYPR1707" target="_blank">
								View This Website
							</a>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Projects
