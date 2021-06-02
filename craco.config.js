const isProd = process.env.NODE_ENV === 'production'

const babelPlugins = isProd
  ? [['react-remove-properties', { properties: ['data-testid'] }]]
  : []

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  babel: {
    plugins: babelPlugins,
  },
}
