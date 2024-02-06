/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'purple': '#6F2DBD',
				'yellow': '#FFBA49',
				'red': '#D05353',
				'light': '#EDF7F6',
				'dark': '#000000',
			},
		},
	},
	plugins: [],
}
