import Image from 'next/image'
import kids1 from '../../public/pictures/kids/kids-1.webp'
import kids2 from '../../public/pictures/kids/kids-2.webp'
import kids3 from '../../public/pictures/kids/kids-3.webp'
import kids4 from '../../public/pictures/kids/kids-4.webp'
import kids5 from '../../public/pictures/kids/kids-5.webp'
import kids6 from '../../public/pictures/kids/kids-6.webp'
import kids7 from '../../public/pictures/kids/kids-7.webp'

export default function BoxingKids() {
	return (
		<div className="mx-auto max-w-3xl px-3 text-base/7 sm:pt-6 lg:py-12">
			<h1 className="text-center text-4xl font-semibold text-white">
				YGK Boxing Kids Programs
			</h1>
			<div className="flex w-full justify-center px-3 py-5 pb-2">
				<Image
					key="image-1"
					src={kids1}
					alt="YGK Boxing"
					width={500}
					height={500}
					className="rounded-lg"
				/>
			</div>
			<p className="text-center text-xl/8">
				Our kids program is led by Boxing Ontario Level 2 Certified Coaches with
				years of competitive boxing experience across Canada and the United
				States. With a strong foundation in both technical skill and real
				in-ring knowledge, our coaches are passionate about teaching the next
				generation of boxers.
			</p>
			<p className="mt-6 text-center text-xl/8">
				Classes are designed to be safe, fun, and challenging, helping kids
				build confidence, improve fitness, and learn the core values of boxing:{' '}
				<strong>discipline, respect, and perseverance.</strong> Whether your
				child is trying boxing for the first time or looking to sharpen their
				skills, they&apos;ll be supported by coaches who understand how to bring
				out the best in every young athlete.
			</p>
			<div className="flex w-full justify-center px-3 py-5">
				<Image
					key="image-1"
					src={kids2}
					alt="YGK Boxing"
					width={500}
					height={500}
					className="rounded-lg"
				/>
			</div>

			<section className="mx-auto max-w-4xl px-3 py-5">
				<div className="mb-2 flex items-center gap-2 text-3xl font-semibold text-white">
					YGK BOXING KIDS (Ages 7–12)
				</div>

				<p className="mb-6 text-lg font-medium text-gray-50">
					Mondays & Thursdays | 4:30 PM – 5:45 PM
				</p>

				<p className="mb-6 text-gray-100">
					This one-hour class is perfect for kids aged 7 to 12 who are ready to
					move, sweat, and grow. Each session combines fitness, boxing
					technique, and team-based fun:
				</p>

				<div className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
					What’s Included:
				</div>

				<div className="mb-6">
					<p className="mb-2 font-semibold text-gray-100">
						30–40 minutes of structured boxing workouts:
					</p>
					<ul className="ml-4 list-inside list-disc space-y-2 text-gray-100">
						<li>Endurance training</li>
						<li>Boxing fundamentals (stance, punches, footwork)</li>
						<li>Skipping, bag work, and movement drills</li>
						<li>Overall health and fitness development</li>
					</ul>
				</div>

				<div>
					<p className="mb-2 font-semibold text-gray-100">
						20–30 minutes of fun and skill-building activities:
					</p>
					<ul className="ml-4 list-inside list-disc space-y-2 text-gray-100">
						<li>Teamwork games</li>
						<li>Confidence-building exercises</li>
						<li>Rope climbing and rock wall</li>
						<li>Positive encouragement and group bonding</li>
					</ul>
				</div>
			</section>
			<div className="flex w-full justify-center px-3 py-5">
				<Image
					key="image-2"
					src={kids3}
					alt="YGK Boxing"
					width={500}
					height={500}
					className="rounded-lg"
				/>
			</div>
			<section className="mx-auto max-w-4xl px-3 py-5">
				<div className="mb-4 flex items-center gap-2 text-3xl font-semibold text-white">
					What About Sparring?
				</div>

				<p className="mb-6 text-gray-100">
					At <span className="font-semibold">YGK Boxing</span>, sparring is{' '}
					<span className="font-semibold">not required</span> but we do offer a
					clear path for kids who express an interest in it.
				</p>

				<p className="mb-6 text-gray-100">
					We only allow kids to begin sparring when they are truly ready which
					means:
				</p>

				<ul className="mb-6 list-inside list-disc space-y-2 text-gray-100">
					<li>They have been training consistently</li>
					<li>They demonstrate a strong understanding of the fundamentals</li>
					<li>
						They have shown that they listen to their coaches and respect the
						rules of the gym
					</li>
				</ul>

				<p className="mb-6 text-gray-100">
					Every child progresses at their own pace. Some may pick things up
					quickly and be encouraged to start light sparring, while others may
					need more time to develop confidence and skills.
				</p>

				<p className="mb-6 text-gray-100">
					No child is rushed, our coaches will work closely with each individual
					to ensure they’re prepared both mentally and physically before
					stepping into sparring.
				</p>

				<p className="font-semibold text-gray-100">
					The safety, confidence, and well-being of our young boxers always come
					first.
				</p>
			</section>
			<div className="flex w-full justify-center px-3 py-5">
				<Image
					key="image-3"
					src={kids4}
					alt="YGK Boxing"
					width={500}
					height={500}
					className="rounded-lg"
				/>
			</div>
			<section className="mx-auto max-w-4xl px-3 py-5">
				<div className="mb-2 flex items-center gap-2 text-3xl font-semibold text-white">
					YGK BOXING LITTLE CHAMPS (Ages 4–7)
				</div>

				<p className="mb-6 text-lg font-medium text-gray-50">
					Half-Hour Parent & Child Class on Saturday Mornings
				</p>

				<p className="mb-6 text-gray-100">
					The <span className="font-semibold">YGK LITTLE CHAMPS</span> program
					is a fun and supportive way to introduce young children (ages 4 to 7)
					to boxing with the help of their parents!
				</p>

				<p className="mb-6 text-gray-100">
					This class is all about{' '}
					<span className="font-semibold">fun, movement, bonding</span>, and
					building the foundation for a healthy and active lifestyle
					<span className="font-semibold">together</span>.
				</p>

				<div className="mb-2 flex items-center gap-2 text-lg font-semibold text-white">
					Get Started Today!
				</div>

				<p className="text-gray-100">
					Whether your child is just starting out or ready to take things to the
					next level, <span className="font-semibold">YGK Boxing</span> has a
					place for them. Contact us to learn more or sign up for a class today,
					we’d love to have you and your little champ in the gym!
				</p>
			</section>
			<div className="grid max-w-7xl grid-cols-2 gap-4 px-2 pb-4 md:grid-cols-4">
				<Image
					key="image-5"
					src={kids5}
					alt="YGK Boxing"
					className="rounded-lg object-cover object-center"
				/>
				<Image
					key="image-6"
					src={kids6}
					alt="YGK Boxing"
					className="rounded-lg object-cover object-center"
				/>
				<Image
					key="image-7"
					src={kids7}
					alt="YGK Boxing"
					className="rounded-lg object-cover object-center"
				/>
			</div>
		</div>
	)
}
