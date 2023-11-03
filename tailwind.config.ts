import type { Config } from 'tailwindcss';

const config = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['retro']
	}
} satisfies Config;

export default config;
