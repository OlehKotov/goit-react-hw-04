import css from "./ImageCard.module.css"

const ImageCard = ({ image, openModal }) => {

  const handleClick = () => {
    openModal(image.urls.regular);
  };


  return (
    <div onClick={handleClick} className={css.listThumb}>
      <img src={image.urls.small} className={css.listImg}/>
    </div>
  );
};

export default ImageCard;


