const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['_site/**/*.{html,js}'],
  theme: {
    fontFamily: {
      primary: 'nm',
      secondary: 's',
      mono: 'maison',
    },
    lineHeight: {
      tight: '0.9',
      neutral: '1.0',
      snug: '1.1',
      normal: '1.6',
      loose: '1.8'
    },
    listStyleType: {
      none: 'none',
      decimal: 'decimal',
      square: 'square',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      purple: {
        600: '#151B50',
        500: '#3E5DC7',
        400: '#C4B3E2'
      },
      gray: {
        900: '#111F2E',
        800: '#233747',
        700: '#405365',
        600: '#768592',
        500: '#95A3AD',
        400: '#D8DFE2',
        300: '#F2F2F2',
        200: '#F8F8F8',
        'cool': '#DDE3EC'
      }
    },
    fontSize: {
      xs: ['0.75rem', '1.6'],
      sm: ['0.875rem', '1.6'],
      base: ['1rem', '1.6'],
      lg: ['1.125rem', '1.6'],
      xl: ['1.25rem', '1.6'],
      '2xl': ['1.5rem', '1.6'],
      '3xl': ['1.75rem', '1.6'],
      '4xl': ['2rem', '1.1'],
      '5xl': ['3rem', '1.1'],
      '6xl': ['3.75rem', '1.1'],
      '7xl': ['4.5rem', '1.1'],
      '8xl': ['6rem', '1.1'],
      '9xl': ['8rem', '1.1']
    },
    extend: {
      letterSpacing: {
        tight: '-.010em',
        wide: '.010em',
        wider: '.075em'
      },
      spacing: {
        '18': '4.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-gradient': (angle) => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          // values from config and defaults you wish to use most
          values: Object.assign(
            theme('bgGradientDeg', {}), // name of config key. Must be unique
            {
              default: '214.68deg',
            }
          )
        }
      )
    })
  ],
};
