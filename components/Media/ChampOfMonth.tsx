const features = [
  {
    name: "Boxer Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget velit aliquet sagittis id consectetur purus ut. Bibendum est ultricies integer quis auctor elit. In mollis nunc sed id. Eget magna fermentum iaculis eu non diam phasellus. Lectus arcu bibendum at varius vel pharetra vel. Non quam lacus suspendisse faucibus.",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-03.jpg",
    imageAlt: "Champ of the Month"
  }
];

const ChampOfMonth = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-12 sm:px-2 lg:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="font-semibold">Champion of the Month</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">August 2023</p>
          </div>
          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
              >
                <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                  <h3 className="text-lg font-medium">{feature.name}</h3>
                  <p className="mt-2 text-sm">{feature.description}</p>
                </div>
                <div className="flex-auto lg:col-span-7 xl:col-span-8">
                  <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                    <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampOfMonth;