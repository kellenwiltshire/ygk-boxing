import { ILink } from "../../utils/types/AboutTypes";

const linkList: Array<ILink> = [
  {
    text: "How to become an amateur boxer with Boxing Ontario",
    href: "https://boxingontario.com/athletes/how-to-become-a-boxer/"
  },
  {
    text: "Boxing Ontario's Policy and Constitution",
    href: "https://boxingontario.com/about-us/policy-constitution/"
  },
  {
    text: "Boxing Ontario's Club Safety and Security",
    href: "https://boxingontario.com/clubs/safety-and-security/"
  },
  {
    text: "Liability Waiver for YGK Boxing",
    href: "#"
  }
];

const Links = () => {
  return <div className="max-w-7xl">
    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl text-center mb-4">
      Links
    </h2>
    <ol className="flex justify-center flex-col items-center">
      {linkList.map((item: ILink, i: number) => {
        return <li key={i}>
          <a href={item.href} className="underline hover:text-blue-200">{item.text}</a>
        </li>;
      })}
    </ol>
    <p className="py-4 font-bold text-center">Please bring the Liability Waiver signed to your first Workout at YGK
      Boxing</p>
  </div>;
};

export default Links;