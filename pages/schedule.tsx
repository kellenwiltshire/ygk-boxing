import Calendar from '../components/Schedule/Calendar'
import Membership from '../components/Schedule/Membership'

const Schedule = () => {
	return <div className='flex flex-col'>
		<Calendar />
		<Membership />
	</div>
}

export default Schedule