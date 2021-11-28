type ExperimentalNetworkInformation = NetworkInformation & {
  downlink?: number
  downlinkMax?: number
  effectiveType?: string
  rtt?: number
  type?: string
}

export declare global {
  interface Navigator {
    deviceMemory?: number
    connection: ExperimentalNetworkInformation
    mozConnection?: ExperimentalNetworkInformation
    webkitConnection?: ExperimentalNetworkInformation
  }
}
