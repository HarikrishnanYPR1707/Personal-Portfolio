/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				swad: "'Sedgwick Ave Display', cursive",
				robotoMono: "'Roboto Mono', monospace"
			}
		},
	},
	plugins: [],
}