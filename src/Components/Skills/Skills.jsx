import React from 'react';
import c from "../../assets/icons/c-programming.svg";
import cpp from "../../assets/icons/c++.svg";
import java from "../../assets/icons/java.svg";
import python from "../../assets/icons/python.svg";
import html from "../../assets/icons/html-5.svg";
import css from "../../assets/icons/css3.svg";
import javascript from "../../assets/icons/javascript.svg";
import tailwindcss from "../../assets/icons/tailwindcss.svg";
import reactjs from "../../assets/icons/react-native.svg";
import vitejs from "../../assets/icons/vitejs.svg";
import php from "../../assets/icons/php.svg";
import mysql from "../../assets/icons/mysql-logo.svg";

const Skills = () => {
	return (
		<section className="p-6 m-5 bg-[#282828] rounded-lg md:w-5/6 md:mx-auto lg:w-5/6 lg:mx-auto">
			<h1 className="text-white text-center font-swad text-5xl uppercase">
				Skills
			</h1>
			<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
				<div className="p-1 m-2 text-white flex flex-col justify-center items-center lg:m-4 lg:hover:scale-110 lg:ease-in-out lg:duration-300">
					<img src={c} alt="C" />
					<p>
						C
					</p>
				</div>
				<div className="p-1 m-2 text-white flex flex-col justify-center items-center lg:m-4 lg:hover:scale-110 lg:ease-in-out lg:duration-300">
					<img src={cpp} alt="C++" />
					<p>
						C++
					</p>
				</div>
				<div className="p-1 m-2 text-white flex flex-col justify-center items-center lg:m-4 lg:hover:scale-110 lg:ease-in-out lg:duration-300">
					<img src={java} alt="Java" />
					<p>
						Java
					</p>
				</div>
				<div className="p-1 m-2 text-white flex flex-col justify-center items-center lg:m-4 lg:hover:scale-110 lg:ease-in-out lg:duration-300">
					<img src={python} alt="Python" />
					<p>
						Python
					</p>
				</div>
				<div className="p-1 m-2 text-white flex flex-col justify-center items-center lg:m-4 lg:hover:scale-110 lg:ease-in-out lg:duration-300">
					<img src={html} alt="HTML" />
					<p>
						HTML
					</p>
				</div>
				<div className="p-1 m-2 text-white flex flex-col justify-center items-center lg:m-4 lg:hover:scale-110 lg:ease-in-out lg:duration-300">
					<img src={css} alt="CSS" />
					<p>
						CSS
					</p>
				</div>
				<div className="p-1 m-2 text-white flex flex-col justify-center items-center lg:m-4 lg:hover:scale-110 lg:ease-in-out lg:duration-300">
					<img src={tailwindcss} alt="Tailwindcss" />
					<p>
						Tailwindcss
					</p>
				</div>
				<div className="p-1 m-2 text-white flex flex-col justify-center items-center lg:m-4 lg:hover:scale-110 lg:ease-in-out lg:duration-300">
					<img src={javascript} alt="JavaScript" />
					<p>
						Javascript
					</p>
				</div>
				<div className="p-1 m-2 text-white flex flex-col justify-center items-center lg:m-4 lg:hover:scale-110 lg:ease-in-out lg:duration-300">
					<img src={reactjs} alt="React.js" />
					<p>
						React.js
					</p>
				</div>
				<div className="p-1 m-2 text-white flex flex-col justify-center items-center lg:m-4 lg:hover:scale-110 lg:ease-in-out lg:duration-300">
					<img src={vitejs} alt="vite.js" className="h-24"/>
					<p>
						Vite.js
					</p>
				</div>
				<div className="p-1 m-2 text-white flex flex-col justify-center items-center lg:m-4 lg:hover:scale-110 lg:ease-in-out lg:duration-300">
					<img src={php} alt="php" className="h-24"/>
					<p>
						php
					</p>
				</div>
				<div className="p-1 m-2 text-white flex flex-col justify-center items-center lg:m-4 lg:hover:scale-110 lg:ease-in-out lg:duration-300">
					<img src={mysql} alt="MySQL" />
					<p>
						MySQL
					</p>
				</div>
			</div>
		</section>
	)
};

export default Skills;
