import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

const config = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [forms, require('daisyui')],
	daisyui: {
		themes: ['retro']
	}
} satisfies Config;

export default config;
