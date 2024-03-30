const ImageCard = ({ image, openModal }) => {

  const handleClick = () => {
    openModal(image.urls.regular);
  };


  return (
    <div onClick={handleClick}>
      <img src={image.urls.small} />
    </div>
  );
};

export default ImageCard;


