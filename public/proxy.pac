function FindProxyForURL(url, host) {
    if (timeRange(0, 7)) {
        return "PROXY 172.16.1.1:56349";
    }
    return "DIRECT";
}