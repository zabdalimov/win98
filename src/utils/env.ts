const env = process.env.NODE_ENV
const commitHash = process.env.COMMIT_HASH
const projectUrl = process.env.PROJECT_URL

export function getEnvConfig() {
  return {
    commitHash,
    env,
    // isDevelopment: env === 'development',
    isDevelopment: false,
    projectUrl,
  }
}
