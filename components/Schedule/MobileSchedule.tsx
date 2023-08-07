import React from "react";
import dayjs from "dayjs";
import { events } from "./Vars/Events";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const MobileSchedule = () => {
  const currDay: number = dayjs().day();
  return (
    <div className="px-6 pb-4 block md:hidden">
      {events.map((day, index) => {
        return (
          <Disclosure key={day.dayOfWeek}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`flex w-full justify-between rounded-lg border border-white px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 my-2 ${index === currDay ? "bg-gray-700" : "bg-black"}`}>
                  <span>{day.dayOfWeek}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel as="ol" className="px-4 pt-4 pb-2 text-sm text-white">
                  {day.events.map((event) => {
                    return <li key={event.name}>
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
                          <p className="ml-3 flex-auto font-medium text-white">
                            {event.name}
                          </p>
                        }
                      </div>
                    </li>;
                  })}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        );
      })}


    </div>
  );
};

export default MobileSchedule;