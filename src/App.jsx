import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import Skills from './Components/Skills/Skills';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';
import WorkWithMe from './Components/WorkWithMe/WorkWithMe';

function App() {

	return (
		<>
			<Navbar />
			<HeroSection />
			<AboutMe />
			<Skills />
			<Projects />
			{/* <Testimonial /> */}
			<WorkWithMe />
		</>
	)
}

export default App
