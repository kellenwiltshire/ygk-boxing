const posts = [
	{
		id: 1,
		title: 'Boost your conversion rate',
		href: '#',
		description:
			'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
		date: 'Mar 16, 2020',
		datetime: '2020-03-16',

	},
	{
		id: 2,
		title: 'Boost your conversion rate',
		href: '#',
		description:
			'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
		date: 'Mar 16, 2020',
		datetime: '2020-03-16',
	},
	// More posts...
]

const BlogList = () => {
	return (
		<div className='py-24 sm:py-32'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl'>
					<h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>From the blog</h2>
					<p className='mt-2 text-lg leading-8'>
						Learn how to grow your business with our expert advice.
					</p>
					<div className='mt-10 space-y-16 pt-10 sm:mt-16 sm:pt-16'>
						{posts.map((post) => (
							<article key={post.id} className='flex max-w-xl flex-col items-start justify-between'>
								<div className='flex items-center gap-x-4 text-xs'>
									<time dateTime={post.datetime}>
										{post.date}
									</time>

								</div>
								<div className='group relative'>
									<h3 className='mt-3 text-lg font-semibold leading-6'>
										<a href={post.href}>
											<span className='absolute inset-0' />
											{post.title}
										</a>
									</h3>
									<p className='mt-5 line-clamp-3 text-sm leading-6'>{post.description}</p>
								</div>

							</article>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogList