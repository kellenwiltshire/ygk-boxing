import { images } from "./Images";

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl px-2 pb-4">
      {images.map(image => image)}
    </div>
  );
};

export default Gallery;