
const disabledCss = {
	'code::before': false,
	'code::after': false,
	'blockquote p:first-of-type::before': false,
	'blockquote p:last-of-type::after': false,
	pre: false,
	code: false,
	'pre code': false
};

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			'md-content': "content prose mt-8 max-w-none text-base leading-8 text-black dark:prose-invert prose-code:rounded-lg prose-code:bg-stone-800 prose-code:p-1 prose-code:text-orange-600 prose-img:rounded-lg prose-img:shadow-xl dark:text-white prose-img:dark:shadow-stone-800",
			colors: {
				primary: 'rgb(255, 81, 0)',
				secondary: 'rgb(255, 0, 153)',
			},
			boxShadow: {
				effect: '2px 2px 0px rgb(255, 81, 0), -2px -2px 0px rgb(255, 0, 153);',
			},
			typography: {
				DEFAULT: { css: disabledCss },
				sm: { css: disabledCss },
				lg: { css: disabledCss },
				xl: { css: disabledCss },
				'2xl': { css: disabledCss }
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
