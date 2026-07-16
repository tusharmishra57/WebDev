interface Config {
    endpoint: string,
    apiKey: string
}

const config : Readonly<Config> = {
    endpoint: "https://api.example.com",
    apiKey: "abdfakjfa213e43"
}

//now since, config is readonly, so we cannot update endpoint and apikey