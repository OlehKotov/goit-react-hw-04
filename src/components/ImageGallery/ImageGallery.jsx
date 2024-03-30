import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"


const ImageGallery = ({images, openModal }) => {
  return (
    <ul className={css.list}>
      {Array.isArray(images) &&
        images.map((image) => {
          return (
            <li key={image.urls.small} className={css.listItem}>
              <ImageCard image={image} openModal={openModal} />
              
            </li>
          );
        })}
    </ul>
  )
}

export default ImageGallery

