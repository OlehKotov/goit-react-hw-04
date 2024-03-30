import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { requestImagesByQuery } from "./services/images-api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [secondPage, setSecondPage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const onSearch = (searchTerm) => {
    setQuery(searchTerm);
    setPage(1);
    setSecondPage(false);
  };

  const onAddPage = () => {
    setPage((prevPage) => prevPage + 1);
  };


  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };



  useEffect(() => {
    if (query.length === 0) return;

    async function fetchImagesByQuery() {
      try {
        setLoading(true);
        const data = await requestImagesByQuery(query, page);
        setImages((prevImages) => {
          if (!Array.isArray(prevImages)) {
            return data;
          }
          return [...prevImages, ...data];
        });
        if (page === 1) {
          setSecondPage(true);
        }
        setSecondPage(true);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchImagesByQuery();

  }, [query, page]);

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery images={images} openModal={openModal}/>

      {secondPage && <LoadMoreBtn onAddPage={onAddPage} />}
      <ImageModal selectedImage={selectedImage} closeModal={closeModal}/>
    </div>
  );
}

export default App;

