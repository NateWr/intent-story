/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ["Libre Franklin", "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
			serif: ["Lora", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
		},
		extend: {
			colors: {
        highlight: 'var(--color-highlight)',
        title: 'var(--color-title)',
			},
			screens: {
				'phones-lg': {raw: '(min-width: 564px)'},
				'tablets-sm': {raw: '(min-width: 720px)'},
				'tablets': {raw: '(min-width: 834px)'},
				'tablets-landscape': {raw: '(min-width: 1024px)'},
				'laptops-sm': {raw: '(min-width: 1280px)'},
				'laptops': {raw: '(min-width: 1400px)'},
				'laptops-lg': {raw: '(min-width: 1600px)'},
				'laptops-xl': {raw: '(min-width: 1920px)'},
				'laptops-2xl': {raw: '(min-width: 2300px)'},
			}
		},
	},
	plugins: [],
}
