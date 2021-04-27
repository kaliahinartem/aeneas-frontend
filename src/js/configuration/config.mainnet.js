const nodeUrl = "http://151.115.51.134:6555";

export default {
    networkId: "mainnet",
    displayName: "Mainnet",
    apiBaseUrl: nodeUrl,
    useCustomRequestConfig: true,
    spamListUrl:
        "https://raw.githubusercontent.com/wavesplatform/waves-community/master/Scam%20tokens%20according%20to%20the%20opinion%20of%20Waves%20Community.csv",
    nodes: [{ url: nodeUrl, maintainer: "Aeneas" }],
};
