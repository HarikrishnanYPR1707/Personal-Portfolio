import React from 'react';
import Card from './card';

const Projects = () => {
	return (
		<section className="p-6 m-5 bg-[#282828] rounded-lg flex flex-col justify-center items-center md:w-5/6 md:mx-auto lg:w-5/6 ">
			<h1 className="text-white text-center font-swad text-5xl uppercase">
				Projects
			</h1>
			<div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:gap-4">
				<Card name="Country Guide Website" desc="This is a website where you can see the basic detail of any country you can think of." link="https://cguide.netlify.app/" />
				<Card name="QRCode Generator Website" desc="This is a website which can be used for generating qrcode of any links with various sizes." link="https://hqrgenerator.netlify.app/" />
				<Card name="QRCode Generator Website" desc="This is a website which can be used for generating qrcode of any links with various sizes." link="https://hqrgenerator.netlify.app/" />
				<Card name="QRCode Generator Website" desc="This is a website which can be used for generating qrcode of any links with various sizes." link="https://hqrgenerator.netlify.app/" />
				<Card name="QRCode Generator Website" desc="This is a website which can be used for generating qrcode of any links with various sizes." link="https://hqrgenerator.netlify.app/" />
				<Card name="QRCode Generator Website" desc="This is a website which can be used for generating qrcode of any links with various sizes." link="https://hqrgenerator.netlify.app/" />
			</div>
		</section>
	)
}

export default Projects
