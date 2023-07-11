import Rules from "../components/About/Rules";
import Links from "../components/About/Links";
import Coaches from "../components/Home/Coaches";

const About = () => {
  return <div className="flex flex-col">
    <Coaches />
    <Rules />
    <Links />
  </div>;
};

export default About;