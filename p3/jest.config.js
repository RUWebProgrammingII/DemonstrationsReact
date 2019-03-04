module.exports = {
	verbose: true,
	roots: ['src'],
	testPathIgnorePatterns: ["<rootDir>/node_modules/"],
	setupFilesAfterEnv: [
        "<rootDir>/enzyme.config.js"
    ]
}
