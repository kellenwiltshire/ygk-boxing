import Rules from '../components/About/Rules'
import Links from '../components/About/Links'
import Coaches from '../components/Home/Coaches'
import FAQ from 'components/About/FAQ'

const About = () => {
	return (
		<div className="flex flex-col">
			<Coaches />
			<FAQ />
			<Rules />
			<Links />
		</div>
	)
}

export default About
