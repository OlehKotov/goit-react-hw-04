import Modal from 'react-modal';


const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      padding: '0',
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white", 
      border: "none", 
      margin: '30px',
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", 
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)" 
    }
  };


const ImageModal = ({ selectedImage, closeModal }) => {
    const handleModalClick = (event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      };
      


  return (
    <Modal
      isOpen={!!selectedImage}
      onRequestClose={closeModal}
      onClick={handleModalClick}
      style={customStyles}
    >
      <div>
        <img src={selectedImage} alt="Selected" />
      </div>
    </Modal>
  )
}

export default ImageModal


