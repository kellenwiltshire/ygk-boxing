import { IDay } from "../../utils/types/ScheduleTypes";
import { classNames } from "../../utils/helpers/classNames";
import dayjs from "dayjs";
import { events } from "./Vars/Events";
import Link from "next/link";


const Calendar = () => {
  const currDay: number = dayjs().day();
  return (
    <div className="lg:flex lg:h-full lg:flex-col max-w-7xl hidden md:block">
      <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
        <h1 className="text-base font-semibold leading-6 text-white">
          <time dateTime="2023-06">June 2023</time>
        </h1>

      </header>
      <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
        <div
          className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
          <div className="bg-white py-2">
            S<span className="sr-only sm:not-sr-only">un</span>
          </div>
          <div className="bg-white py-2">
            M<span className="sr-only sm:not-sr-only">on</span>
          </div>
          <div className="bg-white py-2">
            T<span className="sr-only sm:not-sr-only">ue</span>
          </div>
          <div className="bg-white py-2">
            W<span className="sr-only sm:not-sr-only">ed</span>
          </div>
          <div className="bg-white py-2">
            T<span className="sr-only sm:not-sr-only">hu</span>
          </div>
          <div className="bg-white py-2">
            F<span className="sr-only sm:not-sr-only">ri</span>
          </div>
          <div className="bg-white py-2">
            S<span className="sr-only sm:not-sr-only">at</span>
          </div>
        </div>
        <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
          <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-px">
            {events.map((day: IDay, index: number) => (
              <div
                key={day.dayOfWeek}
                className={classNames(
                  index === currDay ? "bg-gray-100" : "bg-white",
                  "relative px-3 py-2"
                )}
                data-testid="calendar-day"
              >
                {day.events.length > 0 && (
                  <ol className="mt-2 divide-y-2 divide-y-gray-500">
                    {day.events.map((event) => (
                      <li key={event.name}>
                        <div className="group flex flex-col">
                          <time
                            dateTime={event.time}
                            className="flex-none text-gray-500 block"
                          >
                            {event.time}
                          </time>
                          {day.dayOfWeek === "Sunday" ?
                            <Link href="/contact" className="ml-3 flex-auto font-medium text-blue-400 underline">
                              {event.name}
                            </Link>
                            :
                            <p className="ml-3 flex-auto font-medium text-gray-900">
                              {event.name}
                            </p>
                          }
                        </div>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;