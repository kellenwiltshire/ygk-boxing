import { classNames } from "../../utils/helpers/classNames";
import { tiers } from "./Vars/Tiers";


export const Membership = () => {
  return (
    <div className="pb-24 sm:pb-16 pt-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Membership
          </h2>
          <p className="mt-2 text-base font-semibold leading-7 text-indigo-400">Once you become a member you will need
            to be
            registered with Boxing Ontario as a recreational member or competitive boxer.</p>
        </div>


        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-4 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? "bg-white/5 ring-4 ring-indigo-500" : "ring-2 ring-white",
                "rounded-3xl p-8 xl:p-10 h-full flex flex-col justify-between"
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={tier.id} className="text-lg font-semibold leading-8 text-white">
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                    Best Deal
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">{tier.price}</span>
              </p>


            </div>
          ))}
        </div>
        <div className="flex justify-center w-full">

        <a href="https://boxingcanada.org/registration/" className="mt-4 text-base font-semibold leading-7 text-center">Register with Boxing Canada
          HERE</a>
      </div>
        </div>
      <div className="w-full flex items-center justify-center">
        <h6 className="text-2xl mt-2">Members can enjoy full access to the Gym from 9:00 AM to 4:00 PM everyday for Open Workouts!</h6>
      </div>
    </div>
  );
};

export default Membership;