
module.exports = {
  babel: {
    presets: ["@emotion/babel-preset-css-prop"],
  },
  webpack: {
    configure: {
      stats: {
        preset: 'errors-warnings',
        timings: true,
      },
    },
  },
}