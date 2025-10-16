/** @type {import('next').NextConfig} */
module.exports = {
	webpack: function (config) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
		config.module.rules.push({
			test: /\.md$/,
			use: 'raw-loader',
		})
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return config
	},
	output: 'standalone',
}
