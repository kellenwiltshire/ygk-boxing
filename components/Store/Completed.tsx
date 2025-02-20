import React from "react";
import Link from "next/link";
import Image from "next/image"

const Completed = () => {
  return (
    <>
      <main className="relative lg:min-h-full mt-12">
        <div className="lg:absolute lg:w-1/2 lg:pr-4 xl:pr-12">
          <Image
            width={350}
            height={350}
            src="/pictures/ygklogo.webp"
            alt="Logo"
            className="w-full p-2 sm:p-0 h-full lg:h-auto rounded-full"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div
            className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24">
            <div className="lg:col-start-2">
              <h1 className="text-sm font-medium text-left">Payment successful</h1>
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Thanks for ordering</p>
              <p className="mt-2 text-base">
                We appreciate your order, we’re currently processing it. So hang tight and we’ll send you confirmation
                very soon!
              </p>

              <div className="mt-16 border-t border-gray-200 py-6 text-right">
                <Link href="/store" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Completed;