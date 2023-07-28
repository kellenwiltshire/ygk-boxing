import React from "react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    price: "$36.00",
    color: "Charcoal",
    size: "L",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/confirmation-page-06-product-01.jpg",
    imageAlt: "Model wearing men's charcoal basic tee in large."
  }
  // More products...
];

const Completed = () => {
  return (
    <>
      <main className="relative lg:min-h-full">
        <div className="h-80 lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12">
          <img
            src="/pictures/ygklogo.jpg"
            alt="Logo"
            className="w-full p-2 sm:p-0 h-full lg:h-auto sm:my-24 lg:my-32 lg:rounded-full"
          />
        </div>

        <div>
          <div
            className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24">
            <div className="lg:col-start-2">
              <h1 className="text-sm font-medium text-left">Payment successful</h1>
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Thanks for ordering</p>
              <p className="mt-2 text-base">
                We appreciate your order, we’re currently processing it. So hang tight and we’ll send you confirmation
                very soon!
              </p>

              <ul
                role="list"
                className="mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium"
              >
                {products.map((product) => (
                  <li key={product.id} className="flex space-x-6 py-6">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
                    />
                    <div className="flex-auto space-y-1">
                      <h3>
                        <a href={product.href}>{product.name}</a>
                      </h3>

                    </div>
                    <p className="flex-none font-medium">{product.price}</p>
                  </li>
                ))}
              </ul>

              <dl className="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium">
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd className="">$72.00</dd>
                </div>

                <div className="flex justify-between">
                  <dt>Taxes</dt>
                  <dd>$6.40</dd>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <dt className="text-base">Total</dt>
                  <dd className="text-base">$86.40</dd>
                </div>
              </dl>

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