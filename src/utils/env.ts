export function getEnvConfig() {
  const env = process.env.NODE_ENV
  return {
    env,
    isDevelopment: env === 'development',
  }
}
