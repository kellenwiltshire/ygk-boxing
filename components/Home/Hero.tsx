import Link from "next/link";
import Image from "next/image"

const Hero = () => {
  return <div className="relative isolate overflow-hidden pt-14 min-h-screen">
    <Image fill={true}
      quality={50}
      priority={false}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
      src="/video.gif"
      alt=""
      className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
    />
    

    <div className="mx-auto max-w-2xl pb-32 sm:py-48 lg:pb-56 lg:pt-24">

      <Image src="/pictures/ygklogo.webp"
           alt="logo"
           className="rounded-full mx-auto mb-4" height={350} width={350} />

      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          YGK Boxing
        </h1>
        <h1 className="text-2xl tracking-tight text-white sm:text-4xl">
         YOUR BEST HAS YET TO BE UNLEASHED
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          A community-based boxing club founded on the principles of respect, responsibility, hard work and integrity.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/schedule"
            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Get started
          </Link>
          <Link href="/about" className="text-sm font-semibold leading-6 text-white">
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
    <div
      className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        }}
      />
    </div>
  </div>;
};

export default Hero;