const DefinePlugin = require('webpack').DefinePlugin


// get git info from command line
const commitHash = require('child_process')
  .execSync('git rev-parse --short HEAD')
  .toString()
  .trim()

const projectUrl = 'https://github.com/zabdalimov/win98'

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
    plugins: {
      add: [
        new DefinePlugin({
          'process.env.COMMIT_HASH': JSON.stringify(commitHash),
          'process.env.PROJECT_URL': JSON.stringify(projectUrl),
        })
      ],
    },
  },
}