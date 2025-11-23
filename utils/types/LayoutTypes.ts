import React from 'react'

export interface INavProps {
	name: string
	href: string
}

export interface ISocialIconProps {
	name: string
	href: string
	icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element
}
