import Document, { Head, Html, Main, NextScript } from 'next/document'

const isProd = process.env.NODE_ENV === 'production'

export default class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head />
				<body>
					<Main />
					<NextScript />
					{isProd && (
						<script
							async
							src="https://analytics.kellenwiltshire.com/script.js"
							data-website-id="bcb8b78c-e0a0-4688-bc04-83affc395c5a"
						></script>
					)}
				</body>
			</Html>
		)
	}
}
