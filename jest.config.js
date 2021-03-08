const config = {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ["<rootDir>/src/**"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    verbose: true,
}

module.exports = config
