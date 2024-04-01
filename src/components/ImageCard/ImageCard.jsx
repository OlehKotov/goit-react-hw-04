import css from "./ImageCard.module.css"

const ImageCard = ({ image, openModal }) => {

  const handleClick = () => {
    openModal(image.urls.regular);
  };


  return (
    <div className={css.listThumb}>
      <img onClick={handleClick} src={image.urls.small} className={css.listImg}/>
    </div>
  );
};

export default ImageCard;


