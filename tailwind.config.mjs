import typography from '@tailwindcss/typography';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			screens: {
				sm: "100%",
				md: "100%",
				lg: "520px",
				xl: "620px"
			},
			padding: '2rem',
		},
    	extend: {
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                'headline-xl': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                'headline-lg': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                'headline-md': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                'body-lg': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                'body-md': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                'label-md': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                'label-sm': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                'code-snippet': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'headline-xl': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
                'headline-xl-mobile': ['40px', { lineHeight: '1.1', fontWeight: '800' }],
                'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '700' }],
                'headline-lg-mobile': ['24px', { lineHeight: '32px', letterSpacing: '-0.01em', fontWeight: '700' }],
                'headline-md': ['20px', { lineHeight: '28px', fontWeight: '600' }],
                'body-lg': ['16px', { lineHeight: '24px', fontWeight: '400' }],
                'body-md': ['14px', { lineHeight: '20px', fontWeight: '400' }],
                'label-md': ['12px', { lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '600' }],
                'label-sm': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
                'code-snippet': ['13px', { lineHeight: '18px', fontWeight: '500' }],
            },
            spacing: {
                'section-gap': '100px',
                'component-gap': '16px',
                'container-max': '1200px',
                gutter: '24px',
                'margin-mobile': '20px',
                'margin-desktop': '32px',
                base: '4px',
                xs: '4px',
                sm: '8px',
                md: '16px',
                lg: '24px',
                xl: '32px',
            },
    		borderRadius: {
                DEFAULT: '0.25rem',
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)',
                xl: '0.75rem',
                '2xl': '1rem',
                '3xl': '1.5rem',
                '4xl': '2rem',
    		},
			colors: {
				// Light mode colors
				'light-theme': '#E9EBEC',
				'primary-light': '#010440',
				'primary-hover-light': '#142B59',

				// Dark mode colors
				'dark-theme': '#0C151D',
				'primary-dark': '#A3D9D9',
				'primary-hover-dark': '#54B5BF',

				// Neutrals
				'n200': '#d7d9da',
				'n900': '#222222',
				'n700': '#171F26',
				'n500': '#555555',

                // Data Architect Narrative colors
                surface: '#f9f9ff',
                'surface-dim': '#cfdaf2',
                'surface-bright': '#f9f9ff',
                'surface-container-lowest': '#ffffff',
                'surface-container-low': '#f0f3ff',
                'surface-container': '#e7eeff',
                'surface-container-high': '#dee8ff',
                'surface-container-highest': '#d8e3fb',
                'on-surface': '#111c2d',
                'on-surface-variant': '#3d4a42',
                'inverse-surface': '#263143',
                'inverse-on-surface': '#ecf1ff',
                outline: '#6d7a72',
                'outline-variant': '#bccac0',
                'surface-tint': '#006c4a',
                primary: '#006948',
                'on-primary': '#ffffff',
                'primary-container': '#00855d',
                'on-primary-container': '#f5fff7',
                'inverse-primary': '#68dba9',
                secondary: '#006780',
                'on-secondary': '#ffffff',
                'secondary-container': '#76dcff',
                'on-secondary-container': '#006077',
                tertiary: '#9b3e3b',
                'on-tertiary': '#ffffff',
                'tertiary-container': '#ba5551',
                'on-tertiary-container': '#fffbff',
                'primary-fixed': '#85f8c4',
                'primary-fixed-dim': '#68dba9',
                'secondary-fixed': '#b7eaff',
                'secondary-fixed-dim': '#6cd3f7',
                background: '#f9f9ff',
                'on-background': '#111c2d',
                'surface-variant': '#d8e3fb',
			},
    	}
    },
	plugins: [animate, typography],
}
