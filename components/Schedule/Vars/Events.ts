import { IDay } from "../../../utils/types/ScheduleTypes";

export const events: Array<IDay> = [
  {
    dayOfWeek: "Sunday", events: [
      {
        name: "CLOSED - Available for Rental - Contact HERE",
        time: ""
      }
    ]
  },
  {
    dayOfWeek: "Monday", events: [
      {
        name: "Box and Burn (Boxing inspired cardio workout)",
        time: "12:00pm - 1:00pm"
      },
      {
        name: "Kids Class (Open for kids aged 7 - 12)",
        time: "4:30pm - 5:45pm"
      },
      {
        name: "Warm Up / Open Gym",
        time: "5:45pm - 6:15pm"
      },
      {
        name: "Adult Boxing Workout (Ages 13+)",
        time: "6:15pm - 7:15pm"
      },
      {
        name: "Open Gym (sparring, pads, stretching, personal workouts)",
        time: "7:15pm - 8:00pm"
      }]
  },
  {
    dayOfWeek: "Tuesday",
    events: [
      {
        name: "Beginners Class",
        time: "4:30pm - 5:30pm"
      },
      {
        name: "Warm Up / Open Gym",
        time: "5:30pm - 6:15pm"
      },
      {
        name: "Warmup for Adult Boxing Class",
        time: "6:00pm - 6:15pm"
      },
      {
        name: "Adult Boxing Class (Ages 13+)",
        time: "6:15pm - 7:15pm"
      },
      {
        name: "Open Gym (sparring, pads, stretching, personal workouts)",
        time: "7:15pm - 8:00pm"
      }
    ]
  },
  {
    dayOfWeek: "Wednesday",
    events: [
      {
        name: "Open Gym Workout",
        time: "4:00pm - 6:00pm"
      },
      {
        name: "Competitive Team Sparring (Must be registered with Boxing Ontario)",
        time: "6:00pm - 8:00pm"
      }
    ]
  },
  {
    dayOfWeek: "Thursday", events: [
      {
        name: "Box and Burn (Boxing inspired cardio workout)",
        time: "12:00pm - 1:00pm"
      },
      {
        name: "Kids Class (Open for kids aged 7 - 12)",
        time: "4:30pm - 5:45pm"
      },
     
      {
        name: "Warmup for Adult Boxing Class",
        time: "5:45pm - 6:15pm"
      },
      {
        name: "Adult Boxing Class (Ages 13+)",
        time: "6:15pm - 7:15pm"
      },
      {
        name: "Open Gym (sparring, pads, stretching, personal workouts)",
        time: "7:15pm - 8:00pm"
      }]
  },
  {
    dayOfWeek: "Friday", events: [
      {
        name: "Ladies Only Boxing Workout",
        time: "5:00pm - 6:00pm"
      },
      {
        name: "Competitive Team Sparring (Must be registered with Boxing Ontario)",
        time: "6:00pm - 8:00pm"
      }
    ]
  },
  {
    dayOfWeek: "Saturday", events: [
      {
        name: "Boxing Circuit #1 (12-15 Rounds of various exercises)",
        time: "9:15am - 10:15am"
      },
      {
        name: "Boxing Circuit #2 (12-15 Rounds of various exercises)",
        time: "10:15am - 11:15am"
      },
      {
        name: "Open Gym Workout",
        time: "11:15am - 12:00pm"
      },
      
    ]
  }
];

export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];