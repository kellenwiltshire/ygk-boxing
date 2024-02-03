import { IDay } from "../../utils/types/ScheduleTypes";
import { classNames } from "../../utils/helpers/classNames";
import dayjs from "dayjs";
import { events, months } from "./Vars/Events";
import Link from "next/link";
import { useRouter } from "next/router";


const Calendar = () => {
  const currDay: number = dayjs().day();
  const currMonth: number = dayjs().month();
  const year: number = dayjs().year();
  const router = useRouter()
  return (
    <div className="lg:flex lg:h-full lg:flex-col max-w-7xl hidden md:block pb-8 lg:pb-0">
      <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
        <h1 className="text-base font-semibold leading-6 text-white">
          {months[currMonth]} {year}
        </h1>

      </header>
      <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
        <div
          className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
          <div className="bg-white py-2">
            Sun
          </div>
          <div className="bg-white py-2">
            Mon
          </div>
          <div className="bg-white py-2">
            Tue
          </div>
          <div className="bg-white py-2">
            Wed
          </div>
          <div className="bg-white py-2">
            Thu
          </div>
          <div className="bg-white py-2">
            Fri
          </div>
          <div className="bg-white py-2">
            Sat
          </div>
        </div>
        <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
          <div className="hidden w-full sm:grid sm:grid-cols-7 sm:grid-rows-1 sm:gap-px">
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
                      <li className={`${(event.id != null) ? 'underline cursor-pointer' : ''}`} onClick={() => {(event.id != null) && router.push(`/schedule#${event.id}`).catch(err => console.log(err))}} key={event.name}>
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