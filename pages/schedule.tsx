import ClassDescriptions from "components/Schedule/ClassDescriptions";
import Calendar from "../components/Schedule/Calendar";
import Membership from "../components/Schedule/Membership";
import MobileSchedule from "../components/Schedule/MobileSchedule";

const Schedule = () => {
  return <div className="flex flex-col">
    <Calendar />
    <MobileSchedule />
    <Membership />
    <ClassDescriptions />
  </div>;
};

export default Schedule;