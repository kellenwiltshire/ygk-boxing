import { IDay } from "../../../utils/types/ScheduleTypes";

export const events: Array<IDay> = [
  {
    dayOfWeek: "Sunday", events: [
      {
        name: "CLOSED - available for rental with additional times throughout the week - Contact HERE to find affordable rates and availability.",
        time: ""
      }
    ]
  },
  {
    dayOfWeek: "Monday", events: [
      {
        id:'OPENGYM',
        name: "Open Gym Workout",
        time: "12:00pm - 4:00pm"
      },
      {
        name: "Kids Class (Open for kids aged 7 - 12)",
        time: "4:30pm - 5:45pm"
      },
      {
        name: "Warm Up",
        time: "6:00pm - 6:15pm"
      },
      {
        name: "Cardio Boxing Workout (Ages 13+)",
        time: "6:15pm - 7:15pm"
      },
      {
        id: 'OPENGYM',
        name: "Open Gym (sparring, pads, stretching, personal workouts)",
        time: "7:15pm - 8:00pm"
      }]
  },
  {
    dayOfWeek: "Tuesday",
    events: [
      {
        id:'BEGINNERS',
        name: "Beginners Class",
        time: "5:00pm - 5:30pm"
      },
      {
        id: 'OPENGYM',
        name: "Warm Up / Open Gym",
        time: "5:30pm - 6:15pm"
      },
      {
        name: "Warm Up",
        time: "6:00pm - 6:15pm"
      },
      {
        id:'TADULT',
        name: "Adult Boxing Workout/Class (Ages 13+)",
        time: "6:15pm - 7:15pm"
      },
      {
        id:'OPENGYM',
        name: "Open Gym (sparring, pads, stretching, personal workouts)",
        time: "7:15pm - 8:00pm"
      }
    ]
  },
  {
    dayOfWeek: "Wednesday",
    events: [
      {
        id:'OPENGYM',
        name: "Open Gym Workout",
        time: "4:00pm - 6:00pm"
      },
      {
        id:'SPARRING',
        name: "Competitive Team Sparring (Must be registered with Boxing Ontario)",
        time: "6:00pm - 7:00pm"
      }
    ]
  },
  {
    dayOfWeek: "Thursday", events: [
      {
        id:'OPENGYM',
                name: "Open Gym Workout",
        time: "12:00pm - 4:00pm"
      },
      {
        
        name: "Kids Class (Open for kids aged 7 - 12)",
        time: "4:30pm - 5:45pm"
      },
     
      {
        name: "Warm Up",
        time: "5:45pm - 6:15pm"
      },
      {
        id:'TADULT',
        name: "Adult Boxing Workout/Class (Ages 13+)",
        time: "6:15pm - 7:15pm"
      },
      {
        id:'OPENGYM',
        name: "Open Gym (sparring, pads, stretching, personal workouts)",
        time: "7:15pm - 7:00pm"
      }]
  },
  {
    dayOfWeek: "Friday", events: [
      {
        id:'SPARRING',
        name: "Competitive Team Sparring (Must be registered with Boxing Ontario)",
        time: "4:00pm - 6:00pm"
      }
    ]
  },
  {
    dayOfWeek: "Saturday", events: [
      {
        id:'CIRCUIT',
        name: "Boxing Circuit #1 (12-15 Rounds of various exercises)",
        time: "9:15am - 10:15am"
      },
      {
        id:'CIRCUIT',
        name: "Boxing Circuit #2 (12-15 Rounds of various exercises)",
        time: "10:15am - 11:15am"
      },
      {
        id:'OPENGYM',
        name: "Open Gym Workout",
        time: "11:15am - 12:00pm"
      },
      
    ]
  }
];

export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const classDescriptions = [
  {
    id:'MADULT',
    name: "MONDAY ADULT WORKOUT",
    description: "Revitalize your Mondays with the ultimate YGK Boxing workout, merging calisthenics and full-body exercises for a transformative fitness experience. Designed for all, this challenging routine promises muscle gains, weight loss, and a confidence boost. Embrace the dynamic fusion of boxing, calisthenics, and intense full-body movements, but be prepared – mastery requires dedication through practice and repetition. This isn't just a workout; it's a journey to unlock your full potential, ensuring that anyone, regardless of their starting point, can thrive and achieve their fitness goals with perseverance. It's not just the best workout in town; it's your path to a stronger, fitter, and more confident you."
  },
  {
    id:'BEGINNERS',
    name: "BEGINNERS CLASS",
    description: "Embark on a welcoming journey into the world of YGK boxing with our gentle and open beginners class. Tailored for novices, the session emphasizes fundamental elements such as basic footwork, balance, and punch techniques. Led by experienced trainers, this light-hearted introduction ensures a supportive atmosphere, making it the perfect starting point for those eager to grasp the basics of boxing while building confidence and coordination."
  },
  {
    id:'TADULT',
    name: "TUESDAY AND THURSDAY ADULT WORKOUT",
    description: "Step into our inclusive and challenging YGK boxing fitness class, open to participants of all levels. Begin with a dynamic first segment featuring skipping for agility, shadow boxing for technique refinement, and a blend of pushups and calisthenics for overall strength. The second part focuses on honing your boxing skills with bag work, slipping drills, and a deep dive into technical aspects of the sport. This comprehensive workout promises an empowering experience for everyone, whether you're a beginner or an advanced boxer, providing an opportunity to enhance both your fitness and boxing proficiency."
  },
  {
    id:'OPENGYM',
    name: "OPEN GYM WORKOUT",
    description: "Unlock the convenience and flexibility of our open-boxing gym exclusively for YGK Boxing members. With 24/7 access, members can tailor their training to their own schedule, enjoying a self-guided workout experience. Inquire today to become a member and embrace the freedom of honing your boxing skills at your preferred time, ensuring a seamless and personalized fitness journey with YGK Boxing."
  }
  ,
  {
    id:'SPARRING',
    name: "SPARRING/COMPETITIVE TEAM",
    description: "YGK Boxing's competitive team is an elite training ground for those registered with Boxing Ontario, committed to honing their skills in sparring and competition. Our rigorous program focuses on refining techniques, film analysis, and fostering a culture of excellence and mutual accountability. Emphasizing safety and adherence to rules, we take boxing seriously – it's not a sport we play. Prospective members must prove themselves through dedicated workouts, demonstrating the commitment required to earn a coveted spot on our team. Join us and be prepared to elevate your boxing journey to new heights."
  }
  , {
    id:'CIRCUIT',
    name: "SATURDAY CIRCUIT",
    description: "Elevate your weekend with YGK Boxing's Saturday morning circuits, where every session is a thrilling surprise. With a random selection of 12-15 rounds from a repertoire of over 100 different exercises, each workout promises novelty and excitement. Some weeks, we add an extra layer of fun and challenge by drawing from our curated list of 50 specially designed routines. Join us for a dynamic and invigorating start to your weekend, ensuring each circuit is a fresh and energizing experience."
  }
]

// {
//   id:'WOMEN',
//   name: "WOMENS ONLY CLASS",
//   description: "Join YGK Boxing's exclusive womens-only class every Friday from 4:30-6:00 pm, designed to empower and inspire. This session provides a supportive environment for women to explore the fundamentals of boxing, enhance their fitness, and build camaraderie with like-minded individuals. Led by experienced trainers, this class offers a unique opportunity for women to challenge themselves physically and mentally in a welcoming and encouraging setting."
// }