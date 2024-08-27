// @ts-nocheck
const postcssGlobalData = require('@csstools/postcss-global-data');

module.exports = {
	plugins: [
		postcssGlobalData({
			files: [
				'./src/assets/css/variables.css',
			]
		}),
		require("postcss-nesting"),
		require("postcss-css-variables"),
		require("postcss-custom-media"),
	],
};