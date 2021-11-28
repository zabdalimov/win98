export function useBrowserInfo() {
  return {
    connection:
      navigator.connection ??
      navigator.mozConnection ??
      navigator.webkitConnection,
    cores: navigator.hardwareConcurrency,
    // in GiB
    minimalRam: navigator.deviceMemory,
    platform: navigator.platform,
    // in bytes
    storageEstimate: navigator.storage.estimate(),
    userAgent: navigator.userAgent,
    vendor: navigator.vendor,
  }
}
