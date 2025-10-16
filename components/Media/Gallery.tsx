import { images } from './Images'

const Gallery = () => {
	return (
		<div className="grid max-w-7xl grid-cols-2 gap-4 px-2 pb-4 md:grid-cols-4">
			{images.map((image) => image)}
		</div>
	)
}

export default Gallery
