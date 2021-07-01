module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      msm: { max: '640px' },
      mmd: { max: '768px' },
      mlg: { max: '1024px' },
      mxl: { max: '1280px' },
      m2xl: { max: '1536px' },
    },
    container: {
      padding: {
        center: true,
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
};
