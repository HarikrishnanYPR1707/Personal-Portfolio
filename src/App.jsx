import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import Skills from "./Components/Skills/Skills";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import WorkWithMe from "./Components/WorkWithMe/WorkWithMe";
import Lenis from "@studio-freight/lenis";

function App() {
	const lenis = new Lenis();

	lenis.on("scroll", (e) => {
		console.log(e);
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);

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
	);
}

export default App;
