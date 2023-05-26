import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

interface IProps {
	children: JSX.Element
}

const Layout = ({children}: IProps): JSX.Element => {
	return (
		<>
			<Navbar />
			<div className='flex min-h-screen justify-center' data-testid='layout-1'>
				{children}
			</div>
			<Footer />
		</>
	)
}

export default Layout