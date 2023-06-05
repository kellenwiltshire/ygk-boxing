import { IPeople } from "../../utils/types/HomeTypes";

const people: Array<IPeople> = [
  {
    name: "John Daniel (JD) Firth",
    role: "Owner / Coach",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Proud Owner and Head Coach John Daniel (JD) Firth is a 4x Canadian & United States Amateur Boxing Champion whose resume includes a Gold medal at the 2012 Ontario Bronze Gloves Championship, a Gold medal at the 2014 Ontario Silver Gloves Championship and 2 New York State Boxing Championships as both a Middleweight and Light Heavyweight pugilist. Having struggled with Type One Diabetes at the age of five and being bullied in school, JD found Boxing to be his saving grace. JD has successfully achieved his level 2 Boxing Canada Coaches License National Coaching Certificate Program (NCCP)"
  },
  {
    name: "Finley",
    role: "JD's Diabetic Alert Dog",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "\n" +
      "\n" +
      "Finley is Coach JD's Diabetic Alert Dog from Dog Guides Canada and wears her red vest when she is working with JD to alert him before a possible hypo or hyper glycemic reaction. When Finley is wearing her red vest she knows that it is work and has to avoid human interaction, playing, petting, and distractions. Missing a low blood sugar could result in an emergency situation. After work she is a regular playful dog who enjoys playing fetch and going on long walks.\n" +
      "\n" +
      "Finley was born on December 13 2015 and spent 6 months with a foster family. She then completed with honors one year training with Lions Foundation Dog Guides of Canada. Dog Guides is a charitable program helping people with disabilities lead safer and more independent lives. To find out additional information about Lions Club Dog Guides of Canada and to donate, click on Finley to see more!\n"
  }
];

const Coaches = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet our coaches</h2>
          <p className="mt-6 text-lg leading-8">
            The Youth Group Kingston Boxing Club&apos;s vision focuses on the positive development of youth, adults and
            seniors through exercise, confidence, and better self-worth. YGK Boxing is for anyone that wants to learn
            the fundamentals of boxing while achieving their own fitness goals. YGK Boxing operates a safe boxing club
            through Boxing Ontario where youth, adults and seniors will be able to spend their time in a positive
            environment with knowledgeable coaches having fun, gaining confidence and making friends. At YGK Boxing Club
            we cultivate an inclusive environment by considering all dimensions of physical and mental diversity. Exceed
            your expectations by joining YGK Boxing today!
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 flex flex-col max-w-2xl gap-y-20 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {people.map((person: IPeople) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight">{person.name}</h3>
                <p className="text-base leading-7">{person.role}</p>
                <p className="mt-6 text-base leading-7">{person.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Coaches;