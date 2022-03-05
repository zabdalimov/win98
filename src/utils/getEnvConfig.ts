const env = process.env.NODE_ENV
const packageVersion = process.env.PACKAGE_VERSION
const commitHash = process.env.COMMIT_HASH
const projectUrl = process.env.PROJECT_URL

export function getEnvConfig() {
  return {
    packageVersion,
    commitHash,
    env,
    // isDevelopment: env === 'development',
    isDevelopment: false,
    projectUrl,
  }
}
